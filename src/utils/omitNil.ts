import {omitBy} from 'lodash-es';

export const omitEmptyQuery = <T extends object>(object: T) =>
  omitBy<T>(object, value => ['', null, undefined].includes(value as any));
