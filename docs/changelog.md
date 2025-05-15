# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## Upcoming

### Added

- **⚠️Experimental**: Bringing back the support for React output target.
- **⚠️Experimental**: Added example React app with Vite.
- **⚠️Experimental**: Added example Nuxt app with Client Side Rendering (CSR).
- **⚠️Experimental**: Added the `six-date` component, intended to eventually replace the
  `six-datepicker`.

- [Documentation](guide/angular.md) for using web components with Angular's standalone bootstrapping
- `ActiveSidebarItemGroupDirective` and `ActiveSidebarItemDirective`: Added optional angular sidebar
  helper directives. See the [Angular guide](guide/angular.md) for more information.
- Added nested sidbar menu to the angular demo application to showcase the helper directives
- `six-header-dropdown`: Added `filter` and `filterPlaceholder` properties.
- `six-header-menu-button`: Added `caret`, `disabled`, `loading`, `submit` and `reset` properties.
- `six-header-menu-button`: Added `suffix` and `prefix` slots.
- `six-sidebar-item` : added icon property analog to `six-sidebar-item-group`
- `six-select` : support the use of prefix/suffix slot of the `six-menu-item` which can be used as
  links for example.

### Fixed

- `six-logo`: removed inline style tag
- `six-timepicker`: removed unnecessary bottom padding
- `six-button` : simplify use of prefix and suffix icons
- `six-sidebar-item-group`: fixed spacing for sub items

### Removed

- **⚠️Breaking**: Removed most slots, properties and events on the `six-header` component. Replaced
  with a flexible approach for customization, allowing the header to be composed in a modular way
  using child elements such as `six-header-item`, `six-header-dropdown-item`,
  `six-header-menu-button`, and `six-logo`. Check the [upgrade guide](guide/upgrade-v5.md) for
  detailed instructions.
- **⚠️Breaking**: Removed the previously deprecated `reposition()` method of the `six-dropdown`
  component. You can use the `matchTriggerWidth` property instead.
- **⚠️Breaking**: Removed the previously deprecated tag `maxTagsVisible` of the `six-select`
  component.

### Changed

- **⚠️Breaking**: Upgraded library to Node 20

  The SIX Webcomponents cannot be used with Node 16 or 18 anymore. Please upgrade to Node 20.

- **⚠️Breaking**: `six-file-upload` on upload success now returns a `FileList` regardless of the
  value of the `multiple` property
- Moved `six-picto` SVG's from SCSS file to assets folder to minimize chunk size.
- Upgraded Stencil to latest release and upgraded Vue output target
- Upgraded React output target to version 1.0.0

## 4.3.2 - 2025-02-13

No changes in functionality, but changed release creation workflow, that makes sure, that deployed
documentation reflects the latest stable release.

## 4.3.1 - 2025-01-09

⚠️ This will be the last release under major version 4. The next release will be version 5. ⚠️

### Added

- The `six-spinner` component now supports the BME logo as a spinner option.

### Deprecated

- The `six` prop on the `six-spinner` component is now deprecated. Use the `logo` prop instead,
  which allows specifying either **six** or **bme** as its value.

## 4.3.0 - 2024-12-11

### Added

- The `six-header` component now offers a flexible approach for customization, allowing the header
  to be composed in a more modular way using child elements such as `six-header-item`,
  `six-header-dropdown-item`, `six-header-menu-button`, and `six-logo`.
- Added `six-logo` component to display the SIX- or BME-logo anywhere, not just within the
  `six-header` component.

### Deprecated

- Most slots, properties and events on the `six-header` component are now deprecated and will be
  removed in one of the next releases.

### Removed

- **Breaking**: Temporarily removed React support to unblock dependency updates.

  React no longer works with the latest Stencil output target, which is preventing us from updating
  our dependencies to their latest versions. Since the team currently lacks the resources to fix
  this issue, we're removing React support temporarily to prevent it from hindering progress.

### Changed

- Updated dependencies and cleaned up test config.

### Fixed

- Fixed mermaid diagrams in component documentation.
- `six-file-upload`: handleFiles is called twice when a file is dropped.
- Improved accessibility of `six-sidebar-item` `six-sidebar-item-group` `six-button` and
  `six-icon-button`.

## 4.2.6 - 2024-10-04

### Fixed

- `six-select`: fix displaying label instead of value in autocomplete mode
- `six-select`: show dropdown after the value is cleared
- `six-select`: fix multiple checkmark bug for single select mode
- `six-input`: fix disabled input being clearable

## 4.2.5 - 2024-09-12

### Added

