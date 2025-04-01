# Z-Index

The Six Webcomponents library uses a set of z-index tokens to manage stacking context throughout the
interface.

<style>
  .example-container {
    position: relative;
    height: 200px;
    border: 1px solid #ccc;
    overflow: hidden;
    margin: 20px 0;
  }
  .base-element {
    position: absolute;
    width: 150px;
    height: 100px;
    background-color: #2563eb;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    left: 50px;
    top: 50px;
    z-index: 500; /* --six-z-index-header */
  }
  .hover-element {
    position: absolute;
    width: 120px;
    height: 80px;
    background-color: #ef4444;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    left: 100px;
    top: 70px;
    z-index: 400;
    transition: z-index 0.01s, transform 0.3s;
  }
  .example-container:hover .hover-element {
    z-index: 600; /* --six-z-index-drawer */
    transform: scale(1.1);
  }
  .z-index-label {
    font-size: 12px;
    opacity: 0.8;
    margin-top: 5px;
  }
</style>

| CSS Variable                 | Value | Usage                              |
| ---------------------------- | ----- | ---------------------------------- |
| `--six-z-index-header`       | 500   | Used for header elements           |
| `--six-z-index-search-field` | 500   | Used for search field components   |
| `--six-z-index-drawer`       | 600   | Used for drawer/sidebar components |
| `--six-z-index-dropdown`     | 700   | Used for dropdown menus            |
| `--six-z-index-toast`        | 800   | Used for toast notifications       |
| `--six-z-index-tooltip`      | 900   | Used for tooltips                  |
| `--six-z-index-dialog`       | 1000  | Used for modal dialogs             |

## Interactive Example

Hover over the box below to see how z-index affects stacking order:

<div class="example-container">
  <div class="base-element">
    Header Element
    <div class="z-index-label">z-index: 500</div>
  </div>
  <div class="hover-element">
    Hover Me!
    <div class="z-index-label">z-index: 400 → 600</div>
  </div>
</div>

In this example, the red box starts with a lower z-index (400) than the blue box (500). When you
hover over the container, the red box's z-index increases to 600, causing it to appear above the
blue box.

## Example Usage

```css
.header {
  z-index: var(--six-z-index-header); /* 500 */
}

.tooltip {
  z-index: var(--six-z-index-tooltip); /* 900 */
}

/* Dropdown menu that appears above the header */
.dropdown-menu {
  position: absolute;
  z-index: var(--six-z-index-dropdown); /* 700 */
  /* This ensures the dropdown appears above the header (500) */
}
```
