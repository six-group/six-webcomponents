import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { sortBy } from '../utils/sort-by';
import { filterBy } from '../utils/filter-by';
import { quickFilterBy } from '../utils/quick-filter-by';
import { keys } from '../utils/table';
import { FilterModel, SortModel } from '@six-group/ui-library/dist/types/components/six-table/types';
import { Item } from '@six-group/ui-library/dist/types/components/six-table/types';
import { fetchDelay } from '~/app/utils/fetch-delay';

export interface User extends Item {
  id: string;
  name: string;
  email: string;
  phone: string;
  username: string;
  website: string;
  address: {
    city: string;
    geo: {
      lat: string;
      lng: string;
    };
    street: string;
    suite: string;
    zipcode: string;
  };
  company: {
    bs: string;
    catchPhrase: string;
    name: string;
  };
}

export interface FetchAllProps {
  fetchServerModel: boolean;
  sort: SortModel<User>;
  filter: FilterModel<User>;
  quickFilter: string;
}

@Injectable()
export class UsersService {
  users?: User[];

  fetchAll(props: FetchAllProps): Observable<User[]> {
    if (!props.fetchServerModel && this.users) {
      console.log({ cached: this.users });
      return of(this.users);
    }

    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users').pipe(
      fetchDelay(),
      map((users) => {
        if (props.fetchServerModel) {
          const sort = sortBy<User>(props.sort);
          const filter = filterBy<User>(props.filter);
          const quickFilter = quickFilterBy<User>(keys, props.quickFilter);

          return sort(users.filter(quickFilter).filter(filter));
        } else {
          this.users = users;
          return users;
        }
      })
    );
  }

  constructor(readonly http: HttpClient) {}
}
