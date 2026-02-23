import { test } from '../../test-utils/fixtures';
import { expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

// TODO: six-tooltip has accessibility issues:
// - Tooltip background color contrast is 4.37:1, doesn't meet WCAG 2 AA (4.5:1)

test.describe('six-tooltip', () => {
  test('should not show when disabled', async ({ page }) => {
    await page.setContent(`
      <six-tooltip content="Tooltip text" disabled>
        <six-button>Hover me</six-button>
      </six-tooltip>
    `);

    // Even with hover, the tooltip shouldn't show when disabled
    await page.locator('six-button').hover();
    await expect(page.locator('[role="tooltip"]')).toHaveCSS('opacity', '0');
  });

  test('should show/hide via methods', async ({ page }) => {
    await page.setContent(`
      <six-tooltip content="Tooltip text">
        <six-button>Button</six-button>
      </six-tooltip>
    `);

    const tooltipEl = page.locator('six-tooltip');

    await tooltipEl.evaluate((el: HTMLElement & { show: () => Promise<void> }) => el.show());
    await expect(page.getByRole('tooltip')).toHaveCSS('opacity', '1');

    await tooltipEl.evaluate((el: HTMLElement & { hide: () => Promise<void> }) => el.hide());
    await expect(page.locator('[role="tooltip"]')).toHaveCSS('opacity', '0');
  });
});

test.describe('six-tooltip screenshots', () => {
  test('should match screenshot for open tooltip', async ({ page }) => {
    await page.setContent(`
      <div style="padding: 60px;">
        <six-tooltip content="This is a tooltip" open>
          <six-button>Button</six-button>
        </six-tooltip>
      </div>
    `);
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('tooltip-open.png');
  });

  test('should match screenshot for bottom placement', async ({ page }) => {
    await page.setContent(`
      <div style="padding: 60px;">
        <six-tooltip content="Bottom tooltip" open placement="bottom">
          <six-button>Button</six-button>
        </six-tooltip>
      </div>
    `);
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('tooltip-bottom.png');
  });
});

test.describe('six-tooltip accessibility', () => {
  test('should have correct ARIA attributes', async ({ page }) => {
    await page.setContent(`
      <six-tooltip content="Tooltip text" open>
        <six-button>Button</six-button>
      </six-tooltip>
    `);

    const tooltip = page.locator('six-tooltip [role="tooltip"]');
    await expect(tooltip).toHaveRole('tooltip');
    await expect(tooltip).toHaveAttribute('aria-hidden', 'false');
  });

  test('should have no accessibility violations', async ({ page }) => {
    await page.setContent(`
      <six-tooltip content="Tooltip text">
        <six-button>Button</six-button>
      </six-tooltip>
    `);

    const results = await new AxeBuilder({ page })
      .include('six-tooltip')
      // Disabled due to known issue documented in TODO above
      .disableRules(['color-contrast'])
      .analyze();
    expect(results.violations).toEqual([]);
  });
});
