import { Item } from '../types';
import { Invalid } from './is';

export const quickFilterBy =
  <T extends Item>(keys: string[], value?: string) =>
  (item: T): boolean => {
    if (Invalid.Term(value)) {
      return true;
    }

    const term = value.toLowerCase();

    const source = keys
      .map((key) => item[key] ?? '')
      .map(String)
      .join()
      .toLowerCase();

    return source.includes(term);
  };
