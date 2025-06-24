/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';

import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from '@six-group/ui-library';


@ProxyCmp({
  inputs: ['closable', 'duration', 'open', 'type'],
  methods: ['show', 'hide', 'toast']
})
@Component({
  selector: 'six-alert',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['closable', 'duration', 'open', 'type'],
  standalone: false
})
export class SixAlert {
  protected el: HTMLSixAlertElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['six-alert-show', 'six-alert-after-show', 'six-alert-hide', 'six-alert-after-hide']);
  }
}


import type { EmptyPayload as ISixAlertEmptyPayload } from '@six-group/ui-library';

export declare interface SixAlert extends Components.SixAlert {
  /**
   * Emitted when the alert opens. Calling `event.preventDefault()` will prevent it from being opened.
   */
  'six-alert-show': EventEmitter<CustomEvent<ISixAlertEmptyPayload>>;
  /**
   * Emitted after the alert opens and all transitions are complete.
   */
  'six-alert-after-show': EventEmitter<CustomEvent<ISixAlertEmptyPayload>>;
  /**
   * Emitted when the alert closes. Calling `event.preventDefault()` will prevent it from being closed.
   */
  'six-alert-hide': EventEmitter<CustomEvent<ISixAlertEmptyPayload>>;
  /**
   * Emitted after the alert closes and all transitions are complete.
   */
  'six-alert-after-hide': EventEmitter<CustomEvent<ISixAlertEmptyPayload>>;
}


@ProxyCmp({
  inputs: ['alt', 'image', 'initials', 'shape']
})
@Component({
  selector: 'six-avatar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['alt', 'image', 'initials', 'shape'],
  standalone: false
})
export class SixAvatar {
  protected el: HTMLSixAvatarElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SixAvatar extends Components.SixAvatar {}


@ProxyCmp({
  inputs: ['pill', 'pulse', 'type']
})
@Component({
  selector: 'six-badge',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['pill', 'pulse', 'type'],
  standalone: false
})
export class SixBadge {
  protected el: HTMLSixBadgeElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SixBadge extends Components.SixBadge {}


@ProxyCmp({
})
@Component({
  standalone: false,
  selector: 'six-breadcrumbs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
  standalone: false
})
export class SixBreadcrumbs {
  protected el: HTMLSixBreadcrumbsElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SixBreadcrumbs extends Components.SixBreadcrumbs {}


@ProxyCmp({
  inputs: ['disabled', 'href', 'size', 'target']
})
@Component({
  standalone: false,
  selector: 'six-breadcrumbs-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'href', 'size', 'target'],
  standalone: false
})
export class SixBreadcrumbsItem {
  protected el: HTMLSixBreadcrumbsItemElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['six-click']);
  }
}


import type { EmptyPayload as ISixBreadcrumbsItemEmptyPayload } from '@six-group/ui-library';

export declare interface SixBreadcrumbsItem extends Components.SixBreadcrumbsItem {
  /**
   * Emitted when the breadcrumb item is clicked.
   */
  'six-click': EventEmitter<CustomEvent<ISixBreadcrumbsItemEmptyPayload>>;
}


@ProxyCmp({
  inputs: ['caret', 'circle', 'disabled', 'download', 'href', 'loading', 'name', 'pill', 'reset', 'size', 'submit', 'target', 'type', 'value'],
  methods: ['setFocus', 'removeFocus']
})
@Component({
  selector: 'six-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['caret', 'circle', 'disabled', 'download', 'href', 'loading', 'name', 'pill', 'reset', 'size', 'submit', 'target', 'type', 'value'],
  standalone: false
})
export class SixButton {
  protected el: HTMLSixButtonElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['six-button-blur', 'six-button-focus']);
  }
}


import type { EmptyPayload as ISixButtonEmptyPayload } from '@six-group/ui-library';

export declare interface SixButton extends Components.SixButton {
  /**
   * Emitted when the button loses focus.
   */
  'six-button-blur': EventEmitter<CustomEvent<ISixButtonEmptyPayload>>;
  /**
   * Emitted when the button gains focus.
   */
  'six-button-focus': EventEmitter<CustomEvent<ISixButtonEmptyPayload>>;
}


@ProxyCmp({
})
@Component({
  selector: 'six-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
  standalone: false
})
export class SixCard {
  protected el: HTMLSixCardElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SixCard extends Components.SixCard {}


@ProxyCmp({
  inputs: ['checked', 'disabled', 'errorText', 'errorTextCount', 'indeterminate', 'invalid', 'label', 'name', 'required', 'value'],
  methods: ['setFocus', 'removeFocus']
})
@Component({
  selector: 'six-checkbox',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['checked', 'disabled', 'errorText', 'errorTextCount', 'indeterminate', 'invalid', 'label', 'name', 'required', 'value'],
  standalone: false
})
export class SixCheckbox {
  protected el: HTMLSixCheckboxElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['six-checkbox-blur', 'six-checkbox-change', 'six-checkbox-focus']);
  }
}


import type { EmptyPayload as ISixCheckboxEmptyPayload } from '@six-group/ui-library';

export declare interface SixCheckbox extends Components.SixCheckbox {
  /**
   * Emitted when the control loses focus.
   */
  'six-checkbox-blur': EventEmitter<CustomEvent<ISixCheckboxEmptyPayload>>;
  /**
   * Emitted when the control's checked state changes.
   */
  'six-checkbox-change': EventEmitter<CustomEvent<ISixCheckboxEmptyPayload>>;
  /**
   * Emitted when the control gains focus.
   */
  'six-checkbox-focus': EventEmitter<CustomEvent<ISixCheckboxEmptyPayload>>;
}


@ProxyCmp({
  inputs: ['allowedDates', 'clearable', 'dateFormat', 'disabled', 'errorText', 'errorTextCount', 'helpText', 'invalid', 'label', 'language', 'max', 'min', 'name', 'placeholder', 'readonly', 'required', 'size', 'value'],
  methods: ['setFocus']
})
@Component({
  selector: 'six-date',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['allowedDates', 'clearable', 'dateFormat', 'disabled', 'errorText', 'errorTextCount', 'helpText', 'invalid', 'label', 'language', 'max', 'min', 'name', 'placeholder', 'readonly', 'required', 'size', 'value'],
  standalone: false
})
export class SixDate {
  protected el: HTMLSixDateElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['six-change', 'six-blur']);
  }
}


