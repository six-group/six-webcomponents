import { Comparator, CompareModel, Item, SortModel } from '../types';
import { SortDirection } from '../../six-table-header-cell/types';

const unordered = (value: SortDirection) => value === 'none';

const DEFAULT_COMPARATOR: Comparator<unknown> = (a, b) => String(a).localeCompare(String(b));

export const sortBy =
  <T extends Item>(sort: SortModel<T> = {}, compare: CompareModel<T> = {}) =>
  (items: T[]) => {
    const values = Object.values(sort);

    if (values.length === 0 || values.every(unordered)) {
      return items;
    }

    return [...items].sort((a, b) => {
      return Object.entries(sort).reduce((acc, [k, v], index) => {
        if (v === 'none') {
          return acc;
        }

        const comparator = compare[k];

        const direction = {
          asc: +1,
          desc: -1,
        }[v];

        if (comparator) {
          return acc + direction * (comparator(a, b) << index);
        }

        return acc + direction * (DEFAULT_COMPARATOR(a[k], b[k]) << index);
      }, 0);
    });
  };
