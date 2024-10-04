'use client';

import { useState } from 'react';
import { SixButton } from '@/app/components';

function Button() {
  const [inputEvent, setInputEvent] = useState<number>(0);
  return (
    <>
      <SixButton href="#" onClick={() => setInputEvent(inputEvent + 1)}>
        Click me <b>now</b>!
      </SixButton>
      <div className="buttonResult">
        <p>Input Event: {inputEvent}</p>
      </div>
    </>
  );
}

export default Button;
