# Angular

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
events provided by the components is currently unavailable. Please check the component documentation
(TODO) for available events.

## Forms

Form components like `six-input` work seamlessly in
[Angular forms](https://angular.io/guide/forms-overview), both in template-driven and reactive
forms.

An objective of the SIX library is to ensure a consistent look and feel across all applications.
Hence, the SIX Library takes on the responsibility of displaying error messages, when appropriate.
For instance, it avoids displaying the message if the form is pristine, even if a field is marked as
invalid.

To select the correct translation, your application should ensure the `lang` attribute of the `html`
element is set. Supported languages are `en`, `de`, `it` and `fr`. Refer to the Angular example code
(TBD) for an concrete implementation of this, when switching the language.

### Form Util

From a
[usability standpoint](https://www.bennadel.com/blog/4419-the-user-experience-ux-of-disabled-form-buttons.htm),
we consider that users should always be allowed to submit a form, even if it contains invalid values
The library comes with an additional utility to aid in the process of displaying errors after the
user clicked on the submit button.

The `FormUtilDirective` provides a way to set all fields as dirty and touched, and focusing on the
first field that contains an error.

To use it, simply add the `sixFormUtil` directive to a form like this:

```html
<form sixFormUtil [formGroup]="form" (ngSubmit)="onSubmit()">
  <six-input>...</six-input>
  <six-button [submit]="true">Sunit</six-button>
</form>
```

Afterwards, you can access the directive using `ViewChild` in your TypeScript file and call
`focusInvalidField()` to display all current errors if applicable:

```ts
class MyForm {
  @ViewChild(SixFormUtilDirective) sixFormUtil!: SixFormUtilDirective;
  // ...
  submit() {
    if (!this.form.valid) {
      this.sixFormUtil.focusInvalidField();
    } else {
      // submit the form
    }
  }
}
```
