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
    /**
   * Indicates whether or not the alert is open. You can use this in lieu of the show/hide methods. @default false
   */
  set open(_: Components.SixAlert['open']) {};
    /**
   * Set to true to make the alert closable. @default false
   */
  set closable(_: Components.SixAlert['closable']) {};
    /**
   * The type of alert. @default 'primary'
   */
  set type(_: Components.SixAlert['type']) {};
    /**
   * The length of time, in milliseconds, the alert will show before closing itself.
If the user hovers over the toast alert, the timer will pause.
On leaving the element with the mouse, the timer resets. @default Infinity
   */
  set duration(_: Components.SixAlert['duration']) {};
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
    /**
   * The image source to use for the avatar. @default ''
   */
  set image(_: Components.SixAvatar['image']) {};
    /**
   * Alternative text for the image. @default ''
   */
  set alt(_: Components.SixAvatar['alt']) {};
    /**
   * Initials to use as a fallback when no image is available (1-2 characters max recommended). @default ''
   */
  set initials(_: Components.SixAvatar['initials']) {};
    /**
   * The shape of the avatar. @default 'circle'
   */
  set shape(_: Components.SixAvatar['shape']) {};
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
    /**
   * The badge's type. @default 'primary'
   */
  set type(_: Components.SixBadge['type']) {};
    /**
   * Set to true to draw a pill-style badge with rounded edges. @default false
   */
  set pill(_: Components.SixBadge['pill']) {};
    /**
   * Set to true to make the badge pulsate to draw attention. @default false
   */
  set pulse(_: Components.SixBadge['pulse']) {};
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SixBadge extends Components.SixBadge {}