export declare interface SixDate extends Components.SixDate {
  /**
   * Emitted when the control's value changes.
Event detail contains the new date value in ISO format (yyyy-MM-dd) or an empty string if cleared.
   */
  'six-change': EventEmitter<CustomEvent<string | ''>>;
  /**
   * Emitted when the control loses focus or the date picker popup is closed.
Does not contain event details.
   */
  'six-blur': EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['allowedDates', 'clearable', 'closeOnSelect', 'containingElement', 'dateFormat', 'debounce', 'defaultDate', 'disabled', 'errorText', 'errorTextCount', 'hoist', 'iconPosition', 'inline', 'invalid', 'label', 'locale', 'max', 'min', 'name', 'open', 'placeholder', 'placement', 'readonly', 'required', 'size', 'type', 'value'],
  methods: ['setFocus', 'select']
})
@Component({
  selector: 'six-datepicker',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['allowedDates', 'clearable', 'closeOnSelect', 'containingElement', 'dateFormat', 'debounce', 'defaultDate', 'disabled', 'errorText', 'errorTextCount', 'hoist', 'iconPosition', 'inline', 'invalid', 'label', 'locale', 'max', 'min', 'name', 'open', 'placeholder', 'placement', 'readonly', 'required', 'size', 'type', 'value'],
  standalone: false
})
export class SixDatepicker {
  protected el: HTMLSixDatepickerElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['six-datepicker-select', 'six-datepicker-clear', 'six-datepicker-blur']);
  }
}


import type { SixDatepickerSelectPayload as ISixDatepickerSixDatepickerSelectPayload } from '@six-group/ui-library';
import type { EmptyPayload as ISixDatepickerEmptyPayload } from '@six-group/ui-library';

export declare interface SixDatepicker extends Components.SixDatepicker {
  /**
   * Emitted when a option got selected.
   */
  'six-datepicker-select': EventEmitter<CustomEvent<ISixDatepickerSixDatepickerSelectPayload>>;
  /**
   * Emitted when the clear button is activated.
   */
  'six-datepicker-clear': EventEmitter<CustomEvent<ISixDatepickerEmptyPayload>>;
  /**
   * Emitted when a option got selected.
   */
  'six-datepicker-blur': EventEmitter<CustomEvent<ISixDatepickerSixDatepickerSelectPayload>>;
}


@ProxyCmp({
  inputs: ['disabled', 'hasContent', 'inline', 'open', 'selectableEmpty', 'summary', 'summaryIcon', 'summaryIconSize'],
  methods: ['show', 'hide']
})
@Component({
  selector: 'six-details',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'hasContent', 'inline', 'open', 'selectableEmpty', 'summary', 'summaryIcon', 'summaryIconSize'],
  standalone: false
})
export class SixDetails {
  protected el: HTMLSixDetailsElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['six-details-show', 'six-details-after-show', 'six-details-hide', 'six-details-after-hide']);
  }
}


import type { EmptyPayload as ISixDetailsEmptyPayload } from '@six-group/ui-library';

export declare interface SixDetails extends Components.SixDetails {
  /**
   * Emitted when the details opens. Calling `event.preventDefault()` will prevent it from being opened.
   */
  'six-details-show': EventEmitter<CustomEvent<ISixDetailsEmptyPayload>>;
  /**
   * Emitted after the details opens and all transitions are complete.
   */
  'six-details-after-show': EventEmitter<CustomEvent<ISixDetailsEmptyPayload>>;
  /**
   * Emitted when the details closes. Calling `event.preventDefault()` will prevent it from being closed.
   */
  'six-details-hide': EventEmitter<CustomEvent<ISixDetailsEmptyPayload>>;
  /**
   * Emitted after the details closes and all transitions are complete.
   */
  'six-details-after-hide': EventEmitter<CustomEvent<ISixDetailsEmptyPayload>>;
}


@ProxyCmp({
  inputs: ['label', 'noHeader', 'open'],
  methods: ['show', 'hide']
})
@Component({
  selector: 'six-dialog',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['label', 'noHeader', 'open'],
  standalone: false
})
export class SixDialog {
  protected el: HTMLSixDialogElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['six-dialog-show', 'six-dialog-after-show', 'six-dialog-hide', 'six-dialog-after-hide', 'six-dialog-initial-focus', 'six-dialog-request-close']);
  }
}


import type { EmptyPayload as ISixDialogEmptyPayload } from '@six-group/ui-library';
import type { SixDialogRequestClose as ISixDialogSixDialogRequestClose } from '@six-group/ui-library';

export declare interface SixDialog extends Components.SixDialog {
  /**
   * Emitted when the dialog opens. Calling `event.preventDefault()` will prevent it from being opened.
   */
  'six-dialog-show': EventEmitter<CustomEvent<ISixDialogEmptyPayload>>;
  /**
   * Emitted after the dialog opens and all transitions are complete.
   */
  'six-dialog-after-show': EventEmitter<CustomEvent<ISixDialogEmptyPayload>>;
  /**
   * Emitted when the dialog closes. Calling `event.preventDefault()` will prevent it from being closed.
   */
  'six-dialog-hide': EventEmitter<CustomEvent<ISixDialogEmptyPayload>>;
  /**
   * Emitted after the dialog closes and all transitions are complete.
   */
  'six-dialog-after-hide': EventEmitter<CustomEvent<ISixDialogEmptyPayload>>;
  /**
   * Emitted when the dialog opens and the panel gains focus. Calling `event.preventDefault()` will prevent focus and
allow you to set it on a different element in the dialog, such as an input or button.
   */
  'six-dialog-initial-focus': EventEmitter<CustomEvent<ISixDialogEmptyPayload>>;
  /**
   * Emitted when the user attempts to close the drawer by clicking the close button, clicking the overlay, or
pressing escape. Calling `event.preventDefault()` will keep the drawer open. Avoid using this unless closing
the drawer will result in destructive behavior such as data loss.
   */
  'six-dialog-request-close': EventEmitter<CustomEvent<ISixDialogSixDialogRequestClose>>;
}


