# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## Upcoming

### Added

- "newly added"

### Removed

- "removed"

### Changed

- "changed"

## 4.0.4 - 2023-11-15

### Added

- `href` property to `six-sidebar-item` and `six-sidebar-item-group`
- Support for Angular's `routerLink` directive in `six-button`, `six-sidebar-item` and
  `six-sidebar-item-group`
- Indigo color option
- Information regarding the minimal compatible Node.js version
- Error messages in Spanish

### Removed

- The React demo application. A new demo will be introduced in an upcoming release

### Changed

- Increased the spacing between the label and the asterisk in mandatory fields
- Upgraded Stencil and the corresponding output target to the latest minor and bugfix release
  versions
- Upgraded TypeScript to ~5.2.x to match the version used in Stencil 4.6.0

### Fixed

- The favicon for the documentation website
- Typos in the documentation
- The datepicker modal demo
- The icon for the close action in `six-drawer`
- Angular validators for `six-datepicker`

## 4.0.3 - 2023-09-28

### Changed

- Allow multiple providers in Angular

### Fixed

- Prevent click events for disabled buttons

## 4.0.2 - 2023-09-13

### Fixed

- Fix keyboard navigation for tab-group using left/right arrows
- Ensure tab indicator resizes correctly when tab-group text is updated
- Introduce focus ring for buttons and tab groups for better focus indication
- Fix horizontal gap in six-sidebar-item-group

## 4.0.1 - 2023-08-29

### Added

- Show tooltip if text is truncated in multiselect choices

### Changed

- Align sidebar menu items with expand/collapse header icon
- Clip horizontal scrollbar of dropdown
- Allow multiple errorTexts for form controls

## 4.0.0 - 2023-08-18

### Added

