import { DOMAttributes } from 'react';

interface FormControlEvents {
  onInput: (event: InputEvent) => void;
  onChange: (event: InputEvent) => void;
  onFocus: (event: FocusEvent) => void;
  onBlur: (event: FocusEvent) => void;
}

type CustomElement<CustomElement> = Partial<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  CustomElement & FormControlEvents & DOMAttributes<CustomElement> & { children?: any; key?: string | number }
>;

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'six-root': CustomElement<HTMLSixRootElement>;
      'six-header': CustomElement<HTMLSixHeaderElement>;
      'six-search-field': CustomElement<HTMLSixSearchFieldElement>;
      'six-avatar': CustomElement<HTMLSixAvatarElement>;
      'six-card': CustomElement<HTMLSixCardElement>;
      'six-icon': CustomElement<HTMLSixIconElement>;
      'six-icon-button': CustomElement<HTMLSixIconButtonElement>;
      'six-badge': CustomElement<HTMLSixBadgeElement>;
      'six-spinner': CustomElement<HTMLSixSpinnerElement>;
      'six-sidebar': CustomElement<HTMLSixSidebarElement>;
      'six-sidebar-item-group': CustomElement<HTMLSixSidebarItemGroupElement>;
      'six-input': CustomElement<HTMLSixInputElement>;
      'six-select': CustomElement<HTMLSixSelectElement>;
      'six-menu': CustomElement<HTMLSixMenuElement>;
      'six-menu-item': CustomElement<HTMLSixMenuItemElement>;
      'six-checkbox': CustomElement<HTMLSixCheckboxElement>;
      'six-radio': CustomElement<HTMLSixRadioElement>;
      'six-button': CustomElement<HTMLSixButtonElement>;
    }
  }
}
