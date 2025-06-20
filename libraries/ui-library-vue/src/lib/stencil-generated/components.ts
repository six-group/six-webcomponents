/* eslint-disable */
/* tslint:disable */
/* auto-generated vue proxies */
import { defineContainer, defineStencilSSRComponent, type StencilVueComponent } from '@stencil/vue-output-target/runtime';

import type { JSX } from '@six-group/ui-library';




export const SixAlert: StencilVueComponent<JSX.SixAlert> = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.SixAlert>('six-alert', undefined, [
  'open',
  'closable',
  'type',
  'duration',
  'six-alert-show',
  'six-alert-after-show',
  'six-alert-hide',
  'six-alert-after-hide'
], [
  'six-alert-show',
  'six-alert-after-show',
  'six-alert-hide',
  'six-alert-after-hide'
]) : defineStencilSSRComponent<JSX.SixAlert>({
  tagName: 'six-alert',
  hydrateModule: import('@six-group/ui-library/hydrate'),
  props: {
    'open': [Boolean, "open"],
    'closable': [Boolean, "closable"],
    'type': [String, "type"],
    'duration': [Number, "duration"],
    'onSix-alert-show': [Function],
    'onSix-alert-after-show': [Function],
    'onSix-alert-hide': [Function],
    'onSix-alert-after-hide': [Function]
  }
});


export const SixAvatar: StencilVueComponent<JSX.SixAvatar> = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.SixAvatar>('six-avatar', undefined, [
  'image',
  'alt',
  'initials',
  'shape'
]) : defineStencilSSRComponent<JSX.SixAvatar>({
  tagName: 'six-avatar',
  hydrateModule: import('@six-group/ui-library/hydrate'),
  props: {
    'image': [String, "image"],
    'alt': [String, "alt"],
    'initials': [String, "initials"],
    'shape': [String, "shape"]
  }
});


export const SixBadge: StencilVueComponent<JSX.SixBadge> = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.SixBadge>('six-badge', undefined, [
  'type',
  'pill',
  'pulse'
]) : defineStencilSSRComponent<JSX.SixBadge>({
  tagName: 'six-badge',
  hydrateModule: import('@six-group/ui-library/hydrate'),
  props: {
    'type': [String, "type"],
    'pill': [Boolean, "pill"],
    'pulse': [Boolean, "pulse"]
  }
});


export const SixButton: StencilVueComponent<JSX.SixButton> = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.SixButton>('six-button', undefined, [
  'type',
  'size',
  'caret',
  'disabled',
  'loading',
  'pill',
  'circle',
  'submit',
  'reset',
  'name',
  'value',
  'href',
  'target',
  'download',
  'six-button-blur',
  'six-button-focus'
], [
  'six-button-blur',
  'six-button-focus'
]) : defineStencilSSRComponent<JSX.SixButton>({
  tagName: 'six-button',
  hydrateModule: import('@six-group/ui-library/hydrate'),
  props: {
    'type': [String, "type"],
    'size': [String, "size"],
    'caret': [Boolean, "caret"],
    'disabled': [Boolean, "disabled"],
    'loading': [Boolean, "loading"],
    'pill': [Boolean, "pill"],
    'circle': [Boolean, "circle"],
    'submit': [Boolean, "submit"],
    'reset': [Boolean, "reset"],
    'name': [String, "name"],
    'value': [String, "value"],
    'href': [String, "href"],
    'target': [String, "target"],
    'download': [String, "download"],
    'onSix-button-blur': [Function],
    'onSix-button-focus': [Function]
  }
});


export const SixCard: StencilVueComponent<JSX.SixCard> = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.SixCard>('six-card', undefined) : defineStencilSSRComponent<JSX.SixCard>({
  tagName: 'six-card',
  hydrateModule: import('@six-group/ui-library/hydrate'),
  props: {
    
  }
});


export const SixCheckbox: StencilVueComponent<JSX.SixCheckbox, JSX.SixCheckbox["checked"]> = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.SixCheckbox, JSX.SixCheckbox["checked"]>('six-checkbox', undefined, [
  'name',
  'value',
  'disabled',
  'required',
  'label',
  'errorText',
  'errorTextCount',
  'invalid',
  'checked',
  'indeterminate',
  'six-checkbox-blur',
  'six-checkbox-change',
  'six-checkbox-focus'
], [
  'six-checkbox-blur',
  'six-checkbox-change',
  'six-checkbox-focus'
],
'checked', 'change') : defineStencilSSRComponent<JSX.SixCheckbox, JSX.SixCheckbox["checked"]>({
  tagName: 'six-checkbox',
  hydrateModule: import('@six-group/ui-library/hydrate'),
  props: {
    'name': [String, "name"],
    'value': [String, "value"],
    'disabled': [Boolean, "disabled"],
    'required': [Boolean, "required"],
    'label': [String, "label"],
    'errorText': [String, "error-text"],
    'errorTextCount': [Number, "error-text-count"],
    'invalid': [Boolean, "invalid"],
    'checked': [Boolean, "checked"],
    'indeterminate': [Boolean, "indeterminate"],
    'onSix-checkbox-blur': [Function],
    'onSix-checkbox-change': [Function],
    'onSix-checkbox-focus': [Function]
  }
});


export const SixDate: StencilVueComponent<JSX.SixDate, JSX.SixDate["value"]> = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.SixDate, JSX.SixDate["value"]>('six-date', undefined, [
  'language',
  'readonly',
  'disabled',
  'allowedDates',
  'min',
  'max',
  'size',
  'required',
  'placeholder',
  'value',
  'dateFormat',
  'label',
  'helpText',
  'errorText',
  'errorTextCount',
  'invalid',
  'name',
  'clearable',
  'six-change',
  'six-blur'
], [
  'six-change',
  'six-blur'
],
'value', 'change') : defineStencilSSRComponent<JSX.SixDate, JSX.SixDate["value"]>({
  tagName: 'six-date',
  hydrateModule: import('@six-group/ui-library/hydrate'),
  props: {
    'language': [String, "language"],
    'readonly': [Boolean, "readonly"],
    'disabled': [Boolean, "disabled"],
    'min': [String, "min"],
    'max': [String, "max"],
    'size': [String, "size"],
    'required': [Boolean, "required"],
    'placeholder': [String, "placeholder"],
    'value': [String, "value"],
    'dateFormat': [String, "date-format"],
    'label': [String, "label"],
    'helpText': [String, "help-text"],
    'errorText': [String, "error-text"],
    'errorTextCount': [Number, "error-text-count"],
    'invalid': [Boolean, "invalid"],
    'name': [String, "name"],
    'clearable': [Boolean, "clearable"],
    'onSix-change': [Function],
    'onSix-blur': [Function]
  }
});


