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
2. Remove `defineCustomElement()` from your `main.ts` file
3. If applicable, eliminate any custom
   [control value accessors](https://angular.io/api/forms/ControlValueAccessor). Angular value
   accessors are now shipped with the library.
4. Add `@six-group/ui-library-angular` to your `package.json` dependencies.
5. Add `UiLibraryAngularModule.forRoot()` to the module imports.

For detailed guidance on setting up Angular, refer to the [Angular guide](angular.md).

## Client Side Validation Support Removal

In Version 3, an attempt was made to replicate the
[client side form validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation)
seen in native form elements. However, this endeavor was marked by considerable complexity and
numerous bugs. Consequently, we have chosen to entirely eliminate this feature, driven by the aim
for form validation to be delegated to the framework employing our components. To understand how
this process works, for example in Angular, explore the provided Angular example.

In detail, the following changes were made:

- Removed the `six-form` component. Simply replace it with the standard html `form` element.
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

The form components TBC

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