@ProxyCmp({
  inputs: ['contained', 'label', 'noHeader', 'open', 'placement'],
  methods: ['show', 'hide']
})
@Component({
  selector: 'six-drawer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['contained', 'label', 'noHeader', 'open', 'placement'],
  standalone: false
})
export class SixDrawer {
  protected el: HTMLSixDrawerElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['six-drawer-show', 'six-drawer-after-show', 'six-drawer-hide', 'six-drawer-after-hide', 'six-drawer-initial-focus', 'six-drawer-request-close']);
  }
}


import type { EmptyPayload as ISixDrawerEmptyPayload } from '@six-group/ui-library';
import type { SixDrawerRequestClose as ISixDrawerSixDrawerRequestClose } from '@six-group/ui-library';

export declare interface SixDrawer extends Components.SixDrawer {
  /**
   * Emitted when the drawer opens. Calling `event.preventDefault()` will prevent it from being opened.
   */
  'six-drawer-show': EventEmitter<CustomEvent<ISixDrawerEmptyPayload>>;
  /**
   * Emitted after the drawer opens and all transitions are complete.
   */
  'six-drawer-after-show': EventEmitter<CustomEvent<ISixDrawerEmptyPayload>>;
  /**
   * Emitted when the drawer closes. Calling `event.preventDefault()` will prevent it from being closed.
   */
  'six-drawer-hide': EventEmitter<CustomEvent<ISixDrawerEmptyPayload>>;
  /**
   * Emitted after the drawer closes and all transitions are complete.
   */
  'six-drawer-after-hide': EventEmitter<CustomEvent<ISixDrawerEmptyPayload>>;
  /**
   * Emitted when the drawer opens and the panel gains focus. Calling `event.preventDefault()` will prevent focus and
allow you to set it on a different element in the drawer, such as an input or button.
   */
  'six-drawer-initial-focus': EventEmitter<CustomEvent<ISixDrawerEmptyPayload>>;
  /**
   * Emitted when the user attempts to close the drawer by clicking the close button, clicking the overlay, or
pressing escape. Calling `event.preventDefault()` will keep the drawer open. Avoid using this unless closing
the drawer will result in destructive behavior such as data loss.
   */
  'six-drawer-request-close': EventEmitter<CustomEvent<ISixDrawerSixDrawerRequestClose>>;
}


@ProxyCmp({
  inputs: ['asyncFilter', 'autofocusFilter', 'closeOnSelect', 'containingElement', 'disableHideOnEnterAndSpace', 'distance', 'filter', 'filterDebounce', 'filterPlaceholder', 'hoist', 'matchTriggerWidth', 'open', 'options', 'placement', 'skidding', 'virtualScroll'],
  methods: ['show', 'hide']
})
@Component({
  selector: 'six-dropdown',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['asyncFilter', 'autofocusFilter', 'closeOnSelect', 'containingElement', 'disableHideOnEnterAndSpace', 'distance', 'filter', 'filterDebounce', 'filterPlaceholder', 'hoist', 'matchTriggerWidth', 'open', 'options', 'placement', 'skidding', 'virtualScroll'],
  standalone: false
})
export class SixDropdown {
  protected el: HTMLSixDropdownElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['six-dropdown-show', 'six-dropdown-after-show', 'six-dropdown-hide', 'six-dropdown-after-hide', 'six-dropdown-auto-filter-fired', 'six-async-filter-fired', 'six-dropdown-scroll']);
  }
}


import type { EmptyPayload as ISixDropdownEmptyPayload } from '@six-group/ui-library';
import type { SixDropdownAutoFilterPayload as ISixDropdownSixDropdownAutoFilterPayload } from '@six-group/ui-library';
import type { SixDropdownAsyncFilterPayload as ISixDropdownSixDropdownAsyncFilterPayload } from '@six-group/ui-library';
import type { SixDropdownScrollPayload as ISixDropdownSixDropdownScrollPayload } from '@six-group/ui-library';

export declare interface SixDropdown extends Components.SixDropdown {
  /**
   * Emitted when the dropdown opens. Calling `event.preventDefault()` will prevent it from being opened.
   */
  'six-dropdown-show': EventEmitter<CustomEvent<ISixDropdownEmptyPayload>>;
  /**
   * Emitted after the dropdown opens and all transitions are complete.
   */
  'six-dropdown-after-show': EventEmitter<CustomEvent<ISixDropdownEmptyPayload>>;
  /**
   * Emitted when the dropdown closes. Calling `event.preventDefault()` will prevent it from being closed.
   */
  'six-dropdown-hide': EventEmitter<CustomEvent<ISixDropdownEmptyPayload>>;
  /**
   * Emitted after the dropdown closes and all transitions are complete.
   */
  'six-dropdown-after-hide': EventEmitter<CustomEvent<ISixDropdownEmptyPayload>>;
  /**
   * Emitted when the auto filter is triggered
   */
  'six-dropdown-auto-filter-fired': EventEmitter<CustomEvent<ISixDropdownSixDropdownAutoFilterPayload>>;
  /**
   * Emitted when the async filter is triggered
   */
  'six-async-filter-fired': EventEmitter<CustomEvent<ISixDropdownSixDropdownAsyncFilterPayload>>;
  /**
   * Emitted when the user scrolls inside dropdown panel.
   */
  'six-dropdown-scroll': EventEmitter<CustomEvent<ISixDropdownSixDropdownScrollPayload>>;
}