export const SixDatepicker: StencilVueComponent<JSX.SixDatepicker, JSX.SixDatepicker["value"]> = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.SixDatepicker, JSX.SixDatepicker["value"]>('six-datepicker', undefined, [
  'type',
  'locale',
  'open',
  'inline',
  'readonly',
  'disabled',
  'allowedDates',
  'min',
  'max',
  'closeOnSelect',
  'placement',
  'size',
  'required',
  'defaultDate',
  'placeholder',
  'value',
  'label',
  'errorText',
  'errorTextCount',
  'invalid',
  'containingElement',
  'dateFormat',
  'debounce',
  'name',
  'clearable',
  'iconPosition',
  'hoist',
  'six-datepicker-select',
  'six-datepicker-clear',
  'six-datepicker-blur'
], [
  'six-datepicker-select',
  'six-datepicker-clear',
  'six-datepicker-blur'
],
'value', 'change') : defineStencilSSRComponent<JSX.SixDatepicker, JSX.SixDatepicker["value"]>({
  tagName: 'six-datepicker',
  hydrateModule: import('@six-group/ui-library/hydrate'),
  props: {
    'type': [String, "type"],
    'locale': [String, "locale"],
    'open': [Boolean, "open"],
    'inline': [Boolean, "inline"],
    'readonly': [Boolean, "readonly"],
    'disabled': [Boolean, "disabled"],
    'closeOnSelect': [Boolean, "close-on-select"],
    'placement': [String, "placement"],
    'size': [String, "size"],
    'required': [Boolean, "required"],
    'defaultDate': [String, "default-date"],
    'placeholder': [String, "placeholder"],
    'label': [String, "label"],
    'errorText': [String, "error-text"],
    'errorTextCount': [Number, "error-text-count"],
    'invalid': [Boolean, "invalid"],
    'dateFormat': [String, "date-format"],
    'debounce': [Number, "debounce"],
    'name': [String, "name"],
    'clearable': [Boolean, "clearable"],
    'iconPosition': [String, "icon-position"],
    'hoist': [Boolean, "hoist"],
    'onSix-datepicker-select': [Function],
    'onSix-datepicker-clear': [Function],
    'onSix-datepicker-blur': [Function]
  }
});


export const SixDetails: StencilVueComponent<JSX.SixDetails> = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.SixDetails>('six-details', undefined, [
  'open',
  'summary',
  'summaryIcon',
  'summaryIconSize',
  'disabled',
  'inline',
  'selectableEmpty',
  'hasContent',
  'six-details-show',
  'six-details-after-show',
  'six-details-hide',
  'six-details-after-hide'
], [
  'six-details-show',
  'six-details-after-show',
  'six-details-hide',
  'six-details-after-hide'
]) : defineStencilSSRComponent<JSX.SixDetails>({
  tagName: 'six-details',
  hydrateModule: import('@six-group/ui-library/hydrate'),
  props: {
    'open': [Boolean, "open"],
    'summary': [String, "summary"],
    'summaryIcon': [String, "summary-icon"],
    'summaryIconSize': [String, "summary-icon-size"],
    'disabled': [Boolean, "disabled"],
    'inline': [Boolean, "inline"],
    'selectableEmpty': [Boolean, "selectable-empty"],
    'hasContent': [Boolean, "has-content"],
    'onSix-details-show': [Function],
    'onSix-details-after-show': [Function],
    'onSix-details-hide': [Function],
    'onSix-details-after-hide': [Function]
  }
});


export const SixDialog: StencilVueComponent<JSX.SixDialog> = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.SixDialog>('six-dialog', undefined, [
  'open',
  'label',
  'noHeader',
  'six-dialog-show',
  'six-dialog-after-show',
  'six-dialog-hide',
  'six-dialog-after-hide',
  'six-dialog-initial-focus',
  'six-dialog-request-close'
], [
  'six-dialog-show',
  'six-dialog-after-show',
  'six-dialog-hide',
  'six-dialog-after-hide',
  'six-dialog-initial-focus',
  'six-dialog-request-close'
]) : defineStencilSSRComponent<JSX.SixDialog>({
  tagName: 'six-dialog',
  hydrateModule: import('@six-group/ui-library/hydrate'),
  props: {
    'open': [Boolean, "open"],
    'label': [String, "label"],
    'noHeader': [Boolean, "no-header"],
    'onSix-dialog-show': [Function],
    'onSix-dialog-after-show': [Function],
    'onSix-dialog-hide': [Function],
    'onSix-dialog-after-hide': [Function],
    'onSix-dialog-initial-focus': [Function],
    'onSix-dialog-request-close': [Function]
  }
});


export const SixDrawer: StencilVueComponent<JSX.SixDrawer> = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.SixDrawer>('six-drawer', undefined, [
  'open',
  'label',
  'placement',
  'contained',
  'noHeader',
  'six-drawer-show',
  'six-drawer-after-show',
  'six-drawer-hide',
  'six-drawer-after-hide',
  'six-drawer-initial-focus',
  'six-drawer-request-close'
], [
  'six-drawer-show',
  'six-drawer-after-show',
  'six-drawer-hide',
  'six-drawer-after-hide',
  'six-drawer-initial-focus',
  'six-drawer-request-close'
]) : defineStencilSSRComponent<JSX.SixDrawer>({
  tagName: 'six-drawer',
  hydrateModule: import('@six-group/ui-library/hydrate'),
  props: {
    'open': [Boolean, "open"],
    'label': [String, "label"],
    'placement': [String, "placement"],
    'contained': [Boolean, "contained"],
    'noHeader': [Boolean, "no-header"],
    'onSix-drawer-show': [Function],
    'onSix-drawer-after-show': [Function],
    'onSix-drawer-hide': [Function],
    'onSix-drawer-after-hide': [Function],
    'onSix-drawer-initial-focus': [Function],
    'onSix-drawer-request-close': [Function]
  }
});


