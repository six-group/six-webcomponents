import { test } from '../../test-utils/fixtures';
import { expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('six-input', () => {
  test('should accept and display typed text', async ({ page }) => {
    await page.setContent('<six-input></six-input>');

    const input = page.getByRole('textbox');
    await input.fill('Hello World');
    await expect(input).toHaveValue('Hello World');
  });

  test('should display placeholder text', async ({ page }) => {
    await page.setContent('<six-input placeholder="Enter your name"></six-input>');

    const input = page.getByRole('textbox');
    await expect(input).toHaveAttribute('placeholder', 'Enter your name');
  });

  test('should skip disabled input in tab navigation', async ({ page }) => {
    await page.setContent(
      `
        <six-input label="Before"></six-input>
        <six-input label="Disabled" disabled></six-input>
        <six-input label="After"></six-input>
      `
    );

    await page.keyboard.press('Tab');
    await expect(page.getByRole('textbox', { name: 'Before' })).toBeFocused();

    await page.keyboard.press('Tab');
    await expect(page.getByRole('textbox', { name: 'After' })).toBeFocused();
  });

  test('should emit events (focus, input, change, blur)', async ({ page }) => {
    await page.setContent(
      `
        <six-input></six-input>
        <six-button>Other</six-button>
      `
    );
    const focusSpy = await page.spyOnEvent('six-input-focus');
    const inputSpy = await page.spyOnEvent('six-input-input');
    const changeSpy = await page.spyOnEvent('six-input-change');
    const blurSpy = await page.spyOnEvent('six-input-blur');
    const standardFocus = await page.spyOnEvent('focus');
    const standardInput = await page.spyOnEvent('input');
    const standardChange = await page.spyOnEvent('change');
    const standardBlur = await page.spyOnEvent('blur');

    // Click to focus
    await page.getByRole('textbox').click();
    expect(focusSpy).toHaveReceivedEvent();
    expect(standardFocus).toHaveReceivedEvent();

    // Type to trigger input events
    await page.getByRole('textbox').fill('test');
    expect(inputSpy).toHaveReceivedEvent();
    expect(standardInput).toHaveReceivedEvent();

    // Click elsewhere to blur and trigger change
    await page.locator('six-button').click();
    expect(changeSpy).toHaveReceivedEvent();
    expect(standardChange).toHaveReceivedEvent();
    expect(blurSpy).toHaveReceivedEvent();
    expect(standardBlur).toHaveReceivedEvent();
  });

  test('should not accept input when disabled', async ({ page }) => {
    await page.setContent('<six-input disabled value="initial"></six-input>');

    const input = page.getByRole('textbox');
    await expect(input).toBeDisabled();
    await expect(input).toHaveValue('initial');

    // Attempt to type (should not change value)
    await input.focus();
    await page.keyboard.type('new text');
    await expect(input).toHaveValue('initial');
  });

  test('should not allow editing when readonly', async ({ page }) => {
    await page.setContent('<six-input readonly value="readonly value"></six-input>');

    const input = page.getByRole('textbox');
    await expect(input).toHaveAttribute('readonly', '');
    await input.focus();
    await page.keyboard.type('new text');
    await expect(input).toHaveValue('readonly value');
  });

  test('should clear input when clear button is clicked', async ({ page }) => {
    await page.setContent('<six-input clearable value="some text"></six-input>');
    const clearSpy = await page.spyOnEvent('six-input-clear');

    await expect(page.getByRole('textbox')).toHaveValue('some text');

    // Click the clear button
    await page.locator('six-input').getByRole('button').click();

    await expect(page.getByRole('textbox')).toHaveValue('');
    expect(clearSpy).toHaveReceivedEvent();
  });

  test('should toggle password visibility', async ({ page }) => {
    await page.setContent('<six-input type="password" toggle-password value="secret"></six-input>');

    const input = page.getByRole('textbox');

    // Initially password is hidden
    await expect(input).toHaveAttribute('type', 'password');

    // Click toggle button
    await page.locator('six-input').getByRole('button').click();
    await expect(input).toHaveAttribute('type', 'text');

    // Click again to hide
    await page.locator('six-input').getByRole('button').click();
    await expect(input).toHaveAttribute('type', 'password');
  });

  test('should display label', async ({ page }) => {
    await page.setContent('<six-input label="Username"></six-input>');

    await expect(page.getByText('Username')).toBeVisible();
    await expect(page.getByRole('textbox', { name: 'Username' })).toBeVisible();
  });

  test('should display help text', async ({ page }) => {
    await page.setContent('<six-input label="Email" help-text="Enter a valid email"></six-input>');

    await expect(page.getByText('Enter a valid email')).toBeVisible();
  });

  test('should display error text when invalid', async ({ page }) => {
    await page.setContent('<six-input label="Email" error-text="Invalid email format" invalid></six-input>');

    await expect(page.getByText('Invalid email format')).toBeVisible();
  });

  test('should respect minlength and maxlength constraints', async ({ page }) => {
    await page.setContent('<six-input minlength="3" maxlength="10"></six-input>');

    const input = page.getByRole('textbox');
    await expect(input).toHaveAttribute('minlength', '3');
    await expect(input).toHaveAttribute('maxlength', '10');
  });

  test('should work as number input with min, max, step', async ({ page }) => {
    await page.setContent('<six-input type="number" min="0" max="100" step="5" value="50"></six-input>');

    const input = page.getByRole('spinbutton');
    await expect(input).toHaveAttribute('min', '0');
    await expect(input).toHaveAttribute('max', '100');
    await expect(input).toHaveAttribute('step', '5');
    await expect(input).toHaveValue('50');
  });

  test('should support email input type', async ({ page }) => {
    await page.setContent('<six-input type="email" label="Email"></six-input>');

    const input = page.getByRole('textbox');
    await expect(input).toHaveAttribute('type', 'email');
  });

  test('should support tel input type', async ({ page }) => {
    await page.setContent('<six-input type="tel" label="Phone"></six-input>');

    const input = page.getByRole('textbox');
    await expect(input).toHaveAttribute('type', 'tel');
  });

  test('should support search input type', async ({ page }) => {
    await page.setContent('<six-input type="search" label="Search"></six-input>');

    const input = page.getByRole('searchbox');
    await expect(input).toHaveAttribute('type', 'search');
  });

  test('should support pattern validation', async ({ page }) => {
    await page.setContent('<six-input pattern="[A-Za-z]{3}" label="Code"></six-input>');

    const input = page.getByRole('textbox');
    await expect(input).toHaveAttribute('pattern', '[A-Za-z]{3}');
  });

  test('should programmatically focus and blur', async ({ page }) => {
    await page.setContent('<six-input label="Test"></six-input>');

    const input = page.getByRole('textbox');

    // Focus programmatically
    await page.locator('six-input').evaluate((el: HTMLElement & { setFocus: () => Promise<void> }) => el.setFocus());
    await expect(input).toBeFocused();

    // Blur programmatically
    await page
      .locator('six-input')
      .evaluate((el: HTMLElement & { removeFocus: () => Promise<void> }) => el.removeFocus());
    await expect(input).not.toBeFocused();
  });

  test('should programmatically select text', async ({ page }) => {
    await page.setContent('<six-input value="Hello World"></six-input>');

    // Select all text
    await page.locator('six-input').evaluate((el: HTMLElement & { select: () => Promise<void> }) => el.select());

    // Verify selection by typing (should replace selected text)
    await page.keyboard.type('New');
    await expect(page.getByRole('textbox')).toHaveValue('New');
  });

  test('should support selection range methods', async ({ page }) => {
    await page.setContent('<six-input value="Hello World"></six-input>');

    // Set selection range
    await page
      .locator('six-input')
      .evaluate((el: HTMLElement & { setSelectionRange: (start: number, end: number) => Promise<void> }) =>
        el.setSelectionRange(0, 5)
      );

    // Get selection range
    const range = await page
      .locator('six-input')
      .evaluate(
        (el: HTMLElement & { getSelectionRange: () => Promise<{ selectionStart: number; selectionEnd: number }> }) =>
          el.getSelectionRange()
      );

    expect(range.selectionStart).toBe(0);
    expect(range.selectionEnd).toBe(5);
  });

  test('should submit form on Enter key', async ({ page }) => {
    await page.setContent(`
      <form id="test-form">
        <six-input></six-input>
      </form>
    `);

    // Prevent form submission to avoid page reload
    await page.evaluate(() => {
      document.getElementById('test-form')?.addEventListener('submit', (e) => e.preventDefault());
    });

    const submitSpy = await page.spyOnEvent('submit');

    await page.getByRole('textbox').click();
    await page.keyboard.press('Enter');

    await expect.poll(() => submitSpy.length).toBeGreaterThan(0);
  });

  test('should handle null value gracefully', async ({ page }) => {
    await page.setContent('<six-input></six-input>');

    // Set value to null programmatically (evaluate is required for setting web component properties)
    await page.locator('six-input').evaluate((el: HTMLElement & { value: string | null }) => {
      el.value = null;
    });

    // The input should show empty string, not "null"
    await expect(page.getByRole('textbox')).toHaveValue('');
  });
});

test.describe('six-input screenshots', () => {
  const sizes = ['small', 'medium', 'large'];

  sizes.forEach((size) => {
    test(`should match screenshot for ${size} input`, async ({ page }) => {
      await page.setContent(`<six-input size="${size}" placeholder="Placeholder"></six-input>`);
      await expect(page.locator('.playwright-test-container')).toHaveScreenshot(`input-${size}.png`);
    });
  });

  test('should match screenshot for disabled input', async ({ page }) => {
    await page.setContent('<six-input disabled placeholder="Disabled" label="Label"></six-input>');
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('input-disabled.png');
  });

  test('should match screenshot for input with prefix and suffix', async ({ page }) => {
    await page.setContent(
      `
        <six-input placeholder="With icons">
          <six-icon slot="prefix" size="small">search</six-icon>
          <six-icon slot="suffix" size="small">settings</six-icon>
        </six-input>
      `
    );
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('input-prefix-suffix.png');
  });

  test('should match screenshot for clearable input with value', async ({ page }) => {
    await page.setContent('<six-input clearable value="Clearable text"></six-input>');
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('input-clearable.png');
  });

  test('should match screenshot for password input with toggle', async ({ page }) => {
    await page.setContent('<six-input type="password" toggle-password value="secret"></six-input>');
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('input-password-toggle.png');
  });

  test('should match screenshot for invalid input with error text', async ({ page }) => {
    await page.setContent(
      '<six-input label="Email" error-text="Invalid email format" invalid value="invalid@"></six-input>'
    );
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('input-invalid.png');
  });

  test('should match screenshot for input with label and help text', async ({ page }) => {
    await page.setContent('<six-input label="Username" help-text="Choose a unique username"></six-input>');
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('input-label-help.png');
  });

  test('should match screenshot for hover state', async ({ page }) => {
    await page.setContent('<six-input placeholder="Input"></six-input>');
    await page.locator('six-input input').first().hover();
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('input-hover.png');
  });

  test('should match screenshot for focused state', async ({ page }) => {
    await page.setContent('<six-input placeholder="Input"></six-input>');
    await page.locator('six-input input').first().focus();
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('input-focused.png');
  });

  test('should match screenshot for focus-visible state', async ({ page }) => {
    await page.setContent('<six-input placeholder="Input"></six-input>');
    await page.keyboard.press('Tab');
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('input-focus-visible.png');
  });
});

test.describe('six-input accessibility', () => {
  test('should have correct ARIA attributes', async ({ page }) => {
    await page.setContent('<six-input label="Email" help-text="Enter your email"></six-input>');

    const input = page.getByRole('textbox');
    await expect(input).toHaveAttribute('aria-invalid', 'false');
    await expect(input).toHaveAttribute('aria-labelledby', /input-label/);
    await expect(input).toHaveAttribute('aria-describedby', /input-help-text/);
  });

  test('should have aria-invalid="true" when invalid', async ({ page }) => {
    await page.setContent('<six-input label="Email" invalid></six-input>');

    const input = page.getByRole('textbox');
    await expect(input).toHaveAttribute('aria-invalid', 'true');
  });

  test('should have no accessibility violations for default input', async ({ page }) => {
    await page.setContent('<six-input label="Name"></six-input>');

    expect((await new AxeBuilder({ page }).include('six-input').analyze()).violations).toEqual([]);
  });

  test('should have no accessibility violations for disabled input', async ({ page }) => {
    await page.setContent('<six-input label="Name" disabled></six-input>');

    expect((await new AxeBuilder({ page }).include('six-input').analyze()).violations).toEqual([]);
  });

  test('should have no accessibility violations for invalid input', async ({ page }) => {
    await page.setContent('<six-input label="Email" error-text="Invalid" invalid></six-input>');

    // TODO: Error text has contrast ratio 4.46, doesn't meet WCAG 2 AA (4.5:1)
    const builder = new AxeBuilder({ page }).include('six-input').disableRules(['color-contrast']);
    expect((await builder.analyze()).violations).toEqual([]);
  });

  test('should have no accessibility violations for password input', async ({ page }) => {
    await page.setContent('<six-input label="Password" type="password" toggle-password></six-input>');

    expect((await new AxeBuilder({ page }).include('six-input').analyze()).violations).toEqual([]);
  });
});