@ProxyCmp({
})
@Component({
  selector: 'six-error',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
  standalone: false
})
export class SixError {
  protected el: HTMLSixErrorElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SixError extends Components.SixError {}


@ProxyCmp({
  inputs: ['customDescription', 'customIcon', 'customTitle', 'errorCode', 'language']
})
@Component({
  selector: 'six-error-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['customDescription', 'customIcon', 'customTitle', 'errorCode', 'language'],
  standalone: false
})
export class SixErrorPage {
  protected el: HTMLSixErrorPageElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SixErrorPage extends Components.SixErrorPage {}


@ProxyCmp({
})
@Component({
  selector: 'six-file-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
  standalone: false
})
export class SixFileList {
  protected el: HTMLSixFileListElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SixFileList extends Components.SixFileList {}


@ProxyCmp({
  inputs: ['date', 'identifier', 'name', 'nodelete', 'nodownload', 'size']
})
@Component({
  selector: 'six-file-list-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['date', 'identifier', 'name', 'nodelete', 'nodownload', 'size'],
  standalone: false
})
export class SixFileListItem {
  protected el: HTMLSixFileListItemElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['six-file-list-item-download', 'six-file-list-item-remove']);
  }
}


import type { SixFileListDownloadPayload as ISixFileListItemSixFileListDownloadPayload } from '@six-group/ui-library';
import type { SixFileListRemovePayload as ISixFileListItemSixFileListRemovePayload } from '@six-group/ui-library';

export declare interface SixFileListItem extends Components.SixFileListItem {
  /**
   * Triggered on file download.
   */
  'six-file-list-item-download': EventEmitter<CustomEvent<ISixFileListItemSixFileListDownloadPayload>>;
  /**
   * Triggered on file remove.
   */
  'six-file-list-item-remove': EventEmitter<CustomEvent<ISixFileListItemSixFileListRemovePayload>>;
}


@ProxyCmp({
  inputs: ['accept', 'compact', 'disabled', 'errorText', 'invalid', 'label', 'maxFileSize', 'multiple', 'uploading']
})
@Component({
  selector: 'six-file-upload',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['accept', 'compact', 'disabled', 'errorText', 'invalid', 'label', 'maxFileSize', 'multiple', 'uploading'],
  standalone: false
})
export class SixFileUpload {
  protected el: HTMLSixFileUploadElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['six-file-upload-success', 'six-file-upload-failure']);
  }
}


import type { SixFileUploadSuccessPayload as ISixFileUploadSixFileUploadSuccessPayload } from '@six-group/ui-library';
import type { SixFileUploadFailurePayload as ISixFileUploadSixFileUploadFailurePayload } from '@six-group/ui-library';

export declare interface SixFileUpload extends Components.SixFileUpload {
  /**
   * Triggers when a file is added.
   */
  'six-file-upload-success': EventEmitter<CustomEvent<ISixFileUploadSixFileUploadSuccessPayload>>;
  /**
   * Triggers when an uploaded file doesn't match MIME type or max file size.
   */
  'six-file-upload-failure': EventEmitter<CustomEvent<ISixFileUploadSixFileUploadFailurePayload>>;
}


