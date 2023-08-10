# six-progress-ring


## SixProgressRing

Progress rings are used to show the progress of a determinate operation in a circular fashion.

<docs-demo-six-progress-ring-204></docs-demo-six-progress-ring-204>

```html
<six-progress-ring percentage="50"></six-progress-ring>
```


## Examples

### Size

Use the `--size` attribute to set the diameter of the progress ring.

<docs-demo-six-progress-ring-205></docs-demo-six-progress-ring-205>

```html
<six-progress-ring percentage="50" size="200"></six-progress-ring>
```


### Stroke Width

Use the `stroke-width` attribute to set the width of the progress ring's indicator.

<docs-demo-six-progress-ring-206></docs-demo-six-progress-ring-206>

```html
<six-progress-ring percentage="50" stroke-width="10"></six-progress-ring>
```


### Colors

To change the color, use the `--track-color` and `--indicator-color` custom properties.

<docs-demo-six-progress-ring-207></docs-demo-six-progress-ring-207>

```html
<six-progress-ring percentage="50" style="--track-color: tomato; --indicator-color: green"></six-progress-ring>
```


### Labels

Use the default slot to show a label.

<docs-demo-six-progress-ring-208></docs-demo-six-progress-ring-208>

```html
<six-progress-ring percentage="50" size="200" class="progress-ring-labels" style="margin-bottom: 0.5rem"
  >50%</six-progress-ring>

<br>

<six-button size="small" circle><six-icon size="small">remove</six-icon></six-button>
<six-button size="small" circle><six-icon size="small">add</six-icon></six-button>

<script type="module">
  const progressRing = document.querySelector('.progress-ring-labels');
  const subtractButton = progressRing.nextElementSibling.nextElementSibling;
  const addButton = subtractButton.nextElementSibling;

  addButton.addEventListener('click', () => {
    const percentage = Math.min(100, progressRing.percentage + 10);
    progressRing.percentage = percentage;
    progressRing.textContent = `${percentage}%`;
  });

  subtractButton.addEventListener('click', () => {
    const percentage = Math.max(0, progressRing.percentage - 10);
    progressRing.percentage = percentage;
    progressRing.textContent = `${percentage}%`;
  });
</script>
```



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute      | Description                                      | Type     | Default |
| ------------- | -------------- | ------------------------------------------------ | -------- | ------- |
| `percentage`  | `percentage`   | The current progress percentage, 0 - 100.        | `number` | `0`     |
| `size`        | `size`         | The size of the progress ring in pixels.         | `number` | `128`   |
| `strokeWidth` | `stroke-width` | The stroke width of the progress ring in pixels. | `number` | `4`     |


## Slots

| Slot | Description                      |
| ---- | -------------------------------- |
|      | A label to show inside the ring. |


## Shadow Parts

| Part      | Description                   |
| --------- | ----------------------------- |
| `"base"`  | The component's base wrapper. |
| `"label"` | The progress ring label.      |


## CSS Custom Properties

| Name                | Description          |
| ------------------- | -------------------- |
| `--indicator-color` | The indicator color. |
| `--track-color`     | The track color.     |


----------------------------------------------

Copyright © 2021-present SIX-Group
