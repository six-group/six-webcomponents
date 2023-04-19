import { FilterMode, SortDirection } from './types';

export const SortIcon: Record<SortDirection, string> = {
  ['asc']: 'arrow_drop_up',
  ['desc']: 'arrow_drop_down',
  ['none']: 'swap_vert',
};

export const FilterIcon: Record<FilterMode, string> = {
  ['eq']: '=',
  ['ne']: '&ne;',
  ['in']: '&isin;',
  ['ni']: '&notin;',
};
