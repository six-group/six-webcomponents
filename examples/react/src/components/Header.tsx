import React from 'react';
import {
  SixMenu,
  SixMenuItem,
  SixAvatar,
  SixHeader,
  SixSearchField,
} from '@six-group/ui-library-react/dist/components';
// components
import Notifications from './Notifications';
import { useTasks } from '../hooks/use-tasks';

interface HeaderProps {
  toggleMenu: () => void;
  toggleSearch: (term: string) => void;
  toggleNotifications: () => void;
}

const Header = ({ toggleMenu, toggleSearch, toggleNotifications }: HeaderProps) => {
  const search = (event: CustomEvent) => toggleSearch(event.detail.value);
  const { tasks, loading } = useTasks();

  // TODO: tx4u9 six-search-field should accept search value

  return (
    <SixHeader slot="header" onSix-header-hamburger-menu-clicked={toggleMenu}>
      <SixSearchField slot="search-field" debounce={600} onSix-search-field-change={search} />
      <div slot="menu-content">
        <div>Menu</div>
      </div>
      <Notifications loading={loading} notifications={tasks.length} toggleNotifications={toggleNotifications} />
      <SixMenu slot="app-switcher-menu">
        <SixMenuItem>App1</SixMenuItem>
        <SixMenuItem>App2</SixMenuItem>
        <SixMenuItem>App3</SixMenuItem>
        <SixMenuItem>App4</SixMenuItem>
      </SixMenu>
      <SixMenu slot="profile-menu">
        <SixMenuItem>Change password</SixMenuItem>
        <SixMenuItem>Logout</SixMenuItem>
      </SixMenu>
      <SixAvatar
        image="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
        slot="profile-avatar"
      />
    </SixHeader>
  );
};

export default Header;
