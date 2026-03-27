import { test } from '../../test-utils/fixtures';
import { expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('six-button', () => {
  test('should render as link when href is set', async ({ page }) => {
    await page.setContent('<six-button href="https://example.com">Link</six-button>');
    await expect(page.getByRole('link')).toBeVisible();
  });

  test('should skip disabled button in tab navigation', async ({ page }) => {
    await page.setContent(
      `
        <six-button>Before</six-button>
        <six-button disabled>Disabled</six-button>
        <six-button>After</six-button>
      `
    );

    await expect(page.getByRole('button', { name: 'Disabled' })).toBeDisabled();

    await page.locator('six-button').first().click();
    await expect(page.getByRole('button', { name: 'Before' })).toBeFocused();

    await page.keyboard.press('Tab');
    await expect(page.getByRole('button', { name: 'After' })).toBeFocused();
  });

  test('should emit events (focus, blur)', async ({ page }) => {
    await page.setContent(
      `
        <six-button>Button 1</six-button>
        <six-button>Button 2</six-button>
      `
    );
    const focusSpy = await page.spyOnEvent('six-button-focus');
    const blurSpy = await page.spyOnEvent('six-button-blur');

    await page.locator('six-button').first().click();
    expect(focusSpy).toHaveReceivedEvent();

    await page.locator('six-button').nth(1).click();
    expect(blurSpy).toHaveReceivedEvent();
  });

  test('should block click when disabled or loading', async ({ page }) => {
    await page.setContent('<six-button disabled>Disabled</six-button>');
    const disabledClickSpy = await page.spyOnEvent('click');
    await page.locator('six-button').click({ force: true });
    expect(disabledClickSpy).toHaveReceivedEventTimes(0);

    await page.setContent('<six-button loading>Loading</six-button>');
    const loadingClickSpy = await page.spyOnEvent('click');
    await page.locator('six-button').click({ force: true });
    expect(loadingClickSpy).toHaveReceivedEventTimes(0);
  });
});

test.describe('six-button screenshots', () => {
  const buttonTypes = ['primary', 'secondary', 'link', 'action-outline'];
  const buttonSizes = ['small', 'medium', 'large'];

  // Test all type × size combinations
  buttonTypes.forEach((type) => {
    buttonSizes.forEach((size) => {
      test(`should match screenshot for ${type} ${size}`, async ({ page }) => {
        await page.setContent(`<six-button type="${type}" size="${size}">${type} ${size}</six-button>`);
        await expect(page.locator('.playwright-test-container')).toHaveScreenshot(`button-${type}-${size}.png`);
      });
    });
  });

  // Test prefix/suffix slots across sizes
  buttonSizes.forEach((size) => {
    test(`should match screenshot for ${size} button with prefix and suffix`, async ({ page }) => {
      await page.setContent(
        `
          <six-button size="${size}">
            <six-icon slot="prefix">settings</six-icon>
            Settings
            <six-icon slot="suffix">refresh</six-icon>
          </six-button>
        `
      );
      await expect(page.locator('.playwright-test-container')).toHaveScreenshot(`button-${size}-prefix.png`);
    });
  });

  // Test disabled state
  test('should match screenshot for disabled button', async ({ page }) => {
    await page.setContent('<six-button disabled>Disabled</six-button>');
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('button-disabled.png');
  });

  // Test loading state
  test('should match screenshot for loading button', async ({ page }) => {
    await page.setContent('<six-button loading>Loading</six-button>');
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('button-loading.png');
  });

  // Test circle style across sizes
  buttonSizes.forEach((size) => {
    test(`should match screenshot for ${size} circle button`, async ({ page }) => {
      await page.setContent(
        `
          <six-button size="${size}" circle>
            <six-icon>settings</six-icon>
          </six-button>
        `
      );
      await expect(page.locator('.playwright-test-container')).toHaveScreenshot(`button-${size}-circle.png`);
    });
  });

  // Test caret across sizes
  buttonSizes.forEach((size) => {
    test(`should match screenshot for ${size} button with caret`, async ({ page }) => {
      await page.setContent(`<six-button size="${size}" caret>Dropdown ${size}</six-button>`);
      await expect(page.locator('.playwright-test-container')).toHaveScreenshot(`button-${size}-caret.png`);
    });
  });

  test('should match screenshot for hover state', async ({ page }) => {
    await page.setContent('<six-button>Button</six-button>');
    await page.locator('six-button').first().hover();
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('button-hover.png');
  });

  test('should match screenshot for focused state', async ({ page }) => {
    await page.setContent('<six-button>Button</six-button>');
    await page.locator('six-button').first().focus();
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('button-focused.png');
  });

  test('should match screenshot for focus-visible state', async ({ page }) => {
    await page.setContent('<six-button>Button</six-button>');
    await page.keyboard.press('Tab');
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('button-focus-visible.png');
  });
});

test.describe('six-button accessibility', () => {
  const buttonTypes = ['secondary', 'primary', 'link', 'success', 'warning', 'danger', 'action', 'action-outline'];
  const buttonSizes = ['small', 'medium', 'large'];

  buttonTypes.forEach((type) => {
    buttonSizes.forEach((size) => {
      test(`should have no accessibility violations for ${type} ${size} button`, async ({ page }) => {
        await page.setContent(`<six-button type="${type}" size="${size}">${type} ${size}</six-button>`);
        let builder = new AxeBuilder({ page }).include('six-button');
        // TODO: These button types have color contrast issues that don't meet WCAG 2 AA (4.5:1).
        if (['link', 'action', 'action-outline', 'danger'].includes(type)) {
          builder = builder.disableRules(['color-contrast']);
        }

        expect((await builder.analyze()).violations).toEqual([]);
      });
    });
  });

  buttonTypes.forEach((type) => {
    test(`should have no accessibility violations for disabled ${type} button`, async ({ page }) => {
      await page.setContent(`<six-button type="${type}" disabled>${type} disabled</six-button>`);

      expect((await new AxeBuilder({ page }).include('six-button').analyze()).violations).toEqual([]);
    });
  });
});
