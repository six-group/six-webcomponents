# six-radio

<!-- EXAMPLES -->

<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                                                                                                                                                  | Type      | Default     |
| ---------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------- | ----------- |
| `checked`  | `checked`  | Set to true to draw the radio in a checked state.                                                                                                            | `boolean` | `false`     |
| `disabled` | `disabled` | Set to true to disable the radio.                                                                                                                            | `boolean` | `false`     |
| `invalid`  | `invalid`  | This will be true when the control is in an invalid state. Validity in range inputs is determined by the message provided by the `setCustomValidity` method. | `boolean` | `false`     |
| `name`     | `name`     | The radio's name attribute.                                                                                                                                  | `string`  | `undefined` |
| `value`    | `value`    | The radio's value attribute.                                                                                                                                 | `string`  | `undefined` |


## Events

| Event              | Description                                       | Type                     |
| ------------------ | ------------------------------------------------- | ------------------------ |
| `six-radio-blur`   | Emitted when the control loses focus.             | `CustomEvent<undefined>` |
| `six-radio-change` | Emitted when the control's checked state changes. | `CustomEvent<undefined>` |
| `six-radio-focus`  | Emitted when the control gains focus.             | `CustomEvent<undefined>` |


## Methods

### `checkValidity() => Promise<boolean>`

Checks for validity.

#### Returns

Type: `Promise<boolean>`



### `removeFocus() => Promise<void>`

Removes focus from the radio.

#### Returns

Type: `Promise<void>`



### `reportValidity() => Promise<boolean>`

Checks for validity and shows the browser's validation message if the control is invalid.

#### Returns

Type: `Promise<boolean>`



### `reset() => Promise<void>`

Resets the formcontrol

#### Returns

Type: `Promise<void>`



### `setCustomValidity(message: string) => Promise<void>`

Sets a custom validation message. If `message` is not empty, the field will be considered invalid.

#### Returns

Type: `Promise<void>`



### `setFocus(options?: FocusOptions) => Promise<void>`

Sets focus on the radio.

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
