import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromFeature from './tasks.reducer';

export const FEATURE_KEY = 'tasks';

const selectState = createFeatureSelector<fromFeature.State>(FEATURE_KEY);

export const selectLoading = createSelector(selectState, fromFeature.selectLoading);

export const selectLoaded = createSelector(selectState, fromFeature.selectLoaded);

export const selectAll = createSelector(selectState, fromFeature.selectAll);
export const selectTotal = createSelector(selectState, fromFeature.selectTotal);
