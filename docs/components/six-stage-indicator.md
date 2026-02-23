# Stage Indicator


Stage Indicators allow user to know which stage he is currently on

<docs-demo-six-stage-indicator-0></docs-demo-six-stage-indicator-0>

```html
<six-stage-indicator stage="DEV"> DEV-webcomponents-123.3.2 </six-stage-indicator>
```


## Examples

### Stage

Use the `stage` attribute to display a certain stage

<docs-demo-six-stage-indicator-1></docs-demo-six-stage-indicator-1>

```html
<six-stage-indicator stage="LOCAL"> LOCAL-webcomponents-123.3.2 </six-stage-indicator>
<six-stage-indicator stage="DEV"> DEV-webcomponents-123.3.2 </six-stage-indicator>
<six-stage-indicator stage="ITU"> ITU-webcomponents-123.3.2 </six-stage-indicator>
<six-stage-indicator stage="ETU"> ETU-webcomponents-123.3.2 </six-stage-indicator>
<six-stage-indicator stage="ACCEPTANCE"> ACCEPTANCE-webcomponents-123.3.2 </six-stage-indicator>
<six-stage-indicator stage="PROD"> PROD-webcomponents-123.3.2 </six-stage-indicator>
```



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description                    | Type                                                                   | Default |
| -------- | --------- | ------------------------------ | ---------------------------------------------------------------------- | ------- |
| `stage`  | `stage`   | The indicators value attribute | `"ACCEPTANCE" \| "DEV" \| "ETU" \| "ITU" \| "LOCAL" \| "PROD" \| null` | `null`  |


## Dependencies

### Used by

 - [six-root](six-root.html)

### Depends on

- [six-icon](six-icon.html)

### Graph
```mermaid
graph TD;
  six-stage-indicator --> six-icon
  six-root --> six-stage-indicator
  style six-stage-indicator fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

Copyright © 2021-present SIX-Group
