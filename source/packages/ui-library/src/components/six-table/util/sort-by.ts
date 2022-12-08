import { CompareModel, Item, SortModel, Comparator } from '../types';
import { SortDirection } from '../../six-table-header-cell/types';

const unordered = (value: SortDirection) => value === SortDirection.None;

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
        if (v === SortDirection.None) {
          return acc;
        }

        const comparator = compare[k];

        const direction = {
          [SortDirection.Asc]: +1,
          [SortDirection.Desc]: -1,
        }[v];

        if (comparator) {
          return acc + direction * (comparator(a, b) << index);
        }

        return acc + direction * (DEFAULT_COMPARATOR(a[k], b[k]) << index);
      }, 0);
    });
  };
