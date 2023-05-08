import { FilterMode, SortDirection } from '../types';

const getNextState =
  <T>(states: T[]) =>
  (current: T): T => {
    const next = states.indexOf(current) + 1;
    return states[next < states.length ? next : 0];
  };

export const getNextSortState = getNextState(['none', 'asc', 'desc'] as SortDirection[]);
export const getNextFilterState = getNextState(Object.values(['eq', 'ne', 'in', 'ni'] as FilterMode[]));