@ProxyCmp({
})
@Component({
  selector: 'six-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
  standalone: false
})
export class SixFooter {
  protected el: HTMLSixFooterElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SixFooter extends Components.SixFooter {}


@ProxyCmp({
  inputs: ['disabled', 'helpText', 'label', 'required', 'size']
})
@Component({
  selector: 'six-group-label',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'helpText', 'label', 'required', 'size'],
  standalone: false
})
export class SixGroupLabel {
  protected el: HTMLSixGroupLabelElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SixGroupLabel extends Components.SixGroupLabel {}


@ProxyCmp({
  inputs: ['openSearch', 'shiftContent']
})
@Component({
  selector: 'six-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['openSearch', 'shiftContent'],
  standalone: false
})
export class SixHeader {
  protected el: HTMLSixHeaderElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SixHeader extends Components.SixHeader {}


@ProxyCmp({
  inputs: ['filter', 'filterPlaceholder']
})
@Component({
  selector: 'six-header-dropdown-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['filter', 'filterPlaceholder'],
  standalone: false
})
export class SixHeaderDropdownItem {
  protected el: HTMLSixHeaderDropdownItemElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SixHeaderDropdownItem extends Components.SixHeaderDropdownItem {}


@ProxyCmp({
  inputs: ['active']
})
@Component({
  selector: 'six-header-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['active'],
  standalone: false
})
export class SixHeaderItem {
  protected el: HTMLSixHeaderItemElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SixHeaderItem extends Components.SixHeaderItem {}


@ProxyCmp({
  inputs: ['caret', 'disabled', 'loading', 'reset', 'submit']
})
@Component({
  selector: 'six-header-menu-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['caret', 'disabled', 'loading', 'reset', 'submit'],
  standalone: false
})
export class SixHeaderMenuButton {
  protected el: HTMLSixHeaderMenuButtonElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SixHeaderMenuButton extends Components.SixHeaderMenuButton {}


@ProxyCmp({
  inputs: ['filled', 'size']
})
@Component({
  selector: 'six-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['filled', 'size'],
  standalone: false
})
export class SixIcon {
  protected el: HTMLSixIconElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SixIcon extends Components.SixIcon {}


@ProxyCmp({
  inputs: ['disabled', 'download', 'href', 'html', 'label', 'name', 'size', 'target']
})
@Component({
  selector: 'six-icon-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'download', 'href', 'html', 'label', 'name', 'size', 'target'],
  standalone: false
})
export class SixIconButton {
  protected el: HTMLSixIconButtonElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SixIconButton extends Components.SixIconButton {}


@ProxyCmp({
  inputs: ['autocapitalize', 'autocomplete', 'autocorrect', 'autofocus', 'clearable', 'disabled', 'dropdownSearch', 'errorText', 'errorTextCount', 'helpText', 'inputmode', 'invalid', 'label', 'line', 'max', 'maxlength', 'min', 'minlength', 'name', 'pattern', 'pill', 'placeholder', 'readonly', 'required', 'size', 'spellcheck', 'step', 'togglePassword', 'type', 'value'],
  methods: ['setFocus', 'removeFocus', 'select', 'setSelectionRange', 'getSelectionRange', 'setRangeText']
})
@Component({
  selector: 'six-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['autocapitalize', 'autocomplete', 'autocorrect', 'autofocus', 'clearable', 'disabled', 'dropdownSearch', 'errorText', 'errorTextCount', 'helpText', 'inputmode', 'invalid', 'label', 'line', 'max', 'maxlength', 'min', 'minlength', 'name', 'pattern', 'pill', 'placeholder', 'readonly', 'required', 'size', 'spellcheck', 'step', 'togglePassword', 'type', 'value'],
  standalone: false
})
export class SixInput {
  protected el: HTMLSixInputElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['six-input-change', 'six-input-clear', 'six-input-input', 'six-input-focus', 'six-input-blur']);
  }
}


import type { EmptyPayload as ISixInputEmptyPayload } from '@six-group/ui-library';

export declare interface SixInput extends Components.SixInput {
  /**
   * Emitted when the control's value changes. Access the new value via event.target.value.
   */
  'six-input-change': EventEmitter<CustomEvent<ISixInputEmptyPayload>>;
  /**
   * Emitted when the clear button is activated.
   */
  'six-input-clear': EventEmitter<CustomEvent<ISixInputEmptyPayload>>;
  /**
   * Emitted when the control receives input. Access the new value via event.target.value.
   */
  'six-input-input': EventEmitter<CustomEvent<ISixInputEmptyPayload>>;
  /**
   * Emitted when the control gains focus.
   */
  'six-input-focus': EventEmitter<CustomEvent<ISixInputEmptyPayload>>;
  /**
   * Emitted when the control loses focus. Access the new value via event.target.value.
   */
  'six-input-blur': EventEmitter<CustomEvent<ISixInputEmptyPayload>>;
}


@ProxyCmp({
  inputs: ['debounce', 'interval', 'items', 'max', 'min', 'padded', 'paddingChar', 'paddingDirection', 'paddingLength', 'roundtrip', 'step', 'timeout', 'type', 'value']
})
@Component({
  selector: 'six-item-picker',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['debounce', 'interval', 'items', 'max', 'min', 'padded', 'paddingChar', 'paddingDirection', 'paddingLength', 'roundtrip', 'step', 'timeout', 'type', 'value'],
  standalone: false
})
export class SixItemPicker {
  protected el: HTMLSixItemPickerElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['six-item-picker-change', 'six-item-picker-change-debounced']);
  }
}


import type { SixItemPickerChangePayload as ISixItemPickerSixItemPickerChangePayload } from '@six-group/ui-library';

export declare interface SixItemPicker extends Components.SixItemPicker {
  /**
   * Emitted when the item picker's value changes
   */
  'six-item-picker-change': EventEmitter<CustomEvent<ISixItemPickerSixItemPickerChangePayload>>;
  /**
   * Emitted when the item picker's value changes, but debounced
   */
  'six-item-picker-change-debounced': EventEmitter<CustomEvent<ISixItemPickerSixItemPickerChangePayload>>;
}


@ProxyCmp({
  inputs: ['languages', 'selected']
})
@Component({
  selector: 'six-language-switcher',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['languages', 'selected'],
  standalone: false
})
export class SixLanguageSwitcher {
  protected el: HTMLSixLanguageSwitcherElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['six-language-switcher-change']);
  }
}


import type { SixLanguageSwitcherChangePayload as ISixLanguageSwitcherSixLanguageSwitcherChangePayload } from '@six-group/ui-library';

export declare interface SixLanguageSwitcher extends Components.SixLanguageSwitcher {
  /**
   * Emitted when the language switchers value changes
   */
  'six-language-switcher-change': EventEmitter<CustomEvent<ISixLanguageSwitcherSixLanguageSwitcherChangePayload>>;
}


@ProxyCmp({
  inputs: ['columns']
})
@Component({
  selector: 'six-layout-grid',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['columns'],
  standalone: false
})
export class SixLayoutGrid {
  protected el: HTMLSixLayoutGridElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SixLayoutGrid extends Components.SixLayoutGrid {}


@ProxyCmp({
  inputs: ['brand']
})
@Component({
  selector: 'six-logo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['brand'],
  standalone: false
})
export class SixLogo {
  protected el: HTMLSixLogoElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SixLogo extends Components.SixLogo {}


@ProxyCmp({
  inputs: ['padded']
})
@Component({
  selector: 'six-main-container',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['padded'],
  standalone: false
})
export class SixMainContainer {
  protected el: HTMLSixMainContainerElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SixMainContainer extends Components.SixMainContainer {}


@ProxyCmp({
  inputs: ['disableKeyboardHandling', 'itemSize', 'items', 'itemsShown', 'removeBoxShadow', 'scrollingDebounce', 'virtualScroll'],
  methods: ['typeToSelect']
})
@Component({
  selector: 'six-menu',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disableKeyboardHandling', 'itemSize', 'items', 'itemsShown', 'removeBoxShadow', 'scrollingDebounce', 'virtualScroll'],
  standalone: false
})
export class SixMenu {
  protected el: HTMLSixMenuElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['six-menu-item-selected']);
  }
}


import type { SixMenuItemSelectedPayload as ISixMenuSixMenuItemSelectedPayload } from '@six-group/ui-library';

export declare interface SixMenu extends Components.SixMenu {
  /**
   * Emitted when a menu item is selected.
   */
  'six-menu-item-selected': EventEmitter<CustomEvent<ISixMenuSixMenuItemSelectedPayload>>;
}


@ProxyCmp({
})
@Component({
  selector: 'six-menu-divider',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
  standalone: false
})
export class SixMenuDivider {
  protected el: HTMLSixMenuDividerElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SixMenuDivider extends Components.SixMenuDivider {}


@ProxyCmp({
  inputs: ['checkType', 'checked', 'disabled', 'value'],
  methods: ['setFocus', 'removeFocus', 'getTextLabel']
})
@Component({
  selector: 'six-menu-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['checkType', 'checked', 'disabled', 'value'],
  standalone: false
})
export class SixMenuItem {
  protected el: HTMLSixMenuItemElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SixMenuItem extends Components.SixMenuItem {}


@ProxyCmp({
})
@Component({
  selector: 'six-menu-label',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
  standalone: false
})
export class SixMenuLabel {
  protected el: HTMLSixMenuLabelElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SixMenuLabel extends Components.SixMenuLabel {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'six-picto',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
  standalone: false
})
export class SixPicto {
  protected el: HTMLSixPictoElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SixPicto extends Components.SixPicto {}


@ProxyCmp({
  inputs: ['indeterminate', 'percentage']
})
@Component({
  selector: 'six-progress-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['indeterminate', 'percentage'],
  standalone: false
})
export class SixProgressBar {
  protected el: HTMLSixProgressBarElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SixProgressBar extends Components.SixProgressBar {}


@ProxyCmp({
  inputs: ['percentage', 'size', 'strokeWidth']
})
@Component({
  selector: 'six-progress-ring',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['percentage', 'size', 'strokeWidth'],
  standalone: false
})
export class SixProgressRing {
  protected el: HTMLSixProgressRingElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SixProgressRing extends Components.SixProgressRing {}


@ProxyCmp({
  inputs: ['checked', 'disabled', 'invalid', 'name', 'value'],
  methods: ['setFocus', 'removeFocus']
})
@Component({
  selector: 'six-radio',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['checked', 'disabled', 'invalid', 'name', 'value'],
  standalone: false
})
export class SixRadio {
  protected el: HTMLSixRadioElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['six-radio-blur', 'six-radio-change', 'six-radio-focus']);
  }
}


import type { EmptyPayload as ISixRadioEmptyPayload } from '@six-group/ui-library';

export declare interface SixRadio extends Components.SixRadio {
  /**
   * Emitted when the control loses focus.
   */
  'six-radio-blur': EventEmitter<CustomEvent<ISixRadioEmptyPayload>>;
  /**
   * Emitted when the control's checked state changes.
   */
  'six-radio-change': EventEmitter<CustomEvent<ISixRadioEmptyPayload>>;
  /**
   * Emitted when the control gains focus.
   */
  'six-radio-focus': EventEmitter<CustomEvent<ISixRadioEmptyPayload>>;
}


@ProxyCmp({
  inputs: ['disabled', 'errorText', 'errorTextCount', 'helpText', 'invalid', 'label', 'max', 'min', 'name', 'required', 'step', 'tooltip', 'tooltipFormatter', 'value'],
  methods: ['setFocus', 'removeFocus']
})
@Component({
  selector: 'six-range',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'errorText', 'errorTextCount', 'helpText', 'invalid', 'label', 'max', 'min', 'name', 'required', 'step', 'tooltip', 'tooltipFormatter', 'value'],
  standalone: false
})
export class SixRange {
  protected el: HTMLSixRangeElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['six-range-change', 'six-range-blur', 'six-range-focus']);
  }
}


import type { EmptyPayload as ISixRangeEmptyPayload } from '@six-group/ui-library';

export declare interface SixRange extends Components.SixRange {
  /**
   * Emitted when the control's value changes.
   */
  'six-range-change': EventEmitter<CustomEvent<ISixRangeEmptyPayload>>;
  /**
   * Emitted when the control loses focus.
   */
  'six-range-blur': EventEmitter<CustomEvent<ISixRangeEmptyPayload>>;
  /**
   * Emitted when the control gains focus.
   */
  'six-range-focus': EventEmitter<CustomEvent<ISixRangeEmptyPayload>>;
}


@ProxyCmp({
  inputs: ['padded', 'stage', 'version']
})
@Component({
  selector: 'six-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['padded', 'stage', 'version'],
  standalone: false
})
export class SixRoot {
  protected el: HTMLSixRootElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SixRoot extends Components.SixRoot {}


@ProxyCmp({
  inputs: ['clearable', 'debounce', 'disabled', 'placeholder', 'value']
})
@Component({
  selector: 'six-search-field',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['clearable', 'debounce', 'disabled', 'placeholder', 'value'],
  standalone: false
})
export class SixSearchField {
  protected el: HTMLSixSearchFieldElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['six-search-field-change']);
  }
}


import type { SixSearchFieldChangePayload as ISixSearchFieldSixSearchFieldChangePayload } from '@six-group/ui-library';

export declare interface SixSearchField extends Components.SixSearchField {
  /**
   * Emitted when a search is triggered
   */
  'six-search-field-change': EventEmitter<CustomEvent<ISixSearchFieldSixSearchFieldChangePayload>>;
}


@ProxyCmp({
  inputs: ['asyncFilter', 'autocomplete', 'clearable', 'disabled', 'errorText', 'errorTextCount', 'filter', 'filterDebounce', 'filterPlaceholder', 'helpText', 'hoist', 'inputDebounce', 'invalid', 'label', 'line', 'multiple', 'name', 'options', 'pill', 'placeholder', 'required', 'selectAllButton', 'selectAllText', 'size', 'value', 'virtualScroll'],
  methods: ['setFocus']
})
@Component({
  selector: 'six-select',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['asyncFilter', 'autocomplete', 'clearable', 'disabled', 'errorText', 'errorTextCount', 'filter', 'filterDebounce', 'filterPlaceholder', 'helpText', 'hoist', 'inputDebounce', 'invalid', 'label', 'line', 'multiple', 'name', 'options', 'pill', 'placeholder', 'required', 'selectAllButton', 'selectAllText', 'size', 'value', 'virtualScroll'],
  standalone: false
})
export class SixSelect {
  protected el: HTMLSixSelectElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['six-select-change', 'six-select-focus', 'six-select-blur']);
  }
}


