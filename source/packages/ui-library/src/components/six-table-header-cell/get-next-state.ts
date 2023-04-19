const getNextState =
  <T extends Record<string, string>>(states: (keyof T)[]) =>
  (current: keyof T) => {
    const next = states.indexOf(current) + 1;
    return states[next < states.length ? next : 0];
  };

export const getNextSortState = getNextState(['none', 'asc', 'desc']);
export const getNextFilterState = getNextState(Object.values(['eq', 'ne', 'in', 'ni']));
