'use client';
import './globals.css';
import { SixRoot } from '@six-group/ui-library-react';
import Header from '@/app/components/header';
import SideNavigation from '@/app/components/side-navigation';
import { useModalState } from '@/app/hooks/useModalState';
import RightSidebar from '@/app/components/RightSidebar';
import styles from './home.module.scss';
import { Task } from '@six-group/demo-app-angular/src/app/services/tasks.service';
import { useEffect, useState } from 'react';

const SixRootComponent = SixRoot as React.ComponentType<any>;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
    <html lang="en">
      <body className="">
        <SixRootComponent stage="DEV" version="1.0.0" padded={false} className={styles.homeRoot}>
          <Header taskCount={1} toggleMenu={leftSidebar.toggle} toggleNotificationMenu={rightSidebar.toggle} />
          <SideNavigation open={leftSidebar.isOpen} />
          <RightSidebar open={rightSidebar.isOpen} tasks={tasks} />
          <main slot="main" className={styles.mainPadding}>
            {children}
          </main>
        </SixRootComponent>
      </body>
    </html>
  );
}