export const SixDropdown: StencilVueComponent<JSX.SixDropdown> = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.SixDropdown>('six-dropdown', undefined, [
  'open',
  'placement',
  'closeOnSelect',
  'distance',
  'skidding',
  'hoist',
  'containingElement',
  'filter',
  'asyncFilter',
  'filterPlaceholder',
  'autofocusFilter',
  'filterDebounce',
  'disableHideOnEnterAndSpace',
  'options',
  'virtualScroll',
  'matchTriggerWidth',
  'six-dropdown-show',
  'six-dropdown-after-show',
  'six-dropdown-hide',
  'six-dropdown-after-hide',
  'six-dropdown-auto-filter-fired',
  'six-async-filter-fired',
  'six-dropdown-scroll'
], [
  'six-dropdown-show',
  'six-dropdown-after-show',
  'six-dropdown-hide',
  'six-dropdown-after-hide',
  'six-dropdown-auto-filter-fired',
  'six-async-filter-fired',
  'six-dropdown-scroll'
]) : defineStencilSSRComponent<JSX.SixDropdown>({
  tagName: 'six-dropdown',
  hydrateModule: import('@six-group/ui-library/hydrate'),
  props: {
    'open': [Boolean, "open"],
    'placement': [String, "placement"],
    'closeOnSelect': [Boolean, "close-on-select"],
    'distance': [Number, "distance"],
    'skidding': [Number, "skidding"],
    'hoist': [Boolean, "hoist"],
    'filter': [Boolean, "filter"],
    'asyncFilter': [Boolean, "async-filter"],
    'filterPlaceholder': [String, "filter-placeholder"],
    'autofocusFilter': [Boolean, "autofocus-filter"],
    'filterDebounce': [Number, "filter-debounce"],
    'disableHideOnEnterAndSpace': [Boolean, "disable-hide-on-enter-and-space"],
    'virtualScroll': [Boolean, "virtual-scroll"],
    'matchTriggerWidth': [Boolean, "match-trigger-width"],
    'onSix-dropdown-show': [Function],
    'onSix-dropdown-after-show': [Function],
    'onSix-dropdown-hide': [Function],
    'onSix-dropdown-after-hide': [Function],
    'onSix-dropdown-auto-filter-fired': [Function],
    'onSix-async-filter-fired': [Function],
    'onSix-dropdown-scroll': [Function]
  }
});


export const SixError: StencilVueComponent<JSX.SixError> = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.SixError>('six-error', undefined) : defineStencilSSRComponent<JSX.SixError>({
  tagName: 'six-error',
  hydrateModule: import('@six-group/ui-library/hydrate'),
  props: {
    
  }
});


export const SixErrorPage: StencilVueComponent<JSX.SixErrorPage> = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.SixErrorPage>('six-error-page', undefined, [
  'errorCode',
  'language',
  'customTitle',
  'customDescription',
  'customIcon'
]) : defineStencilSSRComponent<JSX.SixErrorPage>({
  tagName: 'six-error-page',
  hydrateModule: import('@six-group/ui-library/hydrate'),
  props: {
    'errorCode': [Number, "error-code"],
    'language': [String, "language"],
    'customTitle': [String, "custom-title"],
    'customIcon': [String, "custom-icon"]
  }
});


export const SixFileList: StencilVueComponent<JSX.SixFileList> = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.SixFileList>('six-file-list', undefined) : defineStencilSSRComponent<JSX.SixFileList>({
  tagName: 'six-file-list',
  hydrateModule: import('@six-group/ui-library/hydrate'),
  props: {
    
  }
});


export const SixFileListItem: StencilVueComponent<JSX.SixFileListItem> = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.SixFileListItem>('six-file-list-item', undefined, [
  'identifier',
  'name',
  'date',
  'size',
  'nodownload',
  'nodelete',
  'six-file-list-item-download',
  'six-file-list-item-remove'
], [
  'six-file-list-item-download',
  'six-file-list-item-remove'
]) : defineStencilSSRComponent<JSX.SixFileListItem>({
  tagName: 'six-file-list-item',
  hydrateModule: import('@six-group/ui-library/hydrate'),
  props: {
    'identifier': [String, "identifier"],
    'name': [String, "name"],
    'date': [String, "date"],
    'size': [Number, "size"],
    'nodownload': [Boolean, "nodownload"],
    'nodelete': [Boolean, "nodelete"],
    'onSix-file-list-item-download': [Function],
    'onSix-file-list-item-remove': [Function]
  }
});


export const SixFileUpload: StencilVueComponent<JSX.SixFileUpload> = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.SixFileUpload>('six-file-upload', undefined, [
  'compact',
  'label',
  'disabled',
  'accept',
  'multiple',
  'maxFileSize',
  'uploading',
  'errorText',
  'invalid',
  'six-file-upload-success',
  'six-file-upload-failure'
], [
  'six-file-upload-success',
  'six-file-upload-failure'
]) : defineStencilSSRComponent<JSX.SixFileUpload>({
  tagName: 'six-file-upload',
  hydrateModule: import('@six-group/ui-library/hydrate'),
  props: {
    'compact': [Boolean, "compact"],
    'label': [String, "label"],
    'disabled': [Boolean, "disabled"],
    'accept': [String, "accept"],
    'multiple': [Boolean, "multiple"],
    'maxFileSize': [Number, "max-file-size"],
    'uploading': [Boolean, "uploading"],
    'errorText': [String, "error-text"],
    'invalid': [Boolean, "invalid"],
    'onSix-file-upload-success': [Function],
    'onSix-file-upload-failure': [Function]
  }
});


export const SixFooter: StencilVueComponent<JSX.SixFooter> = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.SixFooter>('six-footer', undefined) : defineStencilSSRComponent<JSX.SixFooter>({
  tagName: 'six-footer',
  hydrateModule: import('@six-group/ui-library/hydrate'),
  props: {
    
  }
});


export const SixGroupLabel: StencilVueComponent<JSX.SixGroupLabel> = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.SixGroupLabel>('six-group-label', undefined, [
  'size',
  'label',
  'helpText',
  'disabled',
  'required'
]) : defineStencilSSRComponent<JSX.SixGroupLabel>({
  tagName: 'six-group-label',
  hydrateModule: import('@six-group/ui-library/hydrate'),
  props: {
    'size': [String, "size"],
    'label': [String, "label"],
    'helpText': [String, "help-text"],
    'disabled': [Boolean, "disabled"],
    'required': [Boolean, "required"]
  }
});


