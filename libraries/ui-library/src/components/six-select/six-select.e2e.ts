import { test } from '../../test-utils/fixtures';
import { expect, Page } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

// TODO: six-select accessibility issues:
// - Placeholder text has color contrast ratio of 2.46:1, doesn't meet WCAG 2 AA (4.5:1).
// - Uses aria-checked on menuitem which is not allowed per ARIA spec (from six-menu).
// - Combobox is missing required aria-controls attribute.
// - Hidden six-input inside the component is focusable (aria-hidden-focus).

test.describe('six-select', () => {
  test('should open and close dropdown', async ({ page }) => {
    await page.setContent(`
      <six-select placeholder="Select one">
        <six-menu-item value="option-1">Option 1</six-menu-item>
        <six-menu-item value="option-2">Option 2</six-menu-item>
      </six-select>
    `);

    await expectSelectToBeClosed(page);

    // Open
    await page.locator('six-select').click();
    await expectSelectToBeOpen(page);

    // Close by pressing Escape
    await page.keyboard.press('Escape');
    await expectSelectToBeClosed(page);
  });

  test('should select an item', async ({ page }) => {
    await page.setContent(`
      <six-select placeholder="Select one">
        <six-menu-item value="option-1">Option 1</six-menu-item>
        <six-menu-item value="option-2">Option 2</six-menu-item>
        <six-menu-item value="option-3">Option 3</six-menu-item>
      </six-select>
    `);

    const select = page.locator('six-select');

    // Click to open
    await select.click();
    await expectSelectToBeOpen(page);

    // Select an item
    await page.getByRole('menuitem', { name: 'Option 2' }).click();

    // Value should be set and dropdown should close
    await expect(page.getByRole('combobox')).toContainText('Option 2');
    await expectSelectToBeClosed(page);
  });

  test('should emit events (focus, change, blur)', async ({ page }) => {
    await page.setContent(`
      <div style="display: flex; gap: 20px;">
        <six-select placeholder="Select one">
          <six-menu-item value="option-1">Option 1</six-menu-item>
          <six-menu-item value="option-2">Option 2</six-menu-item>
        </six-select>
        <six-button>Other</six-button>
      </div>
    `);

    const focusSpy = await page.spyOnEvent('six-select-focus');
    const changeSpy = await page.spyOnEvent('six-select-change');
    const blurSpy = await page.spyOnEvent('six-select-blur');
    // Standard event forwarding
    const standardFocus = await page.spyOnEvent('focus');
    const standardChange = await page.spyOnEvent('change');
    const standardBlur = await page.spyOnEvent('blur');

    // Click to focus and open
    await page.locator('six-select').click();
    expect(focusSpy).toHaveReceivedEvent();
    expect(standardFocus).toHaveReceivedEvent();

    await expectSelectToBeOpen(page);

    // Select an item (triggers change and closes dropdown)
    await page.getByRole('menuitem', { name: 'Option 2' }).click();
    expect(changeSpy).toHaveReceivedEvent();
    expect(standardChange).toHaveReceivedEvent();

    await expectSelectToBeClosed(page);

    // Tab to move focus to button (more reliable than clicking)
    await page.keyboard.press('Tab');
    expect(blurSpy).toHaveReceivedEvent();
    expect(standardBlur).toHaveReceivedEvent();
  });

  test('should preselect value from attribute', async ({ page }) => {
    await page.setContent(`
      <six-select value="option-2">
        <six-menu-item value="option-1">Option 1</six-menu-item>
        <six-menu-item value="option-2">Option 2</six-menu-item>
        <six-menu-item value="option-3">Option 3</six-menu-item>
      </six-select>
    `);

    await expect(page.getByRole('combobox')).toContainText('Option 2');
  });

  test('should not open when disabled', async ({ page }) => {
    await page.setContent(`
      <six-select placeholder="Disabled" disabled>
        <six-menu-item value="option-1">Option 1</six-menu-item>
      </six-select>
    `);

    // Click with force (disabled elements don't receive clicks)
    await page.locator('six-select').click({ force: true });

    // Dropdown should remain closed
    await expectSelectToBeClosed(page);
  });

  test('should support multiple selection', async ({ page }) => {
    await page.setContent(`
      <six-select multiple placeholder="Select multiple">
        <six-menu-item value="option-1">Option 1</six-menu-item>
        <six-menu-item value="option-2">Option 2</six-menu-item>
        <six-menu-item value="option-3">Option 3</six-menu-item>
      </six-select>
    `);

    const select = page.locator('six-select');

    // Open and select first item
    await select.click();
    await expectSelectToBeOpen(page);
    await page.getByRole('menuitem', { name: 'Option 1' }).click();

    // Dropdown should stay open in multiple mode - select second item
    await page.getByRole('menuitem', { name: 'Option 2' }).click();

    // Both should be selected (value is array)
    const value = await select.evaluate((el: HTMLElement & { value: string[] }) => el.value);
    expect(value).toContain('option-1');
    expect(value).toContain('option-2');
  });

  test('should clear selection when clearable', async ({ page }) => {
    await page.setContent(`
      <six-select value="option-1" clearable>
        <six-menu-item value="option-1">Option 1</six-menu-item>
        <six-menu-item value="option-2">Option 2</six-menu-item>
      </six-select>
    `);

    await expect(page.getByRole('combobox')).toContainText('Option 1');

    // Click clear button
    await page.locator('six-select .select__clear').click();

    // Value should be cleared
    const value = await page.locator('six-select').evaluate((el: HTMLElement & { value: string }) => el.value);
    expect(value).toBe('');
  });

  test('should navigate with keyboard (ArrowDown, ArrowUp, Enter, Escape)', async ({ page }) => {
    await page.setContent(`
      <six-select placeholder="Select one">
        <six-menu-item value="option-1">Option 1</six-menu-item>
        <six-menu-item value="option-2">Option 2</six-menu-item>
        <six-menu-item value="option-3">Option 3</six-menu-item>
      </six-select>
    `);

    const select = page.locator('six-select');

    // Click to open dropdown
    await select.click();
    await expectSelectToBeOpen(page);

    // Navigate down with ArrowDown
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');

    // Select with Enter
    await page.keyboard.press('Enter');
    await expect(page.getByRole('combobox')).toContainText('Option 2');
    await expectSelectToBeClosed(page);

    // Reopen and close with Escape
    await select.click();
    await expectSelectToBeOpen(page);
    await page.keyboard.press('Escape');
    await expectSelectToBeClosed(page);
  });

  test('should handle null/undefined value', async ({ page }) => {
    await page.setContent(`
      <six-select placeholder="Select one">
        <six-menu-item value="option-1">Option 1</six-menu-item>
      </six-select>
    `);

    const select = page.locator('six-select');

    // Set null value
    await select.evaluate((el: HTMLElement & { value: string | null }) => {
      el.value = null as unknown as string;
    });

    // Should show placeholder (empty value)
    await expect(page.getByRole('combobox')).toContainText('Select one');
  });
});

