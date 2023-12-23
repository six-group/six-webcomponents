# six-tab-group

<!-- EXAMPLES -->

<!-- Auto Generated Below -->


## Properties

| Property           | Attribute            | Description                                                | Type                                     | Default |
| ------------------ | -------------------- | ---------------------------------------------------------- | ---------------------------------------- | ------- |
| `noScrollControls` | `no-scroll-controls` | Disables the scroll arrows that appear when tabs overflow. | `boolean`                                | `false` |
| `placement`        | `placement`          | The placement of the tabs.                                 | `"bottom" \| "left" \| "right" \| "top"` | `'top'` |


## Events

| Event          | Description                   | Type                             |
| -------------- | ----------------------------- | -------------------------------- |
| `six-tab-hide` | Emitted when a tab is hidden. | `CustomEvent<SixTabHidePayload>` |
| `six-tab-show` | Emitted when a tab is shown.  | `CustomEvent<SixTabShowPayload>` |


## Methods

### `show(panel: string) => Promise<void>`

Shows the specified tab panel.

#### Parameters

| Name    | Type     | Description |
| ------- | -------- | ----------- |
| `panel` | `string` |             |

#### Returns

Type: `Promise<void>`




## Slots

| Slot    | Description                                    |
| ------- | ---------------------------------------------- |
|         | Used for grouping tab panels in the tab group. |
| `"nav"` | Used for grouping tabs in the tab group.       |


## Shadow Parts

| Part                     | Description                                                                                  |
| ------------------------ | -------------------------------------------------------------------------------------------- |
| `"active-tab-indicator"` | An element that displays the currently selected tab. This is a child of the tab's container. |
| `"base"`                 | The component's base wrapper.                                                                |
| `"body"`                 | The tab group body where tab panels are slotted in.                                          |
| `"nav"`                  | The tab group navigation container.                                                          |
| `"scroll-button"`        | The previous and next scroll buttons that appear when tabs are scrollable.                   |
| `"tabs"`                 | The container that wraps the slotted tabs.                                                   |


## Dependencies

### Depends on

- [six-icon-button](../six-icon-button)

### Graph
```mermaid
graph TD;
  six-tab-group --> six-icon-button
  six-icon-button --> six-icon
  style six-tab-group fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

Copyright © 2021-present SIX-Group