export const SixHeader: StencilVueComponent<JSX.SixHeader> = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.SixHeader>('six-header', undefined, [
  'shiftContent',
  'openSearch'
]) : defineStencilSSRComponent<JSX.SixHeader>({
  tagName: 'six-header',
  hydrateModule: import('@six-group/ui-library/hydrate'),
  props: {
    'shiftContent': [Boolean, "shift-content"],
    'openSearch': [Boolean, "open-search"]
  }
});


export const SixHeaderDropdownItem: StencilVueComponent<JSX.SixHeaderDropdownItem> = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.SixHeaderDropdownItem>('six-header-dropdown-item', undefined, [
  'filter',
  'filterPlaceholder'
]) : defineStencilSSRComponent<JSX.SixHeaderDropdownItem>({
  tagName: 'six-header-dropdown-item',
  hydrateModule: import('@six-group/ui-library/hydrate'),
  props: {
    'filter': [Boolean, "filter"],
    'filterPlaceholder': [String, "filter-placeholder"]
  }
});


export const SixHeaderItem: StencilVueComponent<JSX.SixHeaderItem> = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.SixHeaderItem>('six-header-item', undefined, [
  'active'
]) : defineStencilSSRComponent<JSX.SixHeaderItem>({
  tagName: 'six-header-item',
  hydrateModule: import('@six-group/ui-library/hydrate'),
  props: {
    'active': [Boolean, "active"]
  }
});


export const SixHeaderMenuButton: StencilVueComponent<JSX.SixHeaderMenuButton> = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.SixHeaderMenuButton>('six-header-menu-button', undefined, [
  'caret',
  'disabled',
  'loading',
  'submit',
  'reset'
]) : defineStencilSSRComponent<JSX.SixHeaderMenuButton>({
  tagName: 'six-header-menu-button',
  hydrateModule: import('@six-group/ui-library/hydrate'),
  props: {
    'caret': [Boolean, "caret"],
    'disabled': [Boolean, "disabled"],
    'loading': [Boolean, "loading"],
    'submit': [Boolean, "submit"],
    'reset': [Boolean, "reset"]
  }
});


export const SixIcon: StencilVueComponent<JSX.SixIcon> = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.SixIcon>('six-icon', undefined, [
  'size',
  'filled'
]) : defineStencilSSRComponent<JSX.SixIcon>({
  tagName: 'six-icon',
  hydrateModule: import('@six-group/ui-library/hydrate'),
  props: {
    'size': [String, "size"],
    'filled': [Boolean, "filled"]
  }
});


export const SixIconButton: StencilVueComponent<JSX.SixIconButton> = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.SixIconButton>('six-icon-button', undefined, [
  'name',
  'size',
  'label',
  'disabled',
  'html',
  'href',
  'target',
  'download'
]) : defineStencilSSRComponent<JSX.SixIconButton>({
  tagName: 'six-icon-button',
  hydrateModule: import('@six-group/ui-library/hydrate'),
  props: {
    'name': [String, "name"],
    'size': [String, "size"],
    'label': [String, "label"],
    'disabled': [Boolean, "disabled"],
    'html': [String, "html"],
    'href': [String, "href"],
    'target': [String, "target"],
    'download': [String, "download"]
  }
});


export const SixInput: StencilVueComponent<JSX.SixInput, JSX.SixInput["value"]> = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.SixInput, JSX.SixInput["value"]>('six-input', undefined, [
  'type',
  'size',
  'name',
  'value',
  'pill',
  'helpText',
  'placeholder',
  'disabled',
  'readonly',
  'minlength',
  'maxlength',
  'min',
  'max',
  'step',
  'pattern',
  'dropdownSearch',
  'required',
  'autocapitalize',
  'autocorrect',
  'autocomplete',
  'autofocus',
  'spellcheck',
  'label',
  'errorText',
  'errorTextCount',
  'invalid',
  'clearable',
  'togglePassword',
  'inputmode',
  'line',
  'six-input-change',
  'six-input-clear',
  'six-input-input',
  'six-input-focus',
  'six-input-blur'
], [
  'six-input-change',
  'six-input-clear',
  'six-input-input',
  'six-input-focus',
  'six-input-blur'
],
'value', 'input') : defineStencilSSRComponent<JSX.SixInput, JSX.SixInput["value"]>({
  tagName: 'six-input',
  hydrateModule: import('@six-group/ui-library/hydrate'),
  props: {
    'type': [String, "type"],
    'size': [String, "size"],
    'name': [String, "name"],
    'value': [String, "value"],
    'pill': [Boolean, "pill"],
    'helpText': [String, "help-text"],
    'placeholder': [String, "placeholder"],
    'disabled': [Boolean, "disabled"],
    'readonly': [Boolean, "readonly"],
    'minlength': [Number, "minlength"],
    'maxlength': [Number, "maxlength"],
    'min': [Number, "min"],
    'max': [Number, "max"],
    'step': [Number, "step"],
    'pattern': [String, "pattern"],
    'dropdownSearch': [Boolean, "dropdown-search"],
    'required': [Boolean, "required"],
    'autocapitalize': [String, "autocapitalize"],
    'autocorrect': [String, "autocorrect"],
    'autocomplete': [String, "autocomplete"],
    'autofocus': [Boolean, "autofocus"],
    'spellcheck': [Boolean, "spellcheck"],
    'label': [String, "label"],
    'errorText': [String, "error-text"],
    'errorTextCount': [Number, "error-text-count"],
    'invalid': [Boolean, "invalid"],
    'clearable': [Boolean, "clearable"],
    'togglePassword': [Boolean, "toggle-password"],
    'inputmode': [String, "inputmode"],
    'line': [Boolean, "line"],
    'onSix-input-change': [Function],
    'onSix-input-clear': [Function],
    'onSix-input-input': [Function],
    'onSix-input-focus': [Function],
    'onSix-input-blur': [Function]
  }
});


