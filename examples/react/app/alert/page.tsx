'use client';

import styles from './alert.module.css';
import { SixButton, SixInput, SixLayoutGrid, SixMenuItem, SixSelect } from '@six-group/ui-library-react';

export default function Alert() {
  return (
    <div style={styles}>
      <h2>Alert</h2>
      <h3>Toast Notifications</h3>
      <form>
        <SixLayoutGrid>
          <SixSelect label="Alert Type">
            <SixMenuItem value="primary">Primary</SixMenuItem>
            <SixMenuItem value="success">Success</SixMenuItem>
            <SixMenuItem value="info">Info</SixMenuItem>
          </SixSelect>
          <SixInput label="Message"></SixInput>
          <SixButton submit>Show Toast</SixButton>
        </SixLayoutGrid>
      </form>
    </div>
  );
}
