# Upgrade to Version 5

::: info

This guide assumes that you have already updated your app to version 4 of the six-webcomponents.

:::

## Introduction

In version 5, our primary focus has been on removing deprecated features and making some components
more modular.

## Modular `six-header` (Breaking Change)

The customization options of the six-header component were previously limited, as it offered only a
restricted set of slots, events, and properties for configuring its functionality and layout.

With version 5, the [six-header](/components/six-header.html) component has become modular, similar
to other components like [six-menu](/components/six-menu.html). This allows for building custom
header layouts more easily using smaller, reusable parts.

This feature was already introduced in preview with version 4.3.1. In version 5, the old slots,
properties, and events have been removed, and the `six-header` markup now requires updates.

Instead of relying on specific slots, you can now simply add items to the header using
`six-header-item` components. Please refer to the
[updated documentation](/components/six-header.html) and the
[header implementation](https://github.com/six-group/six-webcomponents/blob/main/examples/angular/src/app/components/header/header.component.html)
in the Angular example application, which covers most features.

### Before

```html
<six-header clickableLogo openHamburgerMenu="...">
  <six-menu slot="app-switcher-menu">
    <six-menu-item>App1</six-menu-item>
    <six-menu-item>App2</six-menu-item>
  </six-menu>
</six-header>
```

### After

```html
<six-header>
  <!-- hamburger menu -->
  <six-header-item>
    <six-icon-button [name]="open ? 'menu_open' : 'menu'" (click)="..." />
  </six-header-item>

  <!-- logo -->
  <six-header-item>
    <six-icon-button href="https://six-group.github.io/six-webcomponents/demo/angular/">
      <six-logo></six-logo>
    </six-icon-button>
  </six-header-item>

  <!-- app switcher -->
  <six-header-dropdown-item>
    <six-header-menu-button slot="trigger">
      <span>{{ currentApp }}</span>
      <six-icon slot="postfix">apps</six-icon>
    </six-header-menu-button>
    <six-menu>
      <six-menu-item
        *ngFor="let app of apps"
        [checked]="app === currentApp"
        (click)="currentApp = app"
      >
        {{ app }}
      </six-menu-item>
    </six-menu>
  </six-header-dropdown-item>
</six-header>
```

## Simpler use of components (None Breaking Change)

- The prefix and suffix icons in the `six-button` component do not have to be wrapped in a span
  anymore and the icon size will adapt based on the size of the button component.

### Before

```html
<six-button>
  <span slot="prefix"><six-icon size="small">settings</six-icon></span>
  Setting
</six-button>
```

### After

```html
<six-button>
  <six-icon slot="prefix">settings</six-icon>
  Setting
</six-button>
```

## Changed return type for `six-file-upload` (Breaking Change)

We have changed the return type when a file is successfully updated. Instead of having two different
return types depending on the value of the `multiple` property, we now return a
`SixFileUploadSuccessPayload` for both cases.

This means that you do not need to handle the two cases separately, but you always get a `FileList`
back accessible with the `files` property.

### Before

```html
<!-- For single files -->
<six-file-upload id="six-file-upload--single"></six-file-upload>

<!-- For multiple files -->
<six-file-upload id="six-file-upload--multiple" multiple></six-file-upload>
```

```js
// Single files
const singleFileUpload = document.getElementById('six-file-upload--single');
singleFileUpload.addEventListener('six-file-upload-success', ({ detail }) => {
  const file = detail.file;
});

// Multiple files
const multipleFileUpload = document.getElementById('six-file-upload--multiple');
multipleFileUpload.addEventListener('six-file-upload-success', ({ detail }) => {
  const file = detail.files; // <- Note the difference, an extra 's' is required
});
```

### After

```html
<!-- For single files -->
<six-file-upload id="six-file-upload--single"></six-file-upload>

<!-- For multiple files -->
<six-file-upload id="six-file-upload--multiple" multiple></six-file-upload>
```

```js
// Single files
const singleFileUpload = document.getElementById('six-file-upload--single');
singleFileUpload.addEventListener('six-file-upload-success', ({ detail }) => {
  const file = detail.files; // Array of files is returned, in this case with only one element
});

// Multiple files
const multipleFileUpload = document.getElementById('six-file-upload--multiple');
multipleFileUpload.addEventListener('six-file-upload-success', ({ detail }) => {
  const file = detail.files; // In this case, we __may__ have more than one element
});
```

## Replaced event to prevent dialog and drawer from closing (Breaking)

We have changed the event to prevent a dialog from closing from `six-...-overlay-dismiss` to
`six-...-request-close`. This allows preventing the dialog/drawer from closing not only when
clicking the overlay but also when clicking the close button or pressing `Escape`.

## Replacement for six-datepicker (Beta)

The current implementation of `six-datepicker` has several bugs that proved challenging to fix. To
address these issues, we developed an entirely new component called `six-date`, which is currently
in beta state. You can try out this new component in this release.

Looking ahead, we plan to replace `six-datepicker` with `six-date` in future releases to ensure a
more robust and reliable date selection experience. For the time being, however, `six-datepicker`
will remain available for backward compatibility.

## Angular specific upgrade (None Breaking Change)

- Angular Router integration for the `six-sidebar` component through a set of directives that
  automatically manage the selection and expansion states based on the current route.

To enable router integration, add the `sixRouterLinkActive` attribute to the `six-sidebar`
component.

For more information and a usage example consult the [angular guide](angular.md#sidebar).

## Removed deprecated features (Breaking Change)

Refer to the _Removed_ section in the [changelog](../changelog.md).
