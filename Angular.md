# Improve Angular Integration

- https://github.com/six-group/six-webcomponents/pull/54

TODO: add this to `libraries/ui-library/CHANGELOG.md` and write a proper upgrade guide.

This PR focuses on the integration of the six-webcomponents with Angular, in particular for Angular forms. It also removes [browser built in form validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation#using_built-in_form_validation) to reduce the complexity of the library. Details below.

## Angular

- Built-In Angular form support
  - [Value accessors](https://angular.io/api/forms/ControlValueAccessor#controlvalueaccessor) for all form elements
  - Validators for datepicker
  - Support for min/max validation in `six-input[type=number]`
- Default error messages for basic validations for all elements in English, German, Italian and French.
- Ability to customize default messages
- Support to mark all form inputs as touched and dirty and focus first invalid field (`SixFormUtilDirective`)
- Simplified Angular example
  - Removed ngrx
  - Removed table and user from
  - Added form example demoing all form field types and error message customization

## Other

- Added `input, blur, change, focus` events to all form elements as counterparts/replacements for custom events like `six-input-input, six--input-change` etc. Allows for better integration with third party form libraries that rely on those native events.
- Support submitting a form by pressing the 'Enter' key on six-input.
- Removed Vue Example and stencil output target for Vue.
- Removed support for [browser built in form validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation#using_built-in_form_validation).
  - Removed `reportValidity(), checkValidity(), setCustomValidity(), getValidity(), isValid(), getValidationMessage()
  - Removed `reset(), defaultValue`
  - Removed `six-form element`
- Removed support for property `customErrorText`. Use `errorText` instead
- Removed support for `error-text` slot. Use the `errorText` property instead
- Removed `errorOnBlur` property

## Upgrade

We want to provide an upgrade guide after merging this PR. For the moment, check the angular example which contains a new form example page: https://github.com/six-group/six-webcomponents/tree/feature/remove-native-validation/examples/angular/src/app/pages/form

In general, all you need to to is to import the Angular module `UiLibraryAngularModule.forRoot()` and write your Angular forms as usual.
