# six-range

<!-- EXAMPLES -->

<!-- Auto Generated Below -->


## Properties

| Property           | Attribute       | Description                                                                                                                                                  | Type                          | Default                               |
| ------------------ | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------- | ------------------------------------- |
| `disabled`         | `disabled`      | Set to true to disable the input.                                                                                                                            | `boolean`                     | `false`                               |
| `errorOnBlur`      | `error-on-blur` | Set to display the error text on blur and not when typing                                                                                                    | `boolean`                     | `false`                               |
| `errorText`        | `error-text`    | The input's error text. Alternatively, you can use the error-text slot.                                                                                      | `string`                      | `''`                                  |
| `helpText`         | `help-text`     | The range's help text. Alternatively, you can use the help-text slot.                                                                                        | `string`                      | `''`                                  |
| `invalid`          | `invalid`       | This will be true when the control is in an invalid state. Validity in range inputs is determined by the message provided by the `setCustomValidity` method. | `boolean`                     | `false`                               |
| `label`            | `label`         | The range's label. Alternatively, you can use the label slot.                                                                                                | `string`                      | `''`                                  |
| `max`              | `max`           | The input's max attribute.                                                                                                                                   | `number`                      | `100`                                 |
| `min`              | `min`           | The input's min attribute.                                                                                                                                   | `number`                      | `0`                                   |
| `name`             | `name`          | The input's name attribute.                                                                                                                                  | `string`                      | `''`                                  |
| `required`         | `required`      | Set to true to make the input a required field.                                                                                                              | `boolean`                     | `false`                               |
| `step`             | `step`          | The input's step attribute.                                                                                                                                  | `number`                      | `1`                                   |
| `tooltip`          | `tooltip`       | The preferred placedment of the tooltip.                                                                                                                     | `"bottom" \| "none" \| "top"` | `'top'`                               |
| `tooltipFormatter` | --              | A function used to format the tooltip's value.                                                                                                               | `(value: number) => string`   | `(value: number) => value.toString()` |
| `value`            | `value`         | The input's value attribute.                                                                                                                                 | `number`                      | `0`                                   |


## Events

| Event              | Description                               | Type                     |
| ------------------ | ----------------------------------------- | ------------------------ |
| `six-range-blur`   | Emitted when the control loses focus.     | `CustomEvent<undefined>` |
| `six-range-change` | Emitted when the control's value changes. | `CustomEvent<undefined>` |
| `six-range-focus`  | Emitted when the control gains focus.     | `CustomEvent<undefined>` |


## Methods

### `removeFocus() => Promise<void>`

Removes focus from the input.

#### Returns

Type: `Promise<void>`



### `reset() => Promise<void>`

Resets the formcontrol

#### Returns

Type: `Promise<void>`



### `setCustomValidity(message: string) => Promise<void>`

Sets a custom validation message. If `message` is not empty, the field will be considered invalid.

#### Returns

Type: `Promise<void>`



### `setFocus(options?: FocusOptions) => Promise<void>`

Sets focus on the input.

#### Returns

Type: `Promise<void>`




## Slots

| Slot           | Description                                                                                     |
| -------------- | ----------------------------------------------------------------------------------------------- |
| `"error-text"` | Error text that is shown for validation errors. Alternatively, you can use the error-text prop. |
| `"help-text"`  | Help text that describes how to use the input. Alternatively, you can use the help-text prop.   |
| `"label"`      | The input's label. Alternatively, you can use the label prop.                                   |


## Shadow Parts

| Part        | Description                   |
| ----------- | ----------------------------- |
| `"base"`    | The component's base wrapper. |
| `"input"`   | The native range input.       |
| `"tooltip"` | The range tooltip.            |


----------------------------------------------

Copyright © 2021-present SIX-Group
