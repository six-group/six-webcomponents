# six-tab-panel


Tab panels are used inside tab groups to display content.  
Additional demonstrations can be found in the [tab group examples](six-tab-group.html).

<docs-demo-six-tab-panel-274></docs-demo-six-tab-panel-274>

```html
<six-tab-group>
  <six-tab slot="nav" panel="general">General</six-tab>
  <six-tab slot="nav" panel="custom">Custom</six-tab>
  <six-tab slot="nav" panel="advanced">Advanced</six-tab>
  <six-tab slot="nav" panel="disabled" disabled>Disabled</six-tab>

  <six-tab-panel name="general">This is the general tab panel.</six-tab-panel>
  <six-tab-panel name="custom">This is the custom tab panel.</six-tab-panel>
  <six-tab-panel name="advanced">This is the advanced tab panel.</six-tab-panel>
  <six-tab-panel name="disabled">This is a disabled tab panel.</six-tab-panel>
</six-tab-group>
```



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description                             | Type      | Default |
| -------- | --------- | --------------------------------------- | --------- | ------- |
| `active` | `active`  | When true, the tab panel will be shown. | `boolean` | `false` |
| `name`   | `name`    | The tab panel's name.                   | `string`  | `''`    |


## Slots

| Slot | Description              |
| ---- | ------------------------ |
|      | The tab panel's content. |


## Shadow Parts

| Part     | Description                   |
| -------- | ----------------------------- |
| `"base"` | The component's base wrapper. |


----------------------------------------------

Copyright © 2021-present SIX-Group
