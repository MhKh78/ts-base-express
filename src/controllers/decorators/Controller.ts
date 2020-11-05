import {
  NextFunction,
  RequestHandler,
  Request,
  Response,
} from 'express';
import 'reflect-metadata';
import { HTTPMethods } from './Methods';
import { AppRouter } from './../../AppRouter';
import { MetadataKeys } from './Metadatakeys';

function bodyValidators(keys: string[]): RequestHandler {
  return function (
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    if (!req.body) {
      return res.status(422).send('You Invalid ');
    }

    const result = keys.every((e) => req.body[e]);

    if (!result) {
      return res.status(422).send('You Invalid ');
    }

    next();
  };
}

export function Controller(routePrefix: string) {
  return function (target: Function): void {
    const router = AppRouter.getInstance();

    Object.keys(target.prototype).forEach((key) => {
      const routeHandler = target.prototype[key];

      const path = Reflect.getMetadata(
        MetadataKeys.PATH,
        target.prototype,
        key
      );
      const method: HTTPMethods = Reflect.getMetadata(
        MetadataKeys.METHOD,
        target.prototype,
        key
      );

      const middlewares =
        Reflect.getMetadata(
          MetadataKeys.MIDDLEWARE,
          target.prototype,
          key
        ) || [];

      const requiredBodyProps =
        Reflect.getMetadata(
          MetadataKeys.VALIDATOR,
          target.prototype,
          key
        ) || [];

      const validator = bodyValidators(requiredBodyProps);

      if (path) {
        router[method](
          `${routePrefix}${path}`,
          ...middlewares.reverse(),
          validator,
          routeHandler
        );
      }
    });
  };
}
