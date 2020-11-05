import { MetadataKeys } from './Metadatakeys';
import 'reflect-metadata';

export function BodyValidator(...keys: string[]) {
  return function (
    target: any,
    key: any,
    _desc: PropertyDescriptor
  ) {
    Reflect.defineMetadata(
      MetadataKeys.VALIDATOR,
      keys,
      target,
      key
    );
  };
}
