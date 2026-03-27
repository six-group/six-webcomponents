import { test } from '../../test-utils/fixtures';
import { expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

// TODO: six-root has accessibility issue:
// - Left and right sidebar nav elements need unique aria-labels to be distinguishable

test.describe('six-root screenshots', () => {
  test('should match screenshot for basic layout', async ({ page }) => {
    await page.setContent(`
      <six-root style="height: 200px; border: 1px solid #ccc;">
        <div slot="header" style="background: #f0f0f0; padding: 10px;">Header</div>
        <div slot="main">Main content</div>
        <div slot="footer" style="background: #f0f0f0; padding: 10px;">Footer</div>
      </six-root>
    `);
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('root-basic.png');
  });

  test('should match screenshot with stage indicator', async ({ page }) => {
    await page.setContent(`
      <six-root stage="DEV" version="1.0.0" style="height: 200px; border: 1px solid #ccc;">
        <div slot="header" style="background: #f0f0f0; padding: 10px;">Header</div>
        <div slot="main">Main content</div>
      </six-root>
    `);
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('root-with-stage.png');
  });
});

test.describe('six-root accessibility', () => {
  test('should have no accessibility violations', async ({ page }) => {
    await page.setContent(`
      <six-root>
        <div slot="header">Header</div>
        <div slot="main">Main content</div>
        <div slot="footer">Footer</div>
      </six-root>
    `);

    const results = await new AxeBuilder({ page })
      .include('six-root')
      // Disabled due to known issue documented in TODO above
      .disableRules(['landmark-unique'])
      .analyze();
    expect(results.violations).toEqual([]);
  });
});
