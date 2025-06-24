# Main Container


The SIX main container can be used to get consistent, dynamic, horizontal margins for the content of the main area in [six-root](six-root.html).

<docs-demo-six-main-container-0></docs-demo-six-main-container-0>

```html
<six-main-container class="show-margin">
  <div>This is the main content area.</div>
</six-main-container>
```


Set the `padded="false"` attribute to remove the top and bottom padding.

<docs-demo-six-main-container-1></docs-demo-six-main-container-1>

```html
<six-main-container padded="false">
  <div>This is the main content area without top or bottom padding.</div>
</six-main-container>
```


The following styles are used to better visualize the example.

<docs-demo-six-main-container-2></docs-demo-six-main-container-2>

```html
<style>
  six-main-container {
    background-color: var(--six-color-web-rock-100);
  }
  six-main-container.show-margin::part(left-margin),
  six-main-container.show-margin::part(right-margin) {
    background-color: rgba(106, 227, 0, 0.1);
  }
  six-main-container::part(content) {
    line-height: 200px;
  }
  six-main-container > div {
    text-align: center;
    background-color: rgba(33, 150, 243, 0.1);
    border: 1px solid #000;
  }
</style>
```



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description                                    | Type      | Default |
| -------- | --------- | ---------------------------------------------- | --------- | ------- |
| `padded` | `padded`  | Set to false to remove top and bottom padding. | `boolean` | `true`  |


## Slots

| Slot | Description                   |
| ---- | ----------------------------- |
|      | The main container's content. |


## Shadow Parts

| Part             | Description                        |
| ---------------- | ---------------------------------- |
| `"content"`      | The component's content area.      |
| `"left-margin"`  | The component's left margin area.  |
| `"right-margin"` | The component's right margin area. |


----------------------------------------------

Copyright © 2021-present SIX-Group
