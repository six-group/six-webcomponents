import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { FilterModel, SortModel } from '@six/ui-library/dist/types/components/six-table/types';
import { User } from '../providers/users.service';
import * as Actions from './users.actions';

export interface State extends EntityState<User> {
  fetchServerModel: boolean;
  loading: boolean;
  loaded: boolean;
  sort: SortModel<User>;
  filter: FilterModel<User>;
  drawerOpen: boolean;
  selectedId?: string;
}

const adapter = createEntityAdapter<User>();

const initialState = adapter.getInitialState({
  fetchServerModel: false,
  loading: false,
  loaded: false,
  filter: {},
  sort: {},
  drawerOpen: false,
});

export const reducer = createReducer(
  initialState,
  on(Actions.fetchAll, (state) => ({ ...state, loading: true })),
  on(Actions.fetchAllSuccess, (state, { users }) => adapter.setAll(users, { ...state, loading: false, loaded: true })),
  on(Actions.failure, (state) => ({ ...state, loading: false })),
  on(Actions.updateSort, (state, { sort }) => ({ ...state, sort: { ...state.sort, ...sort } })),
  on(Actions.updateFilter, (state, { filter }) => ({ ...state, filter: { ...state.filter, ...filter } })),
  on(Actions.toggleTableType, (state) => ({ ...state, fetchServerModel: !state.fetchServerModel })),
  on(Actions.openDrawer, (state) => ({ ...state, drawerOpen: true })),
  on(Actions.closeDrawer, (state) => ({ ...state, drawerOpen: false })),
  on(Actions.selectUser, (state, { id }) => ({ ...state, selectedId: id }))
);

export const { selectAll, selectEntities } = adapter.getSelectors();
