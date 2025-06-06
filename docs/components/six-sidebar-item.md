# Sidebar Item


## six sidebar item

<docs-demo-six-sidebar-item-0></docs-demo-six-sidebar-item-0>

```html
<div style="width: 10em" id="six-sidebar-items-group">
  <six-sidebar-item value="data">Data</six-sidebar-item>
  <six-sidebar-item value="history">History</six-sidebar-item>
  <six-sidebar-item value="transactions">Transactions</six-sidebar-item>
  <six-sidebar-item value="upload">Upload</six-sidebar-item>
  <six-sidebar-item value="link" href="http://www.google.ch">Link</six-sidebar-item>
</div>
```


## six sidebar item with icons

<docs-demo-six-sidebar-item-1></docs-demo-six-sidebar-item-1>

```html
<div style="width: 10em" id="six-sidebar-items-icon">
  <six-sidebar-item icon="description">Data</six-sidebar-item>
  <six-sidebar-item icon="history">History</six-sidebar-item>
  <six-sidebar-item icon="account_balance">Transactions</six-sidebar-item>
  <six-sidebar-item icon="upload">Upload</six-sidebar-item>
  <six-sidebar-item icon="link" href="http://www.google.ch">Link</six-sidebar-item>
</div>
```



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                                                                                                                        | Type                  | Default     |
| ---------- | ---------- | ---------------------------------------------------------------------------------------------------------------------------------- | --------------------- | ----------- |
| `disabled` | `disabled` | Set to true to draw the sidebar item in a disabled state.                                                                          | `boolean`             | `false`     |
| `href`     | `href`     | Provide if the item should be rendered as anchor tag. Note, that the href is added automatically when using routerLink in Angular. | `string \| undefined` | `undefined` |
| `icon`     | `icon`     | Icon of the item                                                                                                                   | `string`              | `''`        |
| `selected` | `selected` | Set to true to draw the item in a selected state.                                                                                  | `boolean`             | `false`     |
| `value`    | `value`    | A unique value to store in the sidebar item. This can be used as a way to identify sidebar items when selected.                    | `string`              | `''`        |


## Slots

| Slot | Description                                           |
| ---- | ----------------------------------------------------- |
|      | Used to define the nested displayed text of the item. |


## Dependencies

### Depends on

- [six-icon](six-icon.html)

### Graph
```mermaid
graph TD;
  six-sidebar-item --> six-icon
  style six-sidebar-item fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

Copyright © 2021-present SIX-Group
