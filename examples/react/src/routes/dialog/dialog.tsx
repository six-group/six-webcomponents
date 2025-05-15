import { SixButton, SixCheckbox, SixDialog } from '@six-group/ui-library-react';
import { useState } from 'react';

import styles from './dialog.module.css';

export function Dialog() {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldIgnoreOverlayClicks, setShouldIgnoreOverlayClicks] = useState(false);

  return (
    <>
      <h2>Dialog</h2>
      <SixDialog
        label="Dialog"
        open={isVisible}
        onSixDialogHide={() => setIsVisible(false)}
        onSixDialogOverlayDismiss={(e) => {
          if (shouldIgnoreOverlayClicks) {
            e.preventDefault();
          }
        }}
      >
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
        dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus.
        <SixButton slot="footer" type="primary" onClick={() => setIsVisible(false)}>
          Close
        </SixButton>
      </SixDialog>
      <div className={styles['controls']}>
        <SixButton onClick={() => setIsVisible(true)}>Show Dialog</SixButton>
        <SixCheckbox
          checked={shouldIgnoreOverlayClicks}
          onSixCheckboxChange={(e) => setShouldIgnoreOverlayClicks(e.target.checked)}
        >
          Ignore Clicks on Overlay
        </SixCheckbox>
      </div>
    </>
  );
}
