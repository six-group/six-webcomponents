import { SortDirection, FilterMode } from './types';

const getNextState =
  <T extends Record<string, string>>(states: (keyof T)[]) =>
  (current: keyof T) => {
    const next = states.indexOf(current) + 1;
    return states[next < states.length ? next : 0];
  };

export const getNextSortState = getNextState(Object.values(SortDirection));

export const getNextFilterState = getNextState(Object.values(FilterMode));
