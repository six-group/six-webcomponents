import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
// feature
import { Task } from '../providers/tasks.service';
import * as Actions from './tasks.actions';

export interface State extends EntityState<Task> {
  loading: boolean;
  loaded: boolean;
}

const adapter = createEntityAdapter<Task>();

const initialState = adapter.getInitialState({
  loading: false,
  loaded: false,
});

export const reducer = createReducer(
  initialState,
  on(Actions.fetchAll, (state) => ({ ...state, loading: true })),
  on(Actions.fetchAllSuccess, (state, { tasks }) => adapter.setAll(tasks, { ...state, loading: false, loaded: true })),
  on(Actions.failure, (state) => ({ ...state, loading: false }))
);

export const { selectAll, selectTotal } = adapter.getSelectors();
export const selectLoading = (state: State) => state.loading;
export const selectLoaded = (state: State) => state.loaded;
