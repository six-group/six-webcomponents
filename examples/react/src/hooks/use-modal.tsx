import React, { ReactNode, useCallback, useState } from 'react';

interface ModalComponentProps {
  open?: boolean;
  label?: string;
  'onSix-drawer-hide'?: (event: CustomEvent) => void;
  'onSix-dialog-hide'?: (event: CustomEvent) => void;
  children: ReactNode;
}

export const useModal = (ModalComponent: React.FC<ModalComponentProps>) => {
  const [isOpen, setIsOpen] = useState(false);
  const [header, setHeader] = useState<string>();
  const [children, setChildren] = useState<ReactNode>(null);

  const open = useCallback(
    ({ header, children }: { header: string; children: ReactNode }) => {
      setHeader(header);
      setChildren(children);
      setIsOpen(true);
    },
    [setHeader, setChildren, setIsOpen]
  );

  const close = () => {
    setIsOpen(false);
  };

  const Component = useCallback(() => {
    return (
      <ModalComponent open={isOpen} label={header} onSix-drawer-hide={close} onSix-dialog-hide={close}>
        {children}
      </ModalComponent>
    );
  }, [ModalComponent, isOpen, header, children]);

  return { Component, open, close };
};
