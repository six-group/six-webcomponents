import styles from './alert.module.css';
import {
  SixAlert,
  SixButton,
  SixIcon,
  SixInput,
  SixLayoutGrid,
  SixMenuItem,
  SixSelect,
} from '@six-group/ui-library-react';
import { showAlert } from '@six-group/ui-library';

export function Alert() {
  function showToast() {
    showAlert('hello');
  }

  return (
    <div style={styles}>
      <h2>Alert</h2>
      <h3>Toast Notifications</h3>
      <form onSubmit={showToast}>
        <SixLayoutGrid style={{ rowGap: 'var(--six-spacing-x-small)' }}>
          <SixSelect label="Alert Type" style={{ gridColumn: 'span 12' }}>
            <SixMenuItem value="primary">Primary</SixMenuItem>
            <SixMenuItem value="success">Success</SixMenuItem>
            <SixMenuItem value="info">Info</SixMenuItem>
          </SixSelect>
          <SixInput label="Message"></SixInput>
          <SixButton submit>Show Toast</SixButton>
        </SixLayoutGrid>
      </form>

      <h3>Custom Toast Notifications</h3>
      <section>
        <div>
          <SixButton type="primary">Show Custom Toast</SixButton>
        </div>
        <SixAlert type="danger" duration={5000} closable>
          <SixIcon slot="icon">report</SixIcon>
          <strong>A custom Alert</strong>
          <br />
          If you want to use <i>html</i> in your alert message.
        </SixAlert>
      </section>
    </div>
  );
}
