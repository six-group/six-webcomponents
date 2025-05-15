# Angular

We provide a
[dedicated npm package for Angular](https://www.npmjs.com/package/@six-group/ui-library-angular),
designed to simplify the utilization of our web components. Check out the instructions in this guide
to learn how to use it.

For additional assistance with the implementation, you can also examine the
[Angular demo](https://six-group.github.io/six-webcomponents/demo/angular) and its
[accompanying code](https://github.com/six-group/six-webcomponents/tree/main/examples/angular).

## Setup

1. Install the web components and the angular library:

   ```bash
   npm install @six-group/ui-library
   npm install @six-group/ui-library-angular
   ```

### With Standalone Bootstrapping

This section explains how to configure web-components in an Angular application that uses
[standalone bootstrapping api](https://angular.dev/reference/migrations/standalone#switch-to-standalone-bootstrapping-api).
Check below for configuring web components with Angular modules.

1. Add `UiLibraryAngularModule` to your `ApplicationsConfig`s providers

   ```ts
   import { UiLibraryAngularModule } from '@six-group/ui-library-angular';
   import { ApplicationConfig, importProvidersFrom } from '@angular/core';

   export const appConfig: ApplicationConfig = {
     providers: [importProvidersFrom(UiLibraryAngularModule.forRoot())],
   };
   ```

2. Import the SIX styles to your global `styles.scss` file (usually located at `src/styles.scss`):

   ```scss
   @import '@six-group/ui-library/dist/ui-library/ui-library.css';
   ```

3. In each standalone component, import the `UiLibraryAngularModule` module to get access to
   web-components components.

   ```angular-html
   @Component({
     selector: "some",
     imports: [UiLibraryAngularModule],
     templateUrl: "./some.component.html",
     styleUrl: "./some.component.scss"
   })
   export class SomeComponent {}
   ```

### With Module Bootstrapping

This section explains how to configure web-components in an Angular application that uses NgModule.

1. Add `UiLibraryAngularModule.forRoot()` to your root angular module imports section.

   ```ts
   @NgModule({
    declarations: [],
    imports: [
      UiLibraryAngularModule.forRoot()
    ]
   })
   ```

2. If your project contains child modules, add the `UiLibraryAngularModule` (without the
   `forRoot()`) to those too.
3. Import the SIX styles to your global `styles.scss` file (usually located at `src/styles.scss`):

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
[Angular example](https://github.com/six-group/six-webcomponents/blob/main/examples/angular/src/app/components/header/header.component.ts#L27)
for a concrete implementation.

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
<!-- add sixForm and replace (ngSubmit) with (sixSubmit) -->
<form sixForm (sixSubmit)="onSubmit()" [formGroup]="form">
  <six-input>...</six-input>
  <six-button [submit]="true">Submit</six-button>
</form>
```

Consult the
[Angular example](https://github.com/six-group/six-webcomponents/tree/main/examples/angular) and the
[source code documentation](https://github.com/six-group/six-webcomponents/blob/main/libraries/ui-library-angular/src/lib/form/six-form.directive.ts)
of the `SixFormDirective` and for a more flexible alternative, the `SixFormUtilDirective`.

## Sidebar

The library provides Angular Router integration for the sidebar component through a set of
directives that automatically manage the selection and expansion states based on the current route.

To enable router integration, add the `sixRouterLinkActive` attribute to the `six-sidebar`
component. This activates three directives that work together:

- `ActiveSidebarDirective`: Enables route-based navigation in the sidebar
- `ActiveSidebarItemDirective`: Automatically manages item selection based on the current route
- `ActiveSidebarItemGroupDirective`: Automatically expands groups when they contain active routes

Example usage:

```html
<!-- add sixRouterLinkActive to six-sidebar to include the sidebar helper directives -->
<six-sidebar position="left" [open]="open" sixRouterLinkActive>
  <six-sidebar-item-group routerLink="/home" name="Home" icon="home"></six-sidebar-item-group>
  <six-sidebar-item-group routerLink="/form" name="Form" icon="assignment"></six-sidebar-item-group>
  <six-sidebar-item-group icon="settings" name="Settings">
    <six-sidebar-item routerLink="/settings/data" icon="analytics">Data</six-sidebar-item>
    <six-sidebar-item routerLink="/settings/history" icon="history">History</six-sidebar-item>
  </six-sidebar-item-group>
</six-sidebar>
```

When the router integration is enabled:

- Sidebar items are automatically selected when their route is active
- Sidebar groups automatically expand when containing active routes
- Manual selection state is preserved when no routes are active

Consult the
[Angular example](https://github.com/six-group/six-webcomponents/tree/main/examples/angular) and the
[source code documentation](https://github.com/six-group/six-webcomponents/blob/main/libraries/ui-library-angular/src/lib/sidebar/active-sidebar.directive.ts)
of the `ActiveSidebarDirective`, `ActiveSidebarItemDirective` and `ActiveSidebarItemGroupDirective`.
