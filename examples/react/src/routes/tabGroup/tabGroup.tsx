import { SixTab, SixTabGroup, SixTabPanel } from '@six-group/ui-library-react';

import styles from './tabGroup.module.css';

export function TabGroup() {
  return (
    <div>
      <h2>Tab Group</h2>

      <SixTabGroup>
        <SixTab slot="nav" panel="general">
          General
        </SixTab>
        <SixTab slot="nav" panel="custom">
          Custom
        </SixTab>
        <SixTab slot="nav" panel="advanced">
          Advanced
        </SixTab>
        <SixTab slot="nav" panel="disabled" disabled={true}>
          Disabled
        </SixTab>

        <SixTabPanel className={styles['tab-panel']} name="general">
          This is the general tab panel.
        </SixTabPanel>
        <SixTabPanel className={styles['tab-panel']} name="custom">
          This is the custom tab panel.
        </SixTabPanel>
        <SixTabPanel className={styles['tab-panel']} name="advanced">
          This is the advanced tab panel.
        </SixTabPanel>
        <SixTabPanel className={styles['tab-panel']} name="disabled">
          This is a disabled tab panel.
        </SixTabPanel>
      </SixTabGroup>
    </div>
  );
}
