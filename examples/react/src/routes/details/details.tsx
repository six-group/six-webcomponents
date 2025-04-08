import { SixButton, SixCheckbox, SixDetails } from '@six-group/ui-library-react';
import { useState } from 'react';

import styles from './details.module.css';

export function Details() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [openIndex, setOpenIndex] = useState(2);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <>
      <h2>Details</h2>

      <div className={styles.single}>
        <SixDetails
          open={isOpen}
          summary="Toggle Me"
          summaryIcon="settings"
          disabled={isDisabled}
          onSixDetailsHide={() => setIsOpen(false)}
          onSixDetailsShow={() => setIsOpen(true)}
        >
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
          clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
          consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
        </SixDetails>
        <SixButton className={styles['trigger-button']} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? 'Close' : 'Open'}
        </SixButton>
        <SixCheckbox
          checked={isDisabled}
          onSixCheckboxChange={(e) => setIsDisabled(e.target.checked)}
          label="Disabled"
        />
      </div>

      <h3>Grouped</h3>

      <div className={styles.grouped}>
        <SixDetails summary="First" open={openIndex === 0} onClick={() => toggle(0)}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </SixDetails>

        <SixDetails summary="Second" open={openIndex === 1} onClick={() => toggle(1)}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </SixDetails>

        <SixDetails summary="Third" open={openIndex === 2} onClick={() => toggle(2)}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </SixDetails>
      </div>
    </>
  );
}
