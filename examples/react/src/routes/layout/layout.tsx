import { Outlet } from 'react-router';
import { Header } from '@components/header/header';
import { SideNavigation } from '@components/sideNavigation/sideNavigation';
import { SixRoot } from '@six-group/ui-library-react';
import { useModal } from '@hooks/useModal';
import { TasksProvider } from '@components/tasksProvider/tasksProvider';
import { RightSidebar } from '@components/rightSidebar/rightSidebar';

import styles from './layout.module.css';

export function Layout() {
  const leftSidebar = useModal(true);
  const rightSidebar = useModal(false);

  return (
    <TasksProvider>
      <SixRoot padded={true} className={styles['layout-root']}>
        <Header leftSidebar={leftSidebar} toggleRightSidebar={rightSidebar.toggle} />
        <SideNavigation open={leftSidebar.isOpen} />
        <RightSidebar isOpen={rightSidebar.isOpen} />
        <main slot="main" className={styles['layout-padding']}>
          <Outlet />
        </main>
      </SixRoot>
    </TasksProvider>
  );
}
