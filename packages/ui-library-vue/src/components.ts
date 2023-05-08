/* eslint-disable */
/* tslint:disable */
/* auto-generated vue proxies */
import { defineContainer } from './vue-component-lib/utils';

import type { JSX } from '@six-group/ui-library';

import { defineCustomElements } from '@six-group/ui-library/loader';

defineCustomElements();

export const SetAttributes = /*@__PURE__*/ defineContainer<JSX.SetAttributes>('set-attributes', undefined, [
  'value'
]);


export const SixAlert = /*@__PURE__*/ defineContainer<JSX.SixAlert>('six-alert', undefined, [
  'open',
  'closable',
  'type',
  'duration',
  'six-alert-show',
  'six-alert-after-show',
  'six-alert-hide',
  'six-alert-after-hide'
]);


export const SixAvatar = /*@__PURE__*/ defineContainer<JSX.SixAvatar>('six-avatar', undefined, [
  'image',
  'alt',
  'initials',
  'shape'
]);


export const SixBadge = /*@__PURE__*/ defineContainer<JSX.SixBadge>('six-badge', undefined, [
  'type',
  'pill',
  'pulse'
]);


export const SixButton = /*@__PURE__*/ defineContainer<JSX.SixButton>('six-button', undefined, [
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
]);


export const SixCard = /*@__PURE__*/ defineContainer<JSX.SixCard>('six-card', undefined);


export const SixCheckbox = /*@__PURE__*/ defineContainer<JSX.SixCheckbox, JSX.SixCheckbox["checked"]>('six-checkbox', undefined, [
  'name',
  'value',
  'disabled',
  'required',
  'label',
  'errorText',
  'checked',
  'indeterminate',
  'invalid',
  'errorOnBlur',
  'six-checkbox-blur',
  'six-checkbox-change',
  'six-checkbox-focus'
],
'checked', 'six-checkbox-change');


export const SixDatepicker = /*@__PURE__*/ defineContainer<JSX.SixDatepicker, JSX.SixDatepicker["value"]>('six-datepicker', undefined, [
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
  'containingElement',
  'dateFormat',
  'debounce',
  'errorOnBlur',
  'errorText',
  'label',
  'name',
  'clearable',
  'iconPosition',
  'hoist',
  'six-datepicker-select',
  'six-datepicker-clear',
  'six-datepicker-blur'
],
'value', 'six-datepicker-select');


export const SixDetails = /*@__PURE__*/ defineContainer<JSX.SixDetails>('six-details', undefined, [
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
]);


export const SixDialog = /*@__PURE__*/ defineContainer<JSX.SixDialog>('six-dialog', undefined, [
  'open',
  'label',
  'noHeader',
  'six-dialog-show',
  'six-dialog-after-show',
  'six-dialog-hide',
  'six-dialog-after-hide',
  'six-dialog-initial-focus',
  'six-dialog-overlay-dismiss'
]);


export const SixDrawer = /*@__PURE__*/ defineContainer<JSX.SixDrawer>('six-drawer', undefined, [
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
  'six-drawer-overlay-dismiss'
]);


export const SixDropdown = /*@__PURE__*/ defineContainer<JSX.SixDropdown>('six-dropdown', undefined, [
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
  'six-dropdown-show',
  'six-dropdown-after-show',
  'six-dropdown-hide',
  'six-dropdown-after-hide',
  'six-dropdown-auto-filter-fired',
  'six-async-filter-fired',
  'six-dropdown-scroll'
]);


export const SixErrorPage = /*@__PURE__*/ defineContainer<JSX.SixErrorPage>('six-error-page', undefined, [
  'errorCode',
  'language',
  'customTitle',
  'customDescription',
  'customIcon'
]);


export const SixFileList = /*@__PURE__*/ defineContainer<JSX.SixFileList>('six-file-list', undefined);


export const SixFileListItem = /*@__PURE__*/ defineContainer<JSX.SixFileListItem>('six-file-list-item', undefined, [
  'identifier',
  'name',
  'date',
  'size',
  'nodownload',
  'nodelete',
  'six-file-list-item-download',
  'six-file-list-item-remove'
]);


export const SixFileUpload = /*@__PURE__*/ defineContainer<JSX.SixFileUpload>('six-file-upload', undefined, [
  'compact',
  'label',
  'disabled',
  'accept',
  'multiple',
  'maxFileSize',
  'six-file-upload-success',
  'six-file-upload-failure'
]);


export const SixFooter = /*@__PURE__*/ defineContainer<JSX.SixFooter>('six-footer', undefined);


export const SixForm = /*@__PURE__*/ defineContainer<JSX.SixForm>('six-form', undefined, [
  'novalidate',
  'six-form-submit',
  'six-form-change',
  'six-form-reset'
]);


export const SixGroupLabel = /*@__PURE__*/ defineContainer<JSX.SixGroupLabel>('six-group-label', undefined, [
  'size',
  'label',
  'helpText',
  'disabled',
  'required'
]);