import type { SixSelectChangePayload as ISixSelectSixSelectChangePayload } from '@six-group/ui-library';
import type { EmptyPayload as ISixSelectEmptyPayload } from '@six-group/ui-library';

export declare interface SixSelect extends Components.SixSelect {
  /**
   * Emitted when the control's value changes.
   */
  'six-select-change': EventEmitter<CustomEvent<ISixSelectSixSelectChangePayload>>;
  /**
   * Emitted when the control gains focus.
   */
  'six-select-focus': EventEmitter<CustomEvent<ISixSelectEmptyPayload>>;
  /**
   * Emitted when the control loses focus.
   */
  'six-select-blur': EventEmitter<CustomEvent<ISixSelectEmptyPayload>>;
}


@ProxyCmp({
  inputs: ['open', 'position', 'toggled', 'width'],
  methods: ['toggle', 'show', 'hide', 'selectItemByIndex', 'selectItemByName']
})
@Component({
  selector: 'six-sidebar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['open', 'position', 'toggled', 'width'],
  standalone: false
})
export class SixSidebar {
  protected el: HTMLSixSidebarElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['six-sidebar-show', 'six-sidebar-after-show', 'six-sidebar-hide', 'six-sidebar-after-hide', 'six-sidebar-initial-focus']);
  }
}


import type { EmptyPayload as ISixSidebarEmptyPayload } from '@six-group/ui-library';

