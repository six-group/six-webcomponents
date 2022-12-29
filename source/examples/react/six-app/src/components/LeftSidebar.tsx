import React from 'react';
import { NavLink } from 'react-router-dom';
import { SixSidebar, SixSidebarItemGroup } from '@six-group/ui-library-react/dist/components';

interface ActiveLinkProps {
  to: string;
  icon: string;
  name: string;
}

const ActiveLink = ({ to, icon, name }: ActiveLinkProps) => (
  <NavLink to={to} style={{ textDecoration: 'none' }}>
    {({ isActive }) => <SixSidebarItemGroup icon={icon} name={name} open={isActive} />}
  </NavLink>
);

interface LeftSidebarProps {
  visible: boolean;
}

const LeftSidebar = ({ visible }: LeftSidebarProps) => {
  return (
    <SixSidebar slot="left-sidebar" position="left" open={visible}>
      <ActiveLink to="/" icon="home" name="Home" />
      <ActiveLink to="/users" icon="supervisor_account" name="Users" />
    </SixSidebar>
  );
};

export default LeftSidebar;
