import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, debounceTime, filter, map, mapTo, switchMap, withLatestFrom } from 'rxjs/operators';
import { setQuickSearch } from '~/app/core/store/ui';
import { UsersService } from '../providers/users.service';
import * as UsersActions from './users.actions';
import { selectFetchAllProps, selectFetchServerModel } from './users.selectors';

const mapAsFailure = (err: Error) => of(UsersActions.failure({ message: (err && err.message) || 'Unknown error' }));

@Injectable()
export class UsersEffects {
  fetchServerModel$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersActions.updateSort, UsersActions.updateFilter, setQuickSearch, UsersActions.toggleTableType),
      debounceTime(1),
      withLatestFrom(this.store.select(selectFetchServerModel)),
      filter(([, fetchServerModel]) => fetchServerModel),
      mapTo(UsersActions.fetchAll())
    )
  );

  fetchAll$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersActions.fetchAll),
      withLatestFrom(this.store.select(selectFetchAllProps)),
      switchMap(([, props]) => {
        return this.usersService.fetchAll(props).pipe(
          map((users) => UsersActions.fetchAllSuccess({ users })),
          catchError(mapAsFailure)
        );
      })
    )
  );

  selectUser$ = createEffect(() =>
    this.actions$.pipe(ofType(UsersActions.selectUser), mapTo(UsersActions.openDrawer()))
  );

  constructor(readonly actions$: Actions, readonly store: Store, readonly usersService: UsersService) {}
}
