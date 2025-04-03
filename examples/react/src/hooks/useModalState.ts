import { useState } from 'react';

export function useModalState(initialOpen = false) {
  const [isOpen, setIsOpen] = useState(initialOpen);

  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  return { isOpen, open, close, toggle, setIsOpen };
}
