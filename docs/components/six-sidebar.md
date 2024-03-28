# Sidebar

Sidebars are used in combination with the <a href="six-root.html">six-root</a> layout. They are used for static menus on the left or right
of the main content.
If you want the user to execute an intermediary task and force a context-switch use six-drawer instead.


# Basic sidebar

six-sidebar allows to add a static sidebar to the left or right of the `six-root` holygrail layout

<docs-demo-six-sidebar-0></docs-demo-six-sidebar-0>

```html
<six-sidebar position="left" width="20rem" open>
  <six-sidebar-item-group icon="description" name="Upload" value="upload">
    <six-sidebar-item value="data" disabled="true">Data</six-sidebar-item>
    <six-sidebar-item value="history">History</six-sidebar-item>
    <six-sidebar-item-group icon="settings" name="Settings">
      <six-sidebar-item value="data" selected>Data</six-sidebar-item>
      <six-sidebar-item value="history">History</six-sidebar-item>
    </six-sidebar-item-group>
  </six-sidebar-item-group>
  <six-sidebar-item-group             icon="task"
    name="Tasks with very long title which wraps multiple lines but should still have the correct layout"
    value="tasks"
    summary-icon="settings"
  >
    <six-sidebar-item value="open">Open</six-sidebar-item>
    <six-sidebar-item value="closed">Closed</six-sidebar-item>
  </six-sidebar-item-group>
  <six-sidebar-item-group icon="ac_unit" name="3. Ownership Information and Management Structure">
    <b slot="summary-icon">99%</b>
    <six-sidebar-item value="controlling">
      3.1 Details of controlling person(s) - individual(s)
    </six-sidebar-item>
    <six-sidebar-item value="provision"
      >3.2 Please provide the names of the institutions Board of directors (all members)
    </six-sidebar-item>
    <six-sidebar-item value="managmeent">
      3.3 Please provide the names of the institutions Management Board (all members)
    </six-sidebar-item>
    <six-sidebar-item-group name="3.4 Settings">
      <six-sidebar-item value="long1" selected>
        3.4.1 This is also a very long string to check how it's displayed
      </six-sidebar-item>
      <six-sidebar-item value="long2" selected>
        3.4.2 This is also a very long string to check how it's displayed
      </six-sidebar-item>
    </six-sidebar-item-group>
  </six-sidebar-item-group>
  <six-sidebar-item-group icon="settings" name="Reclaims"></six-sidebar-item-group>
</six-sidebar>

<six-dialog label="Dialog" class="dialog-overview">
  <pre></pre>
  <six-button slot="footer" type="primary">Close</six-button>
</six-dialog>

<script type="module">
  const getElements = (e) =>
    Object.entries(e).reduce(
      (e, [r, t]) => ({
        ...e,
        [r]: Array.isArray(t)
          ? t.flatMap((s) => Array.from(document.querySelectorAll(s)))
          : document.querySelector(t),
      }),
      {}
    );

  const Select = getElements({
    sidebar: 'six-sidebar',
    items: ['six-sidebar-item'],
    dialog: 'six-dialog',
    details: 'six-dialog pre',
    close: 'six-button[slot="footer"]',
  });

  const log = (el) => () => {
    Select.dialog.label = 'Click';
    Select.details.innerHTML = el.innerHTML;
    Select.dialog.show();
  };

  Select.items.forEach((item) => {
    item.addEventListener('click', log(item));
  });

  Select.close.addEventListener('click', () => {
    Select.dialog.hide();
  });
</script>
```


# Sidebar with toggling menus

By default you can open multiple menus. However there might be usecases when you want to allow only one menu item to be open at the same time. For this simply set the `toggled` attribute to the sidebar. If you now open a menu item all siblings of this menu item will be closed.

<docs-demo-six-sidebar-1></docs-demo-six-sidebar-1>

