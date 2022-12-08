import { useCallback, useEffect, useState } from 'react';
// feature
import { useFetch } from './use-fetch';
import { User } from '../types/user';
import { filterBy } from '../table/filter-by';
import { quickFilterBy } from '../table/quick-filter-by';
import { sortBy } from '../table/sort-by';
import { environment } from '../environment';
import { FilterModel, SortModel } from '@six/ui-library/dist/types/components/six-table/types';

interface UseUsersProps {
  sortModel: SortModel<User>;
  filterModel: FilterModel<User>;
  search: string;
}

export const useUsers = ({ sortModel, filterModel, search }: UseUsersProps) => {
  const request = useFetch<User[]>('https://jsonplaceholder.typicode.com/users', []);

  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);

  const updateUsers = useCallback(() => {
    const quickFilter = quickFilterBy(Object.keys(User.columns), search);
    const filter = filterBy(filterModel);
    const sort = sortBy<User>(sortModel);
    // mock server request delay
    setLoading(true);
    setTimeout(() => {
      setUsers(sort(request.data.filter(quickFilter).filter(filter)));
      setLoading(false);
    }, environment.delay);
  }, [sortModel, filterModel, search, setUsers, setLoading, request.data]);

  useEffect(() => {
    if (request.notLoaded) {
      void request.execute();
    }
  }, [request]);

  useEffect(() => {
    updateUsers();
  }, [sortModel, filterModel, search, updateUsers]);

  return { users, loading };
};
