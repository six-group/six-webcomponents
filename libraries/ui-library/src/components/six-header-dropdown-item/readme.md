# six-header

<!-- EXAMPLES -->

<!-- Auto Generated Below -->


## Properties

| Property            | Attribute            | Description                                                                                                                                                                                                                                            | Type      | Default       |
| ------------------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------- | ------------- |
| `filter`            | `filter`             | Set to true to allow auto filtering for entries in the dropdown. With this flag the dropdown will automatically filter itsel. If you need to coordinate the shown elements yourself, e.g. because you need to call an endpoint use asyncFilter instead | `boolean` | `false`       |
| `filterPlaceholder` | `filter-placeholder` | The filter's placeholder text.                                                                                                                                                                                                                         | `string`  | `'Filter...'` |


## Dependencies

### Depends on

- [six-dropdown](../six-dropdown)

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
