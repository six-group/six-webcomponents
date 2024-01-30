# six-root

Six root gives you a [basic layout](<https://en.wikipedia.org/wiki/Holy_grail_(web_design)>) skeleton.

<!-- EXAMPLES -->

<!-- Auto Generated Below -->


## Properties

| Property  | Attribute | Description                                          | Type                                                        | Default |
| --------- | --------- | ---------------------------------------------------- | ----------------------------------------------------------- | ------- |
| `padded`  | `padded`  | Defines whether the content section should be padded | `boolean`                                                   | `true`  |
| `stage`   | `stage`   | Defines the stage of the application                 | `"ACCEPTANCE" \| "DEV" \| "ETU" \| "ITU" \| "PROD" \| null` | `null`  |
| `version` | `version` | Defines the version of the application               | `string`                                                    | `''`    |


## Slots

| Slot              | Description                                     |
| ----------------- | ----------------------------------------------- |
| `"footer"`        | Used to define the footer component.            |
| `"header"`        | Used to define the header component.            |
| `"left-sidebar"`  | Used to define the sidebar on the left side.    |
| `"main"`          | Used to define the components in the main area. |
| `"right-sidebar"` | Used to define the sidebar on the right side.   |


## Shadow Parts

| Part              | Description |
| ----------------- | ----------- |
| `"container"`     |             |
| `"header"`        |             |
| `"left-sidebar"`  |             |
| `"main"`          |             |
| `"right-sidebar"` |             |


## Dependencies

### Depends on

- [six-stage-indicator](../six-stage-indicator)

### Graph
```mermaid
graph TD;
  six-root --> six-stage-indicator
  six-stage-indicator --> six-icon
  style six-root fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

Copyright © 2021-present SIX-Group