export const SixItemPicker: StencilVueComponent<JSX.SixItemPicker> = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.SixItemPicker>('six-item-picker', undefined, [
  'value',
  'type',
  'min',
  'max',
  'roundtrip',
  'step',
  'items',
  'padded',
  'paddingLength',
  'paddingChar',
  'paddingDirection',
  'timeout',
  'interval',
  'debounce',
  'six-item-picker-change',
  'six-item-picker-change-debounced'
], [
  'six-item-picker-change',
  'six-item-picker-change-debounced'
]) : defineStencilSSRComponent<JSX.SixItemPicker>({
  tagName: 'six-item-picker',
  hydrateModule: import('@six-group/ui-library/hydrate'),
  props: {
    'type': [String, "type"],
    'roundtrip': [Boolean, "roundtrip"],
    'step': [Number, "step"],
    'padded': [Boolean, "padded"],
    'paddingLength': [Number, "padding-length"],
    'paddingChar': [String, "padding-char"],
    'paddingDirection': [String, "padding-direction"],
    'timeout': [Number, "timeout"],
    'interval': [Number, "interval"],
    'debounce': [Number, "debounce"],
    'onSix-item-picker-change': [Function],
    'onSix-item-picker-change-debounced': [Function]
  }
});


export const SixLanguageSwitcher: StencilVueComponent<JSX.SixLanguageSwitcher> = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.SixLanguageSwitcher>('six-language-switcher', undefined, [
  'selected',
  'languages',
  'six-language-switcher-change'
], [
  'six-language-switcher-change'
]) : defineStencilSSRComponent<JSX.SixLanguageSwitcher>({
  tagName: 'six-language-switcher',
  hydrateModule: import('@six-group/ui-library/hydrate'),
  props: {
    'selected': [String, "selected"],
    'onSix-language-switcher-change': [Function]
  }
});


export const SixLayoutGrid: StencilVueComponent<JSX.SixLayoutGrid> = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.SixLayoutGrid>('six-layout-grid', undefined, [
  'columns'
]) : defineStencilSSRComponent<JSX.SixLayoutGrid>({
  tagName: 'six-layout-grid',
  hydrateModule: import('@six-group/ui-library/hydrate'),
  props: {
    'columns': [Number, "columns"]
  }
});


export const SixLogo: StencilVueComponent<JSX.SixLogo> = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.SixLogo>('six-logo', undefined, [
  'brand'
]) : defineStencilSSRComponent<JSX.SixLogo>({
  tagName: 'six-logo',
  hydrateModule: import('@six-group/ui-library/hydrate'),
  props: {
    'brand': [String, "brand"]
  }
});


export const SixMainContainer: StencilVueComponent<JSX.SixMainContainer> = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.SixMainContainer>('six-main-container', undefined, [
  'padded'
]) : defineStencilSSRComponent<JSX.SixMainContainer>({
  tagName: 'six-main-container',
  hydrateModule: import('@six-group/ui-library/hydrate'),
  props: {
    'padded': [Boolean, "padded"]
  }
});


export const SixMenu: StencilVueComponent<JSX.SixMenu> = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.SixMenu>('six-menu', undefined, [
  'removeBoxShadow',
  'items',
  'itemsShown',
  'virtualScroll',
  'itemSize',
  'scrollingDebounce',
  'disableKeyboardHandling',
  'six-menu-item-selected'
], [
  'six-menu-item-selected'
]) : defineStencilSSRComponent<JSX.SixMenu>({
  tagName: 'six-menu',
  hydrateModule: import('@six-group/ui-library/hydrate'),
  props: {
    'removeBoxShadow': [Boolean, "remove-box-shadow"],
    'itemsShown': [Number, "items-shown"],
    'virtualScroll': [Boolean, "virtual-scroll"],
    'itemSize': [Number, "item-size"],
    'scrollingDebounce': [Number, "scrolling-debounce"],
    'disableKeyboardHandling': [Boolean, "disable-keyboard-handling"],
    'onSix-menu-item-selected': [Function]
  }
});


export const SixMenuDivider: StencilVueComponent<JSX.SixMenuDivider> = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.SixMenuDivider>('six-menu-divider', undefined) : defineStencilSSRComponent<JSX.SixMenuDivider>({
  tagName: 'six-menu-divider',
  hydrateModule: import('@six-group/ui-library/hydrate'),
  props: {
    
  }
});


export const SixMenuItem: StencilVueComponent<JSX.SixMenuItem> = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.SixMenuItem>('six-menu-item', undefined, [
  'checkType',
  'checked',
  'value',
  'disabled'
]) : defineStencilSSRComponent<JSX.SixMenuItem>({
  tagName: 'six-menu-item',
  hydrateModule: import('@six-group/ui-library/hydrate'),
  props: {
    'checkType': [String, "check-type"],
    'checked': [Boolean, "checked"],
    'value': [String, "value"],
    'disabled': [Boolean, "disabled"]
  }
});


export const SixMenuLabel: StencilVueComponent<JSX.SixMenuLabel> = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.SixMenuLabel>('six-menu-label', undefined) : defineStencilSSRComponent<JSX.SixMenuLabel>({
  tagName: 'six-menu-label',
  hydrateModule: import('@six-group/ui-library/hydrate'),
  props: {
    
  }
});


export const SixPicto: StencilVueComponent<JSX.SixPicto> = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.SixPicto>('six-picto', undefined, [
  'size'
]) : defineStencilSSRComponent<JSX.SixPicto>({
  tagName: 'six-picto',
  hydrateModule: import('@six-group/ui-library/hydrate'),
  props: {
    'size': [String, "size"]
  }
});


export const SixProgressBar: StencilVueComponent<JSX.SixProgressBar> = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.SixProgressBar>('six-progress-bar', undefined, [
  'percentage',
  'indeterminate'
]) : defineStencilSSRComponent<JSX.SixProgressBar>({
  tagName: 'six-progress-bar',
  hydrateModule: import('@six-group/ui-library/hydrate'),
  props: {
    'percentage': [Number, "percentage"],
    'indeterminate': [Boolean, "indeterminate"]
  }
});


export const SixProgressRing: StencilVueComponent<JSX.SixProgressRing> = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.SixProgressRing>('six-progress-ring', undefined, [
  'size',
  'strokeWidth',
  'percentage'
]) : defineStencilSSRComponent<JSX.SixProgressRing>({
  tagName: 'six-progress-ring',
  hydrateModule: import('@six-group/ui-library/hydrate'),
  props: {
    'size': [Number, "size"],
    'strokeWidth': [Number, "stroke-width"],
    'percentage': [Number, "percentage"]
  }
});


