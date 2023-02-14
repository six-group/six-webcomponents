import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { FilterModel, SortModel } from '@six-group/ui-library/dist/types/components/six-table/types';
import { CoreFacade } from '~/app/core/providers';

// feature
import * as fromFeature from '../store';
import { User } from './users.service';

@Injectable()
export class UsersFacade {
  readonly fetchServerModel$ = this.store.select(fromFeature.selectFetchServerModel);
  readonly users$ = this.store.select(fromFeature.selectAll);
  readonly loading$ = this.store.select(fromFeature.selectLoading);
  readonly sort$ = this.store.select(fromFeature.selectSort);
  readonly filter$ = this.store.select(fromFeature.selectFilter);
  readonly drawerOpen$ = this.store.select(fromFeature.selectDrawerOpen);
  readonly selectedUser$ = this.store.select(fromFeature.selectedUser);

  updateSort = (e: Event) => {
    const { detail } = e as Event & { detail: SortModel<User> };
    this.store.dispatch(fromFeature.updateSort({ sort: detail }));
  };

  updateFilter = (e: Event) => {
    const { detail } = e as Event & { detail: FilterModel<User> };
    this.store.dispatch(fromFeature.updateFilter({ filter: detail }));
  };

  toggleTableType = () => this.store.dispatch(fromFeature.toggleTableType());
  selectUser = (id: string) => this.store.dispatch(fromFeature.selectUser({ id }));
  closeDrawer = () => this.store.dispatch(fromFeature.closeDrawer());

  updateUser = (update: Partial<User>) => {
    this.closeDrawer();
    this.coreFacade.showJSON('Update', update);
  };

  constructor(readonly store: Store, readonly coreFacade: CoreFacade) {}
}