- [Npm package](https://www.npmjs.com/package/@six-group/ui-library-angular) for Angular
- Wrapper components for Angular
- Error handling for Angular forms
- Standard error messages in english, german, french and italian
- Angular example page showcasing all form elements
- GitHub workflow for publishing insider release upon each merge to the main branch
- GitHub CI workflow for pull requests
- Standard events for form components (`change`, `input`, `blur`) in addition to existing custom
  events (`six-input-change`, ...)
- Enable form submission by pressing the 'Enter' key within the six-input field

### Changed

- Validate and transform the value property for form components to a dedicated type (e.g. `string`
  for text input)
- Upgrade dependencies: stencil 4.0
- Replace lerna and nx with [npm workspaces](https://docs.npmjs.com/cli/using-npm/workspaces)
- Enforce strict type checking by enabling the strict flag for TypeScript
- Rewrite Angular example

### Fixed

- Improve prettier config
- Adjusted event emission to respond solely to user actions

### Removed

- **Breaking:** Support for integrated
  [client side form validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation)
- **Breaking:** Support for [Vue](https://vuejs.org/)
- **Breaking:** six-form component
- **Breaking:** six-table component
- Puppeteer end-to-end tests

## 3.\*-beta - 2023-03-01

### Deprecated

- six-table, six-table-cell, six-table-header, six-table-header-cell, six-table-row: six-table will
  be removed with the next major release. We recommend to use fate table instead.

### Added

- six-language-switcher: Added new component to switch language
- six-checkbox: Add six-label to six-checkbox as param or slot (**breaking:** Due to naming conflict
  six-checkbox::part(label) got renamed to six-checkbox::part(text))
- six-table: Extend table functionality
- six-table: Drag column to reorder
- six-table: Customized list of displayed columns
- six-error-pages: Created a new component for error pages
- six-picto: Added a new size for six-error-pages
- six-icon: Upgraded to material-icons@1.12.0; providing much more icons
- six-picto: Enhanced set of available pictos

### Fixed

- six-select: Fix select all for six-select
- six-datepicker: Fixed problem where min/max was not working properly when only use one of those
- six-tooltip: adjusted colors according to designers
- six-checkbox: firing sixChange event after the change and not before the change

## 2.1.0 - 2022-08-09

### Added

- six-datepicker: Extend the datepicker with a timepicker
- six-select: Multiselection Dropdown - support Ctrl-A
- six-select: now allows to pass items via attribute instead of only via slot
- six-select: now supports virtual scrolling
- six-dropdown: now allows to pass items via attribute instead of only via slot
- six-dropdown: now supports virtual scrolling
- six-menu: now allow to define the number of menu items shown (scrollable menu)
- six-menu: now supports virtual scrolling

### Fixed

- six-input: Corrected layout issues for six-input and six-select in firefox
- six-select: removed reportDuplicateItemValues which lead to very bad performance when dealing with
  many options. Having no duplicate options should be the responsibility of the user anyway...
- multiple components: fixed problem where error was thrown when destructuring listener which did
  not yet exist
- six-select: fixed problem where preselecting a value for six-select automatically turned it into a
  defaultValue
- six-datepicker: fixed problem where datepicker popup was cut-off on small screens

## 2.0.0 - 2022-06-02

### Added

- file-upload: added components for uploading file and showing the uploaded files
- six-datepicker: now expose styles, added slot for icon position and custom icon option
- six-item-picker: added new component which allows to select an item from a given set
- six-timepicker: added new component which allows to select a time
- six-datepicker: now expose styles, added slot for icon position and custom icon option
- six-switch: now emits checked state onChange and onBlur
- six-datepicker: now uses date instead of string
- Update all dependencies
- New size class for six-icon and six-detail
- six-group-label: added new component
- six-select: allow to turn six-select into autocomplete
- six-stage-indicator: added new component
- six-header: allow to set open state of six-search-field
- six-header: allow to make logo clickable and emit event
- six-layout-grid: added new component
- six-datepicker: add size attribute
- six-main-container: added new component
- six-picto: added new component to render custom six and bme icons
- six-datepicker: add clear button
- six-root: removed custom scrollbar
- add custom components manifest to bundle to improve IDE support
- six-root: allow to remove padding of content section
- six-table: custom cell renderer

### Fixed

- six-tile: fixed bug where tile would throw an error onHover
- six-tooltip: fixed bug where six-tooltip would throw an error when it was disabled
- six-input/six-table/six-select design improvements
- six-form: removed support for native html tags
- six-tile: added event handlers for slots of six-tile
- angular custom directive: bugfix handling of date fields
- **Breaking:** six-input: change behaviour when six-input-change is fired
- **Breaking:** six-textarea: change behaviour when six-textarea-change is fired
- six-datepicker: fixed problem where one could not delete date
- six-datepicker: fixed problem where datepicker was not able to handle invalid value input
- six-select: change event is fired during initialization of component
- six-datepicker: fix pointer date
- six-select: Fix size of filter
- six-icon: Remove flex box and centered attribute
- six-select: Reset to default value on clear
- six-form: Allow to reset form
- six-select: Fix init if multiple
- six-picto: simplify component and fix dev docs
- six-dropdown: Fix menu dropdown menu alignment
- six-tooltip: Tooltip on content level should not be visible on dialog level
- six-input u.a.: Correction of colors of label
- six-menu: remove ugly artefact for six-menu when scrolling required
- six-checkbox: bugfix undefined error
- six-dropdown: add size attribute
- six-textarea: Fixed color of disabled state
- six-header: visibility of search field
- custom-directive: Fixed display of error messages
- six-header: always display selected application's name
- six-details: remove margin left and right of the component
- six-details: remove margin left and right of the component
- six-root CSS fixes
- six-root: only add margin (to guarantee border styling is shown) when sidebar is open
- six-root: show border styling for sidebar

## 1.0.0 - 2021-09-23

### Added

- six-dropdown: added infinite scrolling
- six-tile: allow to pass icon and label via slot
- six-sidebar-item-group: No background color if subgroup
- six-dropdown: added infinite scrolling
- six-tile: new style
- six-menu-item: move checkmark to the right side
- six-root: added part classifiers
- six-button: remove background from link button
- six-root: added custom scrollbar
- six-dropdown: added custom scrollbar
- six-header: make logo replaceable
- six-sidebar: allow to toggle menu items and control them programmatically
- six-sidebar-item-group update to handle custom icon
- darker font color on input while disabled
- six-sidebar with new style
- six-details: changes requested in review session
- custom sidebar width, custom summary icon for the sidebar, sidebar-item-group and details
- added six-tile
- focus on search field in header if search button is clicked
- using @fontsource/noto-sans instead of typeface-noto-sans
- added missing slot in documentation
- added six-form-changed event to six-form (checks validation state) and updated angular directive
- update publish script for ui-library-vue
- improved documentation for angular stuff
- allow access of form validation state to trigger form submit button state
- add selected and disable properties to sidebar items
- add clearable attribute for search field
- header search field could be configured to shift content instead of popup
- events should be prefixed with the component name
- typed events payload
- spinner enhanced with animated SIX logo
- allow to filter dropdown and selects
- added datepicker component
- added six-range component
- Angular Demo App: added example for error message attribute
- automatically publish on version increase

### Fixed

- six-select: bugfix multi-selection for non string based values
- six-button: fixed styling for focused link button
- six-dropdown: fixed styling for vertical scrollbar
- six-select: fixed problem where hoisting was breaking six-select when inside a drawer
- six-textarea/six-icon-button: fixed undefined errors
- six-search-field: fix global enter key event listener
- get rid of popperjs dependency
- six-root: fixed problem cut off content
- show table filter when selected
- six-icon-button: fix error with ag-Grid
- Add more space between menu items
- More white space around main slot of root component
- six-sidebar-item-group: fixed misaligned groups with long texts
- display tooltips for disabled buttons and icon-buttons
- don't change control size on focus
- don't show error message in six-select if selection is open
- small bugfixes in documentation
- added cursor down support for filter field
- support v-model in Vue output target
- support of six-datepicker in six-form
- update targets to ES2017
- bugfix resizing issues for select
- don't change control size on focus
- six-icon-button: Disabled State is not propagated to the nested six-button
- added value property for six-search-field and fixed runtime bug in six-details
- six-date-picker: fixed a bunch of bugs
- six-select popup size update broken after RC22
- Table Fixes
- fixed styling for password field in edge
- value is not properly set for six input and six textarea
- error text not working in angular directive
- checkbox tries to update and undefined reference
- setting initial value for input and textarea
- check if six radio input ref is undefined
- fix CI build artifactory login
- show selected item in six-select when options are provided dynamically
- six-select value is not updated if the slot is changed
