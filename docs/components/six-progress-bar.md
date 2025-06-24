# Progress Bar


## SixProgressBar

Progress bars are used to show the status of an ongoing operation.

<docs-demo-six-progress-bar-0></docs-demo-six-progress-bar-0>

```html
<six-progress-bar percentage="50"></six-progress-bar>
```


## Examples

### Custom Height

Use the `--height` custom property to set the progress bar's height.

<docs-demo-six-progress-bar-1></docs-demo-six-progress-bar-1>

```html
<six-progress-bar percentage="50" style="--height: 6px"></six-progress-bar>
```


### Labels

Use the default slot to show a label.

<docs-demo-six-progress-bar-2></docs-demo-six-progress-bar-2>

```html
<six-progress-bar percentage="50" class="progress-bar-labels">50%</six-progress-bar>

<br>

<six-button size="small" circle><six-icon size="small">remove</six-icon></six-button>
<six-button size="small" circle><six-icon size="small">add</six-icon></six-button>

<script type="module">
  const progressBar = document.querySelector('.progress-bar-labels');
  const subtractButton = progressBar.nextElementSibling.nextElementSibling;
  const addButton = subtractButton.nextElementSibling;

  addButton.addEventListener('click', () => {
    const percentage = Math.min(100, progressBar.percentage + 10);
    progressBar.percentage = percentage;
    progressBar.textContent = `${percentage}%`;
  });

  subtractButton.addEventListener('click', () => {
    const percentage = Math.max(0, progressBar.percentage - 10);
    progressBar.percentage = percentage;
    progressBar.textContent = `${percentage}%`;
  });
</script>
```


### Indeterminate

The `indeterminate` attribute can be used to inform the user that the operation is pending, but its status cannot currently be determined. In this state, `percentage` is ignored and the label, if present, will not be shown.

<docs-demo-six-progress-bar-3></docs-demo-six-progress-bar-3>

```html
<six-progress-bar indeterminate></six-progress-bar>
```



<!-- Auto Generated Below -->


## Properties

| Property        | Attribute       | Description                                                                                                     | Type      | Default |
| --------------- | --------------- | --------------------------------------------------------------------------------------------------------------- | --------- | ------- |
| `indeterminate` | `indeterminate` | When true, percentage is ignored, the label is hidden, and the progress bar is drawn in an indeterminate state. | `boolean` | `false` |
| `percentage`    | `percentage`    | The progress bar's percentage, 0 to 100.                                                                        | `number`  | `0`     |


## Slots

| Slot | Description                           |
| ---- | ------------------------------------- |
|      | A label to show inside the indicator. |


## Shadow Parts

| Part          | Description                   |
| ------------- | ----------------------------- |
| `"base"`      | The component's base wrapper. |
| `"indicator"` | The progress bar indicator.   |
| `"label"`     | The progress bar label.       |


## CSS Custom Properties

| Name                | Description                |
| ------------------- | -------------------------- |
| `--height`          | The progress bar's height. |
| `--indicator-color` | The indicator color.       |
| `--label-color`     | The label color.           |
| `--track-color`     | The track color.           |


----------------------------------------------

Copyright © 2021-present SIX-Group
