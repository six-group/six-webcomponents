'use client';
import './globals.css';
import { SixRoot } from '@six-group/ui-library-react';
import Header from '@/app/components/header';
import SideNavigation from '@/app/components/side-navigation';
import { useModalState } from '@/app/hooks/useModalState';
import RightSidebar from '@/app/components/RightSidebar';

const SixRootComponent = SixRoot as React.ComponentType<any>;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const leftSidebar = useModalState(true);

  return (
    <html lang="en">
      <body className="">
        <SixRootComponent stage="DEV" version="DEV-1.2.3" padded={false}>
          <Header taskCount={1} toggleMenu={leftSidebar.toggle} />
          <SideNavigation open={leftSidebar.isOpen} />
          <RightSidebar open={false} tasks={[]} />
          <main slot="main">{children}</main>
        </SixRootComponent>
      </body>
    </html>
  );
}