- `six-textarea`: added CSS variable `--height` to set the initial height of the textarea component
- `six-input`: new method `getSelectionRange` which exposes the cursor position from the wrapped
  `input` element

### Fixed

- `six-input`: fix auto size issues for type=number
- `six-menu`: last item gets partially cut off when using virtual-scroll
- `six-menu`: overflow when using virtual-scroll and autocomplete

## 4.2.4 - 2024-07-04

### Fixed

- select change event fires twice
- font-size for six-error

## 4.2.3 - 2024-06-24

### Added

- Added `action-outline` value for `type` property of button
- Added part to header to allow customization from outside the component.
- `invalid` and `error-text` properties added to `six-file-upload`
- `active-tab-indicator` part for the indicator in the six-tab component
- ability to choose between the six- and the bme-logo in the header with the attribute `logo`.

### Changed

- Upgrade project to internally build with Node18

### Fixed

- `six-select` not rendering when multiple is enabled and value is set to [null]
- `six-datepicker` can have an invalid value after blur
- `six-error` examples not showing in the docs
- Fire blur event when leaving multiselect component
- Apply the debounce property from the date-picker to the time-picker

## 4.2.2 - 2024-03-28

### Fixed

- Fixed `six-checkbox` checkbox-input being distorted with multiline content/text
- Fixed `six-sidebar-item-group` to wrap the sidebar text if it gets too long
- Updated the `six-language-switcher` component to include tabindex attributes for better
  accessibility.

## 4.2.1 - 2024-03-14

### Fixed

- bumped Stencil version to latest fix release to avoid issues with custom-elements hydration

## 4.2.0 - 2024-03-14

### Added

- Added `uploading` property to `six-file-upload`.
- Extend documentation on styling topics regarding tables, colors and the usage of TailwindCSS

### Changed

- The `six-tab-group` left/right scroll controls are visible only if there is more content to be
  scrolled to.
- The `language-switcher` has newly a neutral hover and selected color to serve both SIX and BME,
  newly languages are separated via pipe
- Removed Safari hack for preventScroll in `six-dialog` and `six-drawer` because a fix was
  introduced
- Upgraded Stencil to 4.12.0
- Upgraded Jest to 29.7.0

### Fixed

- six-file-upload does not look good when compact and disabled
- label of `six-range` being misaligned

## 4.1.2 - 2024-02-14 ♥

### Fixed

- GitHub workflow for Vue

## 4.1.1 - 2024-02-14 ♥

### Fixed

- GitHub workflow for Vue

## 4.1.0 - 2024-02-14 ♥

### Added

- Support for Vue
- Updated the `six-item-picker` component to include tabindex attributes for better accessibility.
- Added `hide-hamburger-menu` option to `six-header` to allow hiding the hamburger menu.
- Added focus-visible to `six-checkbox` component for better accessibility.
- Added part to svg, so users are able to resize the six logo spinner
- Added `matchTriggerWidth` property to `six-dropdown`.
- Utility to display toast alerts in Angular and Vue.
- Added spanish locale and translations for `six-datepicker` literals.

### Changed

- **Breaking**: Merged box-shadow CSS variables `--six-elevation-` into `--six-shadow-` and reduced
  variants to small, medium, and large.
- **Breaking**: The `tag` part is no longer supported in `six-select`.
- **Breaking**: Upgraded to Angular 16. Projects must update to Angular 16 or newer.
- **Breaking**: The `six-root` no longer automatically toggles the open state of the sidebar based
  on the view port width.

- Improved `six-select` functionality and appearance:

  - Display checked items as checkboxes in multiselect mode.
  - Group selected options on top in multiselect mode.
  - Added a button to select/deselect all items.
  - Hide expand button when clear button is visible.
  - Display multiple options as comma-separated values and prevent wrapping.
  - Match dropdown width with trigger width.
  - Decreased vertical whitespace between menu items.
  - Set debounce time for non-async filter to 0.
  - Enhanced visual styling of dropdown and its filter.
  - Set focus on the filter element immediately.
  - Keep focus on the filter element upon mouse leave.

- Angular example upgraded to Angular 16
- `six-alert` when used as a toast in combination with a duration does now stay open indefinitely
  when hovered.

### Fixed

- Angular router causes page reload
- Show the correct active app in six-header
- Icon names are not selectable anymore
- Slot of six-icon was not centered
- Fixed problem where datepicker height is not adjusted when using hoist property
- Clicking on the active app in six-header toggles the app switcher
- Fixed six-details to not change text color on hover
- Box Shadow for toast alerts
- six-select filter not working when items passed via options property
- Disabling a SIX web components input element in an Angular form correctly hides any error messages
  on the input
- six-dialog not respecting initial open state

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
