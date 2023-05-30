import React from 'react';
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

  return (
    <six-header slot="header" onSix-header-hamburger-menu-clicked={toggleMenu}>
      <six-search-field slot="search-field" debounce={600} onSix-search-field-change={search} />
      <div slot="menu-content">
        <div>Menu</div>
      </div>
      <Notifications loading={loading} notifications={tasks.length} toggleNotifications={toggleNotifications} />
      <six-menu slot="app-switcher-menu">
        <six-menu-item>App1</six-menu-item>
        <six-menu-item>App2</six-menu-item>
        <six-menu-item>App3</six-menu-item>
        <six-menu-item>App4</six-menu-item>
      </six-menu>
      <six-menu slot="profile-menu">
        <six-menu-item>Change password</six-menu-item>
        <six-menu-item>Logout</six-menu-item>
      </six-menu>
      <six-avatar
        image="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
        slot="profile-avatar"
      />
    </six-header>
  );
};

export default Header;
