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
    /*    import SixButton = Components.SixButton;
    import SixDrawer = Components.SixDrawer;
    import SixSelect = Components.SixSelect;
    import SixMenuItem = Components.SixMenuItem;
    import SixMenu = Components.SixMenu;
    import SixIcon = Components.SixIcon;
    import SixRoot = Components.SixRoot;
    import SixHeader = Components.SixHeader;
    import SixIconButton = Components.SixIconButton;
    import SixTooltip = Components.SixTooltip;
    import SixFileListItem = Components.SixFileListItem;
    import SixFileList = Components.SixFileList;
    import SixSpinner = Components.SixSpinner;
    import SixSearchField = Components.SixSearchField;
    import SixInput = Components.SixInput;
    import SixTextarea = Components.SixTextarea;
    import SixBadge = Components.SixBadge;
    import SixSwitch = Components.SixSwitch;
    import SixTabGroup = Components.SixTabGroup;
    import SixTab = Components.SixTab;
    import SixTabPanel = Components.SixTabPanel;
    import SixAlert = Components.SixAlert;
    import SixMenuDivider = Components.SixMenuDivider;
    import SixMenuLabel = Components.SixMenuLabel;
    import SixDatepicker = Components.SixDatepicker;
    import SixFileUpload = Components.SixFileUpload;
    import SixCard = Components.SixCard;
    import SixSidebar = Components.SixSidebar;
    import SixSidebarItem = Components.SixSidebarItem;
    import SixSidebarItemGroup = Components.SixSidebarItemGroup;
    import SixCheckbox = Components.SixCheckbox;
    import SixRadio = Components.SixRadio;*/

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
