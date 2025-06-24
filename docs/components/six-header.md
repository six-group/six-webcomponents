# Header


The `six-header` component is designed to be used within the `header` slot of the `six-root` component.

Compose your header using `six-header-item` and `six-header-dropdown-item` elements.

While the SIX logo must always appear, all other elements are optional. If additional elements are added, follow this order:

1.  Hamburger Menu
2.  SIX Logo
3.  Custom Items
4.  (--- Right-aligned elements start here ---)
5.  Search Icon
6.  Notifications
7.  App Switcher
8.  Profile

### Simple Example

Use `six-header-item` to add items. To align elements to the right, simply apply the style `margin-left: auto`. For dropdown menus, use `six-header-dropdown-item`. The dropdown item will be marked as active (with a black bottom border) when open.

<docs-demo-six-header-0></docs-demo-six-header-0>

```html
<six-header>
  
  <six-header-item>
    <six-icon-button href="">
      <six-logo></six-logo>
    </six-icon-button>
  </six-header-item>

  
  <six-header-dropdown-item style="margin-left: auto">
    <six-icon-button slot="trigger">
      <six-avatar                 image="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
      >
      </six-avatar>
    </six-icon-button>
    <six-menu>
      <six-menu-item>Logout</six-menu-item>
    </six-menu>
  </six-header-dropdown-item>
</six-header>
```


### Full Example

Items in `six-header` reside within a flex container. Use flex properties to adjust the width of custom elements. For instance, applying `flex: 1 0 0` will allow an element to fill the remaining space.

<docs-demo-six-header-1></docs-demo-six-header-1>

```html
<six-header>
  
  <six-header-item>
    <six-icon-button name="menu"></six-icon-button>
  </six-header-item>

  
  <six-header-item>
    <six-icon-button href="">
      <six-logo></six-logo>
    </six-icon-button>
  </six-header-item>

  
  <six-header-item style="flex: 1 0 0">
    <six-select value="option-1" style="width: 100%">
      <six-menu-item value="option-1">Option 1</six-menu-item>
      <six-menu-item value="option-2">Option 2</six-menu-item>
      <six-menu-item value="option-3">Option 3</six-menu-item>
    </six-select>
  </six-header-item>

  
  <six-header-item id="search-header-item">
    <six-icon-button name="search"></six-icon-button>
  </six-header-item>

  
  <six-header-item>
    <six-icon-button name="notifications_none">
      <six-badge type="danger" pill>2</six-badge>
    </six-icon-button>
  </six-header-item>

  
  <six-header-dropdown-item>
    <six-header-menu-button slot="trigger" icon="apps">Custody</six-header-menu-button>
    <six-menu>
      <six-menu-item checked>Custody</six-menu-item>
      <six-menu-item>Swiss Interbank Clearing</six-menu-item>
      <six-menu-item>Tri-Party Agent</six-menu-item>
      <six-menu-item>Financial Information</six-menu-item>
    </six-menu>
  </six-header-dropdown-item>

  
  <six-header-dropdown-item>
    <six-icon-button slot="trigger">
      <six-avatar                 image="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
      >
      </six-avatar>
    </six-icon-button>
    <six-menu>
      <six-menu-item><b>Cat Kittens</b><br>cat.kitty.kittens@themCatsBeCool.com</six-menu-item>
      <six-menu-item><b>Language</b><br><six-language-switcher></six-language-switcher></six-menu-item>
      <six-menu-item>Change password</six-menu-item>
      <six-menu-item>Logout</six-menu-item>
    </six-menu>
  </six-header-dropdown-item>
</six-header>
<div></div>
```



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute       | Description                                                                                                            | Type      | Default |
| -------------- | --------------- | ---------------------------------------------------------------------------------------------------------------------- | --------- | ------- |
| `openSearch`   | `open-search`   | Set the header search input to be in an open or closed state.  Focuses the first `six-input` found in the search slot. | `boolean` | `false` |
| `shiftContent` | `shift-content` | Indicates if content should be shifted down when search field is visible.                                              | `boolean` | `false` |


## Slots

| Slot             | Description                                              |
| ---------------- | -------------------------------------------------------- |
| `"search-field"` | Used to define the search field component in the header. |


## Shadow Parts

| Part       | Description |
| ---------- | ----------- |
| `"header"` |             |


----------------------------------------------

Copyright © 2021-present SIX-Group
