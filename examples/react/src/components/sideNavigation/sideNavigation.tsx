import { SixSidebar, SixSidebarItemGroup } from '@six-group/ui-library-react';
import { NavLink } from 'react-router';

import styles from './sideNavigation.module.css';

interface NavigationProps {
  open: boolean;
}

export function SideNavigation({ open }: NavigationProps) {
  return (
    <SixSidebar slot="left-sidebar" position="left" open={open} key="left-sidebar">
      <NavLink to={'/'} className={({ isActive }) => `${styles[isActive ? 'active-link' : 'link']}`}>
        <SixSidebarItemGroup name="Home" icon="home" />
      </NavLink>
      <NavLink to={'/form'} className={({ isActive }) => `${styles[isActive ? 'active-link' : 'link']}`}>
        <SixSidebarItemGroup name="Form" icon="assignment" />
      </NavLink>
      <NavLink to={'/alert'} className={({ isActive }) => `${styles[isActive ? 'active-link' : 'link']}`}>
        <SixSidebarItemGroup name="Alert" icon="notifications_active" />
      </NavLink>
      <NavLink to={'/dialog'} className={({ isActive }) => `${styles[isActive ? 'active-link' : 'link']}`}>
        <SixSidebarItemGroup name="Dialog" icon="web_asset" />
      </NavLink>
      <NavLink to={'/details'} className={({ isActive }) => `${styles[isActive ? 'active-link' : 'link']}`}>
        <SixSidebarItemGroup name="Details" icon="unfold_more" />
      </NavLink>
      <NavLink to={'/tab-group'} className={({ isActive }) => `${styles[isActive ? 'active-link' : 'link']}`}>
        <SixSidebarItemGroup name="Tab Group" icon="tab" />
      </NavLink>
    </SixSidebar>
  );
}
