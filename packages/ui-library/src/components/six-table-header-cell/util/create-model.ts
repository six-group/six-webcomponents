import { Item, SortModel, FilterModel } from '../../six-table/types';
import { SortDirection, FilterMode } from '../types';

export const createSortModel = <T extends Item>(key: keyof T, value: SortDirection): SortModel<T> => {
  return { [key]: value } as any;
};

export const createFilterModel = <T extends Item>(key: keyof T, filter: FilterMode, value: string): FilterModel<T> => {
  return { [key]: { [filter]: value } } as any;
};
