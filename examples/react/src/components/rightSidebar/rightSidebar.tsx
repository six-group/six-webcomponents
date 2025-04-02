import { SixCard, SixSidebar } from '@six-group/ui-library-react';
import styles from './rightSidebar.module.css';
import { Task } from 'src/customTypes/task';

interface NavigationProps {
  open: boolean;
  tasks: Task[];
}

export function RightSidebar({ open, tasks }: NavigationProps) {
  return (
    <SixSidebar slot="right-sidebar" position="right" open={open} className={styles.sidebarBg}>
      {tasks.map((task) => (
        <SixCard key={task.id}>
          <h3>Task #{task.id}</h3>
          <p>{task.title}</p>
        </SixCard>
      ))}
    </SixSidebar>
  );
}
