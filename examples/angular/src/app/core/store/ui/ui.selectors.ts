import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromUI from './ui.reducer';

const selectFeature = createFeatureSelector<fromUI.State>('ui');

export const selectLeftSidebarOpen = createSelector(selectFeature, (state) => state.leftSidebarOpen);

export const selectRightSidebarOpen = createSelector(selectFeature, (state) => state.rightSidebarOpen);

export const selectQuickSearch = createSelector(selectFeature, (state) => state.quickSearch);
