---
name: playwright-tests
description:
  Write Playwright E2E tests for Stencil web components. Use when creating tests, writing e2e tests,
  or testing components with functional tests, screenshot tests, and accessibility tests.
---

# Component Testing with Playwright

## Setup

```typescript
import { test } from '../../test-utils/fixtures';
import { expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
```

The `test` fixture automatically wraps content passed to `page.setContent()` with the correct CSS
stylesheet link.

## Test File Structure

Every component test file has three `test.describe` blocks with **clear separation of concerns**:

```typescript
// 1. Functional tests - what users SEE and DO (behavior, events, keyboard)
test.describe('six-{component} behavior', () => {
  test('should be visible and show text when open', ...);  // Visual state
  test('should be hidden when closed', ...);               // Visual state
  test('should skip disabled in tab navigation', ...);
  test('should emit events (focus, change, blur)', ...);
  test('should not change state when disabled', ...);
  test('should {keyboard behavior per APG}', ...);
  // Component-specific tests...
});

// 2. Screenshot tests - visual regression
test.describe('six-{component} screenshots', () => {
  const states = [
    { name: 'default', props: '' },
    { name: 'disabled', props: 'disabled' },
    // Component-specific states...
  ];
  states.forEach(({ name, props }) => {
    test(`should match screenshot for ${name}`, ...);
  });
});

// 3. Accessibility tests - ARIA attributes and axe-core validation
test.describe('six-{component} accessibility', () => {
  test('should have correct ARIA attributes', ...);        // role, aria-live, aria-atomic
  test('should have aria-hidden="true" when closed', ...); // ARIA state
  test('should have aria-hidden="false" when open', ...);  // ARIA state
  test('should have no a11y violations for default', ...); // axe-core
  test('should have no a11y violations for disabled', ...);
  // Key state variations...
});
```

### Separation of Concerns

**IMPORTANT:** Keep functional tests and accessibility tests separate.

- **Functional tests** - What sighted users see/experience
  - Assertions: `toBeVisible()`, `toBeHidden()`, `toContainText()`
- **Accessibility tests** - What screen reader users experience
  - Assertions: `toHaveAttribute('aria-hidden', 'true')`, `toHaveRole()`, axe-core

**Why separate?**

- A failure clearly indicates whether it's a visual bug or an accessibility bug
- Ensures both aspects are actually tested (correct ARIA doesn't mean it's visually working, and
  vice versa)
- Makes tests more maintainable and easier to understand

## What to Test

**VERY IMPORTANT:** Never use `page.waitForTimeout()` in tests.

### Research Phase (before writing tests)

- [ ] Read the component source code thoroughly
- [ ] Read the component's index.html demo page
- [ ] Check APG pattern if component has one (see APG section below)
- [ ] Note all props, events, slots, and methods
- [ ] Identify what method is used to show and hide any parts of the component. Popover?

### Functional Tests

**Every interactive component needs:**

- [ ] **Behavior tests** - Logic, state transitions, error handling (things screenshots can't
      verify)
- [ ] **Disabled state** - `click({ force: true })` doesn't change state
- [ ] **Tab navigation** - Tab skips disabled elements
- [ ] **Events (combined)** - focus, change, blur in one realistic flow
- [ ] **Standard event forwarding** - six-\* events → standard events (check the implementation if
      `eventListeners.forward` is used)
- [ ] **Keyboard (per APG)** - All keys in one test with disabled items
- [ ] **Value normalization** - null/undefined → empty string (for inputs)
- [ ] **All props tested** - constraints, callbacks, formats, etc.
- [ ] **Programmatic value/state changes** - setting values via JS

**Avoid redundant tests:** Don't write functional tests that only check visibility/appearance and
implement screenshot tests for those states instead. Screenshots already verify visual correctness.
Functional tests should focus on _behavior_ that screenshots can't capture (error handling, state
transitions, event emission, etc.).

**Example: Testing visibility by visible/hidden state:**

