import { translate } from '@/i18n';
import { message } from 'ant-design-vue';
import { AxiosRequestConfig } from 'axios';
import { ECode, AllowedECode } from '@/constants';
import { MiddlewareContext } from './types';
import { Requestor } from './requestor';

export const requestor = new Requestor();
export const requestorFile = new Requestor();

export class CodeError extends Error {
  code: number;

  constructor(code: number, msg: string) {
    super(msg);
    this.code = code;
  }
}

requestor.addMiddleWare(async (ctx, next) => {
  try {
    await next();
  } catch (e) {
    if (ctx.response && ctx.response.data) {
      e.code = ctx.response.data.code;
      e.message = ctx.response.data.message;
    } else {
      const { response } = e;
      if (response && response.status === ECode.NO_PERMISSION) {
        e.code = ECode.NO_PERMISSION;
      }
    }
    if (e.code in ECode) {
      const errMsg: string = translate(ECode[e.code]) as string;
      e.message = errMsg.length > 0 ? errMsg : e.message;
    }
    if (ctx.toast === true) {
      message.error(
        typeof e.message === 'string' && e.message.length > 0 ? e.message : translate('serverError'),
      );
    }
    throw e;
  }
});

requestor.addMiddleWare(async (ctx, next) => {
  await next();
  if (ctx.response === undefined) return;

  const res = ctx.response.data;
  if ((res !== undefined && res.code !== 0 && !(res.code in AllowedECode)) || !res.success) {
    throw new CodeError(res.code, res.message);
  }
});

export const commonRequest: { [method: string]: Function } = {
  async post(
    url: string,
    data: { [index: string]: any } = {},
    config: AxiosRequestConfig = {},
    ctx: MiddlewareContext,
  ) {
    try {
      const res = await requestor.request(
        {
          method: 'post',
          url,
          data,
          headers: {
            'Content-Type': 'application/json',
          },
          ...config,
        },
        {
          toast: true,
          ...ctx,
        },
      );
      if (res !== undefined && typeof res === 'object') return (res as any).data;
    } catch (error) {
      console.log(`[API ERR] ${config.url}`);
      throw error;
    }
  },
  async get(
    url: string,
    params: { [index: string]: any } = {},
    config: AxiosRequestConfig = {},
    ctx: MiddlewareContext,
  ) {
    try {
      const res = await requestor.request(
        {
          method: 'get',
          url,
          params,
          headers: {
            'Content-Type': 'application/json',
          },
          ...config,
        },
        {
          toast: true,
          ...ctx,
        },
      );
      if (res !== undefined && typeof res === 'object') return (res as any).data;
    } catch (error) {
      console.log(`[API ERR] ${url}`);
      throw error;
    }
  },
  async put(
    url: string,
    data: { [index: string]: any } = {},
    config: AxiosRequestConfig = {},
    ctx: MiddlewareContext,
  ) {
    try {
      const res = await requestor.request(
        {
          method: 'put',
          url,
          data,
          headers: {
            'Content-Type': 'application/json',
          },
          ...config,
        },
        {
          toast: true,
          ...ctx,
        },
      );
      if (res !== undefined && typeof res === 'object') return (res as any).data;
    } catch (error) {
      console.log(`[API ERR] ${config.url}`);
      throw error;
    }
  },
  async delete(
    url: string,
    params: { [index: string]: any } = {},
    config: AxiosRequestConfig = {},
    ctx: MiddlewareContext,
  ) {
    try {
      const res = await requestor.request(
        {
          method: 'delete',
          url,
          params,
          headers: {
            'Content-Type': 'application/json',
          },
          ...config,
        },
        {
          toast: true,
          ...ctx,
        },
      );
      if (res !== undefined && typeof res === 'object') return (res as any).data;
    } catch (error) {
      console.log(`[API ERR] ${url}`);
      throw error;
    }
  },
};
