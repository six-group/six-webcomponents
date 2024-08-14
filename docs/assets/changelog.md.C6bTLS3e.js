import{_ as e,c as i,o as l,d as a}from"./chunks/framework.DFnNdRoT.js";const f=JSON.parse('{"title":"Changelog","description":"","frontmatter":{},"headers":[],"relativePath":"changelog.md","filePath":"changelog.md","lastUpdated":1723619855000}'),o={name:"changelog.md"},t=a('<h1 id="changelog" tabindex="-1">Changelog <a class="header-anchor" href="#changelog" aria-label="Permalink to &quot;Changelog&quot;">​</a></h1><p>All notable changes to this project will be documented in this file.</p><p>The format is based on <a href="https://keepachangelog.com/en/1.1.0/" target="_blank" rel="noreferrer">Keep a Changelog</a>.</p><h2 id="upcoming" tabindex="-1">Upcoming <a class="header-anchor" href="#upcoming" aria-label="Permalink to &quot;Upcoming&quot;">​</a></h2><h3 id="fixed" tabindex="-1">Fixed <a class="header-anchor" href="#fixed" aria-label="Permalink to &quot;Fixed&quot;">​</a></h3><ul><li><code>six-menu</code>: last item gets partially cut off when using virtual-scroll</li></ul><h2 id="_4-2-4-2024-07-04" tabindex="-1">4.2.4 - 2024-07-04 <a class="header-anchor" href="#_4-2-4-2024-07-04" aria-label="Permalink to &quot;4.2.4 - 2024-07-04&quot;">​</a></h2><h3 id="fixed-1" tabindex="-1">Fixed <a class="header-anchor" href="#fixed-1" aria-label="Permalink to &quot;Fixed&quot;">​</a></h3><ul><li>select change event fires twice</li><li>font-size for six-error</li></ul><h2 id="_4-2-3-2024-06-24" tabindex="-1">4.2.3 - 2024-06-24 <a class="header-anchor" href="#_4-2-3-2024-06-24" aria-label="Permalink to &quot;4.2.3 - 2024-06-24&quot;">​</a></h2><h3 id="added" tabindex="-1">Added <a class="header-anchor" href="#added" aria-label="Permalink to &quot;Added&quot;">​</a></h3><ul><li>Added <code>action-outline</code> value for <code>type</code> property of button</li><li>Added part to header to allow customization from outside the component.</li><li><code>invalid</code> and <code>error-text</code> properties added to <code>six-file-upload</code></li><li><code>active-tab-indicator</code> part for the indicator in the six-tab component</li><li>ability to choose between the six- and the bme-logo in the header with the attribute <code>logo</code>.</li></ul><h3 id="changed" tabindex="-1">Changed <a class="header-anchor" href="#changed" aria-label="Permalink to &quot;Changed&quot;">​</a></h3><ul><li>Upgrade project to internally build with Node18</li></ul><h3 id="fixed-2" tabindex="-1">Fixed <a class="header-anchor" href="#fixed-2" aria-label="Permalink to &quot;Fixed&quot;">​</a></h3><ul><li><code>six-select</code> not rendering when multiple is enabled and value is set to [null]</li><li><code>six-datepicker</code> can have an invalid value after blur</li><li><code>six-error</code> examples not showing in the docs</li><li>Fire blur event when leaving multiselect component</li><li>Apply the debounce property from the date-picker to the time-picker</li></ul><h2 id="_4-2-2-2024-03-28" tabindex="-1">4.2.2 - 2024-03-28 <a class="header-anchor" href="#_4-2-2-2024-03-28" aria-label="Permalink to &quot;4.2.2 - 2024-03-28&quot;">​</a></h2><h3 id="fixed-3" tabindex="-1">Fixed <a class="header-anchor" href="#fixed-3" aria-label="Permalink to &quot;Fixed&quot;">​</a></h3><ul><li>Fixed <code>six-checkbox</code> checkbox-input being distorted with multiline content/text</li><li>Fixed <code>six-sidebar-item-group</code> to wrap the sidebar text if it gets too long</li><li>Updated the <code>six-language-switcher</code> component to include tabindex attributes for better accessibility.</li></ul><h2 id="_4-2-1-2024-03-14" tabindex="-1">4.2.1 - 2024-03-14 <a class="header-anchor" href="#_4-2-1-2024-03-14" aria-label="Permalink to &quot;4.2.1 - 2024-03-14&quot;">​</a></h2><h3 id="fixed-4" tabindex="-1">Fixed <a class="header-anchor" href="#fixed-4" aria-label="Permalink to &quot;Fixed&quot;">​</a></h3><ul><li>bumped Stencil version to latest fix release to avoid issues with custom-elements hydration</li></ul><h2 id="_4-2-0-2024-03-14" tabindex="-1">4.2.0 - 2024-03-14 <a class="header-anchor" href="#_4-2-0-2024-03-14" aria-label="Permalink to &quot;4.2.0 - 2024-03-14&quot;">​</a></h2><h3 id="added-1" tabindex="-1">Added <a class="header-anchor" href="#added-1" aria-label="Permalink to &quot;Added&quot;">​</a></h3><ul><li>Added <code>uploading</code> property to <code>six-file-upload</code>.</li><li>Extend documentation on styling topics regarding tables, colors and the usage of TailwindCSS</li></ul><h3 id="changed-1" tabindex="-1">Changed <a class="header-anchor" href="#changed-1" aria-label="Permalink to &quot;Changed&quot;">​</a></h3><ul><li>The <code>six-tab-group</code> left/right scroll controls are visible only if there is more content to be scrolled to.</li><li>The <code>language-switcher</code> has newly a neutral hover and selected color to serve both SIX and BME, newly languages are separated via pipe</li><li>Removed Safari hack for preventScroll in <code>six-dialog</code> and <code>six-drawer</code> because a fix was introduced</li><li>Upgraded Stencil to 4.12.0</li><li>Upgraded Jest to 29.7.0</li></ul><h3 id="fixed-5" tabindex="-1">Fixed <a class="header-anchor" href="#fixed-5" aria-label="Permalink to &quot;Fixed&quot;">​</a></h3><ul><li>six-file-upload does not look good when compact and disabled</li><li>label of <code>six-range</code> being misaligned</li></ul><h2 id="_4-1-2-2024-02-14-♥" tabindex="-1">4.1.2 - 2024-02-14 ♥ <a class="header-anchor" href="#_4-1-2-2024-02-14-♥" aria-label="Permalink to &quot;4.1.2 - 2024-02-14 ♥&quot;">​</a></h2><h3 id="fixed-6" tabindex="-1">Fixed <a class="header-anchor" href="#fixed-6" aria-label="Permalink to &quot;Fixed&quot;">​</a></h3><ul><li>GitHub workflow for Vue</li></ul><h2 id="_4-1-1-2024-02-14-♥" tabindex="-1">4.1.1 - 2024-02-14 ♥ <a class="header-anchor" href="#_4-1-1-2024-02-14-♥" aria-label="Permalink to &quot;4.1.1 - 2024-02-14 ♥&quot;">​</a></h2><h3 id="fixed-7" tabindex="-1">Fixed <a class="header-anchor" href="#fixed-7" aria-label="Permalink to &quot;Fixed&quot;">​</a></h3><ul><li>GitHub workflow for Vue</li></ul><h2 id="_4-1-0-2024-02-14-♥" tabindex="-1">4.1.0 - 2024-02-14 ♥ <a class="header-anchor" href="#_4-1-0-2024-02-14-♥" aria-label="Permalink to &quot;4.1.0 - 2024-02-14 ♥&quot;">​</a></h2><h3 id="added-2" tabindex="-1">Added <a class="header-anchor" href="#added-2" aria-label="Permalink to &quot;Added&quot;">​</a></h3><ul><li>Support for Vue</li><li>Updated the <code>six-item-picker</code> component to include tabindex attributes for better accessibility.</li><li>Added <code>hide-hamburger-menu</code> option to <code>six-header</code> to allow hiding the hamburger menu.</li><li>Added focus-visible to <code>six-checkbox</code> component for better accessibility.</li><li>Added part to svg, so users are able to resize the six logo spinner</li><li>Added <code>matchTriggerWidth</code> property to <code>six-dropdown</code>.</li><li>Utility to display toast alerts in Angular and Vue.</li><li>Added spanish locale and translations for <code>six-datepicker</code> literals.</li></ul><h3 id="changed-2" tabindex="-1">Changed <a class="header-anchor" href="#changed-2" aria-label="Permalink to &quot;Changed&quot;">​</a></h3><ul><li><p><strong>Breaking</strong>: Merged box-shadow CSS variables <code>--six-elevation-</code> into <code>--six-shadow-</code> and reduced variants to small, medium, and large.</p></li><li><p><strong>Breaking</strong>: The <code>tag</code> part is no longer supported in <code>six-select</code>.</p></li><li><p><strong>Breaking</strong>: Upgraded to Angular 16. Projects must update to Angular 16 or newer.</p></li><li><p><strong>Breaking</strong>: The <code>six-root</code> no longer automatically toggles the open state of the sidebar based on the view port width.</p></li><li><p>Improved <code>six-select</code> functionality and appearance:</p><ul><li>Display checked items as checkboxes in multiselect mode.</li><li>Group selected options on top in multiselect mode.</li><li>Added a button to select/deselect all items.</li><li>Hide expand button when clear button is visible.</li><li>Display multiple options as comma-separated values and prevent wrapping.</li><li>Match dropdown width with trigger width.</li><li>Decreased vertical whitespace between menu items.</li><li>Set debounce time for non-async filter to 0.</li><li>Enhanced visual styling of dropdown and its filter.</li><li>Set focus on the filter element immediately.</li><li>Keep focus on the filter element upon mouse leave.</li></ul></li><li><p>Angular example upgraded to Angular 16</p></li><li><p><code>six-alert</code> when used as a toast in combination with a duration does now stay open indefinitely when hovered.</p></li></ul><h3 id="fixed-8" tabindex="-1">Fixed <a class="header-anchor" href="#fixed-8" aria-label="Permalink to &quot;Fixed&quot;">​</a></h3><ul><li>Angular router causes page reload</li><li>Show the correct active app in six-header</li><li>Icon names are not selectable anymore</li><li>Slot of six-icon was not centered</li><li>Fixed problem where datepicker height is not adjusted when using hoist property</li><li>Clicking on the active app in six-header toggles the app switcher</li><li>Fixed six-details to not change text color on hover</li><li>Box Shadow for toast alerts</li><li>six-select filter not working when items passed via options property</li><li>Disabling a SIX web components input element in an Angular form correctly hides any error messages on the input</li><li>six-dialog not respecting initial open state</li></ul><h2 id="_4-0-4-2023-11-15" tabindex="-1">4.0.4 - 2023-11-15 <a class="header-anchor" href="#_4-0-4-2023-11-15" aria-label="Permalink to &quot;4.0.4 - 2023-11-15&quot;">​</a></h2><h3 id="added-3" tabindex="-1">Added <a class="header-anchor" href="#added-3" aria-label="Permalink to &quot;Added&quot;">​</a></h3><ul><li><code>href</code> property to <code>six-sidebar-item</code> and <code>six-sidebar-item-group</code></li><li>Support for Angular&#39;s <code>routerLink</code> directive in <code>six-button</code>, <code>six-sidebar-item</code> and <code>six-sidebar-item-group</code></li><li>Indigo color option</li><li>Information regarding the minimal compatible Node.js version</li><li>Error messages in Spanish</li></ul><h3 id="removed" tabindex="-1">Removed <a class="header-anchor" href="#removed" aria-label="Permalink to &quot;Removed&quot;">​</a></h3><ul><li>The React demo application. A new demo will be introduced in an upcoming release</li></ul><h3 id="changed-3" tabindex="-1">Changed <a class="header-anchor" href="#changed-3" aria-label="Permalink to &quot;Changed&quot;">​</a></h3><ul><li>Increased the spacing between the label and the asterisk in mandatory fields</li><li>Upgraded Stencil and the corresponding output target to the latest minor and bugfix release versions</li><li>Upgraded TypeScript to ~5.2.x to match the version used in Stencil 4.6.0</li></ul><h3 id="fixed-9" tabindex="-1">Fixed <a class="header-anchor" href="#fixed-9" aria-label="Permalink to &quot;Fixed&quot;">​</a></h3><ul><li>The favicon for the documentation website</li><li>Typos in the documentation</li><li>The datepicker modal demo</li><li>The icon for the close action in <code>six-drawer</code></li><li>Angular validators for <code>six-datepicker</code></li></ul><h2 id="_4-0-3-2023-09-28" tabindex="-1">4.0.3 - 2023-09-28 <a class="header-anchor" href="#_4-0-3-2023-09-28" aria-label="Permalink to &quot;4.0.3 - 2023-09-28&quot;">​</a></h2><h3 id="changed-4" tabindex="-1">Changed <a class="header-anchor" href="#changed-4" aria-label="Permalink to &quot;Changed&quot;">​</a></h3><ul><li>Allow multiple providers in Angular</li></ul><h3 id="fixed-10" tabindex="-1">Fixed <a class="header-anchor" href="#fixed-10" aria-label="Permalink to &quot;Fixed&quot;">​</a></h3><ul><li>Prevent click events for disabled buttons</li></ul><h2 id="_4-0-2-2023-09-13" tabindex="-1">4.0.2 - 2023-09-13 <a class="header-anchor" href="#_4-0-2-2023-09-13" aria-label="Permalink to &quot;4.0.2 - 2023-09-13&quot;">​</a></h2><h3 id="fixed-11" tabindex="-1">Fixed <a class="header-anchor" href="#fixed-11" aria-label="Permalink to &quot;Fixed&quot;">​</a></h3><ul><li>Fix keyboard navigation for tab-group using left/right arrows</li><li>Ensure tab indicator resizes correctly when tab-group text is updated</li><li>Introduce focus ring for buttons and tab groups for better focus indication</li><li>Fix horizontal gap in six-sidebar-item-group</li></ul><h2 id="_4-0-1-2023-08-29" tabindex="-1">4.0.1 - 2023-08-29 <a class="header-anchor" href="#_4-0-1-2023-08-29" aria-label="Permalink to &quot;4.0.1 - 2023-08-29&quot;">​</a></h2><h3 id="added-4" tabindex="-1">Added <a class="header-anchor" href="#added-4" aria-label="Permalink to &quot;Added&quot;">​</a></h3><ul><li>Show tooltip if text is truncated in multiselect choices</li></ul><h3 id="changed-5" tabindex="-1">Changed <a class="header-anchor" href="#changed-5" aria-label="Permalink to &quot;Changed&quot;">​</a></h3><ul><li>Align sidebar menu items with expand/collapse header icon</li><li>Clip horizontal scrollbar of dropdown</li><li>Allow multiple errorTexts for form controls</li></ul><h2 id="_4-0-0-2023-08-18" tabindex="-1">4.0.0 - 2023-08-18 <a class="header-anchor" href="#_4-0-0-2023-08-18" aria-label="Permalink to &quot;4.0.0 - 2023-08-18&quot;">​</a></h2><h3 id="added-5" tabindex="-1">Added <a class="header-anchor" href="#added-5" aria-label="Permalink to &quot;Added&quot;">​</a></h3><ul><li><a href="https://www.npmjs.com/package/@six-group/ui-library-angular" target="_blank" rel="noreferrer">Npm package</a> for Angular</li><li>Wrapper components for Angular</li><li>Error handling for Angular forms</li><li>Standard error messages in english, german, french and italian</li><li>Angular example page showcasing all form elements</li><li>GitHub workflow for publishing insider release upon each merge to the main branch</li><li>GitHub CI workflow for pull requests</li><li>Standard events for form components (<code>change</code>, <code>input</code>, <code>blur</code>) in addition to existing custom events (<code>six-input-change</code>, ...)</li><li>Enable form submission by pressing the &#39;Enter&#39; key within the six-input field</li></ul><h3 id="changed-6" tabindex="-1">Changed <a class="header-anchor" href="#changed-6" aria-label="Permalink to &quot;Changed&quot;">​</a></h3><ul><li>Validate and transform the value property for form components to a dedicated type (e.g. <code>string</code> for text input)</li><li>Upgrade dependencies: stencil 4.0</li><li>Replace lerna and nx with <a href="https://docs.npmjs.com/cli/using-npm/workspaces" target="_blank" rel="noreferrer">npm workspaces</a></li><li>Enforce strict type checking by enabling the strict flag for TypeScript</li><li>Rewrite Angular example</li></ul><h3 id="fixed-12" tabindex="-1">Fixed <a class="header-anchor" href="#fixed-12" aria-label="Permalink to &quot;Fixed&quot;">​</a></h3><ul><li>Improve prettier config</li><li>Adjusted event emission to respond solely to user actions</li></ul><h3 id="removed-1" tabindex="-1">Removed <a class="header-anchor" href="#removed-1" aria-label="Permalink to &quot;Removed&quot;">​</a></h3><ul><li><strong>Breaking:</strong> Support for integrated <a href="https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation" target="_blank" rel="noreferrer">client side form validation</a></li><li><strong>Breaking:</strong> Support for <a href="https://vuejs.org/" target="_blank" rel="noreferrer">Vue</a></li><li><strong>Breaking:</strong> six-form component</li><li><strong>Breaking:</strong> six-table component</li><li>Puppeteer end-to-end tests</li></ul><h2 id="_3-beta-2023-03-01" tabindex="-1">3.*-beta - 2023-03-01 <a class="header-anchor" href="#_3-beta-2023-03-01" aria-label="Permalink to &quot;3.\\*-beta - 2023-03-01&quot;">​</a></h2><h3 id="deprecated" tabindex="-1">Deprecated <a class="header-anchor" href="#deprecated" aria-label="Permalink to &quot;Deprecated&quot;">​</a></h3><ul><li>six-table, six-table-cell, six-table-header, six-table-header-cell, six-table-row: six-table will be removed with the next major release. We recommend to use fate table instead.</li></ul><h3 id="added-6" tabindex="-1">Added <a class="header-anchor" href="#added-6" aria-label="Permalink to &quot;Added&quot;">​</a></h3><ul><li>six-language-switcher: Added new component to switch language</li><li>six-checkbox: Add six-label to six-checkbox as param or slot (<strong>breaking:</strong> Due to naming conflict six-checkbox::part(label) got renamed to six-checkbox::part(text))</li><li>six-table: Extend table functionality</li><li>six-table: Drag column to reorder</li><li>six-table: Customized list of displayed columns</li><li>six-error-pages: Created a new component for error pages</li><li>six-picto: Added a new size for six-error-pages</li><li>six-icon: Upgraded to material-icons@1.12.0; providing much more icons</li><li>six-picto: Enhanced set of available pictos</li></ul><h3 id="fixed-13" tabindex="-1">Fixed <a class="header-anchor" href="#fixed-13" aria-label="Permalink to &quot;Fixed&quot;">​</a></h3><ul><li>six-select: Fix select all for six-select</li><li>six-datepicker: Fixed problem where min/max was not working properly when only use one of those</li><li>six-tooltip: adjusted colors according to designers</li><li>six-checkbox: firing sixChange event after the change and not before the change</li></ul><h2 id="_2-1-0-2022-08-09" tabindex="-1">2.1.0 - 2022-08-09 <a class="header-anchor" href="#_2-1-0-2022-08-09" aria-label="Permalink to &quot;2.1.0 - 2022-08-09&quot;">​</a></h2><h3 id="added-7" tabindex="-1">Added <a class="header-anchor" href="#added-7" aria-label="Permalink to &quot;Added&quot;">​</a></h3><ul><li>six-datepicker: Extend the datepicker with a timepicker</li><li>six-select: Multiselection Dropdown - support Ctrl-A</li><li>six-select: now allows to pass items via attribute instead of only via slot</li><li>six-select: now supports virtual scrolling</li><li>six-dropdown: now allows to pass items via attribute instead of only via slot</li><li>six-dropdown: now supports virtual scrolling</li><li>six-menu: now allow to define the number of menu items shown (scrollable menu)</li><li>six-menu: now supports virtual scrolling</li></ul><h3 id="fixed-14" tabindex="-1">Fixed <a class="header-anchor" href="#fixed-14" aria-label="Permalink to &quot;Fixed&quot;">​</a></h3><ul><li>six-input: Corrected layout issues for six-input and six-select in firefox</li><li>six-select: removed reportDuplicateItemValues which lead to very bad performance when dealing with many options. Having no duplicate options should be the responsibility of the user anyway...</li><li>multiple components: fixed problem where error was thrown when destructuring listener which did not yet exist</li><li>six-select: fixed problem where preselecting a value for six-select automatically turned it into a defaultValue</li><li>six-datepicker: fixed problem where datepicker popup was cut-off on small screens</li></ul><h2 id="_2-0-0-2022-06-02" tabindex="-1">2.0.0 - 2022-06-02 <a class="header-anchor" href="#_2-0-0-2022-06-02" aria-label="Permalink to &quot;2.0.0 - 2022-06-02&quot;">​</a></h2><h3 id="added-8" tabindex="-1">Added <a class="header-anchor" href="#added-8" aria-label="Permalink to &quot;Added&quot;">​</a></h3><ul><li>file-upload: added components for uploading file and showing the uploaded files</li><li>six-datepicker: now expose styles, added slot for icon position and custom icon option</li><li>six-item-picker: added new component which allows to select an item from a given set</li><li>six-timepicker: added new component which allows to select a time</li><li>six-datepicker: now expose styles, added slot for icon position and custom icon option</li><li>six-switch: now emits checked state onChange and onBlur</li><li>six-datepicker: now uses date instead of string</li><li>Update all dependencies</li><li>New size class for six-icon and six-detail</li><li>six-group-label: added new component</li><li>six-select: allow to turn six-select into autocomplete</li><li>six-stage-indicator: added new component</li><li>six-header: allow to set open state of six-search-field</li><li>six-header: allow to make logo clickable and emit event</li><li>six-layout-grid: added new component</li><li>six-datepicker: add size attribute</li><li>six-main-container: added new component</li><li>six-picto: added new component to render custom six and bme icons</li><li>six-datepicker: add clear button</li><li>six-root: removed custom scrollbar</li><li>add custom components manifest to bundle to improve IDE support</li><li>six-root: allow to remove padding of content section</li><li>six-table: custom cell renderer</li></ul><h3 id="fixed-15" tabindex="-1">Fixed <a class="header-anchor" href="#fixed-15" aria-label="Permalink to &quot;Fixed&quot;">​</a></h3><ul><li>six-tile: fixed bug where tile would throw an error onHover</li><li>six-tooltip: fixed bug where six-tooltip would throw an error when it was disabled</li><li>six-input/six-table/six-select design improvements</li><li>six-form: removed support for native html tags</li><li>six-tile: added event handlers for slots of six-tile</li><li>angular custom directive: bugfix handling of date fields</li><li><strong>Breaking:</strong> six-input: change behaviour when six-input-change is fired</li><li><strong>Breaking:</strong> six-textarea: change behaviour when six-textarea-change is fired</li><li>six-datepicker: fixed problem where one could not delete date</li><li>six-datepicker: fixed problem where datepicker was not able to handle invalid value input</li><li>six-select: change event is fired during initialization of component</li><li>six-datepicker: fix pointer date</li><li>six-select: Fix size of filter</li><li>six-icon: Remove flex box and centered attribute</li><li>six-select: Reset to default value on clear</li><li>six-form: Allow to reset form</li><li>six-select: Fix init if multiple</li><li>six-picto: simplify component and fix dev docs</li><li>six-dropdown: Fix menu dropdown menu alignment</li><li>six-tooltip: Tooltip on content level should not be visible on dialog level</li><li>six-input u.a.: Correction of colors of label</li><li>six-menu: remove ugly artefact for six-menu when scrolling required</li><li>six-checkbox: bugfix undefined error</li><li>six-dropdown: add size attribute</li><li>six-textarea: Fixed color of disabled state</li><li>six-header: visibility of search field</li><li>custom-directive: Fixed display of error messages</li><li>six-header: always display selected application&#39;s name</li><li>six-details: remove margin left and right of the component</li><li>six-details: remove margin left and right of the component</li><li>six-root CSS fixes</li><li>six-root: only add margin (to guarantee border styling is shown) when sidebar is open</li><li>six-root: show border styling for sidebar</li></ul><h2 id="_1-0-0-2021-09-23" tabindex="-1">1.0.0 - 2021-09-23 <a class="header-anchor" href="#_1-0-0-2021-09-23" aria-label="Permalink to &quot;1.0.0 - 2021-09-23&quot;">​</a></h2><h3 id="added-9" tabindex="-1">Added <a class="header-anchor" href="#added-9" aria-label="Permalink to &quot;Added&quot;">​</a></h3><ul><li>six-dropdown: added infinite scrolling</li><li>six-tile: allow to pass icon and label via slot</li><li>six-sidebar-item-group: No background color if subgroup</li><li>six-dropdown: added infinite scrolling</li><li>six-tile: new style</li><li>six-menu-item: move checkmark to the right side</li><li>six-root: added part classifiers</li><li>six-button: remove background from link button</li><li>six-root: added custom scrollbar</li><li>six-dropdown: added custom scrollbar</li><li>six-header: make logo replaceable</li><li>six-sidebar: allow to toggle menu items and control them programmatically</li><li>six-sidebar-item-group update to handle custom icon</li><li>darker font color on input while disabled</li><li>six-sidebar with new style</li><li>six-details: changes requested in review session</li><li>custom sidebar width, custom summary icon for the sidebar, sidebar-item-group and details</li><li>added six-tile</li><li>focus on search field in header if search button is clicked</li><li>using @fontsource/noto-sans instead of typeface-noto-sans</li><li>added missing slot in documentation</li><li>added six-form-changed event to six-form (checks validation state) and updated angular directive</li><li>update publish script for ui-library-vue</li><li>improved documentation for angular stuff</li><li>allow access of form validation state to trigger form submit button state</li><li>add selected and disable properties to sidebar items</li><li>add clearable attribute for search field</li><li>header search field could be configured to shift content instead of popup</li><li>events should be prefixed with the component name</li><li>typed events payload</li><li>spinner enhanced with animated SIX logo</li><li>allow to filter dropdown and selects</li><li>added datepicker component</li><li>added six-range component</li><li>Angular Demo App: added example for error message attribute</li><li>automatically publish on version increase</li></ul><h3 id="fixed-16" tabindex="-1">Fixed <a class="header-anchor" href="#fixed-16" aria-label="Permalink to &quot;Fixed&quot;">​</a></h3><ul><li>six-select: bugfix multi-selection for non string based values</li><li>six-button: fixed styling for focused link button</li><li>six-dropdown: fixed styling for vertical scrollbar</li><li>six-select: fixed problem where hoisting was breaking six-select when inside a drawer</li><li>six-textarea/six-icon-button: fixed undefined errors</li><li>six-search-field: fix global enter key event listener</li><li>get rid of popperjs dependency</li><li>six-root: fixed problem cut off content</li><li>show table filter when selected</li><li>six-icon-button: fix error with ag-Grid</li><li>Add more space between menu items</li><li>More white space around main slot of root component</li><li>six-sidebar-item-group: fixed misaligned groups with long texts</li><li>display tooltips for disabled buttons and icon-buttons</li><li>don&#39;t change control size on focus</li><li>don&#39;t show error message in six-select if selection is open</li><li>small bugfixes in documentation</li><li>added cursor down support for filter field</li><li>support v-model in Vue output target</li><li>support of six-datepicker in six-form</li><li>update targets to ES2017</li><li>bugfix resizing issues for select</li><li>don&#39;t change control size on focus</li><li>six-icon-button: Disabled State is not propagated to the nested six-button</li><li>added value property for six-search-field and fixed runtime bug in six-details</li><li>six-date-picker: fixed a bunch of bugs</li><li>six-select popup size update broken after RC22</li><li>Table Fixes</li><li>fixed styling for password field in edge</li><li>value is not properly set for six input and six textarea</li><li>error text not working in angular directive</li><li>checkbox tries to update and undefined reference</li><li>setting initial value for input and textarea</li><li>check if six radio input ref is undefined</li><li>fix CI build artifactory login</li><li>show selected item in six-select when options are provided dynamically</li><li>six-select value is not updated if the slot is changed</li></ul>',95),d=[t];function r(n,s,c,h,u,p){return l(),i("div",null,d)}const m=e(o,[["render",r]]);export{f as __pageData,m as default};
