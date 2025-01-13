# Upgrade to Version 5

::: info

This guide assumes that you have already updated your app to version 4 of the six-webcomponents.

:::

## More flexible `six-header` layouts

The customization possibilities of the six-header component were limited, as it provided only a
restricted set of slots, events, and properties for configuring its functionality and layout.

With version 5, the [six-header](/components/six-header.html) component is modular, similar to other
components like [six-menu](/components/six-menu.html). This enables developers to build custom
header layouts using smaller, reusable parts.

The features were already available with version 4 and with version 5, old slots, properties and
events were removed.

Instead of using specific slot, you can now simply add items to the header using `six-header-item`
components. Please check the [updated documentation](/components/six-header.html) and the
[header implementation](https://github.com/six-group/six-webcomponents/blob/main/examples/angular/src/app/components/header/header.component.html)
of the Angular example application, which demonstrates most features.

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

  <!-- Dropdown -->
  <six-header-dropdown-item>
    <six-header-menu-button slot="trigger" icon="apps">{{ currentApp }}</six-header-menu-button>
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
