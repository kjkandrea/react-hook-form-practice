import {map} from 'lodash-es';

export const pluck = <T, K extends keyof T>(items: T[], key: K) =>
  map(items, key);
