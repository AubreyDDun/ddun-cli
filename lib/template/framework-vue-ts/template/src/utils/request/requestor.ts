import Axios, { AxiosRequestConfig, AxiosInstance, AxiosResponse } from 'axios';

import { Mutable, MiddlewareContext, Middleware } from './types';

import { createMiddlewarePipe } from './utils';

export interface RequestorConstructorParams {
  config?: AxiosRequestConfig;
}

export class Requestor {
  middlewareList: Middleware[];

  instance: AxiosInstance;

  constructor({ config }: RequestorConstructorParams = {}) {
    this.middlewareList = [];
    this.instance = Axios.create({
      timeout: 600000,
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
      },
      ...config,
    });
  }

  addMiddleWare(middleWare: Middleware) {
    this.middlewareList.unshift(middleWare);
    return this;
  }

  getMiddlewareList() {
    return this.middlewareList;
  }

  protected sendRequest(config: AxiosRequestConfig, ctx: Mutable<MiddlewareContext>) {
    return async () => {
      const response = await this.instance.request(config);
      const context = ctx;
      context.response = response;
    };
  }

  async request<R = any>(config: AxiosRequestConfig, context: Partial<MiddlewareContext<R>> = {}) {
    // TODO: 优化merge
    const ctx: MiddlewareContext<R> = {
      ...context,
      request: config,
      response: undefined,
    };
    const pipe = createMiddlewarePipe(this.getMiddlewareList(), this.sendRequest(config, ctx), ctx);
    await pipe();

    return ctx.response;
  }
}
