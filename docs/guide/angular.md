# Angular

We provide a
[dedicated npm package for Angular](https://www.npmjs.com/package/@six-group/ui-library-angular),
designed to simplify the utilization of our web components. Check out the instructions in this guide
to learn how to use it.

For additional assistance with the implementation, you can also examine the
[Angular demo](https://six-group.github.io/six-webcomponents/v4/demo/angular) and its
[accompanying code](https://github.com/six-group/six-webcomponents/tree/main/examples/angular).

## Setup

1. Install the web components and the angular library:

   ```bash
   npm install @six-group/ui-library
   npm install @six-group/ui-library-angular
   ```

2. Add `UiLibraryAngularModule.forRoot()` to your root angular module imports section.

   ```ts
   @NgModule({
    declarations: [],
    imports: [
      // other imports
      UiLibraryAngularModule.forRoot(),
    ]
   })
   ```

3. If your project contains child modules, add the `UiLibraryAngularModule` (without the
   `forRoot()`) to those too.
4. Import the SIX styles to your global `styles.scss` file (usually located at `src/styles.scss`):

   ```scss
   @import '@six-group/ui-library/dist/ui-library/ui-library.css';
   ```

## Using the Components

The components can be utilized just like any other Angular component. However, there's one caveat:
while you'll receive code completion for attributes/properties of the component, code completion for
events provided by the components is currently unavailable. Please check the
[components documentation](../components/six-alert.md) for available events.

## Forms

Form components like `six-input` work seamlessly in
[Angular forms](https://angular.io/guide/forms-overview), both in template-driven and reactive
forms.

An objective of the SIX library is to ensure a consistent look and feel across all applications.
Hence, the SIX Library takes on the responsibility of displaying error messages, when appropriate.
For instance, it avoids displaying the message if the form is pristine, even if a field is marked as
invalid.

### Error Message Translations

To select the correct translation, your need to set the `lang` attribute on the `html` element.
Supported languages are `en`, `de`, `it` and `fr`. Refer to the
[Angular example](https://github.com/six-group/six-webcomponents/tree/main/examples/angular) for a
concrete implementation.

### Form Directive

From a
[usability standpoint](https://www.bennadel.com/blog/4419-the-user-experience-ux-of-disabled-form-buttons.htm),
we consider that users should always be allowed to submit a form, even if it contains invalid values
The library comes with an additional utility to aid in the process of displaying errors after the
user clicked on the submit button.

The `SixFormDirective` provides a way to set all fields as dirty and touched, and focusing on the
first field that contains an error.

To use it, simply add the `sixForm` directive and replace `ngSubmit` with `sixSubmit`:

```html
<form sixForm (sixSubmit)="onSubmit() [formGroup]="form">
  <!-- replace (ngSubmit) with (sixSubmit) -->
  <six-input>...</six-input>
  <six-button [submit]="true">Sunit</six-button>
</form>
```

Consult the
[Angular example](https://github.com/six-group/six-webcomponents/tree/main/examples/angular) and the
[source code documentation](https://github.com/six-group/six-webcomponents/blob/main/libraries/ui-library-angular/src/lib/form/six-form.directive.ts)
of the `SixFormDirective` and for a more flexible alternative, the `SixFormUtilDirective`.
