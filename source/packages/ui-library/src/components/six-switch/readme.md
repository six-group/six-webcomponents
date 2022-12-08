# six-switch

<!-- EXAMPLES -->

<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                                                                                               | Type      | Default     |
| ---------- | ---------- | --------------------------------------------------------------------------------------------------------- | --------- | ----------- |
| `checked`  | `checked`  | Set to true to draw the switch in a checked state.                                                        | `boolean` | `false`     |
| `disabled` | `disabled` | Set to true to disable the switch.                                                                        | `boolean` | `false`     |
| `invalid`  | `invalid`  | This will be true when the control is in an invalid state. Validity is determined by the `required` prop. | `boolean` | `false`     |
| `name`     | `name`     | The switch's name attribute.                                                                              | `string`  | `undefined` |
| `required` | `required` | Set to true to make the switch a required field.                                                          | `boolean` | `false`     |
| `value`    | `value`    | The switch's value attribute.                                                                             | `string`  | `undefined` |


## Events

| Event               | Description                                       | Type                     |
| ------------------- | ------------------------------------------------- | ------------------------ |
| `six-switch-blur`   | Emitted when the control loses focus.             | `CustomEvent<boolean>`   |
| `six-switch-change` | Emitted when the control's checked state changes. | `CustomEvent<boolean>`   |
| `six-switch-focus`  | Emitted when the control gains focus.             | `CustomEvent<undefined>` |


## Methods

### `checkValidity() => Promise<boolean>`

Checks for validity.

#### Returns

Type: `Promise<boolean>`



### `removeFocus() => Promise<void>`

Removes focus from the switch.

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

Sets focus on the switch.

#### Returns

Type: `Promise<void>`




## Slots

| Slot | Description         |
| ---- | ------------------- |
|      | The switch's label. |


## Shadow Parts

| Part        | Description                    |
| ----------- | ------------------------------ |
| `"base"`    | The component's base wrapper.  |
| `"control"` | The switch control.            |
| `"label"`   | The switch label.              |
| `"thumb"`   | The switch position indicator. |


## CSS Custom Properties

| Name           | Description               |
| -------------- | ------------------------- |
| `--height`     | The height of the switch. |
| `--thumb-size` | The size of the thumb.    |
| `--width`      | The width of the switch.  |


----------------------------------------------

Copyright © 2021-present SIX-Group
