import { useCallback, useEffect, useState } from 'react';
import { environment } from '../environment';
// feature
import { useFetch } from './use-fetch';

interface Task {
  id: string;
  userId: string;
  title: string;
  completed: boolean;
}

export const useTasks = () => {
  const request = useFetch<Task[]>('https://jsonplaceholder.typicode.com/todos', []);

  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(false);

  const updateTasks = useCallback(() => {
    // mock server request delay
    setLoading(true);
    setTimeout(() => {
      setTasks(request.data);
      setLoading(false);
    }, environment.delay);
  }, [setLoading, setTasks, request.data]);

  useEffect(() => {
    if (request.notLoaded) {
      void request.execute();
    }
  }, [request]);

  useEffect(() => {
    updateTasks();
  }, [updateTasks]);

  return { tasks, loading };
};
