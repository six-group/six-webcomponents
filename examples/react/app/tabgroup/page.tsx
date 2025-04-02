'use client';

import { SixTab, SixTabGroup, SixTabPanel } from '@six-group/ui-library-react';

export default function TabGroup() {
  return (
    <div>
      <SixTabGroup>
        <SixTab slot="nav">General</SixTab>
        <SixTab slot="nav">Custom</SixTab>
        <SixTab slot="nav">Advanced</SixTab>
        <SixTab slot="nav" disabled={true}>
          Disabled
        </SixTab>

        <SixTabPanel name="general">This is the general tab panel.</SixTabPanel>
        <SixTabPanel name="custom">This is the custom tab panel.</SixTabPanel>
        <SixTabPanel name="advanced">This is the advanced tab panel.</SixTabPanel>
        <SixTabPanel name="disabled">This is a disabled tab panel.</SixTabPanel>
      </SixTabGroup>
    </div>
  );
}