test.describe('six-select filter', () => {
  test('should show filter input when filter is enabled', async ({ page }) => {
    await page.setContent(`
      <six-select filter placeholder="Select one">
        <six-menu-item value="apple">Apple</six-menu-item>
        <six-menu-item value="banana">Banana</six-menu-item>
        <six-menu-item value="cherry">Cherry</six-menu-item>
      </six-select>
    `);

    // Open dropdown
    await page.locator('six-select').click();
    await expectSelectToBeOpen(page);

    // Filter input should be visible
    const filterInput = page.locator('six-select six-dropdown six-input.filter');
    await expect(filterInput).toBeVisible();
  });

  test('should filter items when typing', async ({ page }) => {
    await page.setContent(`
      <six-select filter placeholder="Select one">
        <six-menu-item value="apple">Apple</six-menu-item>
        <six-menu-item value="banana">Banana</six-menu-item>
        <six-menu-item value="cherry">Cherry</six-menu-item>
      </six-select>
    `);

    // Open dropdown
    await page.locator('six-select').click();
    await expectSelectToBeOpen(page);

    // Type in filter
    await page.keyboard.type('ban');

    // Only banana should be visible
    await expect(page.locator('six-menu-item[value="apple"]')).toHaveCSS('display', 'none');
    await expect(page.locator('six-menu-item[value="banana"]')).not.toHaveCSS('display', 'none');
    await expect(page.locator('six-menu-item[value="cherry"]')).toHaveCSS('display', 'none');
  });
});