```typescript
test('should show and hide via open prop', async ({ page }) => {
  await page.setContent('<six-alert>Alert message</six-alert>');
  const alert = page.locator('six-alert');

  await expect(page.getByRole('alert')).toBeHidden();

  // Show alert
  await alert.evaluate((el: HTMLElement) => el.setAttribute('open', ''));
  await expect(page.getByRole('alert')).toBeVisible();

  // Hide alert
  await alert.evaluate((el: HTMLElement) => el.removeAttribute('open'));
  await expect(page.getByRole('alert')).toBeHidden();
});
```

**Example: Testing visibility by opacity (for popover-based components):**

```typescript
await expect(page.locator('six-dropdown [part="panel"]')).toHaveCSS('opacity', '0');
await expect(page.locator('six-dropdown [part="panel"]')).toHaveCSS('opacity', '1');
```

**Example: Testing visibility by height**

```typescript
await expect(page.locator('.details__body')).toHaveCSS('height', '0px');
expect(
  await page.locator('.details__body').evaluate((el) => parseFloat(getComputedStyle(el).height))
).toBeGreaterThan(0);
```

### ARIA Authoring Practices Guide (APG)

Consult the [ARIA APG](https://www.w3.org/WAI/ARIA/apg/patterns) for each component. **Read the full
pattern page**, including:

1. **Description** - Required ARIA roles, states, and properties
2. **Keyboard Interaction** - All required keyboard behaviors
3. **Examples** - Linked at the bottom of each pattern page; study these for correct implementation

- `six-alert` → [Alert](https://www.w3.org/WAI/ARIA/apg/patterns/alert/)
- `six-breadcrumbs` → [Breadcrumb](https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/)
- `six-checkbox` → [Checkbox](https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/)
- `six-date` →
  [Date Picker Dialog](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/examples/datepicker-dialog/)
- `six-details` → [Disclosure](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/)
- `six-dialog` → [Dialog (Modal)](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/)
- `six-dropdown`, `six-select` → [Combobox](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/)
- `six-menu` → [Menu](https://www.w3.org/WAI/ARIA/apg/patterns/menu/)
- `six-radio` → [Radio Group](https://www.w3.org/WAI/ARIA/apg/patterns/radio/)
- `six-range` → [Slider](https://www.w3.org/WAI/ARIA/apg/patterns/slider/)
- `six-switch` → [Switch](https://www.w3.org/WAI/ARIA/apg/patterns/switch/)
- `six-tab-group` → [Tabs](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/)
- `six-tooltip` → [Tooltip](https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/)

**Rule:** Test ALL keyboard interactions in ONE test using a fixture with disabled items. This tests
real-world scenarios and ensures disabled items are skipped.

### Screenshot Tests

**Use for:** Visual features functional tests can't verify (slot positioning, styling, states, focus
rings)

**Don't use for:** Behavior, events, accessibility

**States to capture:**

- [ ] Default/unchecked
- [ ] Active state (checked, selected, open)
- [ ] Disabled
- [ ] Disabled + active
- [ ] All type/variant props
- [ ] All size variants (if applicable)
- [ ] Custom slot content (if applicable)
- [ ] **Focus state** - For focusable components, capture the focus ring styling
- [ ] **Hover state** - For interactive components, capture the hover styling
- [ ] **Focus-visible state** - Keyboard focus indicator (distinct from mouse focus)

**IMPORTANT: Always validate screenshots visually.** After generating or updating snapshots, open
the PNG files and verify:

- [ ] Content is fully visible (not cropped)
- [ ] Popover panels show completely (they use `position: fixed`)
- [ ] Focus rings and hover states are captured
- [ ] No unexpected visual artifacts

**Focusable components** (require focus/hover/focus-visible screenshots):

- **Form controls:** six-button, six-checkbox, six-input, six-radio, six-range, six-switch,
  six-textarea
- **Pickers:** six-datepicker, six-timepicker, six-select, six-language-switcher, six-item-picker,
  six-rating
- **Other interactive:** six-search-field, six-tab-group

### Accessibility Tests

**ARIA attribute tests** (what screen readers need):

- [ ] `role` - Verify the element has the correct ARIA role
- [ ] `aria-hidden` - Test hidden state for screen readers
- [ ] `aria-live`, `aria-atomic` - For dynamic content announcements
- [ ] `aria-checked`, `aria-selected` - For toggle states
- [ ] Other ARIA attributes (aria-label, aria-describedby, etc.)

**axe-core tests** (WCAG compliance):

- [ ] Default state
- [ ] Key state variations (disabled, checked, open, etc.)
- [ ] Document any disabled rules with TODOs

## How to Test (Patterns)

### Selectors: locator vs getByRole

- **Click/interact** - `page.locator('six-checkbox').click()`
- **Assert state** - `expect(page.getByRole('checkbox')).toBeChecked()`
- **Assert role** - `expect(page.getByRole('alert')).toHaveRole('alert')`

**Why:** `locator('six-component')` clicks the host element (real user behavior). `getByRole()`
queries the accessibility tree (verifies a11y).

**Prefer `getByRole()` over `[part="..."]`** when the element has a role and is visible. Only use
part selectors when `getByRole` won't work.

```typescript
// Good - semantic, queries accessibility tree
const input = page.getByRole('textbox');
await expect(input).toHaveAttribute('type', 'password');

// Avoid - depends on internal part name
const input = page.locator('six-input [part="input"]');
```

### Role Assertions: toHaveRole

Use `toHaveRole()` instead of `toHaveAttribute('role', ...)`:

```typescript
// Good
await expect(page.getByRole('alert')).toHaveRole('alert');

// Avoid
await expect(page.locator('[part="base"]')).toHaveAttribute('role', 'alert');
```

### Disabling Animations

The test fixture disables animations by default for faster, more reliable tests. However,
**after-events** (like `six-dialog-after-show`, `six-dropdown-after-hide`) only fire when animations
complete.

Use `{ disableAnimations: false }` when testing after-events:

```typescript
test('should emit show/hide events', async ({ page }) => {
  await page.setContent(
    `<six-dialog label="Test Dialog">Content</six-dialog>`,
    // after events are not fired when animations are disabled
    { disableAnimations: false }
  );

  const showSpy = await page.spyOnEvent('six-dialog-show');
  const afterShowSpy = await page.spyOnEvent('six-dialog-after-show');

  await page.locator('six-dialog').evaluate((el: HTMLSixDialogElement) => el.show());
  expect(showSpy).toHaveReceivedEvent();
  await expect.poll(() => afterShowSpy.length).toBe(1);
});
```

### Events: spyOnEvent

Test focus, change, and blur events in one realistic flow:

```typescript
test('should emit events (focus, change, blur)', async ({ page }) => {
  await page.setContent(`
      <six-checkbox>Checkbox</six-checkbox>
      <six-button>Other</six-button>
    `);

  // Set up all spies BEFORE actions
  const focusSpy = await page.spyOnEvent('six-checkbox-focus');
  const changeSpy = await page.spyOnEvent('six-checkbox-change');
  const blurSpy = await page.spyOnEvent('six-checkbox-blur');
  // Also test standard event forwarding
  const standardFocus = await page.spyOnEvent('focus');
  const standardChange = await page.spyOnEvent('change');
  const standardBlur = await page.spyOnEvent('blur');

  // Click focuses and changes
  await page.locator('six-checkbox').click();
  expect(focusSpy).toHaveReceivedEvent();
  expect(standardFocus).toHaveReceivedEvent();
  expect(changeSpy).toHaveReceivedEvent();
  expect(standardChange).toHaveReceivedEvent();

  // Click elsewhere blurs
  await page.locator('six-button').click();
  expect(blurSpy).toHaveReceivedEvent();
  expect(standardBlur).toHaveReceivedEvent();
});
```

**Matchers:** `toHaveReceivedEvent()`, `toHaveReceivedEventTimes(n)`,
`toHaveReceivedEventDetail(detail)`

### Async Events: expect.poll

For events that fire asynchronously (e.g., via `setTimeout`), use `expect.poll()` to wait:

```typescript
test('should submit form on Enter key', async ({ page }) => {
  await page.setContent(`
    <form id="test-form">
      <six-input></six-input>
    </form>
  `);

  const submitSpy = await page.spyOnEvent('submit');

  await page.getByRole('textbox').click();
  await page.keyboard.press('Enter');

  // Wait for async setTimeout in handleKeyDown, then verify event was received
  await expect.poll(() => submitSpy.length).toBeGreaterThan(0);
});
```

### Setting Web Component Properties: evaluate

Use `evaluate()` to set custom element properties (no Playwright API exists for this):

```typescript
test('should handle null value gracefully', async ({ page }) => {
  await page.setContent('<six-input></six-input>');

  // evaluate is required for setting web component properties
  await page.locator('six-input').evaluate((el: HTMLElement & { value: string | null }) => {
    el.value = null;
  });

  await expect(page.getByRole('textbox')).toHaveValue('');
});
```

### Disabled State: force click

```typescript
test('should not change state when disabled', async ({ page }) => {
  await page.setContent('<six-checkbox disabled>Disabled</six-checkbox>');

  await expect(page.getByRole('checkbox')).toBeDisabled();
  await page.locator('six-checkbox').click({ force: true });
  await expect(page.getByRole('checkbox')).not.toBeChecked();
});
```

### Keyboard Typing: focus first

When using `page.keyboard.type()`, you must focus the element first:

```typescript
test('should not allow editing when disabled', async ({ page }) => {
  await page.setContent('<six-input disabled value="initial"></six-input>');

  const input = page.getByRole('textbox');
  await expect(input).toBeDisabled();

  // IMPORTANT: focus before typing with keyboard
  await input.focus();
  await page.keyboard.type('new text');
  await expect(input).toHaveValue('initial');
});
```

**Why?** `page.keyboard.type()` sends keystrokes to whatever element has focus. Unlike
`locator.fill()` which auto-focuses, `keyboard.type()` requires explicit focus.

**When to use:**

- `fill()` - For setting input values (auto-focuses, clears, types)
- `keyboard.type()` - For testing keyboard rejection (disabled/readonly inputs)

### Screenshots: state loop

```typescript
test.describe('six-checkbox screenshots', () => {
  const states = [
    { name: 'unchecked', props: '' },
    { name: 'checked', props: 'checked' },
    { name: 'disabled', props: 'disabled' },
    { name: 'disabled-checked', props: 'disabled checked' },
    // other states
  ];

  states.forEach(({ name, props }) => {
    test(`should match screenshot for ${name}`, async ({ page }) => {
      await page.setContent(`<six-checkbox ${props}>Label</six-checkbox>`);
      await expect(page.locator('.playwright-test-container')).toHaveScreenshot(
        `checkbox-${name}.png`
      );
    });
  });
});
```

**Commands:**

```bash
# Generate/update baselines
cd libraries/ui-library && npx playwright test six-button --update-snapshots

# Run tests
cd libraries/ui-library && npx playwright test six-button
```

### Accessibility: ARIA attributes

### Accessibility: axe-core

```typescript
test('should have no a11y violations', async ({ page }) => {
  await page.setContent('<six-button type="primary">Button</six-button>');

  const results = await new AxeBuilder({ page }).include('six-button').analyze();
  expect(results.violations).toEqual([]);
});
```

**Documenting exceptions:**

```typescript
// TODO: 'link' button has contrast ratio 3.12, doesn't meet WCAG 2 AA (4.5:1)
if (type === 'link') {
  builder = builder.disableRules(['color-contrast']);
}
```

### Documenting Component Issues

When tests reveal component bugs or questionable behavior, document them with TODO comments:

```typescript
// TODO: Component uses role="image" which is invalid. Should be role="img".
// See: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/img_role
test('should have role attribute', async ({ page }) => {
  await page.setContent('<six-avatar></six-avatar>');
  await expect(page.locator('[part="base"]')).toHaveAttribute('role', 'image');
});

// TODO: Avatar is presentational and should not be focusable. If it is, it needs a visible focus state.
test('should be focusable via tab', async ({ page }) => {
  // ...
});
```

**When to add TODOs:**

- Invalid ARIA roles or attributes (document the correct value)
- Color contrast issues (include the actual vs required ratio)
- Questionable focusability (presentational elements shouldn't be in tab order)
- Missing focus styles (if focusable, must have visible focus indicator)
- Any axe rule you disable (explain why)
- When in doubt, add a TODO instead of trying to fix the test!