export const SixHeader = /*@__PURE__*/ defineContainer<JSX.SixHeader>('six-header', undefined, [
  'shiftContent',
  'openHamburgerMenu',
  'openSearch',
  'clickableLogo',
  'six-header-app-name-clicked',
  'six-header-app-switcher-select',
  'six-header-profile-select',
  'six-header-hamburger-menu-clicked',
  'six-header-logo-clicked',
  'six-header-search-field-toggle'
]);


export const SixIcon = /*@__PURE__*/ defineContainer<JSX.SixIcon>('six-icon', undefined, [
  'size',
  'filled'
]);


export const SixIconButton = /*@__PURE__*/ defineContainer<JSX.SixIconButton>('six-icon-button', undefined, [
  'name',
  'size',
  'label',
  'disabled',
  'html'
]);


export const SixInput = /*@__PURE__*/ defineContainer<JSX.SixInput, JSX.SixInput["value"]>('six-input', undefined, [
  'type',
  'size',
  'name',
  'value',
  'pill',
  'label',
  'helpText',
  'errorText',
  'placeholder',
  'disabled',
  'readonly',
  'minlength',
  'maxlength',
  'min',
  'max',
  'step',
  'pattern',
  'required',
  'autocapitalize',
  'autocorrect',
  'autocomplete',
  'autofocus',
  'spellcheck',
  'invalid',
  'clearable',
  'togglePassword',
  'inputmode',
  'line',
  'errorOnBlur',
  'six-input-change',
  'six-input-clear',
  'six-input-input',
  'six-input-focus',
  'six-input-blur',
  'six-input-value-change'
],
'value', 'six-input-change');


export const SixItemPicker = /*@__PURE__*/ defineContainer<JSX.SixItemPicker>('six-item-picker', undefined, [
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
]);


export const SixLanguageSwitcher = /*@__PURE__*/ defineContainer<JSX.SixLanguageSwitcher>('six-language-switcher', undefined, [
  'selected',
  'languages',
  'six-language-switcher-change'
]);


export const SixLayoutGrid = /*@__PURE__*/ defineContainer<JSX.SixLayoutGrid>('six-layout-grid', undefined, [
  'columns'
]);


export const SixMainContainer = /*@__PURE__*/ defineContainer<JSX.SixMainContainer>('six-main-container', undefined, [
  'padded'
]);


export const SixMenu = /*@__PURE__*/ defineContainer<JSX.SixMenu>('six-menu', undefined, [
  'removeBoxShadow',
  'items',
  'itemsShown',
  'virtualScroll',
  'itemSize',
  'scrollingDebounce',
  'six-menu-item-selected'
]);


export const SixMenuDivider = /*@__PURE__*/ defineContainer<JSX.SixMenuDivider>('six-menu-divider', undefined);


export const SixMenuItem = /*@__PURE__*/ defineContainer<JSX.SixMenuItem>('six-menu-item', undefined, [
  'checked',
  'value',
  'disabled'
]);


export const SixMenuLabel = /*@__PURE__*/ defineContainer<JSX.SixMenuLabel>('six-menu-label', undefined);


export const SixPicto = /*@__PURE__*/ defineContainer<JSX.SixPicto>('six-picto', undefined, [
  'size'
]);


export const SixProgressBar = /*@__PURE__*/ defineContainer<JSX.SixProgressBar>('six-progress-bar', undefined, [
  'percentage',
  'indeterminate'
]);


export const SixProgressRing = /*@__PURE__*/ defineContainer<JSX.SixProgressRing>('six-progress-ring', undefined, [
  'size',
  'strokeWidth',
  'percentage'
]);


export const SixRadio = /*@__PURE__*/ defineContainer<JSX.SixRadio, JSX.SixRadio["value"]>('six-radio', undefined, [
  'name',
  'value',
  'disabled',
  'checked',
  'invalid',
  'six-radio-blur',
  'six-radio-change',
  'six-radio-focus'
],
'value', 'six-radio-change');


export const SixRange = /*@__PURE__*/ defineContainer<JSX.SixRange, JSX.SixRange["value"]>('six-range', undefined, [
  'name',
  'value',
  'required',
  'label',
  'helpText',
  'errorText',
  'disabled',
  'invalid',
  'min',
  'max',
  'step',
  'tooltip',
  'tooltipFormatter',
  'errorOnBlur',
  'six-range-change',
  'six-range-blur',
  'six-range-focus'
],
'value', 'six-range-change');


export const SixRoot = /*@__PURE__*/ defineContainer<JSX.SixRoot>('six-root', undefined, [
  'breakpoint',
  'padded',
  'stage',
  'version',
  'six-root-collapsed'
]);


export const SixSearchField = /*@__PURE__*/ defineContainer<JSX.SixSearchField, JSX.SixSearchField["value"]>('six-search-field', undefined, [
  'placeholder',
  'debounce',
  'disabled',
  'value',
  'clearable',
  'six-search-field-change'
],
'value', 'six-search-field-change');