```html
<six-sidebar position="left" width="20rem" toggled open>
  <six-sidebar-item-group icon="description" name="Section A" value="upload">
    <six-sidebar-item value="data" disabled="true">Aa</six-sidebar-item>
    <six-sidebar-item value="history">Ab</six-sidebar-item>
    <six-sidebar-item-group icon="settings" name="Ac">
      <six-sidebar-item value="data" selected>Aca</six-sidebar-item>
      <six-sidebar-item value="history">Acb</six-sidebar-item>
      <six-sidebar-item-group icon="description" name="Acc" value="upload">
        <six-sidebar-item value="data" disabled="true">Acca</six-sidebar-item>
        <six-sidebar-item value="history">Accb</six-sidebar-item>
        <six-sidebar-item-group icon="settings" name="Accc">
          <six-sidebar-item value="data" selected>Acca</six-sidebar-item>
          <six-sidebar-item value="history">Accb</six-sidebar-item>
        </six-sidebar-item-group>
        <six-sidebar-item-group icon="settings" name="Ad">
          <six-sidebar-item value="data" selected>Ada</six-sidebar-item>
          <six-sidebar-item value="history">Adb</six-sidebar-item>
        </six-sidebar-item-group>
        <six-sidebar-item-group icon="settings" name="Ae">
          <six-sidebar-item value="data" selected>Aea</six-sidebar-item>
          <six-sidebar-item value="history">Aeb</six-sidebar-item>
        </six-sidebar-item-group>
      </six-sidebar-item-group>
    </six-sidebar-item-group>
    <six-sidebar-item-group icon="settings" name="Ad">
      <six-sidebar-item value="data" selected>Ada</six-sidebar-item>
      <six-sidebar-item value="history">Adb</six-sidebar-item>
    </six-sidebar-item-group>
    <six-sidebar-item-group icon="settings" name="Ae"></six-sidebar-item-group>
  </six-sidebar-item-group>
  <six-sidebar-item-group icon="description" name="Section B" value="upload">
    <six-sidebar-item value="data" disabled="true">Ba</six-sidebar-item>
    <six-sidebar-item value="history">Bb</six-sidebar-item>
    <six-sidebar-item-group icon="settings" name="Bc">
      <six-sidebar-item value="data" selected>Bca</six-sidebar-item>
      <six-sidebar-item value="history">Bcb</six-sidebar-item>
    </six-sidebar-item-group>
  </six-sidebar-item-group>
  <six-sidebar-item-group icon="settings" name="Reclaims"
    ><b slot="summary-icon">99%</b></six-sidebar-item-group>
</six-sidebar>

<six-dialog label="Dialog" class="dialog-overview">
  <pre></pre>
  <six-button slot="footer" type="primary">Close</six-button>
</six-dialog>
```


# Programmatically open/close Sidebar

You can programmatically control the sidebar with two available methods: `selectItemByIndex` and `selectItemByName`

The following has many filler section elements to clearly show that the selected item will also be scrolled into view

<docs-demo-six-sidebar-2></docs-demo-six-sidebar-2>

