import { Suspense, useState } from 'react'
import './App.css'
import Header from './components/Header';
import Home from './components/Home';
import LeftSidebar from './components/LeftSidebar';
import RightSidebar from './components/RightSidebar';
import Users from './components/Users';
import { useModalState } from './hooks/use-modal-state';
import { Route, Routes } from 'react-router-dom';


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
}

export default App