@ProxyCmp({
  inputs: ['separatorIcon']
})
@Component({
  selector: 'six-breadcrumbs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['separatorIcon'],
  standalone: false
})
export class SixBreadcrumbs {
  protected el: HTMLSixBreadcrumbsElement;
    /**
   * Defines an icon as a separator without having to place a slot * @default ''
   */
  set separatorIcon(_: Components.SixBreadcrumbs['separatorIcon']) {};
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SixBreadcrumbs extends Components.SixBreadcrumbs {}


@ProxyCmp({
  inputs: ['href', 'readonly', 'size', 'target']
})
@Component({
  selector: 'six-breadcrumbs-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['href', 'readonly', 'size', 'target'],
  standalone: false
})
export class SixBreadcrumbsItem {
  protected el: HTMLSixBreadcrumbsItemElement;
    /**
   * When set, the underlying button will be rendered as an `<a>` with this `href` instead of a `<button>`.
   */
  set href(_: Components.SixBreadcrumbsItem['href']) {};
    /**
   * Tells the browser where to open the link. Only used when `href` is set.
   */
  set target(_: Components.SixBreadcrumbsItem['target']) {};
    /**
   * The breadcrumbs item size. @default 'medium'
   */
  set size(_: Components.SixBreadcrumbsItem['size']) {};
    /**
   * Set to true to readonly the breadcrumb item. @default false
   */
  set readonly(_: Components.SixBreadcrumbsItem['readonly']) {};
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SixBreadcrumbsItem extends Components.SixBreadcrumbsItem {}


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
    /**
   * The button's type. @default 'primary'
   */
  set type(_: Components.SixButton['type']) {};
    /**
   * The button's size. @default 'medium'
   */
  set size(_: Components.SixButton['size']) {};
    /**
   * Set to true to draw the button with a caret for use with dropdowns, popovers, etc. @default false
   */
  set caret(_: Components.SixButton['caret']) {};
    /**
   * Set to true to disable the button. @default false
   */
  set disabled(_: Components.SixButton['disabled']) {};
    /**
   * Set to true to draw the button in a loading state. @default false
   */
  set loading(_: Components.SixButton['loading']) {};
    /**
   * Set to true to draw a pill-style button with rounded edges. @default false
   */
  set pill(_: Components.SixButton['pill']) {};
    /**
   * Set to true to draw a circle button. @default false
   */
  set circle(_: Components.SixButton['circle']) {};
    /**
   * Indicates if activating the button should submit the form. Ignored when `href` is set. @default false
   */
  set submit(_: Components.SixButton['submit']) {};
    /**
   * Indicates if activating the button should reset the form. @default false
   */
  set reset(_: Components.SixButton['reset']) {};
    /**
   * An optional name for the button. Ignored when `href` is set. @default ''
   */
  set name(_: Components.SixButton['name']) {};
    /**
   * An optional value for the button. Ignored when `href` is set. @default ''
   */
  set value(_: Components.SixButton['value']) {};
    /**
   * When set, the underlying button will be rendered as an `<a>` with this `href` instead of a `<button>`.
   */
  set href(_: Components.SixButton['href']) {};
    /**
   * Tells the browser where to open the link. Only used when `href` is set.
   */
  set target(_: Components.SixButton['target']) {};
    /**
   * Tells the browser to download the linked file as this filename. Only used when `href` is set.
   */
  set download(_: Components.SixButton['download']) {};
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
    /**
   * The checkbox's name attribute. @default ''
   */
  set name(_: Components.SixCheckbox['name']) {};
    /**
   * The value of the checkbox does not mean if it's checked or not, use the `checked`
property for that.

The value of a checkbox is analogous to the value of an `<input type="checkbox">`,
it's only used when the checkbox participates in a native `<form>`. @default 'on'
   */
  set value(_: Components.SixCheckbox['value']) {};
    /**
   * Set to true to disable the checkbox. @default false
   */
  set disabled(_: Components.SixCheckbox['disabled']) {};
    /**
   * Set to true to show an asterisk beneath the label. @default false
   */
  set required(_: Components.SixCheckbox['required']) {};
    /**
   * The label text. @default ''
   */
  set label(_: Components.SixCheckbox['label']) {};
    /**
   * The error message shown, if `invalid` is set to true. @default ''
   */
  set errorText(_: Components.SixCheckbox['errorText']) {};
    /**
   * The number of error texts to be shown (if the error-text slot isn't used). Defaults to 1
   */
  set errorTextCount(_: Components.SixCheckbox['errorTextCount']) {};
    /**
   * If this property is set to true and an error message is provided by `errorText`, the error message is displayed. @default false
   */
  set invalid(_: Components.SixCheckbox['invalid']) {};
    /**
   * Set to true to draw the checkbox in a checked state. @default false
   */
  set checked(_: Components.SixCheckbox['checked']) {};
    /**
   * Set to true to draw the checkbox in an indeterminate state. @default false
   */
  set indeterminate(_: Components.SixCheckbox['indeterminate']) {};
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
    /**
   * The language used to render the weekdays and months. @default 'en'
   */
  set language(_: Components.SixDate['language']) {};
    /**
   * If `true` the user can only select a date via the component in the popup but not directly edit the input field. @default false
   */
  set readonly(_: Components.SixDate['readonly']) {};
    /**
   * If `true` the component is disabled. @default false
   */
  set disabled(_: Components.SixDate['disabled']) {};
    /**
   * Callback to determine which dates in the picker should be selectable. @default () => true
   */
  set allowedDates(_: Components.SixDate['allowedDates']) {};
    /**
   * The minimum allowed selectable date in ISO format (yyyy-MM-dd).
Dates before this value will be disabled in the date picker.
Example: '2024-01-01'
   */
  set min(_: Components.SixDate['min']) {};
    /**
   * The maximum allowed selectable date in ISO format (yyyy-MM-dd).
Dates after this value will be disabled in the date picker.
Example: '2025-01-01'
   */
  set max(_: Components.SixDate['max']) {};
    /**
   * The size of the date input field. @default 'medium'
   */
  set size(_: Components.SixDate['size']) {};
    /**
   * Set to true to show an asterisk beneath the label. @default false
   */
  set required(_: Components.SixDate['required']) {};
    /**
   * The placeholder defines what text to be shown on the input element
   */
  set placeholder(_: Components.SixDate['placeholder']) {};
    /**
   * The value of the form field in ISO 8601 date format (yyyy-MM-dd).
Example: '2024-01-01'.

When an invalid date is provided, it will be replaced with an empty string (''),
matching the behavior of native HTML <input type="date">.

The displayed format can be customized using the dateFormat property, but the underlying
value will always be stored in ISO format. @default ''
   */
  set value(_: Components.SixDate['value']) {};
    /**
   * Defines the format pattern for displaying dates and how dates can be entered via keyboard.

The parser accepts flexible input that doesn't strictly match the format pattern.
Input with missing leading zeros or incomplete years will be automatically normalized.
For example, with the pattern "dd.MM.yyyy": "1.1.2025" becomes "01.01.2025" and
"1.1.225" becomes "01.01.0225".

Defaults to "dd.MM.yyyy".

Available patterns:
- Year: "yyyy" (e.g., "2021")
- Month: "MM" (e.g., "01" for January) or "M" (e.g., "1" for January)
- Day: "dd" (e.g., "08" for the 8th) or "d" (e.g., "8" for the 8th)

Examples:
- "dd.MM.yyyy" -> "31.01.2024"
- "yyyy-MM-dd" -> "2024-01-31"
- "d.M.yyyy" -> "31.1.2024" @default 'dd.MM.yyyy'
   */
  set dateFormat(_: Components.SixDate['dateFormat']) {};
    /**
   * The label text. @default ''
   */
  set label(_: Components.SixDate['label']) {};
    /**
   * The input's help text. Alternatively, you can use the help-text slot. @default ''
   */
  set helpText(_: Components.SixDate['helpText']) {};
    /**
   * The error message shown, if `invalid` is set to true. @default ''
   */
  set errorText(_: Components.SixDate['errorText']) {};
    /**
   * The number of error texts to be shown (if the error-text slot isn't used). Defaults to 1
   */
  set errorTextCount(_: Components.SixDate['errorTextCount']) {};
    /**
   * If this property is set to true and an error message is provided by `errorText`, the error message is displayed. @default false
   */
  set invalid(_: Components.SixDate['invalid']) {};
    /**
   * The input's name attribute. @default ''
   */
  set name(_: Components.SixDate['name']) {};
    /**
   * Set to true to add a clear button when the input is populated. @default false
   */
  set clearable(_: Components.SixDate['clearable']) {};
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
    /**
   * Set the type. @default 'date'
   */
  set type(_: Components.SixDatepicker['type']) {};
    /**
   * The language used to render the weekdays and months. @default 'en'
   */
  set locale(_: Components.SixDatepicker['locale']) {};
    /**
   * Indicates whether or not the calendar dropdown is open on startup. You can use this in lieu of the show/hide methods. @default false
   */
  set open(_: Components.SixDatepicker['open']) {};
    /**
   * Indicates whether or not the calendar should be shown as an inline (always open) component @default false
   */
  set inline(_: Components.SixDatepicker['inline']) {};
    /**
   * If `true` the user can only select a date via the component in the popup, but not directly edit the input field. @default false
   */
  set readonly(_: Components.SixDatepicker['readonly']) {};
    /**
   * If `true` the component is disabled. @default false
   */
  set disabled(_: Components.SixDatepicker['disabled']) {};
    /**
   * Callback to determine which date in the datepicker should be selectable.
the callback function will get a datestring as an argument, e.g. '2021-07-04'

Usage e.g.:
const datepicker = document.getElementById('allowed-date-picker');
datepicker.allowedDates = datestring => parseInt(datestring.split('-')[2], 10) % 2 === 0; @default () => true
   */
  set allowedDates(_: Components.SixDatepicker['allowedDates']) {};
    /**
   * The minimum datetime allowed. Value must be a date object
   */
  set min(_: Components.SixDatepicker['min']) {};
    /**
   * The maximum datetime allowed. Value must be a date object
   */
  set max(_: Components.SixDatepicker['max']) {};
    /**
   * Closes the datepicker dropdown after selection @default this.type === 'date'
   */
  set closeOnSelect(_: Components.SixDatepicker['closeOnSelect']) {};
    /**
   * The enforced placement of the dropdown panel.
   */
  set placement(_: Components.SixDatepicker['placement']) {};
    /**
   * Datepicker size. @default 'medium'
   */
  set size(_: Components.SixDatepicker['size']) {};
    /**
   * Set to true to show an asterisk beneath the label. @default false
   */
  set required(_: Components.SixDatepicker['required']) {};
    /**
   * The date to defines where the datepicker popup starts. The prop accepts ISO 8601 date strings (YYYY-MM-DD).
   */
  set defaultDate(_: Components.SixDatepicker['defaultDate']) {};
    /**
   * The placeholder defines what text to be shown on the input element
   */
  set placeholder(_: Components.SixDatepicker['placeholder']) {};
    /**
   * The value of the form field, which accepts a date object.
   */
  set value(_: Components.SixDatepicker['value']) {};
    /**
   * The label text. @default ''
   */
  set label(_: Components.SixDatepicker['label']) {};
    /**
   * The error message shown, if `invalid` is set to true. @default ''
   */
  set errorText(_: Components.SixDatepicker['errorText']) {};
    /**
   * The number of error texts to be shown (if the error-text slot isn't used). Defaults to 1
   */
  set errorTextCount(_: Components.SixDatepicker['errorTextCount']) {};
    /**
   * If this property is set to true and an error message is provided by `errorText`, the error message is displayed. @default false
   */
  set invalid(_: Components.SixDatepicker['invalid']) {};
    /**
   * The dropdown will close when the user interacts outside of this element (e.g. clicking).
   */
  set containingElement(_: Components.SixDatepicker['containingElement']) {};
    /**
   * Define the dateFormat. Valid formats are:
'dd.mm.yyyy'
'yyyy-mm-dd'
'dd-mm-yyyy'
'dd/mm/yyyy'
'yyyy/mm/dd'
'dd.mm.yy'
'yy-mm-dd'
'dd-mm-yy'
'dd/mm/yy'
'yy/mm/dd' @default SixDateFormats.DDMMYYY_DOT
   */
  set dateFormat(_: Components.SixDatepicker['dateFormat']) {};
    /**
   * Set the amount of time, in milliseconds, to wait to trigger the `dateChange` event after each keystroke. @default DEFAULT_DEBOUNCE_FAST
   */
  set debounce(_: Components.SixDatepicker['debounce']) {};
    /**
   * The input's name attribute. @default ''
   */
  set name(_: Components.SixDatepicker['name']) {};
    /**
   * Set to true to add a clear button when the input is populated. @default false
   */
  set clearable(_: Components.SixDatepicker['clearable']) {};
    /**
   * Set the position of the icon @default 'left'
   */
  set iconPosition(_: Components.SixDatepicker['iconPosition']) {};
    /**
   * Enable this option to prevent the panel from being clipped when the component is placed inside a container with
`overflow: auto|scroll`. @default false
   */
  set hoist(_: Components.SixDatepicker['hoist']) {};
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
    /**
   * Indicates whether the details is open. You can use this in lieu of the show/hide methods. @default false
   */
  set open(_: Components.SixDetails['open']) {};
    /**
   * The summary to show in the details header. If you need to display HTML, use the `summary` slot instead. @default ''
   */
  set summary(_: Components.SixDetails['summary']) {};
    /**
   * The summary icon to show in the details header. If you need to display HTML, use the `summary-icon` slot instead.
   */
  set summaryIcon(_: Components.SixDetails['summaryIcon']) {};
    /**
   * The icon's size. @default 'inherit'
   */
  set summaryIconSize(_: Components.SixDetails['summaryIconSize']) {};
    /**
   * Set to true to prevent the user from toggling the details. @default false
   */
  set disabled(_: Components.SixDetails['disabled']) {};
    /**
   * Set to true when you want to use six-details inline e.g. in a sidebar @default false
   */
  set inline(_: Components.SixDetails['inline']) {};
    /**
   * Set to true when you want details without content to be selectable. This is important if you e.g. have a toggled sidebar where some menus have no children @default false
   */
  set selectableEmpty(_: Components.SixDetails['selectableEmpty']) {};
    /**
   * Set to false when you want to hide the summary icon and disable the open/close mechanism. Usually not needed, but used internally by 'six-sidebar-item-group' @default true
   */
  set hasContent(_: Components.SixDetails['hasContent']) {};
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
    /**
   * Indicates whether the dialog is open. You can use this in lieu of the show/hide methods. @default false
   */
  set open(_: Components.SixDialog['open']) {};
    /**
   * The dialog's label as displayed in the header. You should always include a relevant label even when using
`no-header`, as it is required for proper accessibility. @default ''
   */
  set label(_: Components.SixDialog['label']) {};
    /**
   * Set to true to disable the header. This will also remove the default close button, so please ensure you provide an
easy, accessible way for users to dismiss the dialog. @default false
   */
  set noHeader(_: Components.SixDialog['noHeader']) {};
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
    /**
   * Indicates whether the drawer is open. You can use this in lieu of the show/hide methods. @default false
   */
  set open(_: Components.SixDrawer['open']) {};
    /**
   * The drawer's label as displayed in the header. You should always include a relevant label even when using
`no-header`, as it is required for proper accessibility. @default ''
   */
  set label(_: Components.SixDrawer['label']) {};
    /**
   * The direction from which the drawer will open. @default 'right'
   */
  set placement(_: Components.SixDrawer['placement']) {};
    /**
   * By default, the drawer slides out of its containing block (usually the viewport). To make the drawer slide out of
its parent element, set this prop and add `position: relative` to the parent. @default false
   */
  set contained(_: Components.SixDrawer['contained']) {};
    /**
   * Removes the header. This will also remove the default close button, so please ensure you provide an easy,
accessible way for users to dismiss the drawer. @default false
   */
  set noHeader(_: Components.SixDrawer['noHeader']) {};
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
  inputs: ['asyncFilter', 'autofocusFilter', 'closeOnSelect', 'containingElement', 'disableHideOnEnterAndSpace', 'distance', 'filter', 'filterDebounce', 'filterPlaceholder', 'hoist', 'matchTriggerWidth', 'noScroll', 'open', 'options', 'placement', 'skidding', 'virtualScroll'],
  methods: ['show', 'hide']
})
@Component({
  selector: 'six-dropdown',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['asyncFilter', 'autofocusFilter', 'closeOnSelect', 'containingElement', 'disableHideOnEnterAndSpace', 'distance', 'filter', 'filterDebounce', 'filterPlaceholder', 'hoist', 'matchTriggerWidth', 'noScroll', 'open', 'options', 'placement', 'skidding', 'virtualScroll'],
  standalone: false
})
export class SixDropdown {
  protected el: HTMLSixDropdownElement;
    /**
   * Indicates whether the dropdown is open. You can use this in lieu of the show/hide methods. @default false
   */
  set open(_: Components.SixDropdown['open']) {};
    /**
   * The preferred placement of the dropdown panel. Note that the actual placement may vary as needed to keep the panel
inside the viewport. @default 'bottom-start'
   */
  set placement(_: Components.SixDropdown['placement']) {};
    /**
   * Determines whether the dropdown should hide when a menu item is selected. @default true
   */
  set closeOnSelect(_: Components.SixDropdown['closeOnSelect']) {};
    /**
   * The distance in pixels from which to offset the panel away from its trigger. @default 4
   */
  set distance(_: Components.SixDropdown['distance']) {};
    /**
   * The distance in pixels from which to offset the panel along its trigger. @default 0
   */
  set skidding(_: Components.SixDropdown['skidding']) {};
    /**
   * Enable this option to prevent the panel from being clipped when the component is placed inside a container with
`overflow: auto|scroll`. @default false
   */
  set hoist(_: Components.SixDropdown['hoist']) {};
    /**
   * The dropdown will close when the user interacts outside of this element (e.g. clicking).
   */
  set containingElement(_: Components.SixDropdown['containingElement']) {};
    /**
   * Set to true to allow auto filtering for entries in the dropdown.
With this flag the dropdown will automatically filter itsel.
If you need to coordinate the shown elements yourself,
e.g. because you need to call an endpoint use asyncFilter instead @default false
   */
  set filter(_: Components.SixDropdown['filter']) {};
    /**
   * Set to true if you want to disable the default dropdown panel scroll behavior. @default false
   */
  set noScroll(_: Components.SixDropdown['noScroll']) {};
    /**
   * Set to true to allow async filtering.
When you enter something in the search field the component will only emit an event but not filter any elements itself.
You can then simply listen to the 'six-async-filter-fired' event to manage the shown menu-items yourself @default false
   */
  set asyncFilter(_: Components.SixDropdown['asyncFilter']) {};
    /**
   * The filter's placeholder text. @default 'Filter...'
   */
  set filterPlaceholder(_: Components.SixDropdown['filterPlaceholder']) {};
    /**
   * By default the search field will be focused when opening a dropdown with filtering enabled. @default true
   */
  set autofocusFilter(_: Components.SixDropdown['autofocusFilter']) {};
    /**
   * The debounce for the filter callbacks. @default 0
   */
  set filterDebounce(_: Components.SixDropdown['filterDebounce']) {};
    /**
   * The panel can be opend/closed by pressing the spacebar or the enter key. In some cases you might want to avoid this @default false
   */
  set disableHideOnEnterAndSpace(_: Components.SixDropdown['disableHideOnEnterAndSpace']) {};
    /**
   * Set the options to be shown in the dropdown (alternative to setting the elements via html) @default []
   */
  set options(_: Components.SixDropdown['options']) {};
    /**
   * Defines whether the menu list will be rendered virtually i.e. only the elements actually shown (and a couple around)
are actually rendered in the DOM. If you use virtual scrolling pass the elements via prop instead of via slot. @default false
   */
  set virtualScroll(_: Components.SixDropdown['virtualScroll']) {};
    /**
   * Determines if the dropdown panel's width should match the width of the trigger element.

If set to `true`, the panel will resize its width to align with the trigger's width.
If `false` or omitted, the panel will maintain its default width. @default false
   */
  set matchTriggerWidth(_: Components.SixDropdown['matchTriggerWidth']) {};
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
    /**
   * Defines error Code and thus displays the proper error page.
   */
  set errorCode(_: Components.SixErrorPage['errorCode']) {};
    /**
   * Defines language and thus displays the proper error page in the selected language. @default 'en'
   */
  set language(_: Components.SixErrorPage['language']) {};
    /**
   * Defines a custom title.
   */
  set customTitle(_: Components.SixErrorPage['customTitle']) {};
    /**
   * Defines a custom description.
   */
  set customDescription(_: Components.SixErrorPage['customDescription']) {};
    /**
   * Defines a custom icon.
   */
  set customIcon(_: Components.SixErrorPage['customIcon']) {};
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
    /**
   * An id to clearly identify the file @default ''
   */
  set identifier(_: Components.SixFileListItem['identifier']) {};
    /**
   * The filename @default ''
   */
  set name(_: Components.SixFileListItem['name']) {};
    /**
   * The date when the file was uploaded @default ''
   */
  set date(_: Components.SixFileListItem['date']) {};
    /**
   * The file size. This number will be divided by 1024 to show the filesize in KB
   */
  set size(_: Components.SixFileListItem['size']) {};
    /**
   * Set to true if you don't want to allow to download this file @default false
   */
  set nodownload(_: Components.SixFileListItem['nodownload']) {};
    /**
   * Set to true if you don't want to allow to delete this file @default false
   */
  set nodelete(_: Components.SixFileListItem['nodelete']) {};
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
    /**
   * Set to true if file control should be small. @default false
   */
  set compact(_: Components.SixFileUpload['compact']) {};
    /**
   * Label of the drop area.
   */
  set label(_: Components.SixFileUpload['label']) {};
    /**
   * Set when button is disabled. @default false
   */
  set disabled(_: Components.SixFileUpload['disabled']) {};
    /**
   * Accepted MIME-Types.
   */
  set accept(_: Components.SixFileUpload['accept']) {};
    /**
   * More than one file allowed. @default false
   */
  set multiple(_: Components.SixFileUpload['multiple']) {};
    /**
   * Allowed max file size in bytes.
   */
  set maxFileSize(_: Components.SixFileUpload['maxFileSize']) {};
    /**
   * Set to true to draw the control in a loading state. @default false
   */
  set uploading(_: Components.SixFileUpload['uploading']) {};
    /**
   * The error message shown, if `invalid` is set to true. @default ''
   */
  set errorText(_: Components.SixFileUpload['errorText']) {};
    /**
   * If this property is set to true and an error message is provided by `errorText`, the error message is displayed. @default false
   */
  set invalid(_: Components.SixFileUpload['invalid']) {};
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
    /**
   * The label's size. @default 'medium'
   */
  set size(_: Components.SixGroupLabel['size']) {};
    /**
   * The wrapper label's label. Alternatively, you can use the label slot. @default ''
   */
  set label(_: Components.SixGroupLabel['label']) {};
    /**
   * The wrapper label's help text. Alternatively, you can use the help-text slot. @default ''
   */
  set helpText(_: Components.SixGroupLabel['helpText']) {};
    /**
   * Set to true to disable the label. @default false
   */
  set disabled(_: Components.SixGroupLabel['disabled']) {};
    /**
   * Set to true to show an asterisk beneath the label. @default false
   */
  set required(_: Components.SixGroupLabel['required']) {};
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
    /**
   * Indicates if content should be shifted down when search field is visible. @default false
   */
  set shiftContent(_: Components.SixHeader['shiftContent']) {};
    /**
   * Set the header search input to be in an open or closed state.

Focuses the first `six-input` found in the search slot. @default false
   */
  set openSearch(_: Components.SixHeader['openSearch']) {};
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
    /**
   * Set to true to allow auto filtering for entries in the dropdown.
With this flag the dropdown will automatically filter itsel.
If you need to coordinate the shown elements yourself,
e.g. because you need to call an endpoint use asyncFilter instead @default false
   */
  set filter(_: Components.SixHeaderDropdownItem['filter']) {};
    /**
   * The filter's placeholder text. @default 'Filter...'
   */
  set filterPlaceholder(_: Components.SixHeaderDropdownItem['filterPlaceholder']) {};
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
    /**
   * Indicates whether the item is styled as active.
When set to `true`, a border is displayed below the trigger element.

Use <code>six-header-dropdown-item</code> to automatically set the active
state for dropdowns. @default false
   */
  set active(_: Components.SixHeaderItem['active']) {};
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
    /**
   * Set to true to draw the button with a caret for use with dropdowns, popovers, etc. @default false
   */
  set caret(_: Components.SixHeaderMenuButton['caret']) {};
    /**
   * Set to true to disable the button. @default false
   */
  set disabled(_: Components.SixHeaderMenuButton['disabled']) {};
    /**
   * Set to true to draw the button in a loading state. @default false
   */
  set loading(_: Components.SixHeaderMenuButton['loading']) {};
    /**
   * Indicates if activating the button should submit the form. Ignored when `href` is set. @default false
   */
  set submit(_: Components.SixHeaderMenuButton['submit']) {};
    /**
   * Indicates if activating the button should reset the form. @default false
   */
  set reset(_: Components.SixHeaderMenuButton['reset']) {};
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SixHeaderMenuButton extends Components.SixHeaderMenuButton {}


@ProxyCmp({
  inputs: ['filled', 'library', 'size']
})
@Component({
  selector: 'six-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['filled', 'library', 'size'],
  standalone: false
})
export class SixIcon {
  protected el: HTMLSixIconElement;
    /**
   * The icon's size. @default 'inherit'
   */
  set size(_: Components.SixIcon['size']) {};
    /**
   * If set to true the default material outlined icons are not used. @default false
   */
  set filled(_: Components.SixIcon['filled']) {};
    /**
   * Icon library to use when no `library` prop is provided.
By default, all `<six-icon>` instances fall back to the globally configured
default library (via `setDefaultIconLibrary()` / `getDefaultIconLibrary()`),
which is `"material-icons"` unless changed at runtime.

This allows teams to switch the default across an entire project without
having to set the `library` prop on every `<six-icon>` instance.

Icon library for this instance. Overrides the global default.
- "material-icons"  → Material Icons
- "material-symbols"  → Material Symbols
   */
  set library(_: Components.SixIcon['library']) {};
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
    /**
   * The name of the icon to draw.
   */
  set name(_: Components.SixIconButton['name']) {};
    /**
   * The icon's size. @default 'medium'
   */
  set size(_: Components.SixIconButton['size']) {};
    /**
   * A description that gets read by screen readers and other assistive devices. For optimal accessibility, you should
always include a label that describes what the icon button does.
   */
  set label(_: Components.SixIconButton['label']) {};
    /**
   * Set to true to disable the button. @default false
   */
  set disabled(_: Components.SixIconButton['disabled']) {};
    /**
   * HTML symbol code or entity.
   */
  set html(_: Components.SixIconButton['html']) {};
    /**
   * When set, the underlying button will be rendered as an `<a>` with this `href` instead of a `<button>`.
   */
  set href(_: Components.SixIconButton['href']) {};
    /**
   * Tells the browser where to open the link. Only used when `href` is set.
   */
  set target(_: Components.SixIconButton['target']) {};
    /**
   * Tells the browser to download the linked file as this filename. Only used when `href` is set.
   */
  set download(_: Components.SixIconButton['download']) {};
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
    /**
   * The input's type. @default 'text'
   */
  set type(_: Components.SixInput['type']) {};
    /**
   * The input's size. @default 'medium'
   */
  set size(_: Components.SixInput['size']) {};
    /**
   * The input's name attribute. @default ''
   */
  set name(_: Components.SixInput['name']) {};
    /**
   * The input's value attribute. @default ''
   */
  set value(_: Components.SixInput['value']) {};
    /**
   * Set to true to draw a pill-style input with rounded edges. @default false
   */
  set pill(_: Components.SixInput['pill']) {};
    /**
   * The input's help text. Alternatively, you can use the help-text slot. @default ''
   */
  set helpText(_: Components.SixInput['helpText']) {};
    /**
   * The input's placeholder text.
   */
  set placeholder(_: Components.SixInput['placeholder']) {};
    /**
   * Set to true to disable the input. @default false
   */
  set disabled(_: Components.SixInput['disabled']) {};
    /**
   * Set to true to make the input readonly. @default false
   */
  set readonly(_: Components.SixInput['readonly']) {};
    /**
   * The minimum length of input that will be considered valid.
   */
  set minlength(_: Components.SixInput['minlength']) {};
    /**
   * The maximum length of input that will be considered valid.
   */
  set maxlength(_: Components.SixInput['maxlength']) {};
    /**
   * The input's minimum value.
   */
  set min(_: Components.SixInput['min']) {};
    /**
   * The input's maximum value.
   */
  set max(_: Components.SixInput['max']) {};
    /**
   * The input's step attribute.
   */
  set step(_: Components.SixInput['step']) {};
    /**
   * A pattern to validate input against.
   */
  set pattern(_: Components.SixInput['pattern']) {};
    /**
   * Internal: Styles the input for the dropdown filter search. @default false
   */
  set dropdownSearch(_: Components.SixInput['dropdownSearch']) {};
    /**
   * Set to true to show an asterisk beneath the label. @default false
   */
  set required(_: Components.SixInput['required']) {};
    /**
   * The input's autocaptialize attribute. @default 'off'
   */
  set autocapitalize(_: Components.SixInput['autocapitalize']) {};
    /**
   * The input's autocorrect attribute. @default 'off'
   */
  set autocorrect(_: Components.SixInput['autocorrect']) {};
    /**
   * The input's autocomplete attribute. @default 'off'
   */
  set autocomplete(_: Components.SixInput['autocomplete']) {};
    /**
   * The input's autofocus attribute. @default false
   */
  set autofocus(_: Components.SixInput['autofocus']) {};
    /**
   * Enables spell checking on the input. @default false
   */
  set spellcheck(_: Components.SixInput['spellcheck']) {};
    /**
   * The label text. @default ''
   */
  set label(_: Components.SixInput['label']) {};
    /**
   * The error message shown, if `invalid` is set to true. @default ''
   */
  set errorText(_: Components.SixInput['errorText']) {};
    /**
   * The number of error texts to be shown (if the error-text slot isn't used). Defaults to 1
   */
  set errorTextCount(_: Components.SixInput['errorTextCount']) {};
    /**
   * If this property is set to true and an error message is provided by `errorText`, the error message is displayed. @default false
   */
  set invalid(_: Components.SixInput['invalid']) {};
    /**
   * Set to true to add a clear button when the input is populated. @default false
   */
  set clearable(_: Components.SixInput['clearable']) {};
    /**
   * Set to true to add a password toggle button for password inputs. @default false
   */
  set togglePassword(_: Components.SixInput['togglePassword']) {};
    /**
   * The input's inputmode attribute.
   */
  set inputmode(_: Components.SixInput['inputmode']) {};
    /**
   * Set to render as line @default false
   */
  set line(_: Components.SixInput['line']) {};
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
    /**
   * The item picker's value attribute. @default ''
   */
  set value(_: Components.SixItemPicker['value']) {};
    /**
   * The type of items you want to rotate through. @default ItemPickerType.NUMBER
   */
  set type(_: Components.SixItemPicker['type']) {};
    /**
   * The minimum value allowed to pick.
   */
  set min(_: Components.SixItemPicker['min']) {};
    /**
   * The maximum value allowed to pick.
   */
  set max(_: Components.SixItemPicker['max']) {};
    /**
   * Define whether the picker should to a roundtrip i.e. start at max when reaching min and vice versa. @default true
   */
  set roundtrip(_: Components.SixItemPicker['roundtrip']) {};
    /**
   * Defines how many steps should be taken when navigating @default 1
   */
  set step(_: Components.SixItemPicker['step']) {};
    /**
   * Defines a custom list of items you can iterate through
   */
  set items(_: Components.SixItemPicker['items']) {};
    /**
   * Defines whether the items should be padded @default false
   */
  set padded(_: Components.SixItemPicker['padded']) {};
    /**
   * Defines the length of the padded area @default 2
   */
  set paddingLength(_: Components.SixItemPicker['paddingLength']) {};
    /**
   * Defines the character used for padding @default '0'
   */
  set paddingChar(_: Components.SixItemPicker['paddingChar']) {};
    /**
   * Defines whether the padding should be before or after the value. You can either use 'before' or 'after'. By default,
before is selected @default ItemPickerPaddingDirection.BEFORE
   */
  set paddingDirection(_: Components.SixItemPicker['paddingDirection']) {};
    /**
   * Set the amount of time, in milliseconds, to wait to trigger faster switching between items. @default DEFAULT_DEBOUNCE_FAST
   */
  set timeout(_: Components.SixItemPicker['timeout']) {};
    /**
   * Set the amount of time, in milliseconds, to wait between switching to next item when mouse button is held pressed. @default DEFAULT_DEBOUNCE_INSANELY_FAST
   */
  set interval(_: Components.SixItemPicker['interval']) {};
    /**
   * Set the amount of time, in milliseconds, to wait to trigger the `six-item-picker-change-debounced` event.
If you want your change debounce event to not trigger when keeping the nav button pressed before, make sure debounce
is a bit bigger than timeout, otherwise keeping the button pressed will trigger the event twice: once you click
(and keep pressed) and once you release @default DEFAULT_DEBOUNCE_FAST
   */
  set debounce(_: Components.SixItemPicker['debounce']) {};
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
    /**
   * The language which should be shown as selected
   */
  set selected(_: Components.SixLanguageSwitcher['selected']) {};
    /**
   * The languages which should be selectable options. @default DEFAULT_LANGUAGES
   */
  set languages(_: Components.SixLanguageSwitcher['languages']) {};
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
    /**
   * Set the number of grid columns
   */
  set columns(_: Components.SixLayoutGrid['columns']) {};
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
    /**
   * The brand of the logo. Either six or bme. Defaults to six. @default 'six'
   */
  set brand(_: Components.SixLogo['brand']) {};
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
    /**
   * Set to false to remove top and bottom padding. @default true
   */
  set padded(_: Components.SixMainContainer['padded']) {};
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
    /**
   * Set to true to remove the box-shadow @default false
   */
  set removeBoxShadow(_: Components.SixMenu['removeBoxShadow']) {};
    /**
   * Set the options to be shown in the dropdown @default null
   */
  set items(_: Components.SixMenu['items']) {};
    /**
   * Defines how many items should be shown. If the number of items is larger than this property a scrollbar will be shown
   */
  set itemsShown(_: Components.SixMenu['itemsShown']) {};
    /**
   * Defines whether the menu list will be rendered virtually i.e. only the elements actually shown (and a couple around)
are actually rendered in the DOM. If you use virtual scrolling pass the elements via prop instead of via slot. @default false
   */
  set virtualScroll(_: Components.SixMenu['virtualScroll']) {};
    /**
   * Used for virtual scrolling
Define how many items should be rendered in the DOM when using virtual scrolling @default 10
   */
  set itemSize(_: Components.SixMenu['itemSize']) {};
    /**
   * Used for virtual scrolling
Define the debounce for listening on scrolling changes in milliseconds.
The lower the number the more sensitive the component reacts to scrolling changes. @default 15
   */
  set scrollingDebounce(_: Components.SixMenu['scrollingDebounce']) {};
    /**
   * Internal: Disables handling of key presses. @default false
   */
  set disableKeyboardHandling(_: Components.SixMenu['disableKeyboardHandling']) {};
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
    /**
   * Defines if the checked state is displayed as a checkbox or a check-icon @default 'check'
   */
  set checkType(_: Components.SixMenuItem['checkType']) {};
    /**
   * Internal: Draws the item in a checked state. CheckType needs to be set to 'checkbox' or 'check' to show the
checked state @default false
   */
  set checked(_: Components.SixMenuItem['checked']) {};
    /**
   * A unique value to store in the menu item. This can be used as a way to identify menu items when selected. @default ''
   */
  set value(_: Components.SixMenuItem['value']) {};
    /**
   * Set to true to draw the menu item in a disabled state. @default false
   */
  set disabled(_: Components.SixMenuItem['disabled']) {};
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
    /**
   * Defines the size of the icon. @default 'medium'
   */
  set size(_: Components.SixPicto['size']) {};
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
    /**
   * The progress bar's percentage, 0 to 100. @default 0
   */
  set percentage(_: Components.SixProgressBar['percentage']) {};
    /**
   * When true, percentage is ignored, the label is hidden, and the progress bar is drawn in an indeterminate state. @default false
   */
  set indeterminate(_: Components.SixProgressBar['indeterminate']) {};
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
    /**
   * The size of the progress ring in pixels. @default 128
   */
  set size(_: Components.SixProgressRing['size']) {};
    /**
   * The stroke width of the progress ring in pixels. @default 4
   */
  set strokeWidth(_: Components.SixProgressRing['strokeWidth']) {};
    /**
   * The current progress percentage, 0 - 100. @default 0
   */
  set percentage(_: Components.SixProgressRing['percentage']) {};
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
    /**
   * The radio's name attribute. @default ''
   */
  set name(_: Components.SixRadio['name']) {};
    /**
   * The radio's value attribute. @default 'on'
   */
  set value(_: Components.SixRadio['value']) {};
    /**
   * Set to true to disable the radio. @default false
   */
  set disabled(_: Components.SixRadio['disabled']) {};
    /**
   * Set to true to draw the radio in a checked state. @default false
   */
  set checked(_: Components.SixRadio['checked']) {};
    /**
   * If this property is set to true and an error message is provided by `errorText`, the error message is displayed. @default false
   */
  set invalid(_: Components.SixRadio['invalid']) {};
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
    /**
   * The input's name attribute. @default ''
   */
  set name(_: Components.SixRange['name']) {};
    /**
   * The input's value attribute. @default 0
   */
  set value(_: Components.SixRange['value']) {};
    /**
   * Set to true to show an asterisk beneath the label. @default false
   */
  set required(_: Components.SixRange['required']) {};
    /**
   * The range's help text. Alternatively, you can use the help-text slot. @default ''
   */
  set helpText(_: Components.SixRange['helpText']) {};
    /**
   * Set to true to disable the input. @default false
   */
  set disabled(_: Components.SixRange['disabled']) {};
    /**
   * The label text. @default ''
   */
  set label(_: Components.SixRange['label']) {};
    /**
   * The error message shown, if `invalid` is set to true. @default ''
   */
  set errorText(_: Components.SixRange['errorText']) {};
    /**
   * The number of error texts to be shown (if the error-text slot isn't used). Defaults to 1
   */
  set errorTextCount(_: Components.SixRange['errorTextCount']) {};
    /**
   * If this property is set to true and an error message is provided by `errorText`, the error message is displayed. @default false
   */
  set invalid(_: Components.SixRange['invalid']) {};
    /**
   * The input's min attribute. @default 0
   */
  set min(_: Components.SixRange['min']) {};
    /**
   * The input's max attribute. @default 100
   */
  set max(_: Components.SixRange['max']) {};
    /**
   * The input's step attribute. @default 1
   */
  set step(_: Components.SixRange['step']) {};
    /**
   * The preferred placedment of the tooltip. @default 'top'
   */
  set tooltip(_: Components.SixRange['tooltip']) {};
    /**
   * A function used to format the tooltip's value. @default (value: number) => value.toString()
   */
  set tooltipFormatter(_: Components.SixRange['tooltipFormatter']) {};
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
  inputs: ['disabled', 'errorText', 'errorTextCount', 'helpText', 'invalid', 'label', 'max', 'name', 'readonly', 'required', 'size', 'value']
})
@Component({
  selector: 'six-rating',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'errorText', 'errorTextCount', 'helpText', 'invalid', 'label', 'max', 'name', 'readonly', 'required', 'size', 'value'],
  standalone: false
})
export class SixRating {
  protected el: HTMLSixRatingElement;
    /**
   * The rating's name attribute. @default ''
   */
  set name(_: Components.SixRating['name']) {};
    /**
   * The rating's value attribute. @default 0
   */
  set value(_: Components.SixRating['value']) {};
    /**
   * Set to true to disable the rating. @default false
   */
  set disabled(_: Components.SixRating['disabled']) {};
    /**
   * Set to true to show an asterisk beneath the label. @default false
   */
  set required(_: Components.SixRating['required']) {};
    /**
   * The label text. @default ''
   */
  set label(_: Components.SixRating['label']) {};
    /**
   * The error message shown, if `invalid` is set to true. @default ''
   */
  set errorText(_: Components.SixRating['errorText']) {};
    /**
   * The number of error texts to be shown (if the error-text slot isn't used). Defaults to 1
   */
  set errorTextCount(_: Components.SixRating['errorTextCount']) {};
    /**
   * If this property is set to true and an error message is provided by `errorText`, the error message is displayed. @default false
   */
  set invalid(_: Components.SixRating['invalid']) {};
    /**
   * Maximum number of stars. Default is 5 @default 5
   */
  set max(_: Components.SixRating['max']) {};
    /**
   * Size of the stars @default 'medium'
   */
  set size(_: Components.SixRating['size']) {};
    /**
   * If its readonly @default false
   */
  set readonly(_: Components.SixRating['readonly']) {};
    /**
   * The rating's help text. Alternatively, you can use the help-text slot. @default ''
   */
  set helpText(_: Components.SixRating['helpText']) {};
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['six-rating-blur', 'six-rating-change', 'six-rating-focus']);
  }
}


