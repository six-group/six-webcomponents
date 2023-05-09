import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, map, mapTo, switchMap } from 'rxjs/operators';
import { UsersService } from '../providers/users.service';
import * as UsersActions from './users.actions';

@Injectable()
export class UsersEffects {
  fetchAll$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersActions.fetchAll),
      switchMap(() => {
        return this.usersService.fetchAll().pipe(
          map((users) => UsersActions.fetchAllSuccess({ users })),
          catchError((err: Error) => of(UsersActions.failure({ message: (err && err.message) || 'Unknown error' })))
        );
      })
    )
  );

  selectUser$ = createEffect(() =>
    this.actions$.pipe(ofType(UsersActions.selectUser), mapTo(UsersActions.openDrawer()))
  );

  constructor(readonly actions$: Actions, readonly store: Store, readonly usersService: UsersService) {}
}