test.describe('six-select screenshots', () => {
  test('should match screenshot for closed state', async ({ page }) => {
    await page.setContent(`
      <six-select placeholder="Select one" style="width: 200px;">
        <six-menu-item value="option-1">Option 1</six-menu-item>
        <six-menu-item value="option-2">Option 2</six-menu-item>
      </six-select>
    `);
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('select-closed.png');
  });

  test('should match screenshot for open dropdown', async ({ page }) => {
    await page.setContent(`
      <div style="padding-bottom: 150px;">
        <six-select placeholder="Select one" style="width: 200px;">
          <six-menu-item value="option-1">Option 1</six-menu-item>
          <six-menu-item value="option-2">Option 2</six-menu-item>
          <six-menu-item value="option-3">Option 3</six-menu-item>
        </six-select>
      </div>
    `);

    await page.locator('six-select').click();
    await expectSelectToBeOpen(page);
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('select-open.png');
  });

  test('should match screenshot with selected value', async ({ page }) => {
    await page.setContent(`
      <six-select value="option-2" style="width: 200px;">
        <six-menu-item value="option-1">Option 1</six-menu-item>
        <six-menu-item value="option-2">Option 2</six-menu-item>
      </six-select>
    `);
    await expect(page.getByRole('combobox')).toContainText('Option 2');
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('select-with-value.png');
  });

  test('should match screenshot for disabled state', async ({ page }) => {
    await page.setContent(`
      <six-select placeholder="Disabled" disabled style="width: 200px;">
        <six-menu-item value="option-1">Option 1</six-menu-item>
      </six-select>
    `);
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('select-disabled.png');
  });

  test('should match screenshot for multiple selection with tags', async ({ page }) => {
    await page.setContent(`
      <six-select multiple style="width: 300px;">
        <six-menu-item value="option-1">Option 1</six-menu-item>
        <six-menu-item value="option-2">Option 2</six-menu-item>
        <six-menu-item value="option-3">Option 3</six-menu-item>
      </six-select>
    `);

    // Set value programmatically
    await page.locator('six-select').evaluate((el: HTMLElement & { value: string[] }) => {
      el.value = ['option-1', 'option-2'];
    });

    // Wait for tags to render - check for tag text content
    await expect(page.getByRole('combobox')).toContainText('Option 1');
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('select-multiple-tags.png');
  });

  test('should match screenshot for multiple selection open', async ({ page }) => {
    await page.setContent(`
      <div style="padding-bottom: 250px;">
        <six-select multiple placeholder="Select multiple" style="width: 250px;">
          <six-menu-item value="option-1">Option 1</six-menu-item>
          <six-menu-item value="option-2">Option 2</six-menu-item>
          <six-menu-item value="option-3">Option 3</six-menu-item>
          <six-menu-item value="option-4">Option 4</six-menu-item>
          <six-menu-item value="option-5">Option 5</six-menu-item>
          <six-menu-item value="option-6">Option 6</six-menu-item>
          <six-menu-item value="option-7">Option 7</six-menu-item>
        </six-select>
      </div>
    `);

    // Set 3 values to show checked state
    await page.locator('six-select').evaluate((el: HTMLElement & { value: string[] }) => {
      el.value = ['option-1', 'option-3', 'option-5'];
    });
    await expect(page.getByRole('combobox')).toContainText('Option 1');

    await page.locator('six-select').click();
    await expectSelectToBeOpen(page);
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('select-multiple-open.png');
  });

  test('should match screenshot for filter mode', async ({ page }) => {
    await page.setContent(`
      <div style="padding-bottom: 150px;">
        <six-select filter placeholder="Search..." style="width: 200px;">
          <six-menu-item value="apple">Apple</six-menu-item>
          <six-menu-item value="banana">Banana</six-menu-item>
          <six-menu-item value="cherry">Cherry</six-menu-item>
        </six-select>
      </div>
    `);

    await page.locator('six-select').click();
    await expectSelectToBeOpen(page);
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('select-filter.png');
  });

  const sizes = ['small', 'medium', 'large'] as const;
  sizes.forEach((size) => {
    test(`should match screenshot for ${size} size`, async ({ page }) => {
      await page.setContent(`
        <six-select placeholder="Select" size="${size}" style="width: 200px;">
          <six-menu-item value="option-1">Option 1</six-menu-item>
        </six-select>
      `);
      await expect(page.locator('.playwright-test-container')).toHaveScreenshot(`select-${size}.png`);
    });
  });

  test('should match screenshot for hover state', async ({ page }) => {
    await page.setContent(`
      <six-select placeholder="Select one" style="width: 200px;">
        <six-menu-item value="option-1">Option 1</six-menu-item>
      </six-select>
    `);
    await page.locator('six-select').first().hover();
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('select-hover.png');
  });

  test('should match screenshot for focused state', async ({ page }) => {
    await page.setContent(`
      <six-select placeholder="Select one" style="width: 200px;">
        <six-menu-item value="option-1">Option 1</six-menu-item>
      </six-select>
    `);
    await page.locator('six-select').first().focus();
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('select-focused.png');
  });

  test('should match screenshot for focus-visible state', async ({ page }) => {
    await page.setContent(`
      <six-select placeholder="Select one" style="width: 200px;">
        <six-menu-item value="option-1">Option 1</six-menu-item>
      </six-select>
    `);
    await page.keyboard.press('Tab');
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('select-focus-visible.png');
  });
});

