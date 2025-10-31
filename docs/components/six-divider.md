# Divider


# Divider

### Lineart

A divider is a visual line that separates content, helping to organize a page and improve clarity. It allows users to quickly understand information and the hierarchy within an interface.

The SIX Divider is a minimal, solid line (#C3C3C3) designed for clear separation.

## Basic Usage

The divider is a simple horizontal line that separates content with default small (24px) spacing.

<docs-demo-six-divider-0></docs-demo-six-divider-0>

```html
<p>Content above the divider</p>
<six-divider></six-divider>
<p>Content below the divider</p>
```


## Spacing Options

The divider supports three predefined spacing options: `small` (24px, default), `medium` (28px), and `large` (36px). These ensure consistent spacing throughout your application.

<docs-demo-six-divider-1></docs-demo-six-divider-1>

```html
<h4>Small Space (Default - 24px)</h4>
<table class="demo-table">
  <thead>
    <tr>
      <th>Status</th>
      <th>System</th>
      <th>Date</th>
      <th>Information</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Active</td>
      <td>System (TIG)</td>
      <td>March 29, 2023</td>
      <td>12:58:10</td>
    </tr>
  </tbody>
</table>
<six-divider></six-divider>
<p>Default spacing: 24px top and bottom</p>
```


<docs-demo-six-divider-2></docs-demo-six-divider-2>

```html
<h4>Medium Space (28px)</h4>
<table class="demo-table">
  <thead>
    <tr>
      <th>Status</th>
      <th>System</th>
      <th>Date</th>
      <th>Information</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Active</td>
      <td>System (TIG)</td>
      <td>March 29, 2023</td>
      <td>12:58:10</td>
    </tr>
  </tbody>
</table>
<six-divider spacing="medium"></six-divider>
<p>Medium spacing: 28px top and bottom</p>
```


<docs-demo-six-divider-3></docs-demo-six-divider-3>

```html
<h4>Large Space (36px)</h4>
<table class="demo-table">
  <thead>
    <tr>
      <th>Status</th>
      <th>System</th>
      <th>Date</th>
      <th>Information</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Active</td>
      <td>System (TIG)</td>
      <td>March 29, 2023</td>
      <td>12:58:10</td>
    </tr>
  </tbody>
</table>
<six-divider spacing="large"></six-divider>
<p>Large spacing: 36px top and bottom</p>
```


## Usage Examples

### In Lists

Dividers work well to separate list items with consistent spacing.

<docs-demo-six-divider-4></docs-demo-six-divider-4>

```html
<div>
  <p><strong>Item 1</strong><br>Description of first item</p>
  <six-divider></six-divider>

  <p><strong>Item 2</strong><br>Description of second item</p>
  <six-divider></six-divider>

  <p><strong>Item 3</strong><br>Description of third item</p>
</div>
```


### Section Separators

Use large spacing to separate major sections.

<docs-demo-six-divider-5></docs-demo-six-divider-5>

```html
<div>
  <h4>Section 1</h4>
  <p>Content for the first section with important information.</p>
  <six-divider spacing="large"></six-divider>

  <h4>Section 2</h4>
  <p>Content for the second section with more details.</p>
  <six-divider spacing="large"></six-divider>

  <h4>Section 3</h4>
  <p>Content for the third section concluding the page.</p>
</div>
```


### Compact Lists

Use small or default spacing for compact lists.

<docs-demo-six-divider-6></docs-demo-six-divider-6>

```html
<div>
  <p style="margin: 0.5rem 0">Short item 1</p>
  <six-divider></six-divider>

  <p style="margin: 0.5rem 0">Short item 2</p>
  <six-divider></six-divider>

  <p style="margin: 0.5rem 0">Short item 3</p>
</div>
```


### Mixed Spacing for Visual Hierarchy

Combine different spacing sizes to create visual hierarchy.

<docs-demo-six-divider-7></docs-demo-six-divider-7>

```html
<div>
  <h4>Main Section</h4>
  <p>Important content here</p>
  <six-divider spacing="large"></six-divider>

  <h5>Subsection A</h5>
  <p>Some details</p>
  <six-divider spacing="medium"></six-divider>

  <h5>Subsection B</h5>
  <p>More details</p>
  <six-divider spacing="medium"></six-divider>

  <p>Additional notes</p>
  <six-divider></six-divider>

  <p>Final remarks</p>
</div>
```


### All Spacing Sizes Comparison

Visual comparison of all three spacing sizes.

<docs-demo-six-divider-8></docs-demo-six-divider-8>

```html
<div>
  <p>Content before small divider</p>
  <six-divider></six-divider>
  <p>Content after small divider (24px)</p>

  <br>

  <p>Content before medium divider</p>
  <six-divider spacing="medium"></six-divider>
  <p>Content after medium divider (28px)</p>

  <br>

  <p>Content before large divider</p>
  <six-divider spacing="large"></six-divider>
  <p>Content after large divider (36px)</p>
</div>
```



<!-- Auto Generated Below -->


## Properties

| Property  | Attribute | Description                                                | Type                             | Default   |
| --------- | --------- | ---------------------------------------------------------- | -------------------------------- | --------- |
| `spacing` | `spacing` | Spacing size: small (24px), medium (28px), or large (36px) | `"large" \| "medium" \| "small"` | `'small'` |


## Slots

| Slot | Description                                        |
| ---- | -------------------------------------------------- |
|      | Not used. The divider is a simple horizontal line. |


## Shadow Parts

| Part        | Description              |
| ----------- | ------------------------ |
| `"divider"` | The divider line element |


----------------------------------------------

Copyright © 2021-present SIX-Group
