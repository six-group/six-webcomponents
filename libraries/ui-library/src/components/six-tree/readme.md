# six-tree



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute   | Description                                                                                                                                                                                                                | Type                 | Default    |
| ----------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- | ---------- |
| `selection` | `selection` | The selection behavior of the tree. Single selection allows only one node to be selected at a time. Multiple displays checkboxes and allows more than one node to be selected. Leaf allows only leaf nodes to be selected. | `"leaf" \| "single"` | `'single'` |


## Events

| Event                  | Description | Type               |
| ---------------------- | ----------- | ------------------ |
| `six-selection-change` |             | `CustomEvent<any>` |


## Slots

| Slot              | Description                                                                     |
| ----------------- | ------------------------------------------------------------------------------- |
|                   | The default slot.                                                               |
| `"collapse-icon"` | The icon to show when the tree item is collapsed. Works best with `<six-icon>`. |
| `"expand-icon"`   | The icon to show when the tree item is expanded. Works best with `<six-icon>`.  |


## Shadow Parts

| Part     | Description |
| -------- | ----------- |
| `"base"` |             |


----------------------------------------------

Copyright © 2021-present SIX-Group
