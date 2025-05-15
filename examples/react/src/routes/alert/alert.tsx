import { SixAlert, SixButton, SixIcon, SixInput } from '@six-group/ui-library-react';
import { showAlert } from '@six-group/ui-library';
import { useRef, useState } from 'react';

import styles from './alert.module.css';

export function Alert() {
  const primaryRef = useRef<HTMLSixAlertElement>(null);
  const successRef = useRef<HTMLSixAlertElement>(null);
  const infoRef = useRef<HTMLSixAlertElement>(null);

  const [toastMessage, setToastMessage] = useState('Your Message');

  function showToast() {
    showAlert(toastMessage);
  }

  return (
    <>
      <h2>Alert</h2>

      <h3>Toast Notifications</h3>
      <div className={styles.section}>
        <div className={styles.buttons}>
          <SixButton type="primary" onClick={() => primaryRef.current?.toast()}>
            Primary
          </SixButton>
          <SixButton type="success" onClick={() => successRef.current?.toast()}>
            Success
          </SixButton>
          <SixButton type="secondary" onClick={() => infoRef.current?.toast()}>
            Info
          </SixButton>
        </div>

        <SixAlert type="primary" duration={3000} closable ref={primaryRef}>
          <SixIcon slot="icon">info</SixIcon>
          <strong>This is super informative</strong>
          <br />
          You can tell by how pretty the alert is.
        </SixAlert>

        <SixAlert type="success" duration={3000} closable ref={successRef}>
          <SixIcon slot="icon">check_circle</SixIcon>
          <strong>Your changes have been saved</strong>
          <br />
          You can safely exit the app now.
        </SixAlert>

        <SixAlert type="info" duration={3000} closable ref={infoRef}>
          <SixIcon slot="icon">info</SixIcon>
          <strong>Your settings have been updated</strong>
          <br />
          Settings will take effect on the next login.
        </SixAlert>
      </div>

      <h3>Imperative Toasts</h3>
      <div className={styles.section}>
        <SixInput value={toastMessage} onSixInputInput={(e) => setToastMessage(e.target.value)} />
        <SixButton className={styles['trigger-button']} onClick={showToast}>
          Show Toast
        </SixButton>
      </div>
    </>
  );
}
