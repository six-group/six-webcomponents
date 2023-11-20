'use client';
import './globals.css';
import { SixRoot } from '@six-group/ui-library-react';
import Header from '@/components/Header';
import React, { Suspense, useState } from 'react';
import LeftSidebar from '@/components/LeftSidebar';
import RightSidebar from '@/components/RightSidebar';
import { useModalState } from '@/hooks/use-modal-state';
import { SixRootCollapsedPayload } from '@six-group/ui-library';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const leftSidebar = useModalState(true);
  const rightSidebar = useModalState(false);
  const [, setSearch] = useState('');

  const handleCollapsed = ({ detail }: CustomEvent<SixRootCollapsedPayload>) => {
    if (detail.collapsed === leftSidebar.isOpen) {
      leftSidebar.setIsOpen(!detail.collapsed);
    }
  };

  return (
    <html lang="en">
      <body>
        <SixRoot onSix-root-collapsed={handleCollapsed}>
          <Header toggleMenu={leftSidebar.toggle} toggleSearch={setSearch} toggleNotifications={rightSidebar.toggle} />
          <LeftSidebar visible={leftSidebar.isOpen} />
          <RightSidebar visible={rightSidebar.isOpen} />
          <main slot="main" className="max-w-7xl m-auto min-h-full px-12">
            {children}
          </main>
        </SixRoot>
      </body>
    </html>
  );
}