```html
<div id="sidebar-programmatic-buttonbar" style="margin-bottom: 1em">
  <div style="margin-bottom: 1em">
    <six-button>Select A by index</six-button>
    <six-button>Select B by index</six-button>
    <six-button>Select C by index</six-button>
  </div>
  <div>
    <six-button>Select A by value</six-button>
    <six-button>Select B by value</six-button>
    <six-button>Select C by value</six-button>
  </div>
</div>

<six-sidebar id="sidebar-programmatic-example" position="left" width="20rem" toggled open style="height: 12em">
  <six-sidebar-item-group icon="description" name="Section A" value="sectionA">
    <six-sidebar-item value="data" disabled="true">Aa</six-sidebar-item>
    <six-sidebar-item value="history">Ab</six-sidebar-item>
    <six-sidebar-item-group icon="settings" name="Ad">
      <six-sidebar-item value="data" selected>Ada</six-sidebar-item>
      <six-sidebar-item value="history">Adb</six-sidebar-item>
    </six-sidebar-item-group>
    <six-sidebar-item-group icon="settings" name="Ae"></six-sidebar-item-group>
  </six-sidebar-item-group>
  <six-sidebar-item-group icon="description" name="Section filler"></six-sidebar-item-group>
  <six-sidebar-item-group icon="description" name="Section filler"></six-sidebar-item-group>
  <six-sidebar-item-group icon="description" name="Section filler"></six-sidebar-item-group>
  <six-sidebar-item-group icon="description" name="Section filler"></six-sidebar-item-group>
  <six-sidebar-item-group icon="description" name="Section filler"></six-sidebar-item-group>
  <six-sidebar-item-group icon="description" name="Section filler"></six-sidebar-item-group>
  <six-sidebar-item-group icon="description" name="Section filler"></six-sidebar-item-group>
  <six-sidebar-item-group icon="description" name="Section filler"></six-sidebar-item-group>
  <six-sidebar-item-group icon="description" name="Section filler"></six-sidebar-item-group>
  <six-sidebar-item-group icon="description" name="Section filler"></six-sidebar-item-group>
  <six-sidebar-item-group icon="description" name="Section filler"></six-sidebar-item-group>
  <six-sidebar-item-group icon="description" name="Section filler"></six-sidebar-item-group>
  <six-sidebar-item-group icon="description" name="Section filler"></six-sidebar-item-group>
  <six-sidebar-item-group icon="description" name="Section filler"></six-sidebar-item-group>
  <six-sidebar-item-group icon="description" name="Section filler"></six-sidebar-item-group>
  <six-sidebar-item-group icon="description" name="Section filler"></six-sidebar-item-group>
  <six-sidebar-item-group icon="description" name="Section filler"></six-sidebar-item-group>
  <six-sidebar-item-group icon="description" name="Section filler"></six-sidebar-item-group>
  <six-sidebar-item-group icon="description" name="Section B" value="sectionB">
    <six-sidebar-item value="data" disabled="true">Ba</six-sidebar-item>
    <six-sidebar-item value="history">Bb</six-sidebar-item>
    <six-sidebar-item-group icon="settings" name="Bc">
      <six-sidebar-item value="data" selected>Bca</six-sidebar-item>
      <six-sidebar-item value="history">Bcb</six-sidebar-item>
    </six-sidebar-item-group>
  </six-sidebar-item-group>
  <six-sidebar-item-group icon="description" name="Section filler"></six-sidebar-item-group>
  <six-sidebar-item-group icon="description" name="Section filler"></six-sidebar-item-group>
  <six-sidebar-item-group icon="description" name="Section filler"></six-sidebar-item-group>
  <six-sidebar-item-group icon="description" name="Section filler"></six-sidebar-item-group>
  <six-sidebar-item-group icon="description" name="Section filler"></six-sidebar-item-group>
  <six-sidebar-item-group icon="description" name="Section filler"></six-sidebar-item-group>
  <six-sidebar-item-group icon="description" name="Section filler"></six-sidebar-item-group>
  <six-sidebar-item-group icon="description" name="Section filler"></six-sidebar-item-group>
  <six-sidebar-item-group icon="description" name="Section filler"></six-sidebar-item-group>
  <six-sidebar-item-group icon="description" name="Section filler"></six-sidebar-item-group>
  <six-sidebar-item-group icon="description" name="Section filler"></six-sidebar-item-group>
  <six-sidebar-item-group icon="description" name="Section filler"></six-sidebar-item-group>
  <six-sidebar-item-group icon="description" name="Section filler"></six-sidebar-item-group>
  <six-sidebar-item-group icon="description" name="Section filler"></six-sidebar-item-group>
  <six-sidebar-item-group icon="description" name="Section filler"></six-sidebar-item-group>
  <six-sidebar-item-group icon="description" name="Section filler"></six-sidebar-item-group>
  <six-sidebar-item-group icon="description" name="Section filler"></six-sidebar-item-group>
  <six-sidebar-item-group icon="description" name="Section filler"></six-sidebar-item-group>
  <six-sidebar-item-group icon="settings" name="Section C"
    ><b slot="summary-icon">99%</b></six-sidebar-item-group>
</six-sidebar>

<script type="module">
  const sidebar = document.getElementById('sidebar-programmatic-example');
  const [buttonAIdx, buttonBIdx, buttonCIdx, buttonAVal, buttonBVal, buttonCVal] = document
    .getElementById('sidebar-programmatic-buttonbar')
    .querySelectorAll('six-button');

  buttonAIdx.onclick = () => {
    sidebar.selectItemByIndex(0);
  };

  buttonBIdx.onclick = () => {
    sidebar.selectItemByIndex(19);
  };

  buttonCIdx.onclick = () => {
    sidebar.selectItemByIndex(38);
  };

  buttonAVal.onclick = () => {
    sidebar.selectItemByName('Section A');
  };

  buttonBVal.onclick = () => {
    sidebar.selectItemByName('Section B');
  };

  buttonCVal.onclick = () => {
    sidebar.selectItemByName('Section C');
  };
</script>
```



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                                                                               | Type                | Default   |
| ---------- | ---------- | ----------------------------------------------------------------------------------------- | ------------------- | --------- |
| `open`     | `open`     | Indicates whether the sidebar is open. You can use this in lieu of the show/hide methods. | `boolean`           | `false`   |
| `position` | `position` | Sidebar position                                                                          | `"left" \| "right"` | `'left'`  |
| `toggled`  | `toggled`  | Define whether sidebar is toggled meaning only one menu can be open at the same time      | `boolean`           | `false`   |
| `width`    | `width`    | Sidebar width                                                                             | `string`            | `'16rem'` |


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


----------------------------------------------

Copyright © 2021-present SIX-Group
