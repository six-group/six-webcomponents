import { SixCard, SixSidebar } from '@six-group/ui-library-react';
import { useTasks } from '@components/tasksProvider/tasksProvider';

import styles from './rightSidebar.module.css';

interface NavigationProps {
  isOpen: boolean;
}

export function RightSidebar({ isOpen }: NavigationProps) {
  const tasks = useTasks();

  return (
    <SixSidebar slot="right-sidebar" position="right" open={isOpen} className={styles['right-sidebar']}>
      {tasks.map((task) => (
        <SixCard key={task.id} className={styles['task-card']}>
          <h3>Task #{task.id}</h3>
          <p>{task.title}</p>
        </SixCard>
      ))}
    </SixSidebar>
  );
}
