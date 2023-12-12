# Tables

Since the SIX Web Components Library supports basic components only, we do not provide any table
implementation. If your application depends on tables, you should consider using a 3rd party table
implementation like [AG Grid](https://www.ag-grid.com/).

To fit the SIX style and make the tables look more like a SIX Web Component we suggest you to
overwrite one of AG Grid's standard themes. As an example apply the
[ag-theme-alpine](https://www.ag-grid.com/javascript-data-grid/themes/) theme and put those SCSS
definition to your global style sheet file:

```scss
@import '@ag-grid-community/styles';

@include grid-styles(
  (
    themes: (
      alpine: (
        // fonts
        font-family: ('Noto Sans', sans-serif),
        font-size: 16px,
        // borders
        borders: false,
        border-radius: 0px,
        // colors
        header-foreground-color: var(--six-color-web-rock-900),
        header-background-color: null,
        data-color: var(--six-color-web-rock-900),
        odd-row-background-color: var(--six-color-web-rock-100),
        row-hover-color: var(--six-color-clay-50),
        control-panel-background-color: var(--six-color-clay-50),
        // spacing
        cell-horizontal-padding: 12px,
      ),
    ),
  )
);

.ag-theme-alpine {
  // use theme parameters where possible
  --ag-invalid-color: var(--six-input-border-color-danger);
  --ag-input-border-color: var(--six-input-border-color);
  --ag-input-focus-border-color: var(--six-input-border-color-focus);
  --ag-checkbox-unchecked-color: var(--six-input-border-color-hover);
  --ag-side-bar-panel-width: 350px;
  --ag-tab-min-width: 350px;

  // or write CSS selectors to make customisations beyond what the parameters support
  .ag-header {
    border-bottom: 2px solid var(--six-color-web-rock-900);
  }

  .ag-row {
    font-size: 16px;
    border: none;
  }

  .ag-picker-field-wrapper {
    border-radius: 0;
  }

  .ag-row-hover {
    cursor: pointer;
  }

  .ag-tooltip {
    max-width: var(--max-width);
    border-radius: var(--six-border-radius-medium);
    background-color: var(--six-tooltip-background-color);
    font-family: var(--six-font-family);
    font-size: var(--six-tooltip-font-size);
    font-weight: var(--six-tooltip-font-weight);
    line-height: var(--six-tooltip-line-height);
    color: var(--six-tooltip-color);
    padding: var(--six-spacing-xxx-small) var(--six-spacing-x-small);
  }

  /* hide filter icon until hovered over */
  .ag-header-icon.ag-header-cell-menu-button {
    display: none;
  }

  /* show filter icon when hovered over */
  .ag-header-active .ag-header-icon.ag-header-cell-menu-button,
  .ag-column-menu-visible .ag-header-icon.ag-header-cell-menu-button {
    display: unset;
  }

  /* filter styling ... */
  .ag-theme-alpine input[class^='ag-']:not([type]):focus,
  .ag-theme-alpine input[class^='ag-'][type='text']:focus,
  .ag-theme-alpine input[class^='ag-'][type='number']:focus,
  .ag-theme-alpine input[class^='ag-'][type='tel']:focus,
  .ag-theme-alpine input[class^='ag-'][type='date']:focus,
  .ag-theme-alpine input[class^='ag-'][type='datetime-local']:focus,
  .ag-theme-alpine textarea[class^='ag-']:focus {
    background-color: var(--six-input-background-color-focus);
    border-color: var(--six-input-border-color-focus);
    box-shadow: var(--six-input-focus-shadow);
  }

  .ag-theme-alpine .ag-input-field-input:hover {
    background-color: var(--six-input-background-color-hover);
    border-color: var(--six-input-border-color-hover);
  }

  .ag-theme-alpine .ag-picker-field-wrapper:focus {
    background-color: var(--six-input-background-color-focus);
    border-color: var(--six-input-border-color-focus);
    box-shadow: var(--six-input-focus-shadow);
  }

  .ag-theme-alpine .ag-filter input:focus {
    font-size: 12px;
  }

  .ag-theme-alpine .ag-select-list-item {
    font-size: 12px;
  }

  .ag-theme-alpine .ag-filter {
    font-size: 12px;
  }
}
```
