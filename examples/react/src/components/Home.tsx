import React from 'react';
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
        This is a <b>React Demo App</b> using <b>@six-group/ui-library</b>
      </p>
      <p className="dashboard__actions">
        <six-button onClick={toggleLeftSidebar}>Toggle left sidebar</six-button>
        <six-button onClick={toggleRightSidebar} loading={loading}>
          Toggle right sidebar
          <six-badge type="danger" pill>
            {tasks.length}
          </six-badge>
        </six-button>
      </p>
    </div>
  );
};

export default Home;
