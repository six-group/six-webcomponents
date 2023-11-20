import React from 'react';

interface ActiveLinkProps {
  to: string;
  icon: string;
  name: string;
}

interface LeftSidebarProps {
  visible: boolean;
}

const LeftSidebar = ({ visible }: LeftSidebarProps) => {
  return (
    <six-sidebar slot="left-sidebar" position="left" open={visible}>
      <six-sidebar-item-group href="/" icon="home" name="Home" />
      <six-sidebar-item-group href="/users" icon="supervisor_account" name="Users" />
    </six-sidebar>
  );
};

export default LeftSidebar;
