# Playwright Tests

We use [Playwright](https://playwright.dev/) with
[Stencil's Playwright integration](https://stenciljs.com/docs/testing/playwright/overview) for
testing our web components. Each component has a dedicated test file that covers functional
behavior, visual regression, and accessibility.

For implementation examples, consult the
[existing test files](https://github.com/six-group/six-webcomponents/tree/main/libraries/ui-library/src/components).

## Setup

1. Install Playwright browsers:

   ```bash
   npm run test:e2e-install
   ```

2. Run tests:

   ```bash
   npm run test:e2e
   ```

3. Run tests for a specific component (from `libraries/ui-library`):

   ```bash
   cd libraries/ui-library
   npx playwright test six-button
   ```

4. Run tests with UI for debugging (from `libraries/ui-library`):

   ```bash
   npx playwright test --ui
   ```

::: warning Run Tests Faster
Run `npm start` first. Tests run faster when the dev server is already running because it is reused
across all tests instead of a new server being started for each test file.
:::

## Test File Structure

Every component test file has three `test.describe` blocks with clear separation of concerns:

```typescript
import { test } from '../../test-utils/fixtures';
import { expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

// 1. Functional tests - behavior, events, keyboard interaction
test.describe('six-{component}', () => {
  test('should show and hide via open prop', async ({ page }) => {
    /* ... */
  });
  test('should emit events (focus, change, blur)', async ({ page }) => {
    /* ... */
  });
  test('should handle keyboard navigation', async ({ page }) => {
    /* ... */
  });
});

// 2. Screenshot tests - visual regression
test.describe('six-{component} screenshots', () => {
  test('should match screenshot for default', async ({ page }) => {
    /* ... */
  });
  test('should match screenshot for disabled', async ({ page }) => {
    /* ... */
  });
});

// 3. Accessibility tests - ARIA attributes and axe-core
test.describe('six-{component} accessibility', () => {
  test('should have correct ARIA attributes', async ({ page }) => {
    /* ... */
  });
  test('should have no a11y violations', async ({ page }) => {
    /* ... */
  });
});
```

::: info Why separate blocks?

A test failure clearly indicates whether it's a visual bug, a behavioral bug, or an accessibility
issue. This separation makes tests more maintainable and easier to debug.

:::

## What to Test

### Functional Tests

- **Behavior**: State transitions, show/hide logic, error handling
- **Disabled state**: Verify `click({ force: true })` doesn't change state
- **Events**: Test focus, change, blur in one realistic flow using `spyOnEvent()`
- **Keyboard navigation**: Follow [ARIA APG patterns](https://www.w3.org/WAI/ARIA/apg/patterns/)
- **Programmatic changes**: Setting values via JavaScript

See
[six-checkbox.e2e.ts](https://github.com/six-group/six-webcomponents/blob/main/libraries/ui-library/src/components/six-checkbox/six-checkbox.e2e.ts)
for a complete example.

### Screenshot Tests

Capture visual states that functional tests cannot verify:

- Default and active states
- Disabled states
- All variants (types, sizes)
- Focus and hover states (for focusable components)

::: warning

Always visually verify screenshots after generating them. Open the PNG files and check that content
is fully visible and not cropped.

:::

### Accessibility Tests

- **ARIA attributes**: role, aria-hidden, aria-checked, aria-label, etc.
- **axe-core validation**: Use `AxeBuilder` to check WCAG compliance

Document any disabled axe rules with TODO comments explaining why.

## Key Patterns

### Selectors

- Use `page.locator('six-component')` for interactions (clicks the host element)
- Use `page.getByRole()` for assertions (queries the accessibility tree)

### Testing Events

Use `spyOnEvent()` to test custom events:

```typescript
const changeSpy = await page.spyOnEvent('six-checkbox-change');
await page.locator('six-checkbox').click();
expect(changeSpy).toHaveReceivedEvent();
```

### Setting Properties

Use `evaluate()` to set web component properties:

```typescript
await page.locator('six-input').evaluate((el) => {
  el.value = 'test';
});
```

### Animations

The test fixture disables animations by default. Use `{ disableAnimations: false }` when testing
`after-show` or `after-hide` events.

## ARIA Authoring Practices

Components should follow the
[ARIA Authoring Practices Guide (APG)](https://www.w3.org/WAI/ARIA/apg/patterns/):

- `six-alert` → [Alert](https://www.w3.org/WAI/ARIA/apg/patterns/alert/)
- `six-checkbox` → [Checkbox](https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/)
- `six-dialog` → [Dialog (Modal)](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/)
- `six-menu` → [Menu](https://www.w3.org/WAI/ARIA/apg/patterns/menu/)
- `six-radio` → [Radio Group](https://www.w3.org/WAI/ARIA/apg/patterns/radio/)
- `six-switch` → [Switch](https://www.w3.org/WAI/ARIA/apg/patterns/switch/)
- `six-tab-group` → [Tabs](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/)

## Commands Reference

From the repository root:

```bash
npm run test:e2e                       # run all tests
npm run test:e2e-install               # install Playwright browsers
npm run test:e2e-update-screenshots    # update all screenshots
```

From `libraries/ui-library` for more options:

```bash
npx playwright test six-button                    # run specific component
npx playwright test six-button --update-snapshots # update component screenshots
npx playwright test --ui                          # run with UI debugger
npx playwright test --headed                      # run with visible browser
```
