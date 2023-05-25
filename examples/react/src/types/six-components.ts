import { DOMAttributes } from 'react';

interface FormControlEvents {
  onInput: (event: InputEvent) => void;
  onChange: (event: InputEvent) => void;
  onFocus: (event: FocusEvent) => void;
  onBlur: (event: FocusEvent) => void;
}

type CustomElement<CustomElement> = Partial<
  CustomElement & FormControlEvents & DOMAttributes<CustomElement> & { children?: any; key?: string | number }
>;

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'six-input': CustomElement<HTMLSixInputElement>;
      'six-select': CustomElement<HTMLSixSelectElement>;
      'six-menu-item': CustomElement<HTMLSixMenuItemElement>;
      'six-checkbox': CustomElement<HTMLSixCheckboxElement>;
      'six-radio': CustomElement<HTMLSixRadioElement>;
      'six-button': CustomElement<HTMLSixButtonElement>;
    }
  }
}
