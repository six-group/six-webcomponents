import  { useState } from 'react';

interface DebugProps {
  value?: unknown;
}

export const Debug = ({ value }: DebugProps) => {
  const [show, setShow] = useState(false);
  const toggle = () => setShow((value) => !value);

  return (
    <>
      <six-button onClick={toggle}>Debug</six-button>
      {show && <pre>{JSON.stringify(value, null, 2)}</pre>}
    </>
  );
};
