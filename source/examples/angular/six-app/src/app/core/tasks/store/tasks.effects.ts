import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { TasksService } from '../providers/tasks.service';
import { failure, fetchAll, fetchAllSuccess } from './tasks.actions';

const mapAsFailure = (err: Error) => of(failure({ message: (err && err.message) || 'Unknown error' }));

@Injectable()
export class TasksEffects {
  fetchAll$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchAll),
      switchMap(() => {
        return this.tasksService.fetchAll().pipe(
          map((tasks) => fetchAllSuccess({ tasks })),
          catchError(mapAsFailure)
        );
      })
    )
  );

  constructor(readonly actions$: Actions, readonly store: Store, readonly tasksService: TasksService) {}
}
