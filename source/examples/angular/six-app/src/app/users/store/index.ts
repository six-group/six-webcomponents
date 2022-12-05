import { Action } from '@ngrx/store';
import { State, reducer } from './users.reducer';

export * from './users.actions';
export * from './users.effects';
export * from './users.selectors';

export function usersReducer(state: State | undefined, action: Action) {
  return reducer(state, action);
}
