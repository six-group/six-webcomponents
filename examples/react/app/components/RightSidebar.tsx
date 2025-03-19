import { SixCard, SixSidebar } from '@six-group/ui-library-react';
import { Task } from '@/app/types/Task';
import styles from './right-sidebar.module.css';

interface NavigationProps {
  open: boolean;
  tasks: Task[];
}

export default function RightSidebar({ open, tasks }: NavigationProps) {
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
