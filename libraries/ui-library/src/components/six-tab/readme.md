# six-tab

<!-- EXAMPLES -->

<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                                                                                      | Type      | Default |
| ---------- | ---------- | ------------------------------------------------------------------------------------------------ | --------- | ------- |
| `active`   | `active`   | Set to true to draw the tab in an active state.                                                  | `boolean` | `false` |
| `closable` | `closable` | When true, the tab will be rendered with a close icon.                                           | `boolean` | `false` |
| `disabled` | `disabled` | Set to true to draw the tab in a disabled state.                                                 | `boolean` | `false` |
| `panel`    | `panel`    | The name of the tab panel the tab will control. The panel must be located in the same tab group. | `string`  | `''`    |


## Events

| Event           | Description                                                         | Type                     |
| --------------- | ------------------------------------------------------------------- | ------------------------ |
| `six-tab-close` | Emitted when the tab is closable and the close button is activated. | `CustomEvent<undefined>` |


## Methods

### `removeFocus() => Promise<void>`

Removes focus from the tab.

#### Returns

Type: `Promise<void>`



### `setFocus(options?: FocusOptions) => Promise<void>`

Sets focus to the tab.

#### Parameters

| Name      | Type                        | Description |
| --------- | --------------------------- | ----------- |
| `options` | `FocusOptions \| undefined` |             |

#### Returns

Type: `Promise<void>`




## Slots

| Slot | Description      |
| ---- | ---------------- |
|      | The tab's label. |


## Shadow Parts

| Part             | Description                                                |
| ---------------- | ---------------------------------------------------------- |
| `"base"`         | The component's base wrapper.                              |
| `"close-button"` | The close button, which is the icon button's base wrapper. |


## Dependencies

### Depends on

- [six-icon-button](../six-icon-button)

### Graph
```mermaid
graph TD;
  six-tab --> six-icon-button
  six-icon-button --> six-icon
  style six-tab fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

Copyright © 2021-present SIX-Group
