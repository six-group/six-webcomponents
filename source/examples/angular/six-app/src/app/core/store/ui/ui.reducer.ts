import { createReducer, on } from '@ngrx/store';
import * as Actions from './ui.actions';

export interface State {
  leftSidebarOpen: boolean;
  rightSidebarOpen: boolean;
  quickSearch: string;
}

const initialState: State = {
  leftSidebarOpen: true,
  rightSidebarOpen: false,
  quickSearch: '',
};

export const reducer = createReducer(
  initialState,
  on(Actions.setLeftSidebar, (state, { leftSidebarOpen }) => ({
    ...state,
    leftSidebarOpen,
  })),
  on(Actions.toggleLeftSidebar, (state) => ({
    ...state,
    leftSidebarOpen: !state.leftSidebarOpen,
  })),
  on(Actions.toggleRightSidebar, (state) => ({
    ...state,
    rightSidebarOpen: !state.rightSidebarOpen,
  })),
  on(Actions.setQuickSearch, (state, { quickSearch }) => ({
    ...state,
    quickSearch,
  }))
);
