import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { CoreFacade } from '~/app/core/providers';

// feature
import * as fromFeature from '../store';
import { Observable } from 'rxjs';
import { User } from '~/app/users/providers/users.service';

@Injectable()
export class UsersFacade {
  readonly users$: Observable<User[]> = this.store.select(fromFeature.selectAll);
  readonly loading$: Observable<boolean> = this.store.select(fromFeature.selectLoading);
  readonly drawerOpen$ = this.store.select(fromFeature.selectDrawerOpen);
  readonly selectedUser$: Observable<User | undefined> = this.store.select(fromFeature.selectedUser);

  selectUser = (id: string) => this.store.dispatch(fromFeature.selectUser({ id }));
  closeDrawer = () => this.store.dispatch(fromFeature.closeDrawer());

  updateUser = (update: any) => {
    this.closeDrawer();
    this.coreFacade.showJSON('Update', update);
  };

  constructor(readonly store: Store, readonly coreFacade: CoreFacade) {}
}
