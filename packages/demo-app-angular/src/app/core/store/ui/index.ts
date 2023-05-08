import { Action } from '@ngrx/store';
import { State, reducer } from './ui.reducer';

export * from './ui.actions';
export * from './ui.selectors';
export * from './ui.reducer';

export function uiReducer(state: State | undefined, action: Action) {
  return reducer(state, action);
}
