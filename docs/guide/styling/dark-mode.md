# Dark Mode

The SIX UI Library supports dark mode out of the box. All components automatically adapt their
appearance when dark mode is active — no component-level changes required.

## Enabling dark mode

### Option A — HTML attribute (recommended)

Set the `data-six-theme` attribute on the root element:

```html
<html data-six-theme="dark"></html>
```

This is the preferred approach. It gives you explicit control and works regardless of the user's OS
setting.

### Option B — System preference (automatic)

If no `data-six-theme` attribute is set, the library automatically responds to the user's OS
preference via `@media (prefers-color-scheme: dark)`. No code changes needed — it just works.

The attribute always takes priority. If `data-six-theme="light"` is set, the OS dark mode is
ignored.

## How it works

The dark theme is implemented in `dark-theme.css`, which is imported between `colors.css` and
`typography.css` in `base.css`:

```css
@import 'base/colors.css';
@import 'base/dark-theme.css';
@import 'base/typography.css';
```

The palette tokens (`--six-color-web-rock-900`, `--six-color-danger-500`, etc.) stay the same in
both themes. Dark mode works by overriding the semantic component tokens to point to different
palette shades that work better on dark backgrounds.

## Tokens overridden in dark mode

### Inputs

| Token                                   | Light          | Dark           |
| --------------------------------------- | -------------- | -------------- |
| `--six-input-background-color`          | `white`        | `web-rock-800` |
| `--six-input-background-color-hover`    | `white`        | `web-rock-700` |
| `--six-input-background-color-disabled` | `web-rock-100` | `web-rock-900` |
| `--six-input-border-color`              | `web-rock-400` | `web-rock-600` |
| `--six-input-border-color-hover`        | `web-rock-600` | `web-rock-400` |
| `--six-input-border-color-focus`        | `action-600`   | `action-400`   |
| `--six-input-border-color-danger`       | `danger-800`   | `danger-500`   |
| `--six-input-color`                     | `web-rock-900` | `web-rock-50`  |
| `--six-input-color-disabled`            | `web-rock-600` | `web-rock-500` |
| `--six-input-icon-color`                | `web-rock-900` | `web-rock-100` |
| `--six-input-label-color`               | `web-rock-900` | `web-rock-100` |
| `--six-input-help-text-color`           | `web-rock-600` | `web-rock-400` |

### Panels & overlays

| Token                            | Light          | Dark           |
| -------------------------------- | -------------- | -------------- |
| `--six-panel-background-color`   | `white`        | `web-rock-800` |
| `--six-panel-border-color`       | `clay-50`      | `web-rock-700` |
| `--six-overlay-background-color` | `web-rock-900` | `web-rock-900` |
| `--six-tooltip-background-color` | `web-rock-900` | `web-rock-200` |
| `--six-tooltip-color`            | `white`        | `web-rock-900` |

### Navigation & layout

| Token                            | Light          | Dark           |
| -------------------------------- | -------------- | -------------- |
| `--six-header-background-color`  | `white`        | `web-rock-900` |
| `--six-header-border-color`      | `web-rock-300` | `web-rock-700` |
| `--six-sidebar-background-color` | `white`        | `web-rock-900` |
| `--six-sidebar-color`            | `web-rock-900` | `web-rock-100` |
| `--six-drawer-background-color`  | `clay-50`      | `web-rock-900` |
| `--six-drawer-color`             | `web-rock-900` | `web-rock-100` |
| `--six-footer-background-color`  | `white`        | `web-rock-900` |

### Other components

| Token                              | Light          | Dark           |
| ---------------------------------- | -------------- | -------------- |
| `--six-avatar-background-color`    | `web-rock-300` | `web-rock-700` |
| `--six-details-color`              | `web-rock-900` | `web-rock-100` |
| `--six-menu-item-background-color` | `clay-50`      | `web-rock-800` |
| `--six-menu-divider-color`         | `clay-50`      | `web-rock-700` |
| `--six-progress-indicator-color`   | `danger-800`   | `danger-600`   |
| `--six-progress-label-color`       | `white`        | `web-rock-50`  |
| `--six-selection-control-color`    | `action-500`   | `action-400`   |
| `--six-search-color`               | `action-600`   | `action-400`   |
| `--six-rating-color-active`        | `success-600`  | `success-500`  |
| `--six-focus-ring-color`           | `action-600`   | `action-400`   |

### Shadows

Shadow intensity is increased in dark mode for better visibility against dark backgrounds:

| Token                 | Light          | Dark          |
| --------------------- | -------------- | ------------- |
| `--six-shadow-small`  | `0.1` opacity  | `0.3` opacity |
| `--six-shadow-medium` | `0.1` opacity  | `0.3` opacity |
| `--six-shadow-large`  | `0.25` opacity | `0.5` opacity |

### Tabs

| Token                           | Light          | Dark           |
| ------------------------------- | -------------- | -------------- |
| `--six-tab-color`               | `web-rock-900` | `web-rock-100` |
| `--six-tab-color-active`        | `web-rock-900` | `web-rock-50`  |
| `--six-tab-color-hover`         | `web-rock-700` | `web-rock-200` |
| `--six-tab-color-disabled`      | `web-rock-400` | `web-rock-600` |
| `--six-tab-border-color`        | `white`        | `web-rock-900` |
| `--six-tab-border-color-active` | `web-rock-900` | `web-rock-50`  |

## Toggling at runtime

```js
// Enable dark theme
document.documentElement.setAttribute('data-six-theme', 'dark');

// Enable light theme
document.documentElement.setAttribute('data-six-theme', 'light');

// Follow system preference (remove override)
document.documentElement.removeAttribute('data-six-theme');
```

Alternatively, use [`six-root`](/components/six-root#theme-support) with the `theme` property
(`light`, `dark`, or `auto`) together with `six-theme-switcher` — `six-root` manages the
`data-six-theme` attribute for you and persists the user's choice.

## Using dark mode in custom components

When building custom components, always use the semantic tokens (`--six-input-*`, `--six-panel-*`,
`--six-header-*`, etc.) instead of hardcoding palette values. These tokens automatically resolve to
the correct shade for the active theme.

If you need to reference the palette directly, be aware that palette tokens like
`--six-color-web-rock-900` always resolve to the same hex value (`#262626`) in both themes. Choose
shades that provide sufficient contrast on both light and dark backgrounds, or use the semantic
tokens instead.

Example:

```css
.my-component {
  /* Good — adapts automatically */
  background: var(--six-panel-background-color);
  color: var(--six-input-color);
  border: 1px solid var(--six-input-border-color);
}
```
