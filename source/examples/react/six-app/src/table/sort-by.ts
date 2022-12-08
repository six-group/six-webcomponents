import { SortDirection } from '@six/ui-library/dist/types/components/six-table-header-cell/types';
import { Item, SortModel } from '@six/ui-library/dist/types/components/six-table/types';

const unordered = (value?: SortDirection) => value === SortDirection.None;

type Comparator = (a: unknown, b: unknown) => number;

const comparators: Record<SortDirection, Comparator> = {
  [SortDirection.Asc]: (a, b) => String(a).localeCompare(String(b)),
  [SortDirection.Desc]: (a, b) => String(b).localeCompare(String(a)),
  [SortDirection.None]: () => 0,
};

export const sortBy = <T extends Item>(sort: SortModel<T> = {}) => (items: T[]) => {
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
