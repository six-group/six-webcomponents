# six-badge


# Badge

Badges are used to draw attention and display statuses or counts.

<docs-demo-six-badge-13></docs-demo-six-badge-13>

```html
<six-badge>Badge</six-badge>
```


## Examples

### Types

Set the `type` attribute to change the badge's type.

<docs-demo-six-badge-14></docs-demo-six-badge-14>

```html
<six-badge>Badge</six-badge>
```


### Pill Badges

Use the `pill` attribute to give badges rounded edges.

<docs-demo-six-badge-15></docs-demo-six-badge-15>

```html
<six-badge type="primary" pill>Primary</six-badge>
<six-badge type="info" pill>Info</six-badge>
<six-badge type="success" pill>Success</six-badge>
<six-badge type="warning" pill>Warning</six-badge>
<six-badge type="danger" pill>Danger</six-badge>
<six-badge type="action" pill>Action</six-badge>
```


### Pulsating Badges

Use the `pulse` attribute to draw attention to the badge with a subtle animation.

<docs-demo-six-badge-16></docs-demo-six-badge-16>

```html
<div class="badge-pulse">
  <six-badge type="primary" pill pulse>1</six-badge>
  <six-badge type="info" pill pulse>1</six-badge>
  <six-badge type="success" pill pulse>1</six-badge>
  <six-badge type="warning" pill pulse>1</six-badge>
  <six-badge type="danger" pill pulse>1</six-badge>
  <six-badge type="action" pill pulse>1</six-badge>
</div>

<style>
  .badge-pulse six-badge:not(:last-of-type) {
    margin-right: 1rem;
  }
</style>
```


### With Buttons

One of the most common use cases for badges is attaching them to buttons. To make this easier, badges will be automatically positioned at the top-right when they're a child of a button.

<docs-demo-six-badge-17></docs-demo-six-badge-17>

```html
<six-button>
  Requests
  <six-badge pill>30</six-badge>
</six-button>

<six-button style="margin-left: 1rem">
  Warnings
  <six-badge type="warning" pill>8</six-badge>
</six-button>

<six-button style="margin-left: 1rem">
  Errors
  <six-badge type="danger" pill>6</six-badge>
</six-button>
```


### With Menu Items

When including badges in menu items, use the `suffix` slot to make sure they're aligned correctly.

<docs-demo-six-badge-18></docs-demo-six-badge-18>

```html
<six-menu           style="
    max-width: 240px;
    border: solid 1px var(--six-panel-border-color);
    border-radius: var(--six-border-radius-medium);
  "
>
  <six-menu-label>Messages</six-menu-label>
  <six-menu-item>Comments <six-badge slot="suffix" pill>4</six-badge></six-menu-item>
  <six-menu-item>Replies <six-badge slot="suffix" pill>12</six-badge></six-menu-item>
</six-menu>
```



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description                                                | Type                                                                                   | Default     |
| -------- | --------- | ---------------------------------------------------------- | -------------------------------------------------------------------------------------- | ----------- |
| `pill`   | `pill`    | Set to true to draw a pill-style badge with rounded edges. | `boolean`                                                                              | `false`     |
| `pulse`  | `pulse`   | Set to true to make the badge pulsate to draw attention.   | `boolean`                                                                              | `false`     |
| `type`   | `type`    | The badge's type.                                          | `"action" \| "danger" \| "info" \| "primary" \| "secondary" \| "success" \| "warning"` | `'primary'` |


## Slots

| Slot | Description          |
| ---- | -------------------- |
|      | The badge's content. |


## Shadow Parts

| Part     | Description      |
| -------- | ---------------- |
| `"base"` | The base wrapper |


----------------------------------------------

Copyright © 2021-present SIX-Group
