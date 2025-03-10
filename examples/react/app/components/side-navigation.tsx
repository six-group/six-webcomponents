import { SixSidebar, SixSidebarItemGroup } from '@six-group/ui-library-react';

interface NavigationProps {
  open: boolean;
}

export default function SideNavigation({ open }: NavigationProps) {
  return (
    <SixSidebar position="left" open={open}>
      <SixSidebarItemGroup name="Home" icon="home"></SixSidebarItemGroup>
      <SixSidebarItemGroup name="Form" icon="assignment"></SixSidebarItemGroup>
      <SixSidebarItemGroup name="Alert" icon="notifications_active"></SixSidebarItemGroup>
    </SixSidebar>
  );
}
