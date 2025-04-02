import { Outlet } from 'react-router';
import { Header } from '@components/header/header';
import { SideNavigation } from '@components/sideNavigation/sideNavigation';
import { SixRoot } from '@six-group/ui-library-react';
import { useModalState } from '@hooks/useModalState';

import styles from './layout.module.css';

export function Layout() {
  const leftSidebar = useModalState(true);

  return (
    <SixRoot padded={true} className={styles['layout-root']}>
      <Header leftSidebar={leftSidebar} />
      <SideNavigation open={leftSidebar.isOpen} />
      <main slot="main" className={styles['layout-padding']}>
        <Outlet />
      </main>
    </SixRoot>
  );
}
