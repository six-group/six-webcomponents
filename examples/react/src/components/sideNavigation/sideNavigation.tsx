import { SixSidebar, SixSidebarItemGroup } from '@six-group/ui-library-react';

interface NavigationProps {
  open: boolean;
}

export function SideNavigation({ open }: NavigationProps) {
  return (
    <SixSidebar slot="left-sidebar" position="left" open={open} key="left-sidebar">
      <SixSidebarItemGroup href="/" name="Home" icon="home"></SixSidebarItemGroup>
      <SixSidebarItemGroup href="form" name="Form" icon="assignment"></SixSidebarItemGroup>
      <SixSidebarItemGroup href="alert" name="Alert" icon="notifications_active"></SixSidebarItemGroup>
      todo
    </SixSidebar>
  );
}
