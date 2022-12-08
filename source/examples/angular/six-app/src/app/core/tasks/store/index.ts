import { Action } from '@ngrx/store';
import { State, reducer } from './tasks.reducer';

export * from './tasks.actions';
export * from './tasks.effects';
export * from './tasks.selectors';

export function tasksReducer(state: State | undefined, action: Action) {
  return reducer(state, action);
}
