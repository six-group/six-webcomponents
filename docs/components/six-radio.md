# six-radio


Radios allow the user to select one option from a group of many.

<docs-demo-six-radio-209></docs-demo-six-radio-209>

```html
<six-radio>Radio</six-radio>
```


## Examples

### Checked

Use the `checked` attribute to activate the radio.

<docs-demo-six-radio-210></docs-demo-six-radio-210>

```html
<six-radio checked>Checked</six-radio>
```


### Disabled

Use the `disabled` attribute to disable the radio.

<docs-demo-six-radio-211></docs-demo-six-radio-211>

```html
<six-radio checked disabled>Disabled</six-radio>
<six-radio disabled>Disabled</six-radio>
```


### Grouping Radios

Radios are grouped based on their `name` attribute and scoped to the nearest form.

<docs-demo-six-radio-212></docs-demo-six-radio-212>

```html
<six-radio name="option" checked>Option 1</six-radio><br>
<six-radio name="option">Option 2</six-radio><br>
<six-radio name="option">Option 3</six-radio><br>
<six-radio name="option">Option 4</six-radio>
```



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
