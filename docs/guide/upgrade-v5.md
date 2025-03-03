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

## Removed deprecated features (Breaking Change)

Refer to the _Removed_ section in the [changelog](../changelog.md).
