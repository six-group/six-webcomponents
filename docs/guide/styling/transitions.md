# Transitions

The Six Webcomponents library uses a set of transition tokens to create smooth and consistent
animations throughout the interface.

| CSS Variable              | Value  | Description                                     |
| ------------------------- | ------ | ----------------------------------------------- |
| `--six-transition-x-slow` | 1000ms | Extra slow transitions for major layout changes |
| `--six-transition-slow`   | 500ms  | Slow transitions for larger UI elements         |
| `--six-transition-medium` | 250ms  | Medium transitions for standard elements        |
| `--six-transition-fast`   | 150ms  | Fast transitions for small UI elements          |
| `--six-transition-x-fast` | 50ms   | Extra fast transitions for micro-interactions   |

<style>
  .transition-demo {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  }
  
  .transition-box {
    width: 50px;
    height: 50px;
    background-color: #d4d4d4;
    margin-right: 1rem;
    cursor: pointer;
  }
  
  .transition-label {
    font-family: monospace;
    font-size: 0.9rem;
  }
  
  .x-slow {
    transition: background-color 1000ms;
  }
  
  .slow {
    transition: background-color 500ms;
  }
  
  .medium {
    transition: background-color 250ms;
  }
  
  .fast {
    transition: background-color 150ms;
  }
  
  .x-fast {
    transition: background-color 50ms;
  }
  
  .transition-box:hover {
    background-color: #2563eb;
  }
</style>

## Hover over each box to see the transition speed

<div class="transition-demo">
  <div class="transition-box x-slow"></div>
  <div class="transition-label">X-Slow: 1000ms</div>
</div>

<div class="transition-demo">
  <div class="transition-box slow"></div>
  <div class="transition-label">Slow: 500ms</div>
</div>

<div class="transition-demo">
  <div class="transition-box medium"></div>
  <div class="transition-label">Medium: 250ms</div>
</div>

<div class="transition-demo">
  <div class="transition-box fast"></div>
  <div class="transition-label">Fast: 150ms</div>
</div>

<div class="transition-demo">
  <div class="transition-box x-fast"></div>
  <div class="transition-label">X-Fast: 50ms</div>
</div>

## Usage Example

```css
.button {
  background-color: var(--six-color-web-rock-100);
  transition: background-color var(--six-transition-fast);
}

.button:hover {
  background-color: var(--six-color-web-rock-200);
}

.panel {
  transform: translateY(-100%);
  transition: transform var(--six-transition-medium);
}

.panel.open {
  transform: translateY(0);
}
```
