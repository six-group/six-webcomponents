import { SortDirection } from '@six-group/ui-library/dist/types/components/six-table-header-cell/types';
import { Item, SortModel } from '@six-group/ui-library/dist/types/components/six-table/types';

const unordered = (value?: SortDirection) => value === 'none';

type Comparator = (a: unknown, b: unknown) => number;

const comparators: Record<SortDirection, Comparator> = {
  asc: (a, b) => String(a).localeCompare(String(b)),
  desc: (a, b) => String(b).localeCompare(String(a)),
  none: () => 0,
};

export const sortBy =
  <T extends Item>(sort: SortModel<T> = {}) =>
  (items: T[]) => {
    const values = Object.values(sort);

    if (values.length === 0 || values.every(unordered)) {
      return items;
    }

    return [...items].sort((a, b) => {
      return Object.entries(sort).reduce((acc, [k, v]) => {
        return acc + comparators[v as SortDirection](a[k], b[k]);
      }, 0);
    });
  };
