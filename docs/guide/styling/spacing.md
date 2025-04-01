# Spacing

The Six Webcomponents library uses a consistent spacing scale to maintain visual harmony throughout
the interface. These spacing tokens can be used for margins, paddings, gaps, and other spatial
relationships.

| CSS Variable               | Value          | Preview                                                                                           |
| -------------------------- | -------------- | ------------------------------------------------------------------------------------------------- |
| `--six-spacing-xxx-small`  | 0.125rem (2px) | <div style="width: 0.125rem; height: 1rem; background-color: var(--six-color-action-500);"></div> |
| `--six-spacing-xx-small`   | 0.25rem (4px)  | <div style="width: 0.25rem; height: 1rem; background-color: var(--six-color-action-500);"></div>  |
| `--six-spacing-x-small`    | 0.5rem (8px)   | <div style="width: 0.5rem; height: 1rem; background-color: var(--six-color-action-500);"></div>   |
| `--six-spacing-small`      | 0.75rem (12px) | <div style="width: 0.75rem; height: 1rem; background-color: var(--six-color-action-500);"></div>  |
| `--six-spacing-medium`     | 1rem (16px)    | <div style="width: 1rem; height: 1rem; background-color: var(--six-color-action-500);"></div>     |
| `--six-spacing-large`      | 1.25rem (20px) | <div style="width: 1.25rem; height: 1rem; background-color: var(--six-color-action-500);"></div>  |
| `--six-spacing-x-large`    | 1.75rem (28px) | <div style="width: 1.75rem; height: 1rem; background-color: var(--six-color-action-500);"></div>  |
| `--six-spacing-xx-large`   | 2.25rem (36px) | <div style="width: 2.25rem; height: 1rem; background-color: var(--six-color-action-500);"></div>  |
| `--six-spacing-xxx-large`  | 3rem (48px)    | <div style="width: 3rem; height: 1rem; background-color: var(--six-color-action-500);"></div>     |
| `--six-spacing-xxxx-large` | 4.5rem (72px)  | <div style="width: 4.5rem; height: 1rem; background-color: var(--six-color-action-500);"></div>   |

## Example Usage

```css
.my-element {
  margin-bottom: var(--six-spacing-medium);
  padding: var(--six-spacing-small);
}
```
