import { SixSidebar, SixSidebarItemGroup } from '@six-group/ui-library-react';
import { NavLink } from 'react-router';

import styles from './sideNavigation.module.css';

interface NavigationProps {
  open: boolean;
}

const getLinkClassName = ({ isActive }: { isActive: boolean }) => `${styles[isActive ? 'active-link' : 'link']}`;

export function SideNavigation({ open }: NavigationProps) {
  return (
    <SixSidebar slot="left-sidebar" position="left" open={open} key="left-sidebar">
      <NavLink to={'/'} className={getLinkClassName}>
        <SixSidebarItemGroup name="Home" icon="home" />
      </NavLink>
      <NavLink to={'/form'} className={getLinkClassName}>
        <SixSidebarItemGroup name="Form" icon="assignment" />
      </NavLink>
      <NavLink to={'/alert'} className={getLinkClassName}>
        <SixSidebarItemGroup name="Alert" icon="notifications_active" />
      </NavLink>
      <NavLink to={'/dialog'} className={getLinkClassName}>
        <SixSidebarItemGroup name="Dialog" icon="web_asset" />
      </NavLink>
      <NavLink to={'/details'} className={getLinkClassName}>
        <SixSidebarItemGroup name="Details" icon="unfold_more" />
      </NavLink>
      <NavLink to={'/tab-group'} className={getLinkClassName}>
        <SixSidebarItemGroup name="Tab Group" icon="tab" />
      </NavLink>
    </SixSidebar>
  );
}
