# six-layout-grid


By default a 12 column grid is provided for the component's content.

<docs-demo-six-layout-grid-176></docs-demo-six-layout-grid-176>

```html
<six-layout-grid>
  <div>Col 1</div>
  <div>Col 2</div>
  <div style="grid-column: span 4">Col 3 - 6</div>
  <div>Col 7</div>
  <div style="grid-column: span 5">Col 8 - 12</div>
  <div style="grid-column: span 7">Col 1 - 7</div>
  <div>Col 8</div>
  <div style="grid-column: span 3">Col 9 - 11</div>
  <div>Col 12</div>
</six-layout-grid>
```


Set the `columns` attribute to provide a grid with a custom number of columns.

<docs-demo-six-layout-grid-177></docs-demo-six-layout-grid-177>

```html
<six-layout-grid columns="6">
  <div>Col 1</div>
  <div>Col 2</div>
  <div style="grid-column: span 4">Col 3 - 6</div>
  <div>Col 1</div>
  <div style="grid-column: span 5">Col 2 - 6</div>
</six-layout-grid>
```


The following styles are used to better visualize the example.

<docs-demo-six-layout-grid-178></docs-demo-six-layout-grid-178>

```html
<style>
  six-layout-grid div {
    text-align: center;
    border: 1px solid #000;
    line-height: 50px;
  }
</style>
```



<!-- Auto Generated Below -->


## Properties

| Property  | Attribute | Description                    | Type                  | Default     |
| --------- | --------- | ------------------------------ | --------------------- | ----------- |
| `columns` | `columns` | Set the number of grid columns | `number \| undefined` | `undefined` |


## Slots

| Slot | Description        |
| ---- | ------------------ |
|      | The grid's content |


----------------------------------------------

Copyright © 2021-present SIX-Group
