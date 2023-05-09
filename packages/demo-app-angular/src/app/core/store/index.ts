import * as fromUI from './ui';

export interface AppState {
  ui: fromUI.State;
}

export const root = {
  ui: fromUI.uiReducer,
};
