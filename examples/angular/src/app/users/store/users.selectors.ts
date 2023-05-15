import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromFeature from './users.reducer';

export const FEATURE_KEY = 'users';

const selectState = createFeatureSelector<fromFeature.State>(FEATURE_KEY);
const selectedUserId = createSelector(selectState, (state) => state.selectedId);
export const selectAll = createSelector(selectState, fromFeature.selectAll);
export const selectLoading = createSelector(selectState, (state) => state.loading);
export const selectLoaded = createSelector(selectState, (state) => state.loaded);
export const selectDrawerOpen = createSelector(selectState, (state) => state.drawerOpen);
const selectEntities = createSelector(selectState, fromFeature.selectEntities);
export const selectedUser = createSelector(selectedUserId, selectEntities, (id, entities) => {
  return id ? entities[id] : undefined;
});
