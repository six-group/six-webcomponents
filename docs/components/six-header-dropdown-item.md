# six-header


## Header Dropdown Item

Header dropdown items provide dropdown elements in the header. Sets the active flag (bottom border) when the dropdown is open.

<docs-demo-six-header-dropdown-item-0></docs-demo-six-header-dropdown-item-0>

```html
<six-header custom>
  <six-header-item>
    <six-logo></six-logo>
  </six-header-item>

  <six-header-dropdown-item>
    <six-icon-button slot="trigger" name="settings"></six-icon-button>
    <six-menu>
      <six-menu-item>Option A</six-menu-item>
      <six-menu-item>Option B</six-menu-item>
      <six-menu-item>Option C</six-menu-item>
    </six-menu>
  </six-header-dropdown-item>
</six-header>
```



<!-- Auto Generated Below -->


## Dependencies

### Depends on

- [six-dropdown](six-dropdown.html)

### Graph
```mermaid
graph TD;
  six-header-dropdown-item --> six-dropdown
  six-dropdown --> six-menu-item
  six-dropdown --> six-input
  six-dropdown --> six-icon
  six-dropdown --> six-menu
  six-menu-item --> six-checkbox
  six-menu-item --> six-icon
  six-checkbox --> six-error
  six-input --> six-icon
  six-input --> six-error
  six-menu --> six-menu-item
  style six-header-dropdown-item fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

Copyright © 2021-present SIX-Group
