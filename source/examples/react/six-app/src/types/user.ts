import { FilterMode, SortDirection } from '@six-group/ui-library/dist/types/components/six-table-header-cell/types';
import { FilterModel, SortModel } from '@six-group/ui-library/dist/types/components/six-table/types';

export interface User {
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

export namespace User {
  export const columns: { [K in keyof Partial<User>]: string } = {
    name: 'Name',
    email: 'E-mail',
    phone: 'Phone',
    username: 'Username',
    website: 'Website',
  };

  export const sort: SortModel<User> = {
    name: SortDirection.None,
    email: SortDirection.None,
  };

  export const filter: FilterModel<User> = {
    username: {
      [FilterMode.Includes]: '',
    },
  };
}
