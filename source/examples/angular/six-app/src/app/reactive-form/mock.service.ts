import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay, switchMap } from 'rxjs/operators';
// feature
import { CreateUserDto, UserDto } from './models';

@Injectable()
export class MockService {
  readonly users: UserDto[] = [
    { id: 0, username: 'user' },
    { id: 1, username: 'John' },
  ];

  getByUsername = (username: string): Observable<UserDto | undefined> => {
    return of(this.users.find((user) => user.username === username)).pipe(delay(600));
  };

  createOne = (createUserDto: CreateUserDto): Observable<UserDto> => {
    return of(createUserDto).pipe(
      delay(1000),
      switchMap(() => {
        const error: Partial<CreateUserDto> = {};

        if (createUserDto.username === 'error') {
          error.username = 'The username is invalid.';
        }

        if (createUserDto.password === 'password') {
          error.password = 'The password is invalid.';
        }

        if (Object.keys(error).length) {
          return throwError(error);
        }

        const userDto: UserDto = { id: this.users.length, ...createUserDto };
        this.users.push(userDto);

        return of(userDto);
      })
    );
  };

  getAll = (): Observable<UserDto[]> => {
    return of(this.users).pipe(delay(600));
  };
}