export declare interface SixSidebar extends Components.SixSidebar {
  /**
   * Emitted when the sidebar opens. Calling `event.preventDefault()` will prevent it from being opened.
   */
  'six-sidebar-show': EventEmitter<CustomEvent<ISixSidebarEmptyPayload>>;
  /**
   * Emitted after the sidebar opens and all transitions are complete.
   */
  'six-sidebar-after-show': EventEmitter<CustomEvent<ISixSidebarEmptyPayload>>;
  /**
   * Emitted when the sidebar closes. Calling `event.preventDefault()` will prevent it from being closed.
   */
  'six-sidebar-hide': EventEmitter<CustomEvent<ISixSidebarEmptyPayload>>;
  /**
   * Emitted after the sidebar closes and all transitions are complete.
   */
  'six-sidebar-after-hide': EventEmitter<CustomEvent<ISixSidebarEmptyPayload>>;
  /**
   * Emitted when the sidebar opens and the panel gains focus. Calling `event.preventDefault()` will prevent focus and
allow you to set it on a different element in the sidebar, such as an input or button.
   */
  'six-sidebar-initial-focus': EventEmitter<CustomEvent<ISixSidebarEmptyPayload>>;
}


@ProxyCmp({
  inputs: ['disabled', 'href', 'icon', 'selected', 'value']
})
@Component({
  selector: 'six-sidebar-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'href', 'icon', 'selected', 'value'],
  standalone: false
})
export class SixSidebarItem {
  protected el: HTMLSixSidebarItemElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SixSidebarItem extends Components.SixSidebarItem {}


@ProxyCmp({
  inputs: ['href', 'icon', 'name', 'open', 'summaryIcon', 'value']
})
@Component({
  selector: 'six-sidebar-item-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['href', 'icon', 'name', 'open', 'summaryIcon', 'value'],
  standalone: false
})
export class SixSidebarItemGroup {
  protected el: HTMLSixSidebarItemGroupElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SixSidebarItemGroup extends Components.SixSidebarItemGroup {}


@ProxyCmp({
  inputs: ['logo', 'six']
})
@Component({
  selector: 'six-spinner',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['logo', 'six'],
  standalone: false
})
export class SixSpinner {
  protected el: HTMLSixSpinnerElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SixSpinner extends Components.SixSpinner {}


@ProxyCmp({
  inputs: ['stage']
})
@Component({
  selector: 'six-stage-indicator',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['stage'],
  standalone: false
})
export class SixStageIndicator {
  protected el: HTMLSixStageIndicatorElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SixStageIndicator extends Components.SixStageIndicator {}


@ProxyCmp({
  inputs: ['checked', 'disabled', 'errorText', 'errorTextCount', 'invalid', 'label', 'name', 'required', 'value'],
  methods: ['setFocus', 'removeFocus']
})
@Component({
  selector: 'six-switch',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['checked', 'disabled', 'errorText', 'errorTextCount', 'invalid', 'label', 'name', 'required', 'value'],
  standalone: false
})
export class SixSwitch {
  protected el: HTMLSixSwitchElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['six-switch-blur', 'six-switch-change', 'six-switch-focus']);
  }
}


import type { EmptyPayload as ISixSwitchEmptyPayload } from '@six-group/ui-library';

export declare interface SixSwitch extends Components.SixSwitch {
  /**
   * Emitted when the control loses focus.
   */
  'six-switch-blur': EventEmitter<CustomEvent<boolean>>;
  /**
   * Emitted when the control's checked state changes.
   */
  'six-switch-change': EventEmitter<CustomEvent<boolean>>;
  /**
   * Emitted when the control gains focus.
   */
  'six-switch-focus': EventEmitter<CustomEvent<ISixSwitchEmptyPayload>>;
}


@ProxyCmp({
  inputs: ['active', 'closable', 'disabled', 'panel'],
  methods: ['setFocus', 'removeFocus']
})
@Component({
  selector: 'six-tab',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['active', 'closable', 'disabled', 'panel'],
  standalone: false
})
export class SixTab {
  protected el: HTMLSixTabElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['six-tab-close']);
  }
}


import type { EmptyPayload as ISixTabEmptyPayload } from '@six-group/ui-library';

export declare interface SixTab extends Components.SixTab {
  /**
   * Emitted when the tab is closable and the close button is activated.
   */
  'six-tab-close': EventEmitter<CustomEvent<ISixTabEmptyPayload>>;
}


@ProxyCmp({
  inputs: ['noScrollControls', 'placement'],
  methods: ['show']
})
@Component({
  selector: 'six-tab-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['noScrollControls', 'placement'],
  standalone: false
})
export class SixTabGroup {
  protected el: HTMLSixTabGroupElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['six-tab-show', 'six-tab-hide']);
  }
}


import type { SixTabShowPayload as ISixTabGroupSixTabShowPayload } from '@six-group/ui-library';
import type { SixTabHidePayload as ISixTabGroupSixTabHidePayload } from '@six-group/ui-library';

export declare interface SixTabGroup extends Components.SixTabGroup {
  /**
   * Emitted when a tab is shown.
   */
  'six-tab-show': EventEmitter<CustomEvent<ISixTabGroupSixTabShowPayload>>;
  /**
   * Emitted when a tab is hidden.
   */
  'six-tab-hide': EventEmitter<CustomEvent<ISixTabGroupSixTabHidePayload>>;
}


@ProxyCmp({
  inputs: ['active', 'name']
})
@Component({
  selector: 'six-tab-panel',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['active', 'name'],
  standalone: false
})
export class SixTabPanel {
  protected el: HTMLSixTabPanelElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SixTabPanel extends Components.SixTabPanel {}


@ProxyCmp({
  inputs: ['clearable', 'pill', 'size', 'type']
})
@Component({
  selector: 'six-tag',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['clearable', 'pill', 'size', 'type'],
  standalone: false
})
export class SixTag {
  protected el: HTMLSixTagElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['six-tag-clear']);
  }
}


import type { EmptyPayload as ISixTagEmptyPayload } from '@six-group/ui-library';

export declare interface SixTag extends Components.SixTag {
  /**
   * Emitted when the clear button is activated.
   */
  'six-tag-clear': EventEmitter<CustomEvent<ISixTagEmptyPayload>>;
}


