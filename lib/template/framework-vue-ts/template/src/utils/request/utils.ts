import { MiddlewareContext, Middleware } from './types';

export type NextAction = () => Promise<void>;

function createNext(
  middleware: Middleware,
  ctx: MiddlewareContext,
  oldNext: NextAction,
): NextAction {
  return async () => {
    await middleware(ctx, oldNext);
  };
}

/**
 * 创建管道函数
 *
 * @param middleware
 * @param request
 * @param ctx
 */
export function createMiddlewarePipe(
  middleware: Middleware[],
  request: NextAction,
  ctx: MiddlewareContext,
) {
  return middleware.reduce(
    (acc: NextAction, middlewareItme: Middleware) => createNext(middlewareItme, ctx, acc),
    request,
  );
}

export const sleep = (time: number) => new Promise((resolve) => setTimeout(resolve, time));
