import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { tap, take, mapTo } from 'rxjs/operators';
import { fetchAll, selectLoaded, updateFilter, updateSort } from '../store';
import { defaultFilter, defaultSort } from '../utils/table';

@Injectable()
export class UsersGuard implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.store.pipe(
      select(selectLoaded),
      tap((loaded) => {
        if (!loaded) {
          this.store.dispatch(updateSort({ sort: defaultSort }));
          this.store.dispatch(updateFilter({ filter: defaultFilter }));
          this.store.dispatch(fetchAll());
        }
      }),
      mapTo(true),
      take(1)
    );
  }

  constructor(readonly store: Store) {}
}
