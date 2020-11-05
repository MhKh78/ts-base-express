import { RequestHandler } from 'express';
import { MetadataKeys } from './Metadatakeys';
import { HTTPMethods } from './Methods';
import 'reflect-metadata';

interface RouteHandlerDescriptor
  extends PropertyDescriptor {
  value?: RequestHandler;
}

function RouteBinder(method: HTTPMethods) {
  return function (path: string) {
    return function (
      target: any,
      key: any,
      _desc: RouteHandlerDescriptor
    ): void {
      Reflect.defineMetadata(
        MetadataKeys.PATH,
        path,
        target,
        key
      );
      Reflect.defineMetadata(
        MetadataKeys.METHOD,
        method,
        target,
        key
      );
    };
  };
}

export const Get = RouteBinder(HTTPMethods.GET);
export const Post = RouteBinder(HTTPMethods.POST);
export const Delete = RouteBinder(HTTPMethods.DELETE);
export const Patch = RouteBinder(HTTPMethods.PATCH);
