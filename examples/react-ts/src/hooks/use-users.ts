import { useCallback, useEffect, useState } from 'react';
// feature
import { useFetch } from './use-fetch';
import { User } from '../types/user';
import { environment } from '../environment';

export const useUsers = () => {
  const request = useFetch<User[]>('https://jsonplaceholder.typicode.com/users', []);

  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);

  const updateUsers = useCallback(() => {
    // mock server request delay
    setLoading(true);
    setTimeout(() => {
      setUsers(request.data);
      setLoading(false);
    }, environment.delay);
  }, [setUsers, setLoading, request.data]);

  useEffect(() => {
    if (request.notLoaded) {
      void request.execute();
    }
  }, [request]);

  useEffect(() => {
    updateUsers();
  }, [updateUsers]);

  return { users, loading };
};
