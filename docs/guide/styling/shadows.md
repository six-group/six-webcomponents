# Shadows

The Six Webcomponents library uses a set of shadow tokens to create depth and hierarchy within the
interface.

| CSS Variable              | Value                                                                | Preview                                                                                                                                                                       |
| ------------------------- | -------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--six-shadow-small`      | 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)        | <div style="width: 6rem; height: 3rem; background-color: white; box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1); border-radius: 4px;"></div>        |
| `--six-shadow-medium`     | 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)   | <div style="width: 6rem; height: 3rem; background-color: white; box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1); border-radius: 4px;"></div>   |
| `--six-shadow-medium-top` | 0 -10px 15px -3px rgb(0 0 0 / 0.1), 0 -4px 6px -4px rgb(0 0 0 / 0.1) | <div style="width: 6rem; height: 3rem; background-color: white; box-shadow: 0 -10px 15px -3px rgb(0 0 0 / 0.1), 0 -4px 6px -4px rgb(0 0 0 / 0.1); border-radius: 4px;"></div> |
| `--six-shadow-large`      | 0 25px 50px -12px rgb(0 0 0 / 0.25)                                  | <div style="width: 6rem; height: 3rem; background-color: white; box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25); border-radius: 4px;"></div>                                  |

## Example Usage

```css
.card {
  box-shadow: var(--six-shadow-small);
}

.card:hover {
  box-shadow: var(--six-shadow-medium);
}

.dropdown {
  box-shadow: var(--six-shadow-large);
}
```
