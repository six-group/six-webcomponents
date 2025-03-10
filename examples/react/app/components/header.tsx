'use client';
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
import { Language, languages } from '@six-group/ui-library';
import { useLanguage } from '@/app/hooks/useLocaleStorage';
import styles from './header.module.css';
import { useState } from 'react';

interface HeaderProps {
  taskCount: number;
  toggleMenu: () => void;
}

const SixHeaderComponent = SixHeader as React.ComponentType<any>;
const SixIconButtonComponent = SixIconButton as React.ComponentType<any>;

export default function Header({ toggleMenu, taskCount }: HeaderProps) {
  const availableLangs: Language[] = [...languages];
  const apps = ['Application 1', 'Application 2', 'Application 3', 'Application 4'];
  let currentApp = 'Application 1';

  const [openSearch, setOpenSearch] = useState(false);
  const [sideMenuOpen, setsideMenuOpen] = useState(false);

  let lang = useLanguage();
  if (lang == null || !availableLangs.includes(lang)) {
    lang = 'de';
  }
  let language: Language = lang;
  document.documentElement.lang = lang;

  function changeLanguage(event: Event) {
    const lang = (event as CustomEvent).detail;
    localStorage.setItem('six-lang', lang);
    location.reload();
  }

  return (
    <>
      <SixHeaderComponent slot="header" className={styles} openSearch={openSearch}>
        <SixHeaderItem>
          <SixIconButtonComponent name={sideMenuOpen ? 'menu_open' : 'menu'} onClick={toggleMenu} />
        </SixHeaderItem>

        <SixHeaderItem>
          <SixIconButtonComponent href={'https://six-group.github.io/six-webcomponents/demo/react/'}>
            <SixLogo />
          </SixIconButtonComponent>
        </SixHeaderItem>

        <SixHeaderItem className="search-icon">
          <SixIconButtonComponent name="search" onClick={() => setOpenSearch(!openSearch)}></SixIconButtonComponent>
        </SixHeaderItem>

        <SixSearchField slot="search-field" debounce={600} clearable />

        <SixHeaderItem>
          <SixIconButtonComponent name="notifications_none">
            <SixBadge type="danger" pill>
              {taskCount}
            </SixBadge>
          </SixIconButtonComponent>
        </SixHeaderItem>

        <SixHeaderDropdownItem>
          <SixHeaderMenuButton slot="trigger">
            <span>{currentApp}</span>
            <SixIcon slot="suffix">apps</SixIcon>
          </SixHeaderMenuButton>
          <SixMenu>
            {apps.map((app) => (
              <SixMenuItem checked={app === currentApp} onClick={() => (currentApp = app)} key={app}>
                {app}
              </SixMenuItem>
            ))}
          </SixMenu>
        </SixHeaderDropdownItem>

        <SixHeaderDropdownItem>
          <SixIconButtonComponent slot="trigger">
            <SixAvatar image="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"></SixAvatar>
          </SixIconButtonComponent>
          <SixMenu>
            <SixMenuItem value="change-password">Change password</SixMenuItem>
            <SixMenuItem value="logout">Logout</SixMenuItem>
            <SixMenuItem>
              <SixLanguageSwitcher
                selected={language}
                onSixLanguageSwitcherChange={changeLanguage}
              ></SixLanguageSwitcher>
            </SixMenuItem>
          </SixMenu>
        </SixHeaderDropdownItem>
      </SixHeaderComponent>
    </>
  );
}
