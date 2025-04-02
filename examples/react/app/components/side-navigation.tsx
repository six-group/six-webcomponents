import { SixSidebar, SixSidebarItemGroup } from '@six-group/ui-library-react';

interface NavigationProps {
  open: boolean;
}

export default function SideNavigation({ open }: NavigationProps) {
  return (
    <SixSidebar slot="left-sidebar" position="left" open={open} key="left-sidebar">
      <SixSidebarItemGroup href="/" name="Home" icon="home"></SixSidebarItemGroup>
      <SixSidebarItemGroup href="alert" name="Alert" icon="notifications_active"></SixSidebarItemGroup>
      {/*<SixSidebarItemGroup name="Form" icon="assignment"></SixSidebarItemGroup> todo */}
    </SixSidebar>
  );
}
