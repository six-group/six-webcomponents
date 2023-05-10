import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { fetchDelay } from '~/app/utils/fetch-delay';

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  username: string;
  website: string;
}

@Injectable()
export class UsersService {
  users?: User[];

  fetchAll(): Observable<User[]> {
    if (this.users) {
      return of(this.users);
    }

    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users').pipe(
      fetchDelay(),
      map((users) => {
        this.users = users;
        return users;
      })
    );
  }

  constructor(readonly http: HttpClient) {}
}
