# six-tag

<!-- EXAMPLES -->

<!-- Auto Generated Below -->


## Properties

| Property    | Attribute   | Description                                              | Type                                                                              | Default     |
| ----------- | ----------- | -------------------------------------------------------- | --------------------------------------------------------------------------------- | ----------- |
| `clearable` | `clearable` | Set to true to make the tag clearable.                   | `boolean`                                                                         | `false`     |
| `pill`      | `pill`      | Set to true to draw a pill-style tag with rounded edges. | `boolean`                                                                         | `false`     |
| `size`      | `size`      | The tag's size.                                          | `"large" \| "medium" \| "small"`                                                  | `'medium'`  |
| `type`      | `type`      | The tag's type.                                          | `"action" \| "danger" \| "info" \| "primary" \| "success" \| "text" \| "warning"` | `'primary'` |


## Events

| Event           | Description                                 | Type                     |
| --------------- | ------------------------------------------- | ------------------------ |
| `six-tag-clear` | Emitted when the clear button is activated. | `CustomEvent<undefined>` |


## Slots

| Slot | Description        |
| ---- | ------------------ |
|      | The tag's content. |


## Shadow Parts

| Part             | Description                   |
| ---------------- | ----------------------------- |
| `"base"`         | The component's base wrapper. |
| `"clear-button"` | The clear button.             |
| `"content"`      | The tag content.              |


## Dependencies

### Used by

 - [six-select](../six-select)

### Depends on

- [six-tooltip](../six-tooltip)
- [six-icon-button](../six-icon-button)

### Graph
```mermaid
graph TD;
  six-tag --> six-tooltip
  six-tag --> six-icon-button
  six-icon-button --> six-icon
  six-select --> six-tag
  style six-tag fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

Copyright © 2021-present SIX-Group
