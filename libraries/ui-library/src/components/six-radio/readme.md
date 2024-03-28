# six-radio

<!-- EXAMPLES -->

<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                                                                                                      | Type      | Default |
| ---------- | ---------- | ---------------------------------------------------------------------------------------------------------------- | --------- | ------- |
| `checked`  | `checked`  | Set to true to draw the radio in a checked state.                                                                | `boolean` | `false` |
| `disabled` | `disabled` | Set to true to disable the radio.                                                                                | `boolean` | `false` |
| `invalid`  | `invalid`  | If this property is set to true and an error message is provided by `errorText`, the error message is displayed. | `boolean` | `false` |
| `name`     | `name`     | The radio's name attribute.                                                                                      | `string`  | `''`    |
| `value`    | `value`    | The radio's value attribute.                                                                                     | `string`  | `'on'`  |


## Events

| Event              | Description                                       | Type                     |
| ------------------ | ------------------------------------------------- | ------------------------ |
| `six-radio-blur`   | Emitted when the control loses focus.             | `CustomEvent<undefined>` |
| `six-radio-change` | Emitted when the control's checked state changes. | `CustomEvent<undefined>` |
| `six-radio-focus`  | Emitted when the control gains focus.             | `CustomEvent<undefined>` |


## Methods

### `removeFocus() => Promise<void>`

Removes focus from the radio.

#### Returns

Type: `Promise<void>`



### `setFocus(options?: FocusOptions) => Promise<void>`

Sets focus on the radio.

#### Parameters

| Name      | Type                        | Description |
| --------- | --------------------------- | ----------- |
| `options` | `FocusOptions \| undefined` |             |

#### Returns

Type: `Promise<void>`




## Slots

| Slot | Description        |
| ---- | ------------------ |
|      | The radio's label. |


## Shadow Parts

| Part             | Description                               |
| ---------------- | ----------------------------------------- |
| `"base"`         | The component's base wrapper.             |
| `"checked-icon"` | The container the wraps the checked icon. |
| `"control"`      | The radio control.                        |
| `"label"`        | The radio label.                          |


----------------------------------------------

Copyright © 2021-present SIX-Group