@ProxyCmp({
  inputs: ['autocapitalize', 'autocomplete', 'autocorrect', 'autofocus', 'disabled', 'errorText', 'errorTextCount', 'helpText', 'inputmode', 'invalid', 'label', 'maxlength', 'minlength', 'name', 'placeholder', 'readonly', 'required', 'resize', 'rows', 'size', 'spellcheck', 'value'],
  methods: ['setFocus', 'removeFocus', 'select', 'setSelectionRange', 'setRangeText']
})
@Component({
  selector: 'six-textarea',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['autocapitalize', 'autocomplete', 'autocorrect', 'autofocus', 'disabled', 'errorText', 'errorTextCount', 'helpText', 'inputmode', 'invalid', 'label', 'maxlength', 'minlength', 'name', 'placeholder', 'readonly', 'required', 'resize', 'rows', 'size', 'spellcheck', 'value'],
  standalone: false
})
export class SixTextarea {
  protected el: HTMLSixTextareaElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['six-textarea-change', 'six-textarea-input', 'six-textarea-focus', 'six-textarea-blur']);
  }
}


import type { EmptyPayload as ISixTextareaEmptyPayload } from '@six-group/ui-library';

export declare interface SixTextarea extends Components.SixTextarea {
  /**
   * Emitted when the control's value changes. Access the new value via event.target.value.
   */
  'six-textarea-change': EventEmitter<CustomEvent<ISixTextareaEmptyPayload>>;
  /**
   * Emitted when the control receives input. Access the new value via event.target.value.
   */
  'six-textarea-input': EventEmitter<CustomEvent<ISixTextareaEmptyPayload>>;
  /**
   * Emitted when the control gains focus.
   */
  'six-textarea-focus': EventEmitter<CustomEvent<ISixTextareaEmptyPayload>>;
  /**
   * Emitted when the control loses focus. Access the new value via event.target.value.
   */
  'six-textarea-blur': EventEmitter<CustomEvent<ISixTextareaEmptyPayload>>;
}


@ProxyCmp({
  inputs: ['closeable', 'disableTooltip', 'disabled', 'elevated', 'iconName', 'label', 'size'],
  methods: ['hide', 'show']
})
@Component({
  selector: 'six-tile',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['closeable', 'disableTooltip', 'disabled', 'elevated', 'iconName', 'label', 'size'],
  standalone: false
})
export class SixTile {
  protected el: HTMLSixTileElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['six-tile-closed', 'six-tile-selected']);
  }
}


import type { EmptyPayload as ISixTileEmptyPayload } from '@six-group/ui-library';

export declare interface SixTile extends Components.SixTile {
  /**
   * Emitted when the tile was closed.
   */
  'six-tile-closed': EventEmitter<CustomEvent<ISixTileEmptyPayload>>;
  /**
   * Emitted when the tile is selected.
   */
  'six-tile-selected': EventEmitter<CustomEvent<ISixTileEmptyPayload>>;
}


@ProxyCmp({
  inputs: ['clearable', 'debounce', 'defaultTime', 'disabled', 'errorText', 'errorTextCount', 'format', 'hoist', 'iconPosition', 'inline', 'interval', 'invalid', 'label', 'name', 'open', 'placeholder', 'placement', 'readonly', 'required', 'separator', 'size', 'timeout', 'value'],
  methods: ['setFocus']
})
@Component({
  selector: 'six-timepicker',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['clearable', 'debounce', 'defaultTime', 'disabled', 'errorText', 'errorTextCount', 'format', 'hoist', 'iconPosition', 'inline', 'interval', 'invalid', 'label', 'name', 'open', 'placeholder', 'placement', 'readonly', 'required', 'separator', 'size', 'timeout', 'value'],
  standalone: false
})
export class SixTimepicker {
  protected el: HTMLSixTimepickerElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['six-timepicker-change', 'six-timepicker-change-debounced', 'six-timepicker-clear']);
  }
}


import type { SixTimepickerChange as ISixTimepickerSixTimepickerChange } from '@six-group/ui-library';
import type { EmptyPayload as ISixTimepickerEmptyPayload } from '@six-group/ui-library';

export declare interface SixTimepicker extends Components.SixTimepicker {
  /**
   * Emitted when the timepicker's value changes
   */
  'six-timepicker-change': EventEmitter<CustomEvent<ISixTimepickerSixTimepickerChange>>;
  /**
   * Emitted when the timepicker's value changes, but debounced
   */
  'six-timepicker-change-debounced': EventEmitter<CustomEvent<ISixTimepickerSixTimepickerChange>>;
  /**
   * Emitted when the clear button is activated.
   */
  'six-timepicker-clear': EventEmitter<CustomEvent<ISixTimepickerEmptyPayload>>;
}


@ProxyCmp({
  inputs: ['content', 'disabled', 'distance', 'open', 'placement', 'skidding', 'trigger'],
  methods: ['show', 'hide']
})
@Component({
  selector: 'six-tooltip',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['content', 'disabled', 'distance', 'open', 'placement', 'skidding', 'trigger'],
  standalone: false
})
export class SixTooltip {
  protected el: HTMLSixTooltipElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['six-tooltip-show', 'six-tooltip-after-show', 'six-tooltip-hide', 'six-tooltip-after-hide']);
  }
}


import type { EmptyPayload as ISixTooltipEmptyPayload } from '@six-group/ui-library';

export declare interface SixTooltip extends Components.SixTooltip {
  /**
   * Emitted when the tooltip begins to show. Calling `event.preventDefault()` will prevent it from being shown.
   */
  'six-tooltip-show': EventEmitter<CustomEvent<ISixTooltipEmptyPayload>>;
  /**
   * Emitted after the tooltip has shown and all transitions are complete.
   */
  'six-tooltip-after-show': EventEmitter<CustomEvent<ISixTooltipEmptyPayload>>;
  /**
   * Emitted when the tooltip begins to hide. Calling `event.preventDefault()` will prevent it from being hidden.
   */
  'six-tooltip-hide': EventEmitter<CustomEvent<ISixTooltipEmptyPayload>>;
  /**
   * Emitted after the tooltip has hidden and all transitions are complete.
   */
  'six-tooltip-after-hide': EventEmitter<CustomEvent<ISixTooltipEmptyPayload>>;
}


