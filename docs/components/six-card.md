# Card

Simple card implementation.


<docs-demo-six-card-0></docs-demo-six-card-0>

```html
<h3>Basic Usage</h3>
<div style="max-width: 400px; margin: auto">
  <six-card>
    <h2 slot="header">Card Title</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
  </six-card>
</div>
```


<docs-demo-six-card-1></docs-demo-six-card-1>

```html
<h3>Media Cards</h3>
<div style="max-width: 400px; margin: auto">
  <six-card>
    <img               slot="media"
      src="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PScwIDAgMTAyNCA1MTInIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHJlY3Qgd2lkdGg9JzEwMjQnIGhlaWdodD0nNTEyJyBmaWxsPScjY2NjY2NjJyAvPjwvc3ZnPg=="
      alt="Grey placeholder"
    >
    <h2 slot="header">Card Title</h2>
    <h3 slot="header">Card Subtitle</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
  </six-card>
</div>
```


<docs-demo-six-card-2></docs-demo-six-card-2>

```html
<h3>Header Icon</h3>
<div style="max-width: 400px; margin: auto">
  <six-card>
    <h2 slot="header">Card Title</h2>
    <h3 slot="header">Card Subtitle</h3>
    <six-icon slot="header-actions" name="headset" size="large"></six-icon>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
  </six-card>
</div>
```


<docs-demo-six-card-3></docs-demo-six-card-3>

```html
<h3>Tag</h3>
<div style="max-width: 400px; margin: auto">
  <six-card>
    <h2 slot="header">Card Title</h2>
    <h3 slot="header">Card Subtitle</h3>
    <six-tag size="small" pill>Tag</six-tag>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
  </six-card>
</div>
```


<docs-demo-six-card-4></docs-demo-six-card-4>

```html
<h3>Card Buttons</h3>
<div style="max-width: 400px; margin: auto">
  <six-card shadow>
    <h2 slot="header">Card Title</h2>
    <h3 slot="header">Card Subtitle</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    <six-button slot="footer-actions" type="secondary">Action 1</six-button>
    <six-button slot="footer-actions" type="primary">Primary Action</six-button>
  </six-card>
</div>
```


<docs-demo-six-card-5></docs-demo-six-card-5>

```html
<h3>Footer with Icon Buttons and Action</h3>
<div style="max-width: 400px; margin: auto">
  <six-card>
    <img               slot="media"
      src="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PScwIDAgMTAyNCA1MTInIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHJlY3Qgd2lkdGg9JzEwMjQnIGhlaWdodD0nNTEyJyBmaWxsPScjY2NjY2NjJyAvPjwvc3ZnPg=="
      alt="Grey placeholder"
    >
    <h2 slot="header">Card Title</h2>
    <h3 slot="header">Card Subtitle</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    <six-icon-button slot="footer" name="share" size="small" label="Share"></six-icon-button>
    <six-icon-button slot="footer" name="edit" size="small" label="Edit"></six-icon-button>
    <six-icon-button slot="footer" name="delete" size="small" label="Delete"></six-icon-button>
    <six-button slot="footer-actions" type="primary">Button</six-button>
  </six-card>
</div>
```



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description                   | Type      | Default |
| -------- | --------- | ----------------------------- | --------- | ------- |
| `shadow` | `shadow`  | Set to true to show a shadow. | `boolean` | `false` |


## Slots

| Slot               | Description                                                                      |
| ------------------ | -------------------------------------------------------------------------------- |
|                    | Used to define the content of the card.                                          |
| `"footer"`         | An optional footer for the card, left-aligned (e.g. secondary/icon buttons).     |
| `"footer-actions"` | An optional actions section in the footer, right-aligned (e.g. primary actions). |
| `"header"`         | An optional header for the card (e.g. title/subtitle).                           |
| `"header-actions"` | Optional content right-aligned in the header (e.g. an icon).                     |
| `"media"`          | An optional media section to render at the start (top) of the card.              |


## Shadow Parts

| Part        | Description                   |
| ----------- | ----------------------------- |
| `"base"`    | The component's base wrapper. |
| `"content"` | The content container.        |
| `"footer"`  | The footer container.         |
| `"header"`  | The header container.         |
| `"image"`   | The media container.          |


----------------------------------------------

Copyright © 2021-present SIX-Group
