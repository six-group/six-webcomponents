import { useState, useCallback } from 'react';

export function useModal(initialOpen = false) {
  const [isOpen, setIsOpen] = useState(initialOpen);

  const open = useCallback(() => setIsOpen(true), [isOpen]);
  const close = useCallback(() => setIsOpen(false), [isOpen]);
  const toggle = useCallback(() => setIsOpen((isOpen) => !isOpen), [isOpen]);

  return { isOpen, open, close, toggle };
}