import type { EmptyPayload as ISixRatingEmptyPayload } from '@six-group/ui-library';

export declare interface SixRating extends Components.SixRating {
  /**
   * Emitted when the control loses focus.
   */
  'six-rating-blur': EventEmitter<CustomEvent<number>>;
  /**
   * Emitted when the control's checked state changes.
   */
  'six-rating-change': EventEmitter<CustomEvent<number>>;
  /**
   * Emitted when the control gains focus.
   */
  'six-rating-focus': EventEmitter<CustomEvent<ISixRatingEmptyPayload>>;
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
    /**
   * Defines whether the content section should be padded @default true
   */
  set padded(_: Components.SixRoot['padded']) {};
    /**
   * Defines the stage of the application @default null
   */
  set stage(_: Components.SixRoot['stage']) {};
    /**
   * Defines the version of the application @default ''
   */
  set version(_: Components.SixRoot['version']) {};
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
    /**
   * The input's placeholder text.
   */
  set placeholder(_: Components.SixSearchField['placeholder']) {};
    /**
   * Debounce time in milliseconds, default is 300 ms @default DEFAULT_DEBOUNCE_FAST
   */
  set debounce(_: Components.SixSearchField['debounce']) {};
    /**
   * Set to true to disable the input. @default false
   */
  set disabled(_: Components.SixSearchField['disabled']) {};
    /**
   * The input's value attribute. @default ''
   */
  set value(_: Components.SixSearchField['value']) {};
    /**
   * Set to true to add a clear button when the input is populated. @default false
   */
  set clearable(_: Components.SixSearchField['clearable']) {};
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
    /**
   * Set to true to enable multiselect. @default false
   */
  set multiple(_: Components.SixSelect['multiple']) {};
    /**
   * Enables the select all button. @default false
   */
  set selectAllButton(_: Components.SixSelect['selectAllButton']) {};
    /**
   * Custom text for the "select all" button. Defaults to "Select all" and equivalents in supported languages.
   */
  set selectAllText(_: Components.SixSelect['selectAllText']) {};
    /**
   * Set to true to disable the select control. @default false
   */
  set disabled(_: Components.SixSelect['disabled']) {};
    /**
   * The select's name. @default ''
   */
  set name(_: Components.SixSelect['name']) {};
    /**
   * The select's placeholder text. @default ''
   */
  set placeholder(_: Components.SixSelect['placeholder']) {};
    /**
   * The filter's placeholder text.
   */
  set filterPlaceholder(_: Components.SixSelect['filterPlaceholder']) {};
    /**
   * The debounce for the filter callbacks.
   */
  set filterDebounce(_: Components.SixSelect['filterDebounce']) {};
    /**
   * The select's size. @default 'medium'
   */
  set size(_: Components.SixSelect['size']) {};
    /**
   * Enable this option to prevent the panel from being clipped when the component is placed inside a container with
`overflow: auto|scroll`. @default false
   */
  set hoist(_: Components.SixSelect['hoist']) {};
    /**
   * The value of the control. This will be a string or an array depending on `multiple`. @default ''
   */
  set value(_: Components.SixSelect['value']) {};
    /**
   * Set to true to draw a pill-style select with rounded edges. @default false
   */
  set pill(_: Components.SixSelect['pill']) {};
    /**
   * The select's help text. Alternatively, you can use the help-text slot. @default ''
   */
  set helpText(_: Components.SixSelect['helpText']) {};
    /**
   * Set to true to show an asterisk beneath the label. @default false
   */
  set required(_: Components.SixSelect['required']) {};
    /**
   * Set to true to add a clear button when the select is populated. @default false
   */
  set clearable(_: Components.SixSelect['clearable']) {};
    /**
   * The label text. @default ''
   */
  set label(_: Components.SixSelect['label']) {};
    /**
   * The error message shown, if `invalid` is set to true. @default ''
   */
  set errorText(_: Components.SixSelect['errorText']) {};
    /**
   * The number of error texts to be shown (if the error-text slot isn't used). Defaults to 1
   */
  set errorTextCount(_: Components.SixSelect['errorTextCount']) {};
    /**
   * If this property is set to true and an error message is provided by `errorText`, the error message is displayed. @default false
   */
  set invalid(_: Components.SixSelect['invalid']) {};
    /**
   * Set to render as line @default false
   */
  set line(_: Components.SixSelect['line']) {};
    /**
   * Set to true to allow filtering for entries in the dropdown @default false
   */
  set filter(_: Components.SixSelect['filter']) {};
    /**
   * Set to true to allow async filtering.
When you enter something in the search field the component will only emit an event but not filter any elements itself.
You can then simply listen to the 'six-async-filter-fired' event to manage the shown menu-items yourself @default false
   */
  set asyncFilter(_: Components.SixSelect['asyncFilter']) {};
    /**
   * Set to true to turn the six-select into an autocomplete. @default false
   */
  set autocomplete(_: Components.SixSelect['autocomplete']) {};
    /**
   * The debounce for when the input changes for autocompletes should be emitted @default DEFAULT_DEBOUNCE_FAST
   */
  set inputDebounce(_: Components.SixSelect['inputDebounce']) {};
    /**
   * Set the options to be shown in the dropdown (alternative to setting the elements via html) @default null
   */
  set options(_: Components.SixSelect['options']) {};
    /**
   * Defines whether the menu list will be rendered virtually i.e. only the elements actually shown (and a couple around)
are actually rendered in the DOM. If you use virtual scrolling pass the elements via prop instead of via slot. @default false
   */
  set virtualScroll(_: Components.SixSelect['virtualScroll']) {};
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
    /**
   * Sidebar position @default 'left'
   */
  set position(_: Components.SixSidebar['position']) {};
    /**
   * Indicates whether the sidebar is open. You can use this in lieu of the show/hide methods. @default false
   */
  set open(_: Components.SixSidebar['open']) {};
    /**
   * Sidebar width @default '16rem'
   */
  set width(_: Components.SixSidebar['width']) {};
    /**
   * Define whether sidebar is toggled meaning only one menu can be open at the same time @default false
   */
  set toggled(_: Components.SixSidebar['toggled']) {};
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
    /**
   * A unique value to store in the sidebar item. This can be used as a way to identify sidebar items when selected. @default ''
   */
  set value(_: Components.SixSidebarItem['value']) {};
    /**
   * Set to true to draw the item in a selected state. @default false
   */
  set selected(_: Components.SixSidebarItem['selected']) {};
    /**
   * Set to true to draw the sidebar item in a disabled state. @default false
   */
  set disabled(_: Components.SixSidebarItem['disabled']) {};
    /**
   * Icon of the item @default ''
   */
  set icon(_: Components.SixSidebarItem['icon']) {};
    /**
   * Provide if the item should be rendered as anchor tag.
Note, that the href is added automatically when using routerLink in Angular.
   */
  set href(_: Components.SixSidebarItem['href']) {};
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
    /**
   * Title of item group @default ''
   */
  set name(_: Components.SixSidebarItemGroup['name']) {};
    /**
   * Icon of the group @default ''
   */
  set icon(_: Components.SixSidebarItemGroup['icon']) {};
    /**
   * A unique value to store in the sidebar item of the group label. This can be used as a way to identify sidebar items when selected. @default ''
   */
  set value(_: Components.SixSidebarItemGroup['value']) {};
    /**
   * Indicates whether the sidebar is shown @default false
   */
  set open(_: Components.SixSidebarItemGroup['open']) {};
    /**
   * Custom summary icon name.
   */
  set summaryIcon(_: Components.SixSidebarItemGroup['summaryIcon']) {};
    /**
   * Provide if the item should be rendered as anchor tag.
Note, that the href is added automatically when using routerLink in Angular.
   */
  set href(_: Components.SixSidebarItemGroup['href']) {};
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
    /**
   * Indicates if the spinner is shown as animated SIX or BME logo or a simple spinner.
   */
  set logo(_: Components.SixSpinner['logo']) {};
    /**
   * **@deprecated** Use `logo="six"` instead.

If set to true, the spinner displays the SIX logo.
   */
  set six(_: Components.SixSpinner['six']) {};
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
    /**
   * The indicators value attribute @default null
   */
  set stage(_: Components.SixStageIndicator['stage']) {};
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
    /**
   * The switch's name attribute. @default ''
   */
  set name(_: Components.SixSwitch['name']) {};
    /**
   * The switch's value attribute. @default 'on'
   */
  set value(_: Components.SixSwitch['value']) {};
    /**
   * Set to true to disable the switch. @default false
   */
  set disabled(_: Components.SixSwitch['disabled']) {};
    /**
   * Set to true to show an asterisk beneath the label. @default false
   */
  set required(_: Components.SixSwitch['required']) {};
    /**
   * Set to true to draw the switch in a checked state. @default false
   */
  set checked(_: Components.SixSwitch['checked']) {};
    /**
   * The label text. @default ''
   */
  set label(_: Components.SixSwitch['label']) {};
    /**
   * The error message shown, if `invalid` is set to true. @default ''
   */
  set errorText(_: Components.SixSwitch['errorText']) {};
    /**
   * The number of error texts to be shown (if the error-text slot isn't used). Defaults to 1
   */
  set errorTextCount(_: Components.SixSwitch['errorTextCount']) {};
    /**
   * If this property is set to true and an error message is provided by `errorText`, the error message is displayed. @default false
   */
  set invalid(_: Components.SixSwitch['invalid']) {};
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
  inputs: ['active', 'closable', 'disabled', 'hoverContent', 'panel'],
  methods: ['setFocus', 'removeFocus']
})
@Component({
  selector: 'six-tab',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['active', 'closable', 'disabled', 'hoverContent', 'panel'],
  standalone: false
})
export class SixTab {
  protected el: HTMLSixTabElement;
    /**
   * The name of the tab panel the tab will control. The panel must be located in the same tab group. @default ''
   */
  set panel(_: Components.SixTab['panel']) {};
    /**
   * Set to true to draw the tab in an active state. @default false
   */
  set active(_: Components.SixTab['active']) {};
    /**
   * When true, the tab will be rendered with a close icon. @default false
   */
  set closable(_: Components.SixTab['closable']) {};
    /**
   * The content to display when the user hovers over the tab's title. Useful if the tab's title has html content in it
   */
  set hoverContent(_: Components.SixTab['hoverContent']) {};
    /**
   * Set to true to draw the tab in a disabled state. @default false
   */
  set disabled(_: Components.SixTab['disabled']) {};
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
    /**
   * The placement of the tabs. @default 'top'
   */
  set placement(_: Components.SixTabGroup['placement']) {};
    /**
   * Disables the scroll arrows that appear when tabs overflow. @default false
   */
  set noScrollControls(_: Components.SixTabGroup['noScrollControls']) {};
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
    /**
   * The tab panel's name. @default ''
   */
  set name(_: Components.SixTabPanel['name']) {};
    /**
   * When true, the tab panel will be shown. @default false
   */
  set active(_: Components.SixTabPanel['active']) {};
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
    /**
   * The tag's type. @default 'primary'
   */
  set type(_: Components.SixTag['type']) {};
    /**
   * The tag's size. @default 'medium'
   */
  set size(_: Components.SixTag['size']) {};
    /**
   * Set to true to draw a pill-style tag with rounded edges. @default false
   */
  set pill(_: Components.SixTag['pill']) {};
    /**
   * Set to true to make the tag clearable. @default false
   */
  set clearable(_: Components.SixTag['clearable']) {};
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
    /**
   * The textarea's size. @default 'medium'
   */
  set size(_: Components.SixTextarea['size']) {};
    /**
   * The textarea's name attribute. @default ''
   */
  set name(_: Components.SixTextarea['name']) {};
    /**
   * The textarea's value attribute. @default ''
   */
  set value(_: Components.SixTextarea['value']) {};
    /**
   * The textarea's help text. Alternatively, you can use the help-text slot. @default ''
   */
  set helpText(_: Components.SixTextarea['helpText']) {};
    /**
   * The textarea's placeholder text.
   */
  set placeholder(_: Components.SixTextarea['placeholder']) {};
    /**
   * The number of rows to display by default. @default 4
   */
  set rows(_: Components.SixTextarea['rows']) {};
    /**
   * Controls how the textarea can be resized. @default 'vertical'
   */
  set resize(_: Components.SixTextarea['resize']) {};
    /**
   * Set to true to disable the textarea. @default false
   */
  set disabled(_: Components.SixTextarea['disabled']) {};
    /**
   * Set to true for a readonly textarea. @default false
   */
  set readonly(_: Components.SixTextarea['readonly']) {};
    /**
   * The minimum length of input that will be considered valid.
   */
  set minlength(_: Components.SixTextarea['minlength']) {};
    /**
   * The maximum length of input that will be considered valid.
   */
  set maxlength(_: Components.SixTextarea['maxlength']) {};
    /**
   * Set to true to show an asterisk beneath the label. @default false
   */
  set required(_: Components.SixTextarea['required']) {};
    /**
   * The label text. @default ''
   */
  set label(_: Components.SixTextarea['label']) {};
    /**
   * The error message shown, if `invalid` is set to true. @default ''
   */
  set errorText(_: Components.SixTextarea['errorText']) {};
    /**
   * The number of error texts to be shown (if the error-text slot isn't used). Defaults to 1
   */
  set errorTextCount(_: Components.SixTextarea['errorTextCount']) {};
    /**
   * If this property is set to true and an error message is provided by `errorText`, the error message is displayed. @default false
   */
  set invalid(_: Components.SixTextarea['invalid']) {};
    /**
   * The textarea's autocaptialize attribute. @default 'off'
   */
  set autocapitalize(_: Components.SixTextarea['autocapitalize']) {};
    /**
   * The textarea's autocorrect attribute. @default 'off'
   */
  set autocorrect(_: Components.SixTextarea['autocorrect']) {};
    /**
   * The textarea's autocomplete attribute. @default 'off'
   */
  set autocomplete(_: Components.SixTextarea['autocomplete']) {};
    /**
   * The textarea's autofocus attribute. @default false
   */
  set autofocus(_: Components.SixTextarea['autofocus']) {};
    /**
   * The textarea's spellcheck attribute. @default false
   */
  set spellcheck(_: Components.SixTextarea['spellcheck']) {};
    /**
   * The textarea's inputmode attribute.
   */
  set inputmode(_: Components.SixTextarea['inputmode']) {};
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
    /**
   * The tile's label. @default ''
   */
  set label(_: Components.SixTile['label']) {};
    /**
   * The icon's name.
   */
  set iconName(_: Components.SixTile['iconName']) {};
    /**
   * Flag, whether the tile is closeable. @default true
   */
  set closeable(_: Components.SixTile['closeable']) {};
    /**
   * Flag, whether the tile should cast a shadow. @default false
   */
  set elevated(_: Components.SixTile['elevated']) {};
    /**
   * Enables tile tooltip for tiles @default true
   */
  set disableTooltip(_: Components.SixTile['disableTooltip']) {};
    /**
   * Set to true to disable the tile. @default false
   */
  set disabled(_: Components.SixTile['disabled']) {};
    /**
   * The tile's size. @default 'medium'
   */
  set size(_: Components.SixTile['size']) {};
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
    /**
   * Define the time format. Valid formats are:

HH:mm:ss
hh:mm:ss:aa
HH:mm:ss:ms
hh:mm:ss:ms:aa
HH:mm
hh:mm:aa
HH
hh:aa
mm
ss
ms

where HH is the 24 hour format
and hh is the 12 hour format

Please notice that when using the 12-hour-clock (hh)
you always need a period indicator (aa). So the time can be parsed as either am or pm @default 'HH:mm:ss'
   */
  set format(_: Components.SixTimepicker['format']) {};
    /**
   * Define the separator to be shown between the time unit pickers.
Please be aware that this property will modify the displayed separator only.
The separator for a timestring is always expected to be a colon (eg. '13:52:20') @default ':'
   */
  set separator(_: Components.SixTimepicker['separator']) {};
    /**
   * The value of the timepicker provided as a string. The string mast match the provided format (or default format) @default ''
   */
  set value(_: Components.SixTimepicker['value']) {};
    /**
   * Indicates whether the timepicker dropdown is open on startup. You can use this in lieu of the show/hide methods. @default false
   */
  set open(_: Components.SixTimepicker['open']) {};
    /**
   * Indicates whether the timepicker should be shown as an inline (always open) component @default false
   */
  set inline(_: Components.SixTimepicker['inline']) {};
    /**
   * If `true` the user can only select a time via the timepicker but not directly edit the input field. @default false
   */
  set readonly(_: Components.SixTimepicker['readonly']) {};
    /**
   * If `true` the component is disabled. @default false
   */
  set disabled(_: Components.SixTimepicker['disabled']) {};
    /**
   * The enforced placement of the dropdown panel.
   */
  set placement(_: Components.SixTimepicker['placement']) {};
    /**
   * Timepicker size. @default 'medium'
   */
  set size(_: Components.SixTimepicker['size']) {};
    /**
   * Set to true to show an asterisk beneath the label. @default false
   */
  set required(_: Components.SixTimepicker['required']) {};
    /**
   * The placeholder defines what text to be shown on the input element
   */
  set placeholder(_: Components.SixTimepicker['placeholder']) {};
    /**
   * The input's error text. Alternatively, you can use the error-text slot. @default ''
   */
  set errorText(_: Components.SixTimepicker['errorText']) {};
    /**
   * The number of error texts to be shown (if the error-text slot isn't used). Defaults to 1
   */
  set errorTextCount(_: Components.SixTimepicker['errorTextCount']) {};
    /**
   * The input's label. Alternatively, you can use the label slot. @default ''
   */
  set label(_: Components.SixTimepicker['label']) {};
    /**
   * If this property is set to true and an error message is provided by `errorText`, the error message is displayed. @default false
   */
  set invalid(_: Components.SixTimepicker['invalid']) {};
    /**
   * The input's name attribute. @default ''
   */
  set name(_: Components.SixTimepicker['name']) {};
    /**
   * Set to true to add a clear button when the input is populated. @default false
   */
  set clearable(_: Components.SixTimepicker['clearable']) {};
    /**
   * Set the position of the icon @default 'left'
   */
  set iconPosition(_: Components.SixTimepicker['iconPosition']) {};
    /**
   * Enable this option to prevent the panel from being clipped when the component is placed inside a container with
`overflow: auto|scroll`. @default false
   */
  set hoist(_: Components.SixTimepicker['hoist']) {};
    /**
   * Set the amount of time, in milliseconds, to wait to trigger faster switching between timeunits (e.g. hours). @default DEFAULT_DEBOUNCE_FAST
   */
  set timeout(_: Components.SixTimepicker['timeout']) {};
    /**
   * Set the amount of time, in milliseconds, to wait between switching to next timeunit (e.g. next hour) when mouse button is held pressed. @default DEFAULT_DEBOUNCE_INSANELY_FAST
   */
  set interval(_: Components.SixTimepicker['interval']) {};
    /**
   * The defaultTime defines the default setting for the timepicker when you open the popup. Default time must match the provided format.
   */
  set defaultTime(_: Components.SixTimepicker['defaultTime']) {};
    /**
   * Set the amount of time, in milliseconds, to wait to trigger the `six-timepicker-change-debounced` event.
If you want your change debounce event to not trigger when keeping the nav button pressed before, make sure debounce
is a bit bigger than timeout, otherwise keeping the button pressed will trigger the event twice: once you click
(and keep pressed) and once you release @default DEFAULT_DEBOUNCE_FAST
   */
  set debounce(_: Components.SixTimepicker['debounce']) {};
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
    /**
   * The tooltip's content. Alternatively, you can use the content slot. @default ''
   */
  set content(_: Components.SixTooltip['content']) {};
    /**
   * The preferred placement of the tooltip. Note that the actual placement may vary as needed to keep the tooltip
inside the viewport. @default 'top'
   */
  set placement(_: Components.SixTooltip['placement']) {};
    /**
   * Set to true to disable the tooltip, so it won't show when triggered. @default false
   */
  set disabled(_: Components.SixTooltip['disabled']) {};
    /**
   * The distance in pixels from which to offset the tooltip away from its target. @default 10
   */
  set distance(_: Components.SixTooltip['distance']) {};
    /**
   * Indicates whether the tooltip is open. You can use this in lieu of the show/hide methods. @default false
   */
  set open(_: Components.SixTooltip['open']) {};
    /**
   * The distance in pixels from which to offset the tooltip along its target. @default 0
   */
  set skidding(_: Components.SixTooltip['skidding']) {};
    /**
   * Controls how the tooltip is activated. Possible options include `click`, `hover`, `focus`, and `manual`. Multiple
options can be passed by separating them with a space. When manual is used, the tooltip must be activated
programmatically. @default 'hover focus'
   */
  set trigger(_: Components.SixTooltip['trigger']) {};
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


