import { AxiosRequestConfig, AxiosResponse } from 'axios';

// 中间件函数执行时用到的上下文
export interface MiddlewareContext<T = any> {
  readonly request: AxiosRequestConfig;
  readonly response?: AxiosResponse<T>;
  [p: string]: any;
}

// 中间件函数
export type Middleware<R = any> = (
  ctx: MiddlewareContext<R>,
  next: () => Promise<void>
) => Promise<void>;

// 去除 readonly
export type Mutable<T> = {
  -readonly [p in keyof T]: T[p];
};
