import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
// feature
import { MockService } from '~/app/reactive-form/mock.service';
import { CreateUserDto } from '~/app/reactive-form/models';

@Injectable()
export class ReactiveFormFacade {
  readonly loading$ = new BehaviorSubject<boolean>(false);
  readonly lastError$ = new BehaviorSubject<any>(undefined);

  resetError = () => this.lastError$.next(undefined);

  executeAsyncAction = <T>(action: () => Observable<T>): Observable<T> => {
    this.loading$.next(true);

    return action().pipe(
      tap(() => {
        this.lastError$.next(undefined);
        this.loading$.next(false);
      }),
      catchError((err) => {
        this.lastError$.next(err);
        this.loading$.next(false);
        return throwError(err);
      })
    );
  };

  constructor(readonly mockService: MockService) {}

  // do not update loading indicator
  getByUsername = (username: string) => this.mockService.getByUsername(username);

  createOne = (userDto: CreateUserDto) => this.executeAsyncAction(() => this.mockService.createOne(userDto));

  getAll = () => this.executeAsyncAction(() => this.mockService.getAll());
}
