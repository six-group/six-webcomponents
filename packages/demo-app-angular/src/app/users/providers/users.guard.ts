import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { mapTo, take, tap } from 'rxjs/operators';
import { fetchAll, selectLoaded } from '../store';

@Injectable()
export class UsersGuard implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.store.pipe(
      select(selectLoaded),
      tap((loaded) => {
        if (!loaded) {
          this.store.dispatch(fetchAll());
        }
      }),
      mapTo(true),
      take(1)
    );
  }

  constructor(readonly store: Store) {}
}
