# six-sidebar-item-group

<!-- EXAMPLES -->

<!-- Auto Generated Below -->


## Properties

| Property      | Attribute      | Description                                                                                                                        | Type      | Default     |
| ------------- | -------------- | ---------------------------------------------------------------------------------------------------------------------------------- | --------- | ----------- |
| `icon`        | `icon`         | Icon of the group                                                                                                                  | `string`  | `''`        |
| `name`        | `name`         | Title of item group                                                                                                                | `string`  | `''`        |
| `open`        | `open`         |                                                                                                                                    | `boolean` | `false`     |
| `summaryIcon` | `summary-icon` | Custom summary icon name.                                                                                                          | `string`  | `undefined` |
| `value`       | `value`        | A unique value to store in the sidebar item of the group label. This can be used as a way to identify sidebar items when selected. | `string`  | `''`        |


## Slots

| Slot | Description                                       |
| ---- | ------------------------------------------------- |
|      | Used to define the nested side bar [group] items. |


## Dependencies

### Depends on

- [six-details](../six-details)
- [six-icon](../six-icon)

### Graph
```mermaid
graph TD;
  six-sidebar-item-group --> six-details
  six-sidebar-item-group --> six-icon
  six-details --> six-icon
  style six-sidebar-item-group fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

Copyright © 2021-present SIX-Group
