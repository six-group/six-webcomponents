import { Outlet } from 'react-router';
import { Header } from '@components/header/header';
import { SideNavigation } from '@components/sideNavigation/sideNavigation';
import { RightSidebar } from '@components/rightSidebar/rightSidebar';
import { SixRoot } from '@six-group/ui-library-react';
import { useEffect, useState } from 'react';
import { useModalState } from '@hooks/useModalState';
import { type Task } from '@customTypes/task';

import styles from './layout.module.css';

export function Layout() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    async function fetchAll() {
      const res = await fetch('https://jsonplaceholder.typicode.com/todos');
      const data = await res.json();
      setTasks(data);
    }
    fetchAll();
  }, []);

  const leftSidebar = useModalState(true);
  const rightSidebar = useModalState(false);

  return (
    <SixRoot stage="DEV" version="1.0.0" padded={true} className={styles['layout-root']}>
      <Header taskCount={1} toggleMenu={leftSidebar.toggle} toggleNotificationMenu={rightSidebar.toggle} />
      <SideNavigation open={leftSidebar.isOpen} />
      <RightSidebar open={rightSidebar.isOpen} tasks={tasks} />

      <main slot="main" className={styles['layout-padding']}>
        <Outlet />
      </main>
    </SixRoot>
  );
}