export const SixRadio: StencilVueComponent<JSX.SixRadio> = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.SixRadio>('six-radio', undefined, [
  'name',
  'value',
  'disabled',
  'checked',
  'invalid',
  'six-radio-blur',
  'six-radio-change',
  'six-radio-focus'
], [
  'six-radio-blur',
  'six-radio-change',
  'six-radio-focus'
]) : defineStencilSSRComponent<JSX.SixRadio>({
  tagName: 'six-radio',
  hydrateModule: import('@six-group/ui-library/hydrate'),
  props: {
    'name': [String, "name"],
    'value': [String, "value"],
    'disabled': [Boolean, "disabled"],
    'checked': [Boolean, "checked"],
    'invalid': [Boolean, "invalid"],
    'onSix-radio-blur': [Function],
    'onSix-radio-change': [Function],
    'onSix-radio-focus': [Function]
  }
});


export const SixRange: StencilVueComponent<JSX.SixRange, JSX.SixRange["value"]> = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.SixRange, JSX.SixRange["value"]>('six-range', undefined, [
  'name',
  'value',
  'required',
  'helpText',
  'disabled',
  'label',
  'errorText',
  'errorTextCount',
  'invalid',
  'min',
  'max',
  'step',
  'tooltip',
  'tooltipFormatter',
  'six-range-change',
  'six-range-blur',
  'six-range-focus'
], [
  'six-range-change',
  'six-range-blur',
  'six-range-focus'
],
'value', 'input') : defineStencilSSRComponent<JSX.SixRange, JSX.SixRange["value"]>({
  tagName: 'six-range',
  hydrateModule: import('@six-group/ui-library/hydrate'),
  props: {
    'name': [String, "name"],
    'value': [Number, "value"],
    'required': [Boolean, "required"],
    'helpText': [String, "help-text"],
    'disabled': [Boolean, "disabled"],
    'label': [String, "label"],
    'errorText': [String, "error-text"],
    'errorTextCount': [Number, "error-text-count"],
    'invalid': [Boolean, "invalid"],
    'min': [Number, "min"],
    'max': [Number, "max"],
    'step': [Number, "step"],
    'tooltip': [String, "tooltip"],
    'onSix-range-change': [Function],
    'onSix-range-blur': [Function],
    'onSix-range-focus': [Function]
  }
});


export const SixRoot: StencilVueComponent<JSX.SixRoot> = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.SixRoot>('six-root', undefined, [
  'padded',
  'stage',
  'version'
]) : defineStencilSSRComponent<JSX.SixRoot>({
  tagName: 'six-root',
  hydrateModule: import('@six-group/ui-library/hydrate'),
  props: {
    'padded': [Boolean, "padded"],
    'stage': [String, "stage"],
    'version': [String, "version"]
  }
});


export const SixSearchField: StencilVueComponent<JSX.SixSearchField> = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.SixSearchField>('six-search-field', undefined, [
  'placeholder',
  'debounce',
  'disabled',
  'value',
  'clearable',
  'six-search-field-change'
], [
  'six-search-field-change'
]) : defineStencilSSRComponent<JSX.SixSearchField>({
  tagName: 'six-search-field',
  hydrateModule: import('@six-group/ui-library/hydrate'),
  props: {
    'placeholder': [String, "placeholder"],
    'debounce': [Number, "debounce"],
    'disabled': [Boolean, "disabled"],
    'value': [String, "value"],
    'clearable': [Boolean, "clearable"],
    'onSix-search-field-change': [Function]
  }
});


export const SixSelect: StencilVueComponent<JSX.SixSelect, JSX.SixSelect["value"]> = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.SixSelect, JSX.SixSelect["value"]>('six-select', undefined, [
  'multiple',
  'selectAllButton',
  'selectAllText',
  'disabled',
  'name',
  'placeholder',
  'filterPlaceholder',
  'filterDebounce',
  'size',
  'hoist',
  'value',
  'pill',
  'helpText',
  'required',
  'clearable',
  'label',
  'errorText',
  'errorTextCount',
  'invalid',
  'line',
  'filter',
  'asyncFilter',
  'autocomplete',
  'inputDebounce',
  'options',
  'virtualScroll',
  'six-select-change',
  'six-select-focus',
  'six-select-blur'
], [
  'six-select-change',
  'six-select-focus',
  'six-select-blur'
],
'value', 'change') : defineStencilSSRComponent<JSX.SixSelect, JSX.SixSelect["value"]>({
  tagName: 'six-select',
  hydrateModule: import('@six-group/ui-library/hydrate'),
  props: {
    'multiple': [Boolean, "multiple"],
    'selectAllButton': [Boolean, "select-all-button"],
    'selectAllText': [String, "select-all-text"],
    'disabled': [Boolean, "disabled"],
    'name': [String, "name"],
    'placeholder': [String, "placeholder"],
    'filterPlaceholder': [String, "filter-placeholder"],
    'filterDebounce': [Number, "filter-debounce"],
    'size': [String, "size"],
    'hoist': [Boolean, "hoist"],
    'value': [String, "value"],
    'pill': [Boolean, "pill"],
    'helpText': [String, "help-text"],
    'required': [Boolean, "required"],
    'clearable': [Boolean, "clearable"],
    'label': [String, "label"],
    'errorText': [String, "error-text"],
    'errorTextCount': [Number, "error-text-count"],
    'invalid': [Boolean, "invalid"],
    'line': [Boolean, "line"],
    'filter': [Boolean, "filter"],
    'asyncFilter': [Boolean, "async-filter"],
    'autocomplete': [Boolean, "autocomplete"],
    'inputDebounce': [Number, "input-debounce"],
    'virtualScroll': [Boolean, "virtual-scroll"],
    'onSix-select-change': [Function],
    'onSix-select-focus': [Function],
    'onSix-select-blur': [Function]
  }
});


export const SixSidebar: StencilVueComponent<JSX.SixSidebar> = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.SixSidebar>('six-sidebar', undefined, [
  'position',
  'open',
  'width',
  'toggled',
  'six-sidebar-show',
  'six-sidebar-after-show',
  'six-sidebar-hide',
  'six-sidebar-after-hide',
  'six-sidebar-initial-focus'
], [
  'six-sidebar-show',
  'six-sidebar-after-show',
  'six-sidebar-hide',
  'six-sidebar-after-hide',
  'six-sidebar-initial-focus'
]) : defineStencilSSRComponent<JSX.SixSidebar>({
  tagName: 'six-sidebar',
  hydrateModule: import('@six-group/ui-library/hydrate'),
  props: {
    'position': [String, "position"],
    'open': [Boolean, "open"],
    'width': [String, "width"],
    'toggled': [Boolean, "toggled"],
    'onSix-sidebar-show': [Function],
    'onSix-sidebar-after-show': [Function],
    'onSix-sidebar-hide': [Function],
    'onSix-sidebar-after-hide': [Function],
    'onSix-sidebar-initial-focus': [Function]
  }
});


