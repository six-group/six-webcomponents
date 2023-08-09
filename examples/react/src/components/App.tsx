import React, { Suspense, useState } from 'react';
// styles
import './App.css';
// components
import Home from './Home';
import RightSidebar from './RightSidebar';
import LeftSidebar from './LeftSidebar';
import Header from './Header';
// types
import { SixRootCollapsedPayload } from '@six-group/ui-library/dist/types/components/six-root/six-root';
// hooks
import { useModalState } from '../hooks/use-modal-state';
import { Route, Routes } from 'react-router-dom';
// modules
const Users = React.lazy(() => import('./Users'));
import { defineCustomElements } from '@six-group/ui-library/loader';

defineCustomElements();

const App = () => {
  const leftSidebar = useModalState(true);
  const rightSidebar = useModalState(false);
  const [, setSearch] = useState('');

  const handleCollapsed = ({ detail }: CustomEvent<SixRootCollapsedPayload>) => {
    if (detail.collapsed === leftSidebar.isOpen) {
      leftSidebar.setIsOpen(!detail.collapsed);
    }
  };

  return (
    <six-root onSix-root-collapsed={handleCollapsed}>
      <Header toggleMenu={leftSidebar.toggle} toggleSearch={setSearch} toggleNotifications={rightSidebar.toggle} />
      <LeftSidebar visible={leftSidebar.isOpen} />
      <RightSidebar visible={rightSidebar.isOpen} />
      <section slot="main">
        <Suspense fallback={<six-spinner />}>
          <Routes>
            <Route
              path="/"
              element={<Home toggleLeftSidebar={leftSidebar.toggle} toggleRightSidebar={rightSidebar.toggle} />}
            />
            <Route path="/users" element={<Users />} />
          </Routes>
        </Suspense>
      </section>
    </six-root>
  );
};

export default App;
