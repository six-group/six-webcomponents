import { FilterModel, Item } from '@six-group/ui-library/dist/types/components/six-table/types';
import { Invalid } from './is';
import { FilterMode } from './table';

type Filter = (a: string, b: string) => boolean;

const modes: Record<FilterMode, Filter> = {
  in: (a, b) => a.includes(b),
  ni: (a, b) => !a.includes(b),
  eq: (a, b) => a === b,
  ne: (a, b) => a !== b,
};

export const filterBy =
  <T extends Item>(filterModel: FilterModel<T>) =>
  (item: T): boolean => {
    const keys = Object.keys(filterModel);

    if (keys.length === 0) {
      return true;
    }

    for (const key of keys) {
      const filter = filterModel[key];

      if (!filter) {
        return true;
      }

      for (const [mode, term] of Object.entries(filter)) {
        if (Invalid.Term(term)) {
          continue;
        }

        const value = String(item[key] ?? '');

        if (Invalid.Term(value)) {
          continue;
        }

        if (!modes[mode as FilterMode](value, term)) {
          return false;
        }
      }
    }

    return true;
  };