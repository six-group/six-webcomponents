# six-sidebar

Sidebars are used in combination with the <a href="six-root.html">six-root</a> layout. They are used for static menus on the left or right
of the main content.
If you want the user to execute an intermediary task and force a context-switch use six-drawer instead.

<!-- EXAMPLES -->

<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                                                                               | Type                | Default  |
| ---------- | ---------- | ----------------------------------------------------------------------------------------- | ------------------- | -------- |
| `open`     | `open`     | Indicates whether the sidebar is open. You can use this in lieu of the show/hide methods. | `boolean`           | `false`  |
| `position` | `position` | Sidebar position                                                                          | `"left" \| "right"` | `'left'` |
| `toggled`  | `toggled`  | Define whether sidebar is toggled meaning only one menu can be open at the same time      | `boolean`           | `false`  |


## Events

| Event                       | Description                                                                                                                                                                                              | Type                     |
| --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| `six-sidebar-after-hide`    | Emitted after the sidebar closes and all transitions are complete.                                                                                                                                       | `CustomEvent<undefined>` |
| `six-sidebar-after-show`    | Emitted after the sidebar opens and all transitions are complete.                                                                                                                                        | `CustomEvent<undefined>` |
| `six-sidebar-hide`          | Emitted when the sidebar closes. Calling `event.preventDefault()` will prevent it from being closed.                                                                                                     | `CustomEvent<undefined>` |
| `six-sidebar-initial-focus` | Emitted when the sidebar opens and the panel gains focus. Calling `event.preventDefault()` will prevent focus and allow you to set it on a different element in the sidebar, such as an input or button. | `CustomEvent<undefined>` |
| `six-sidebar-show`          | Emitted when the sidebar opens. Calling `event.preventDefault()` will prevent it from being opened.                                                                                                      | `CustomEvent<undefined>` |


## Methods

### `hide() => Promise<void>`

Hides the sidebar

#### Returns

Type: `Promise<void>`



### `selectItemByIndex(index: number) => Promise<void>`

Allows to select a menu item programmatically by index

#### Parameters

| Name    | Type     | Description |
| ------- | -------- | ----------- |
| `index` | `number` |             |

#### Returns

Type: `Promise<void>`



### `selectItemByName(value: string) => Promise<void>`

Allows to select a menu item programmatically by name

#### Parameters

| Name    | Type     | Description |
| ------- | -------- | ----------- |
| `value` | `string` |             |

#### Returns

Type: `Promise<void>`



### `show() => Promise<void>`

Shows the sidebar

#### Returns

Type: `Promise<void>`



### `toggle() => Promise<void>`

Toggles whether the sidebar should be shown or hidden

#### Returns

Type: `Promise<void>`




## Slots

| Slot | Description                                       |
| ---- | ------------------------------------------------- |
|      | Used to define the nested side bar [group] items. |


## Shadow Parts

| Part          | Description |
| ------------- | ----------- |
| `"container"` |             |


----------------------------------------------

Copyright © 2021-present SIX-Group