export const SixSidebarItem: StencilVueComponent<JSX.SixSidebarItem> = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.SixSidebarItem>('six-sidebar-item', undefined, [
  'value',
  'selected',
  'disabled',
  'icon',
  'href'
]) : defineStencilSSRComponent<JSX.SixSidebarItem>({
  tagName: 'six-sidebar-item',
  hydrateModule: import('@six-group/ui-library/hydrate'),
  props: {
    'value': [String, "value"],
    'selected': [Boolean, "selected"],
    'disabled': [Boolean, "disabled"],
    'icon': [String, "icon"],
    'href': [String, "href"]
  }
});


export const SixSidebarItemGroup: StencilVueComponent<JSX.SixSidebarItemGroup> = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.SixSidebarItemGroup>('six-sidebar-item-group', undefined, [
  'name',
  'icon',
  'value',
  'open',
  'summaryIcon',
  'href'
]) : defineStencilSSRComponent<JSX.SixSidebarItemGroup>({
  tagName: 'six-sidebar-item-group',
  hydrateModule: import('@six-group/ui-library/hydrate'),
  props: {
    'name': [String, "name"],
    'icon': [String, "icon"],
    'value': [String, "value"],
    'open': [Boolean, "open"],
    'summaryIcon': [String, "summary-icon"],
    'href': [String, "href"]
  }
});


export const SixSpinner: StencilVueComponent<JSX.SixSpinner> = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.SixSpinner>('six-spinner', undefined, [
  'logo',
  'six'
]) : defineStencilSSRComponent<JSX.SixSpinner>({
  tagName: 'six-spinner',
  hydrateModule: import('@six-group/ui-library/hydrate'),
  props: {
    'logo': [String, "logo"],
    'six': [Boolean, "six"]
  }
});


export const SixStageIndicator: StencilVueComponent<JSX.SixStageIndicator> = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.SixStageIndicator>('six-stage-indicator', undefined, [
  'stage'
]) : defineStencilSSRComponent<JSX.SixStageIndicator>({
  tagName: 'six-stage-indicator',
  hydrateModule: import('@six-group/ui-library/hydrate'),
  props: {
    'stage': [String, "stage"]
  }
});


export const SixSwitch: StencilVueComponent<JSX.SixSwitch, JSX.SixSwitch["checked"]> = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.SixSwitch, JSX.SixSwitch["checked"]>('six-switch', undefined, [
  'name',
  'value',
  'disabled',
  'required',
  'checked',
  'label',
  'errorText',
  'errorTextCount',
  'invalid',
  'six-switch-blur',
  'six-switch-change',
  'six-switch-focus'
], [
  'six-switch-blur',
  'six-switch-change',
  'six-switch-focus'
],
'checked', 'change') : defineStencilSSRComponent<JSX.SixSwitch, JSX.SixSwitch["checked"]>({
  tagName: 'six-switch',
  hydrateModule: import('@six-group/ui-library/hydrate'),
  props: {
    'name': [String, "name"],
    'value': [String, "value"],
    'disabled': [Boolean, "disabled"],
    'required': [Boolean, "required"],
    'checked': [Boolean, "checked"],
    'label': [String, "label"],
    'errorText': [String, "error-text"],
    'errorTextCount': [Number, "error-text-count"],
    'invalid': [Boolean, "invalid"],
    'onSix-switch-blur': [Function],
    'onSix-switch-change': [Function],
    'onSix-switch-focus': [Function]
  }
});


export const SixTab: StencilVueComponent<JSX.SixTab> = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.SixTab>('six-tab', undefined, [
  'panel',
  'active',
  'closable',
  'disabled',
  'six-tab-close'
], [
  'six-tab-close'
]) : defineStencilSSRComponent<JSX.SixTab>({
  tagName: 'six-tab',
  hydrateModule: import('@six-group/ui-library/hydrate'),
  props: {
    'panel': [String, "panel"],
    'active': [Boolean, "active"],
    'closable': [Boolean, "closable"],
    'disabled': [Boolean, "disabled"],
    'onSix-tab-close': [Function]
  }
});


export const SixTabGroup: StencilVueComponent<JSX.SixTabGroup> = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.SixTabGroup>('six-tab-group', undefined, [
  'placement',
  'noScrollControls',
  'six-tab-show',
  'six-tab-hide'
], [
  'six-tab-show',
  'six-tab-hide'
]) : defineStencilSSRComponent<JSX.SixTabGroup>({
  tagName: 'six-tab-group',
  hydrateModule: import('@six-group/ui-library/hydrate'),
  props: {
    'placement': [String, "placement"],
    'noScrollControls': [Boolean, "no-scroll-controls"],
    'onSix-tab-show': [Function],
    'onSix-tab-hide': [Function]
  }
});


export const SixTabPanel: StencilVueComponent<JSX.SixTabPanel> = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.SixTabPanel>('six-tab-panel', undefined, [
  'name',
  'active'
]) : defineStencilSSRComponent<JSX.SixTabPanel>({
  tagName: 'six-tab-panel',
  hydrateModule: import('@six-group/ui-library/hydrate'),
  props: {
    'name': [String, "name"],
    'active': [Boolean, "active"]
  }
});


export const SixTag: StencilVueComponent<JSX.SixTag> = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.SixTag>('six-tag', undefined, [
  'type',
  'size',
  'pill',
  'clearable',
  'six-tag-clear'
], [
  'six-tag-clear'
]) : defineStencilSSRComponent<JSX.SixTag>({
  tagName: 'six-tag',
  hydrateModule: import('@six-group/ui-library/hydrate'),
  props: {
    'type': [String, "type"],
    'size': [String, "size"],
    'pill': [Boolean, "pill"],
    'clearable': [Boolean, "clearable"],
    'onSix-tag-clear': [Function]
  }
});


