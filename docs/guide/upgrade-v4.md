# Upgrade to Version 4

::: info

This guide assumes that you have already updated your app to version 3 of the six-webcomponents.

:::

## Introduction

In version 4, our main focus has been on strengthening support for Angular applications,
streamlining the library by removing less-used features, and enhancing the overall code robustness
of our components. Below is a brief overview of the key changes:

## Better Support for Angular

We now ship a
[dedicated npm package for Angular](https://www.npmjs.com/package/@six-group/ui-library-angular),
which includes wrapper components, utilities for form handling and a more comprehensive form
example, that showcases the usage of all available form elements.

Steps to use the new Angular library:

1. Remove `CUSTOM_ELEMENTS_SCHEMA` from your Angular modules.
2. Remove `defineCustomElement()` in your `main.ts` file
3. Add `@six-group/ui-library-angular` to your `package.json` dependencies.
4. Add `UiLibraryAngularModule.forRoot()` to the module imports.
5. Replace the stylesheet import with
   `@import "@six-group/ui-library/dist/ui-library/ui-library.css"`
6. Remove any `"assets"` option that copies assets from the ui-library in `angular.json`
7. If applicable, eliminate any custom
   [control value accessors](https://angular.io/api/forms/ControlValueAccessor). Angular value
   accessors are now shipped with the library.

For detailed guidance on setting up Angular, refer to the [Angular guide](angular.md).

## Client Side Validation Support Removal

In Version 3, an attempt was made to incorporate support for native
[client side form validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation).
As a result, we have made the decision to completely remove this feature. This choice is rooted in
our goal for form validation to be handled by the framework utilizing our components, which is the
approach adopted by the majority of projects. To comprehend how this process operates, consider, for
instance, the provided Angular example.

In detail, the following changes were made:

- Removed the `six-form` component.
- Removed the following method form all form components:
  - `reset()`
  - `reportValidity()`
  - `checkValidity()`
  - `setCustomValidity()`
  - `getValidity()`
  - `isValid()`
  - `getValidationMessage()`
- Removed the following properties in all form components:
  - `errorOnBlur`

The `six-form` component can be easily substituted with a native form element. However, since the
validation logic is no longer managed, it must now be carried out manually or with the assistance of
a form library.

Form elements still maintain the capability to display error messages. To display an error message
you need to set the `error-text` and `invalid` property. In Angular both properties are set
automatically if you use angular forms and its validators, displaying the error message at the right
time.

## Vue Support Removal

As part of our efforts to streamline the library's focus and improve the code quality, we have
temporarily removed support for Vue.js. We're working on reintroducing Vue support in a future
release to provide a more tailored experience for Vue users.

## Standard Events

To enhance compatibility with form libraries, we chose to emit standard events in addition to the
existing ones. For instance, apart from the existing `six-input-change` event, we now also trigger a
[standard `change`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event) event
when there's a change in an input field's value. The same principle applies to `input` and `focus`
events as well.

## Table Component Removal

In version 4, we have made a strategic decision to remove the `six-table` component from the
library. This decision is in line with our commitment to refining core functionalities and
simplifying the library in general. While offering a comprehensive table component is valuable, the
complexity involved is better suited for dedicated solutions.

As a result, we recommend exploring existing table components within your framework's ecosystem to
find the best-fit solution for your needs. For instance, in certain Angular projects, we've found
success with [AG Grid](https://www.ag-grid.com/), a powerful and flexible table component that
offers extensive capabilities.

In the future, we intend to offer pre-defined styles for certain libraries in this category.
