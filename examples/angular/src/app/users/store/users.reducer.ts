import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { User } from '../providers/users.service';
import * as Actions from './users.actions';

export interface State extends EntityState<User> {
  loading: boolean;
  loaded: boolean;
  drawerOpen: boolean;
  selectedId?: string;
}

const adapter = createEntityAdapter<User>();

const initialState = adapter.getInitialState({
  loading: false,
  loaded: false,
  drawerOpen: false,
});

export const reducer = createReducer(
  initialState,
  on(Actions.fetchAll, (state) => ({ ...state, loading: true })),
  on(Actions.fetchAllSuccess, (state, { users }) => adapter.setAll(users, { ...state, loading: false, loaded: true })),
  on(Actions.failure, (state) => ({ ...state, loading: false })),
  on(Actions.openDrawer, (state) => ({ ...state, drawerOpen: true })),
  on(Actions.closeDrawer, (state) => ({ ...state, drawerOpen: false })),
  on(Actions.selectUser, (state, { id }) => ({ ...state, selectedId: id }))
);

export const { selectAll, selectEntities } = adapter.getSelectors();
