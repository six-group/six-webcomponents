import { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react';

type Task = {
  id: string;
  userId: string;
  title: string;
  completed: boolean;
};

const TasksContext = createContext<Task[]>([]);

export function TasksProvider({ children }: PropsWithChildren) {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    async function fetchAll() {
      const res = await fetch('https://jsonplaceholder.typicode.com/todos');
      const data = await res.json();
      setTasks(data);
    }
    fetchAll();
  }, []);

  return <TasksContext value={tasks}>{children}</TasksContext>;
}

export const useTasks = () => {
  const tasks = useContext(TasksContext);

  if (!tasks) {
    throw new Error('useTasks hook used without TasksProvider!');
  }

  return tasks;
};
