'use client';

import { useState } from 'react';
import { SixInput } from '@/app/components';

function Input() {
  const [inputEvent, setInputEvent] = useState<string>('');
  const [changeEvent, setChangeEvent] = useState<string>('');
  return (
    <>
      <SixInput
        onSixInputInput={(ev) => setInputEvent(`${ev.target.value}`)}
        onSixInputChange={(ev) => setChangeEvent(`${ev.target.value}`)}
      >
        {' '}
      </SixInput>
      <div className="inputResult">
        <p>Input Event: {inputEvent}</p>
        <p>Change Event: {changeEvent}</p>
      </div>
    </>
  );
}

export default Input;
