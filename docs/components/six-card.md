# Card

Simple card implementation.


## Card

Cards group related content and actions about a single subject.

<docs-demo-six-card-0></docs-demo-six-card-0>

```html
<six-card style="max-width: 400px">
  <h3 slot="header">Card Title</h3>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
</six-card>
```


## Examples

### Subtitle

Add more elements to the `header` slot to show a subtitle. Use a heading for the title and a non-heading element (e.g. `<p>`) for the subtitle, so the subtitle does not show up in the page's heading outline.

<docs-demo-six-card-1></docs-demo-six-card-1>

```html
<six-card style="max-width: 400px">
  <h3 slot="header">Card Title</h3>
  <p slot="header">Card Subtitle</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
</six-card>
```


### Media

Use the `media` slot to show an image at the top of the card.

<docs-demo-six-card-2></docs-demo-six-card-2>

```html
<six-card style="max-width: 400px">
  <img             slot="media"
    src="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PScwIDAgMTAyNCA1MTInIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHJlY3Qgd2lkdGg9JzEwMjQnIGhlaWdodD0nNTEyJyBmaWxsPScjY2NjY2NjJyAvPjwvc3ZnPg=="
    alt="Grey placeholder"
  >
  <h3 slot="header">Card Title</h3>
  <p slot="header">Card Subtitle</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
</six-card>
```


### Header Actions

Use the `header-actions` slot to place content, such as icon buttons, at the end of the header.

<docs-demo-six-card-3></docs-demo-six-card-3>

```html
<six-card style="max-width: 400px">
  <h3 slot="header">Card Title</h3>
  <p slot="header">Card Subtitle</p>
  <six-icon-button slot="header-actions" name="more_vert" label="More options"></six-icon-button>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
</six-card>
```


### Tag

Tags and badges placed in the default slot keep their natural width.

<docs-demo-six-card-4></docs-demo-six-card-4>

```html
<six-card style="max-width: 400px">
  <h3 slot="header">Card Title</h3>
  <p slot="header">Card Subtitle</p>
  <six-tag size="small" pill>Tag</six-tag>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
</six-card>
```


### Footer Actions

Use the `footer-actions` slot to place buttons at the end of the footer.

<docs-demo-six-card-5></docs-demo-six-card-5>

```html
<six-card style="max-width: 400px">
  <h3 slot="header">Card Title</h3>
  <p slot="header">Card Subtitle</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
  <six-button slot="footer-actions" type="secondary">Cancel</six-button>
  <six-button slot="footer-actions" type="primary">Save</six-button>
</six-card>
```


### Footer

Use the `footer` slot to place content, such as icon buttons, at the start of the footer. It can be combined with the `footer-actions` slot.

<docs-demo-six-card-6></docs-demo-six-card-6>

```html
<six-card style="max-width: 400px">
  <img             slot="media"
    src="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PScwIDAgMTAyNCA1MTInIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHJlY3Qgd2lkdGg9JzEwMjQnIGhlaWdodD0nNTEyJyBmaWxsPScjY2NjY2NjJyAvPjwvc3ZnPg=="
    alt="Grey placeholder"
  >
  <h3 slot="header">Card Title</h3>
  <p slot="header">Card Subtitle</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
  <six-icon-button slot="footer" name="share" size="small" label="Share"></six-icon-button>
  <six-icon-button slot="footer" name="edit" size="small" label="Edit"></six-icon-button>
  <six-icon-button slot="footer" name="delete" size="small" label="Delete"></six-icon-button>
  <six-button slot="footer-actions" type="primary">Open</six-button>
</six-card>
```


### Elevated

Use the `elevated` attribute to let the card cast a shadow.

<docs-demo-six-card-7></docs-demo-six-card-7>

```html
<six-card style="max-width: 400px" elevated>
  <h3 slot="header">Card Title</h3>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
</six-card>
```


### Custom Padding

Set the `--six-card-padding` custom property to change the padding of the card sections.

<docs-demo-six-card-8></docs-demo-six-card-8>

```html
<six-card style="max-width: 400px; --six-card-padding: var(--six-spacing-x-large)">
  <h3 slot="header">Card Title</h3>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
</six-card>
```



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                                | Type      | Default |
| ---------- | ---------- | ------------------------------------------ | --------- | ------- |
| `elevated` | `elevated` | Set to true to let the card cast a shadow. | `boolean` | `false` |


## Slots

| Slot               | Description                                                                                                       |
| ------------------ | ----------------------------------------------------------------------------------------------------------------- |
|                    | Used to define the content of the card.                                                                           |
| `"footer"`         | An optional footer for the card, left-aligned (e.g. secondary/icon buttons).                                      |
| `"footer-actions"` | An optional actions section in the footer, right-aligned (e.g. primary actions).                                  |
| `"header"`         | An optional header for the card. Headings (`h1`-`h6`) are styled as title, other elements (e.g. `p`) as subtitle. |
| `"header-actions"` | Optional content right-aligned in the header (e.g. an icon button).                                               |
| `"media"`          | An optional media section to render at the start (top) of the card.                                               |


## Shadow Parts

| Part        | Description                   |
| ----------- | ----------------------------- |
| `"base"`    | The component's base wrapper. |
| `"content"` | The content container.        |
| `"footer"`  | The footer container.         |
| `"header"`  | The header container.         |
| `"media"`   | The media container.          |


## CSS Custom Properties

| Name                    | Description                         |
| ----------------------- | ----------------------------------- |
| `--six-card-box-shadow` | The box shadow of an elevated card. |
| `--six-card-padding`    | The padding of the card sections.   |


----------------------------------------------

Copyright © 2021-present SIX-Group
