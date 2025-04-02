import { SixButton, SixDialog } from '@six-group/ui-library-react';
import { useState } from 'react';

export function Dialog() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <h2>Dialog</h2>
      <SixButton onClick={() => setIsVisible(true)}>Show Dialog</SixButton>
      <SixDialog label="Dialog" open={isVisible} onSixDialogHide={() => setIsVisible(false)}>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
        dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus.
        <SixButton slot="footer" type="primary" onClick={() => setIsVisible(false)}>
          Close
        </SixButton>
      </SixDialog>
    </>
  );
}
