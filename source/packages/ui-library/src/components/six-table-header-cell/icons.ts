import { SortDirection, FilterMode } from './types';

export const SortIcon: Record<SortDirection, string> = {
  [SortDirection.Asc]: 'arrow_drop_up',
  [SortDirection.Desc]: 'arrow_drop_down',
  [SortDirection.None]: 'swap_vert',
};

export const FilterIcon: Record<FilterMode, string> = {
  [FilterMode.Equals]: '=',
  [FilterMode.NotEquals]: '&ne;',
  [FilterMode.Includes]: '&isin;',
  [FilterMode.NotIncludes]: '&notin;',
};