export const SixTextarea: StencilVueComponent<JSX.SixTextarea, JSX.SixTextarea["value"]> = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.SixTextarea, JSX.SixTextarea["value"]>('six-textarea', undefined, [
  'size',
  'name',
  'value',
  'helpText',
  'placeholder',
  'rows',
  'resize',
  'disabled',
  'readonly',
  'minlength',
  'maxlength',
  'required',
  'label',
  'errorText',
  'errorTextCount',
  'invalid',
  'autocapitalize',
  'autocorrect',
  'autocomplete',
  'autofocus',
  'spellcheck',
  'inputmode',
  'six-textarea-change',
  'six-textarea-input',
  'six-textarea-focus',
  'six-textarea-blur'
], [
  'six-textarea-change',
  'six-textarea-input',
  'six-textarea-focus',
  'six-textarea-blur'
],
'value', 'input') : defineStencilSSRComponent<JSX.SixTextarea, JSX.SixTextarea["value"]>({
  tagName: 'six-textarea',
  hydrateModule: import('@six-group/ui-library/hydrate'),
  props: {
    'size': [String, "size"],
    'name': [String, "name"],
    'value': [String, "value"],
    'helpText': [String, "help-text"],
    'placeholder': [String, "placeholder"],
    'rows': [Number, "rows"],
    'resize': [String, "resize"],
    'disabled': [Boolean, "disabled"],
    'readonly': [Boolean, "readonly"],
    'minlength': [Number, "minlength"],
    'maxlength': [Number, "maxlength"],
    'required': [Boolean, "required"],
    'label': [String, "label"],
    'errorText': [String, "error-text"],
    'errorTextCount': [Number, "error-text-count"],
    'invalid': [Boolean, "invalid"],
    'autocapitalize': [String, "autocapitalize"],
    'autocorrect': [String, "autocorrect"],
    'autocomplete': [String, "autocomplete"],
    'autofocus': [Boolean, "autofocus"],
    'spellcheck': [Boolean, "spellcheck"],
    'inputmode': [String, "inputmode"],
    'onSix-textarea-change': [Function],
    'onSix-textarea-input': [Function],
    'onSix-textarea-focus': [Function],
    'onSix-textarea-blur': [Function]
  }
});


export const SixTile: StencilVueComponent<JSX.SixTile> = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.SixTile>('six-tile', undefined, [
  'label',
  'iconName',
  'closeable',
  'elevated',
  'disableTooltip',
  'disabled',
  'size',
  'six-tile-closed',
  'six-tile-selected'
], [
  'six-tile-closed',
  'six-tile-selected'
]) : defineStencilSSRComponent<JSX.SixTile>({
  tagName: 'six-tile',
  hydrateModule: import('@six-group/ui-library/hydrate'),
  props: {
    'label': [String, "label"],
    'iconName': [String, "icon-name"],
    'closeable': [Boolean, "closeable"],
    'elevated': [Boolean, "elevated"],
    'disableTooltip': [Boolean, "disable-tooltip"],
    'disabled': [Boolean, "disabled"],
    'size': [String, "size"],
    'onSix-tile-closed': [Function],
    'onSix-tile-selected': [Function]
  }
});


export const SixTimepicker: StencilVueComponent<JSX.SixTimepicker> = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.SixTimepicker>('six-timepicker', undefined, [
  'format',
  'separator',
  'value',
  'open',
  'inline',
  'readonly',
  'disabled',
  'placement',
  'size',
  'required',
  'placeholder',
  'errorText',
  'errorTextCount',
  'label',
  'invalid',
  'name',
  'clearable',
  'iconPosition',
  'hoist',
  'timeout',
  'interval',
  'defaultTime',
  'debounce',
  'six-timepicker-change',
  'six-timepicker-change-debounced',
  'six-timepicker-clear'
], [
  'six-timepicker-change',
  'six-timepicker-change-debounced',
  'six-timepicker-clear'
]) : defineStencilSSRComponent<JSX.SixTimepicker>({
  tagName: 'six-timepicker',
  hydrateModule: import('@six-group/ui-library/hydrate'),
  props: {
    'format': [String, "format"],
    'separator': [String, "separator"],
    'value': [String, "value"],
    'open': [Boolean, "open"],
    'inline': [Boolean, "inline"],
    'readonly': [Boolean, "readonly"],
    'disabled': [Boolean, "disabled"],
    'placement': [String, "placement"],
    'size': [String, "size"],
    'required': [Boolean, "required"],
    'placeholder': [String, "placeholder"],
    'errorText': [String, "error-text"],
    'errorTextCount': [Number, "error-text-count"],
    'label': [String, "label"],
    'invalid': [Boolean, "invalid"],
    'name': [String, "name"],
    'clearable': [Boolean, "clearable"],
    'iconPosition': [String, "icon-position"],
    'hoist': [Boolean, "hoist"],
    'timeout': [Number, "timeout"],
    'interval': [Number, "interval"],
    'defaultTime': [String, "default-time"],
    'debounce': [Number, "debounce"],
    'onSix-timepicker-change': [Function],
    'onSix-timepicker-change-debounced': [Function],
    'onSix-timepicker-clear': [Function]
  }
});


export const SixTooltip: StencilVueComponent<JSX.SixTooltip> = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.SixTooltip>('six-tooltip', undefined, [
  'content',
  'placement',
  'disabled',
  'distance',
  'open',
  'skidding',
  'trigger',
  'six-tooltip-show',
  'six-tooltip-after-show',
  'six-tooltip-hide',
  'six-tooltip-after-hide'
], [
  'six-tooltip-show',
  'six-tooltip-after-show',
  'six-tooltip-hide',
  'six-tooltip-after-hide'
]) : defineStencilSSRComponent<JSX.SixTooltip>({
  tagName: 'six-tooltip',
  hydrateModule: import('@six-group/ui-library/hydrate'),
  props: {
    'content': [String, "content"],
    'placement': [String, "placement"],
    'disabled': [Boolean, "disabled"],
    'distance': [Number, "distance"],
    'open': [Boolean, "open"],
    'skidding': [Number, "skidding"],
    'trigger': [String, "trigger"],
    'onSix-tooltip-show': [Function],
    'onSix-tooltip-after-show': [Function],
    'onSix-tooltip-hide': [Function],
    'onSix-tooltip-after-hide': [Function]
  }
});

