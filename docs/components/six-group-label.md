# Group Label


## Label

Labels can be used to create a common label for several subcomponents. Please be aware: If only one subcomponent is used, the subcomponent's own label should be used!

<docs-demo-six-group-label-0></docs-demo-six-group-label-0>

```html
<six-group-label label="Common label">
  <six-layout-grid columns="2">
    <six-radio name="option" checked>Option 1</six-radio>
    <six-radio name="option">Option 2</six-radio>
  </six-layout-grid>
</six-group-label>
```


## Examples

### Disabled

Use the `disabled` prop to show a disabled label.

<docs-demo-six-group-label-1></docs-demo-six-group-label-1>

```html
<six-group-label label="Common label" disabled>
  <six-layout-grid columns="2">
    <six-input value="field1" disabled></six-input>
    <six-input value="field2" disabled></six-input>
  </six-layout-grid>
</six-group-label>
```


### Sizes

Use the `size` attribute to change the label's size.

<docs-demo-six-group-label-2></docs-demo-six-group-label-2>

```html
<six-group-label label="Common label" size="small">
  <six-layout-grid columns="2">
    <six-input placeholder="Small" size="small"></six-input>
    <six-input placeholder="Small" size="small"></six-input>
  </six-layout-grid>
</six-group-label>
<br>
<six-group-label label="Common label" size="medium">
  <six-layout-grid columns="2">
    <six-input placeholder="Medium" size="medium"></six-input>
    <six-input placeholder="Medium" size="medium"></six-input>
  </six-layout-grid>
</six-group-label>
<br>
<six-group-label label="Common label" size="large">
  <six-layout-grid columns="2">
    <six-input placeholder="Large" size="large"></six-input>
    <six-input placeholder="Large" size="large"></six-input>
  </six-layout-grid>
</six-group-label>
```


### Help Text

Add descriptive help text to a select with the `help-text` attribute. For help texts that contain HTML, use the help-text slot instead.

<docs-demo-six-group-label-3></docs-demo-six-group-label-3>

```html
<six-group-label label="Common label" help-text="Please tell us what you think.">
  <six-layout-grid columns="2">
    <six-input value="field1"></six-input>
    <six-input value="field2"></six-input>
  </six-layout-grid>
</six-group-label>
```



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute   | Description                                                                   | Type                             | Default    |
| ---------- | ----------- | ----------------------------------------------------------------------------- | -------------------------------- | ---------- |
| `disabled` | `disabled`  | Set to true to disable the label.                                             | `boolean`                        | `false`    |
| `helpText` | `help-text` | The wrapper label's help text. Alternatively, you can use the help-text slot. | `string`                         | `''`       |
| `label`    | `label`     | The wrapper label's label. Alternatively, you can use the label slot.         | `string`                         | `''`       |
| `required` | `required`  | Set to true to show an asterisk beneath the label.                            | `boolean`                        | `false`    |
| `size`     | `size`      | The label's size.                                                             | `"large" \| "medium" \| "small"` | `'medium'` |


## Slots

| Slot           | Description                                                                                     |
| -------------- | ----------------------------------------------------------------------------------------------- |
| `"error-text"` | Error text that is shown for validation errors. Alternatively, you can use the error-text prop. |
| `"help-text"`  | Help text that describes how to use the input.                                                  |
| `"label"`      | The wrapped component's label. Alternatively, you can use the label prop.                       |


## Shadow Parts

| Part             | Description                                                     |
| ---------------- | --------------------------------------------------------------- |
| `"base"`         | The component's base wrapper.                                   |
| `"form-control"` | The form control that wraps the label, textarea, and help text. |
| `"help-text"`    | The help text of the wrapped component.                         |
| `"label"`        | The label of wrapped component.                                 |


----------------------------------------------

Copyright © 2021-present SIX-Group