test.describe('six-select accessibility', () => {
  test('should have combobox role', async ({ page }) => {
    await page.setContent(`
      <six-select placeholder="Select one">
        <six-menu-item value="option-1">Option 1</six-menu-item>
      </six-select>
    `);

    await expect(page.getByRole('combobox')).toHaveRole('combobox');
  });

  test('should have aria-expanded attribute', async ({ page }) => {
    await page.setContent(`
      <six-select placeholder="Select one">
        <six-menu-item value="option-1">Option 1</six-menu-item>
      </six-select>
    `);

    // Closed state
    await expect(page.getByRole('combobox')).toHaveAttribute('aria-expanded', 'false');

    // Open
    await page.locator('six-select').click();
    await expectSelectToBeOpen(page);
    await expect(page.getByRole('combobox')).toHaveAttribute('aria-expanded', 'true');
  });

  test('should have no accessibility violations', async ({ page }) => {
    await page.setContent(`
      <six-select label="Select option" value="option-1">
        <six-menu-item value="option-1">Option 1</six-menu-item>
        <six-menu-item value="option-2">Option 2</six-menu-item>
        <six-menu-item value="option-3" disabled>Disabled</six-menu-item>
      </six-select>
    `);

    await expect(page.getByRole('combobox')).toContainText('Option 1');

    const results = await new AxeBuilder({ page })
      .include('six-select')
      // Disabled due to known accessibility issues documented in TODO above
      .disableRules(['aria-allowed-attr', 'color-contrast', 'aria-hidden-focus', 'aria-required-attr'])
      .analyze();
    expect(results.violations).toEqual([]);
  });

  test('should have no accessibility violations when open', async ({ page }) => {
    await page.setContent(`
      <six-select label="Select option" placeholder="Choose">
        <six-menu-item value="option-1">Option 1</six-menu-item>
        <six-menu-item value="option-2">Option 2</six-menu-item>
      </six-select>
    `);

    // Open dropdown
    await page.locator('six-select').click();
    await expectSelectToBeOpen(page);

    const results = await new AxeBuilder({ page })
      .include('six-select')
      // Disabled due to known accessibility issues documented in TODO above
      .disableRules(['aria-allowed-attr', 'color-contrast', 'aria-hidden-focus', 'aria-required-attr'])
      .analyze();
    expect(results.violations).toEqual([]);
  });
});

// Helper functions for Popover-based visibility (six-select uses six-dropdown → Popover)
function expectSelectToBeOpen(page: Page) {
  return expect(page.locator('six-select six-dropdown [part="panel"]')).toHaveCSS('opacity', '1');
}

function expectSelectToBeClosed(page: Page) {
  return expect(page.locator('six-select six-dropdown [part="panel"]')).toHaveCSS('opacity', '0');
}
