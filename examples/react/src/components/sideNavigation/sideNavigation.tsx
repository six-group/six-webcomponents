import { SixSidebar, SixSidebarItemGroup } from '@six-group/ui-library-react';
import { useLocation } from 'react-router';

interface NavigationProps {
  open: boolean;
}

export function SideNavigation({ open }: NavigationProps) {
  const { pathname } = useLocation();

  return (
    <SixSidebar slot="left-sidebar" position="left" open={open} key="left-sidebar">
      <SixSidebarItemGroup href="/" open={pathname === '/'} name="Home" icon="home"></SixSidebarItemGroup>
      <SixSidebarItemGroup href="/form" open={pathname === '/form'} name="Form" icon="assignment"></SixSidebarItemGroup>
      <SixSidebarItemGroup
        href="/alert"
        open={pathname === '/alert'}
        name="Alert"
        icon="notifications_active"
      ></SixSidebarItemGroup>
      <SixSidebarItemGroup
        href="/dialog"
        open={pathname === '/dialog'}
        name="Dialog"
        icon="web_asset"
      ></SixSidebarItemGroup>
      <SixSidebarItemGroup
        href="/details"
        open={pathname === '/details'}
        name="Details"
        icon="unfold_more"
      ></SixSidebarItemGroup>
      <SixSidebarItemGroup
        href="/tab-group"
        open={pathname === '/tab-group'}
        name="Tab Group"
        icon="tab"
      ></SixSidebarItemGroup>
    </SixSidebar>
  );
}
