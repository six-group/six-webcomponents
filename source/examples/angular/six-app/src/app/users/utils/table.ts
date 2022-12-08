import { Columns } from '@six/ui-library/dist/types/components/six-table/types';
import { User } from '~/app/users/providers/users.service';

export enum SortDirection {
  None = 'none',
  Asc = 'asc',
  Desc = 'desc',
}

export enum FilterMode {
  Equals = 'eq',
  NotEquals = 'ne',
  Includes = 'in',
  NotIncludes = 'ni',
}

export const columns: Columns<User> = {
  name: 'Name',
  email: 'E-mail',
  phone: 'Phone',
  username: 'Username',
  website: 'Website',
};

export const keys = Object.keys(columns);

export const defaultSort = {
  name: SortDirection.None,
  email: SortDirection.None,
};

export const defaultFilter = {
  username: {
    [FilterMode.Includes]: '',
  },
};
