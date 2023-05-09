# Angular

Find the deployed Angular Demo App [here](TODO).

## Initial setup

### Calling defineCustomElements

A component collection includes a main function that is used to load the components in the collection.
That function is called `defineCustomElements()` and it needs to be called once during the bootstrapping of your application.
One convenient place to do this is in `main.ts` as such:

```ts
import { defineCustomElements } from '@six-group/ui-library/loader';
...
defineCustomElements();
```

### Import style sheet

You need to import the SIX style into your project.
In Angular this can be done in the global style sheet file `src/style.scss`

```scss
@import '@six-group/ui-library/dist/ui-library/ui-library.css';
```

### Import assets

As the last step you have to include all static assets from the component library.
Please add this lines into your `angular.json`

```json
...
"assets": [
    ...
    {
        "glob": "*",
        "input": "./node_modules/@six-group/ui-library/dist/ui-library/assets",
        "output": "assets/"
    }
],
...
```

## Using six web components in your code

Due to the fact, that the stencil output plugin for angular is not working properly, the six web components
have to be embedded into your angular application by using plain javascript. For a complete example
please see the code of the [SIX Angular Demo Application](TODO).
In the following sections only a few selected code snippets are shown:

### Using custom events

Some of the six web components are using custom events. The following code snippets demonstrate how you can handle these events in you angular application.

#### Alternative 1 - by defining a callback function

Template:

```html
...
<six-search-field (six-search-field-change)="searchFieldChanged($event)"> </six-search-field>
...
```

Component:

```ts
...
export class MySearchComponent {
...
  searchFieldChanged(event: CustomEvent<SixSearchFieldChangePayload>) {
    ...
  }
}
```

#### Alternative 2 - by defining a host listener

This approach can only be used if the event is unique inside your component.

Template:

```html
...
<six-search-field> </six-search-field>
...
```

Component:

```ts
...
export class MySearchComponent {
...
  @HostListener("six-search-field-change", ["$event"])
  searchFieldChanged(event: CustomEvent<SixSearchFieldChangePayload>) {
    ...
  }
}
```

### Using reactive forms

The six web components can be integrated into Angular's reactive forms by using a custom directive that
implements Angular's `ControlValueAccessor` interface.

Template:

```html
<div [formGroup]="form" *ngIf="form">
  <!-- error-text overrides validation error message (attribute binding https://angular.io/guide/attribute-binding) -->
  <six-input label="Name" formControlName="name" appCustomControl [attr.error-text]="errorText" required></six-input>
  <!-- error-text overrides validation error message -->
  <six-input
    label="E-mail"
    formControlName="email"
    appCustomControl
    error-text="This field is required!"
    required
  ></six-input>
  <six-input label="Username" formControlName="username" appCustomControl></six-input>
  <!-- conditional form handling -->
  <six-select label="Role" formControlName="role" appCustomControl>
    <six-menu-item value="admin">Administrator</six-menu-item>
    <six-menu-item value="user">User</six-menu-item>
    <six-menu-item>Not defined</six-menu-item>
  </six-select>
  <six-checkbox checked formControlName="important" appCustomControl>Important</six-checkbox>
  <six-input type="password" label="Password" formControlName="password" appCustomControl required></six-input>
  <six-input
    type="password"
    label="Confirm password"
    formControlName="passwordConfirmation"
    appCustomControl
    required
  ></six-input>
  <p>
    <six-radio name="radio" value="1" formControlName="radio" appCustomControl>Option 1</six-radio>&nbsp;
    <six-radio name="radio" value="2" formControlName="radio" appCustomControl>Option 2</six-radio>&nbsp;
    <six-radio name="radio" value="3" formControlName="radio" appCustomControl>Option 3</six-radio>&nbsp;
  </p>

  <six-button [disabled]="form.invalid || form.pristine" (click)="save(form.getRawValue())" type="primary" submit
    >save</six-button
  >
</div>
```

Component:

```ts
...
export class MyFormComponent {
...
    readonly form = this.fb.group({
      ...
    })
    ...
    save(updatedForm) {
      ...
    }
}
```

The code for the custom directive `appCustomControl` has to be copied manually into your project. It can be found here:
[custom-control.directive.ts](TODO)

### Calling methods of a six web component

In same cases it can't be avoided to call a method on a six web component. This can be done in the following way:

Template:

```html
...
<six-dialog #dialogWindow>
  <ng-content></ng-content>
</six-dialog>
...
```

Component:

```ts
...
export class MyDialogComponent {
...
    @ViewChild("dialogWindow") dialogWindow: ElementRef;
...

    private hideDialogWindow() {
        if (this.dialogWindow) {
            this.dialogWindow.nativeElement.hide();
        }
    }
}
```
