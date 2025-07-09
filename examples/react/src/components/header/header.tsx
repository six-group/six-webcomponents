import {
  SixAvatar,
  SixBadge,
  SixHeader,
  SixHeaderDropdownItem,
  SixHeaderItem,
  SixHeaderMenuButton,
  SixIcon,
  SixIconButton,
  SixLanguageSwitcher,
  SixLogo,
  SixMenu,
  SixMenuItem,
  SixSearchField,
} from '@six-group/ui-library-react';
import styles from './header.module.css';
import { SixLanguageSwitcherCustomEvent } from '@six-group/ui-library';
import { useLanguage } from '@hooks/useLanguage';
import { useState } from 'react';
import { useTasks } from '@components/tasksProvider/tasksProvider';

interface HeaderProps {
  leftSidebar: {
    isOpen: boolean;
    toggle: () => void;
  };
  toggleRightSidebar: () => void;
}

const apps = ['Application 1', 'Application 2', 'Application 3', 'Application 4'];

export function Header({ leftSidebar, toggleRightSidebar }: HeaderProps) {
  const [currentApp, setCurrentApp] = useState('Application 2');
  const [openSearch, setOpenSearch] = useState(false);
  const tasks = useTasks();
  const language = useLanguage();

  document.documentElement.lang = language;

  function changeLanguage(event: SixLanguageSwitcherCustomEvent<string>) {
    localStorage.setItem('six-lang', event.detail);
    location.reload();
  }

  return (
    <SixHeader slot="header" openSearch={openSearch} style={{ display: 'block' }}>
      <SixHeaderItem>
        <SixIconButton name={leftSidebar.isOpen ? 'menu_open' : 'menu'} onClick={leftSidebar.toggle} />
      </SixHeaderItem>

      <SixHeaderItem>
        <SixIconButton href={'https://six-group.github.io/six-webcomponents/demo/v5/react/'}>
          <SixLogo />
        </SixIconButton>
      </SixHeaderItem>

      <SixHeaderItem className={styles['search-icon']} active={openSearch}>
        <SixIconButton name="search" onClick={() => setOpenSearch(!openSearch)} />
      </SixHeaderItem>
      <SixSearchField slot="search-field" debounce={600} clearable className={styles.searchIcon} />

      <SixHeaderItem>
        <SixIconButton name="notifications_none" onClick={toggleRightSidebar}>
          {tasks.length > 0 && (
            <SixBadge type="danger" pill>
              {tasks.length}
            </SixBadge>
          )}
        </SixIconButton>
      </SixHeaderItem>

      <SixHeaderDropdownItem>
        <SixHeaderMenuButton slot="trigger">
          <span>{currentApp}</span>
          <SixIcon slot="suffix">apps</SixIcon>
        </SixHeaderMenuButton>
        <SixMenu>
          {apps.map((app) => (
            <SixMenuItem value={app} checked={app === currentApp} onClick={() => setCurrentApp(app)} key={app}>
              {app}
            </SixMenuItem>
          ))}
        </SixMenu>
      </SixHeaderDropdownItem>

      <SixHeaderDropdownItem>
        <SixIconButton slot="trigger">
          <SixAvatar image="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" />
        </SixIconButton>
        <SixMenu>
          <SixMenuItem value="change-password">Change password</SixMenuItem>
          <SixMenuItem value="logout">Logout</SixMenuItem>
          <SixMenuItem>
            <SixLanguageSwitcher selected={language} onSixLanguageSwitcherChange={changeLanguage} />
          </SixMenuItem>
        </SixMenu>
      </SixHeaderDropdownItem>
    </SixHeader>
  );
}
