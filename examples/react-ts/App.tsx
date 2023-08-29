import React, { Suspense, useState } from 'react'
import './App.css'
import { SixRoot, SixSpinner, SixRootCollapsedPayload, defineCustomElements } from '@six-group/ui-library-react';
import { Route, Routes } from 'react-router-dom';
import { useModalState } from './hooks/use-modal-state';

// components
import {Home, Header, LeftSidebar, RightSidebar} from './components';

defineCustomElements();


function App() {
  const leftSidebar = useModalState(true);
  const rightSidebar = useModalState(false);
  const [, setSearch] = useState('');

  const handleCollapsed = ({ detail }: CustomEvent<SixRootCollapsedPayload>) => {
    if (detail.collapsed === leftSidebar.isOpen) {
      leftSidebar.setIsOpen(!detail.collapsed);
    }
  };

  return (
    <SixRoot onSix-root-collapsed={handleCollapsed}>
      <Header toggleMenu={leftSidebar.toggle} toggleSearch={setSearch} toggleNotifications={rightSidebar.toggle} />
      <LeftSidebar visible={leftSidebar.isOpen} />
      <RightSidebar visible={rightSidebar.isOpen} />
      <section slot="main">
        <Suspense fallback={<SixSpinner />}>
          <Routes>
            <Route
              path="/"
              element={<Home toggleLeftSidebar={leftSidebar.toggle} toggleRightSidebar={rightSidebar.toggle} />}
            />
            <Route path="/users" element={<Users />} />
          </Routes>
        </Suspense>
      </section>
    </SixRoot>
  );
}

export default App
