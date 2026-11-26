# six-card

Simple card implementation.

<!-- EXAMPLES -->

<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                                | Type      | Default |
| ---------- | ---------- | ------------------------------------------ | --------- | ------- |
| `elevated` | `elevated` | Set to true to let the card cast a shadow. | `boolean` | `false` |


## Slots

| Slot               | Description                                                                                                       |
| ------------------ | ----------------------------------------------------------------------------------------------------------------- |
|                    | Used to define the content of the card.                                                                           |
| `"footer"`         | An optional footer for the card, left-aligned (e.g. secondary/icon buttons).                                      |
| `"footer-actions"` | An optional actions section in the footer, right-aligned (e.g. primary actions).                                  |
| `"header"`         | An optional header for the card. Headings (`h1`-`h6`) are styled as title, other elements (e.g. `p`) as subtitle. |
| `"header-actions"` | Optional content right-aligned in the header (e.g. an icon button).                                               |
| `"media"`          | An optional media section to render at the start (top) of the card.                                               |


## Shadow Parts

| Part        | Description                   |
| ----------- | ----------------------------- |
| `"base"`    | The component's base wrapper. |
| `"content"` | The content container.        |
| `"footer"`  | The footer container.         |
| `"header"`  | The header container.         |
| `"media"`   | The media container.          |


## CSS Custom Properties

| Name                    | Description                         |
| ----------------------- | ----------------------------------- |
| `--six-card-box-shadow` | The box shadow of an elevated card. |
| `--six-card-padding`    | The padding of the card sections.   |


----------------------------------------------

Copyright © 2021-present SIX-Group