export const SixSelect = /*@__PURE__*/ defineContainer<JSX.SixSelect, JSX.SixSelect["value"]>('six-select', undefined, [
  'multiple',
  'maxTagsVisible',
  'disabled',
  'name',
  'placeholder',
  'filterPlaceholder',
  'filterDebounce',
  'size',
  'hoist',
  'value',
  'pill',
  'label',
  'helpText',
  'errorText',
  'required',
  'clearable',
  'invalid',
  'line',
  'errorOnBlur',
  'filter',
  'asyncFilter',
  'autocomplete',
  'inputDebounce',
  'options',
  'virtualScroll',
  'defaultValue',
  'six-select-change',
  'six-select-focus',
  'six-select-blur'
],
'value', 'six-select-change');


export const SixSidebar = /*@__PURE__*/ defineContainer<JSX.SixSidebar>('six-sidebar', undefined, [
  'position',
  'open',
  'width',
  'toggled',
  'six-sidebar-show',
  'six-sidebar-after-show',
  'six-sidebar-hide',
  'six-sidebar-after-hide',
  'six-sidebar-initial-focus'
]);


export const SixSidebarItem = /*@__PURE__*/ defineContainer<JSX.SixSidebarItem>('six-sidebar-item', undefined, [
  'value',
  'selected',
  'disabled'
]);


export const SixSidebarItemGroup = /*@__PURE__*/ defineContainer<JSX.SixSidebarItemGroup>('six-sidebar-item-group', undefined, [
  'name',
  'icon',
  'value',
  'open',
  'summaryIcon'
]);


export const SixSpinner = /*@__PURE__*/ defineContainer<JSX.SixSpinner>('six-spinner', undefined, [
  'six'
]);


export const SixStageIndicator = /*@__PURE__*/ defineContainer<JSX.SixStageIndicator>('six-stage-indicator', undefined, [
  'stage'
]);


export const SixSwitch = /*@__PURE__*/ defineContainer<JSX.SixSwitch, JSX.SixSwitch["checked"]>('six-switch', undefined, [
  'name',
  'value',
  'disabled',
  'required',
  'checked',
  'invalid',
  'six-switch-blur',
  'six-switch-change',
  'six-switch-focus'
],
'checked', 'six-switch-change');


export const SixTab = /*@__PURE__*/ defineContainer<JSX.SixTab>('six-tab', undefined, [
  'panel',
  'active',
  'closable',
  'disabled',
  'six-tab-close'
]);


export const SixTabGroup = /*@__PURE__*/ defineContainer<JSX.SixTabGroup>('six-tab-group', undefined, [
  'placement',
  'noScrollControls',
  'six-tab-show',
  'six-tab-hide'
]);


export const SixTabPanel = /*@__PURE__*/ defineContainer<JSX.SixTabPanel>('six-tab-panel', undefined, [
  'name',
  'active'
]);


export const SixTable = /*@__PURE__*/ defineContainer<JSX.SixTable>('six-table', undefined, [
  'striped',
  'loading',
  'six-table-ready',
  'six-table-row-clicked',
  'six-table-cell-clicked'
]);


export const SixTableCell = /*@__PURE__*/ defineContainer<JSX.SixTableCell>('six-table-cell', undefined);


export const SixTableHeader = /*@__PURE__*/ defineContainer<JSX.SixTableHeader>('six-table-header', undefined);


export const SixTableHeaderCell = /*@__PURE__*/ defineContainer<JSX.SixTableHeaderCell>('six-table-header-cell', undefined, [
  'name',
  'sort',
  'filter',
  'value',
  'six-table-header-cell-sort-updated',
  'six-table-header-cell-filter-updated'
]);


export const SixTableRow = /*@__PURE__*/ defineContainer<JSX.SixTableRow>('six-table-row', undefined);


export const SixTag = /*@__PURE__*/ defineContainer<JSX.SixTag>('six-tag', undefined, [
  'type',
  'size',
  'pill',
  'clearable',
  'six-tag-clear'
]);


export const SixTextarea = /*@__PURE__*/ defineContainer<JSX.SixTextarea, JSX.SixTextarea["value"]>('six-textarea', undefined, [
  'size',
  'name',
  'value',
  'label',
  'helpText',
  'errorText',
  'placeholder',
  'rows',
  'resize',
  'disabled',
  'readonly',
  'minlength',
  'maxlength',
  'required',
  'invalid',
  'autocapitalize',
  'autocorrect',
  'autocomplete',
  'autofocus',
  'spellcheck',
  'inputmode',
  'errorOnBlur',
  'six-textarea-change',
  'six-textarea-input',
  'six-textarea-focus',
  'six-textarea-blur',
  'six-textarea-value-change'
],
'value', 'six-textarea-change');


export const SixTile = /*@__PURE__*/ defineContainer<JSX.SixTile>('six-tile', undefined, [
  'label',
  'iconName',
  'closeable',
  'elevated',
  'disableTooltip',
  'disabled',
  'size',
  'six-tile-closed',
  'six-tile-selected'
]);


export const SixTimepicker = /*@__PURE__*/ defineContainer<JSX.SixTimepicker>('six-timepicker', undefined, [
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
  'errorOnBlur',
  'errorText',
  'label',
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
]);


export const SixTooltip = /*@__PURE__*/ defineContainer<JSX.SixTooltip>('six-tooltip', undefined, [
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
]);

