import React from 'react';
import { SixBadge, SixButton } from '@six/ui-library-react/dist/components';
// feature
import { useTasks } from '../hooks/use-tasks';
import './Home.css';

interface DashboardProps {
  toggleLeftSidebar: () => void;
  toggleRightSidebar: () => void;
}

const Home = ({ toggleLeftSidebar, toggleRightSidebar }: DashboardProps) => {
  const { tasks, loading } = useTasks();

  return (
    <div className="dashboard">
      <h1>Demo</h1>
      <p>
        This is a <b>React Demo App</b> using <b>@six/ui-library</b>
      </p>
      <p className="dashboard__actions">
        <SixButton onClick={toggleLeftSidebar}>Toggle left sidebar</SixButton>
        <SixButton onClick={toggleRightSidebar} loading={loading}>
          Toggle right sidebar
          <SixBadge type="danger" pill>
            {tasks.length}
          </SixBadge>
        </SixButton>
      </p>
    </div>
  );
};

export default Home;
