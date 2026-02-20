# six-paginator



<!-- Auto Generated Below -->


## Properties

| Property         | Attribute      | Description                                                                                | Type       | Default        |
| ---------------- | -------------- | ------------------------------------------------------------------------------------------ | ---------- | -------------- |
| `currentPage`    | `current-page` | current page                                                                               | `number`   | `0`            |
| `resultsPerPage` | --             | The possible results per page. Must be a list of integers. At least one value is required! | `number[]` | `[12, 24, 48]` |
| `totalPages`     | `total-pages`  | The total amount of pages                                                                  | `number`   | `20`           |


## Events

| Event                                    | Description                                                                                                                                                   | Type                                        |
| ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| `six-paginator-page-changed`             | Emitted either when the user explicitly clicks on a number, or when a back/forward button is pressed. The page number emitted is an index which is zero-based | `CustomEvent<PageChangedPayload>`           |
| `six-paginator-results-per-page-changed` | Emitted after the user selects a value from the results per page select.                                                                                      | `CustomEvent<ResultsPerPageChangedPayload>` |


## Dependencies

### Depends on

- [six-icon-button](../six-icon-button)
- [six-select](../six-select)
- [six-menu-item](../six-menu-item)

### Graph
```mermaid
graph TD;
  six-paginator --> six-icon-button
  six-paginator --> six-select
  six-paginator --> six-menu-item
  six-icon-button --> six-icon
  six-select --> six-menu-item
  six-select --> six-dropdown
  six-select --> six-icon-button
  six-select --> six-icon
  six-select --> six-input
  six-select --> six-menu
  six-select --> six-button
  six-select --> six-error
  six-menu-item --> six-checkbox
  six-menu-item --> six-icon
  six-checkbox --> six-error
  six-dropdown --> six-menu-item
  six-dropdown --> six-input
  six-dropdown --> six-icon
  six-dropdown --> six-menu
  six-input --> six-icon
  six-input --> six-error
  six-menu --> six-menu-item
  six-button --> six-spinner
  style six-paginator fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

Copyright © 2021-present SIX-Group
