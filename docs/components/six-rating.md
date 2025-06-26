# Rating


Rating allow the user to rate something.

<docs-demo-six-rating-0></docs-demo-six-rating-0>

```html
<six-rating></six-rating>
```


## Examples

<docs-demo-six-rating-1></docs-demo-six-rating-1>

```html
<h3>Small</h3>
<p>Small size value=3</p>
<six-rating value="3" size="small"></six-rating>
```


* * *

<docs-demo-six-rating-2></docs-demo-six-rating-2>

```html
<h3>Medium</h3>
<p>Medium size value=2, readonly</p>
<six-rating value="2" readonly></six-rating>
<p>With form label</p>
<six-rating value="0" label="My label"></six-rating>
<p>Disabled</p>
<six-rating value="3" disabled></six-rating>
<p>Error text</p>
<six-rating value="3" error-text="This is a simple string message"></six-rating>
```


* * *

<docs-demo-six-rating-3></docs-demo-six-rating-3>

```html
<h3>Large</h3>
<p>Large size value=0</p>
<six-rating value="0" size="xxLarge"></six-rating>
```



<!-- Auto Generated Below -->


## Properties

| Property         | Attribute          | Description                                                                                                      | Type                                                                                | Default     |
| ---------------- | ------------------ | ---------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------- |
| `disabled`       | `disabled`         | Set to true to disable the rating.                                                                               | `boolean`                                                                           | `false`     |
| `errorText`      | `error-text`       | The error message shown, if `invalid` is set to true.                                                            | `string \| string[]`                                                                | `''`        |
| `errorTextCount` | `error-text-count` | The number of error texts to be shown (if the error-text slot isn't used). Defaults to 1                         | `number \| undefined`                                                               | `undefined` |
| `invalid`        | `invalid`          | If this property is set to true and an error message is provided by `errorText`, the error message is displayed. | `boolean`                                                                           | `false`     |
| `label`          | `label`            | The label text.                                                                                                  | `string`                                                                            | `''`        |
| `max`            | `max`              | Maximum number of stars. Default is 5                                                                            | `number`                                                                            | `5`         |
| `name`           | `name`             | The rating's name attribute.                                                                                     | `string`                                                                            | `''`        |
| `readonly`       | `readonly`         | If its readonly                                                                                                  | `boolean`                                                                           | `false`     |
| `required`       | `required`         | Set to true to show an asterisk beneath the label.                                                               | `boolean`                                                                           | `false`     |
| `size`           | `size`             | Size of the stars                                                                                                | `"large" \| "medium" \| "small" \| "xLarge" \| "xSmall" \| "xxLarge" \| "xxxLarge"` | `'medium'`  |
| `value`          | `value`            | The rating's value attribute.                                                                                    | `number`                                                                            | `0`         |


## Events

| Event               | Description                                       | Type                     |
| ------------------- | ------------------------------------------------- | ------------------------ |
| `six-rating-blur`   | Emitted when the control loses focus.             | `CustomEvent<number>`    |
| `six-rating-change` | Emitted when the control's checked state changes. | `CustomEvent<number>`    |
| `six-rating-focus`  | Emitted when the control gains focus.             | `CustomEvent<undefined>` |


## Shadow Parts

| Part      | Description |
| --------- | ----------- |
| `"base"`  |             |
| `"input"` |             |


## Dependencies

### Depends on

- [six-icon](six-icon.html)
- [six-error](six-error.html)

### Graph
```mermaid
graph TD;
  six-rating --> six-icon
  six-rating --> six-error
  style six-rating fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

Copyright © 2021-present SIX-Group
