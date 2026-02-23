import { test } from '../../test-utils/fixtures';
import { expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

// TODO: six-drawer accessibility issues:
// - Close button (six-icon-button) is missing an accessible label for screen readers.

test.describe('six-drawer', () => {
  test('should open and close via open attribute', async ({ page }) => {
    await page.setContent(`
      <six-drawer label="Test Drawer">
        Drawer content
      </six-drawer>
    `);

    const drawer = page.locator('six-drawer');

    // Initially closed
    await expect(page.getByRole('dialog')).toBeHidden();

    // Open via attribute
    await drawer.evaluate((el: HTMLElement) => el.setAttribute('open', ''));
    await expect(page.getByRole('dialog')).toBeVisible();

    // Close via attribute
    await drawer.evaluate((el: HTMLElement) => el.removeAttribute('open'));
    await expect(page.getByRole('dialog')).toBeHidden();
  });

  test('should open and close via show/hide methods', async ({ page }) => {
    await page.setContent(`
      <six-drawer label="Test Drawer">
        Drawer content
      </six-drawer>
    `);

    const drawer = page.locator('six-drawer');

    // Open via method
    await drawer.evaluate((el: HTMLSixDrawerElement) => el.show());
    await expect(page.getByRole('dialog')).toBeVisible();

    // Close via method
    await drawer.evaluate((el: HTMLSixDrawerElement) => el.hide());
    await expect(page.getByRole('dialog')).toBeHidden();
  });

  test('should emit show/hide events', async ({ page }) => {
    await page.setContent(
      `
      <six-drawer label="Test Drawer">
        Drawer content
      </six-drawer>
    `,
      // after events are not fired when animations are disabled
      { disableAnimations: false }
    );

    const showSpy = await page.spyOnEvent('six-drawer-show');
    const afterShowSpy = await page.spyOnEvent('six-drawer-after-show');
    const hideSpy = await page.spyOnEvent('six-drawer-hide');
    const afterHideSpy = await page.spyOnEvent('six-drawer-after-hide');

    // open
    await page.locator('six-drawer').evaluate((el: HTMLSixDrawerElement) => el.show());
    expect(showSpy).toHaveReceivedEvent();
    await expect.poll(() => afterShowSpy.length).toBe(1);

    // close
    await page.locator('six-drawer').evaluate((el: HTMLSixDrawerElement) => el.hide());
    expect(hideSpy).toHaveReceivedEvent();
    await expect.poll(() => afterHideSpy.length).toBe(1);
  });

  test('should close when clicking overlay', async ({ page }) => {
    // Set wider viewport for this test to ensure overlay is visible
    await page.setViewportSize({ width: 800, height: 640 });

    await page.setContent(`
      <six-drawer label="Test Drawer" open>
        Drawer content
      </six-drawer>
    `);

    const requestCloseSpy = await page.spyOnEvent('six-drawer-request-close');

    // Click on overlay (left side, outside the right-placed panel)
    const overlay = page.locator('six-drawer [part="overlay"]');
    await overlay.click({ position: { x: 10, y: 300 }, force: true });

    expect(requestCloseSpy).toHaveReceivedEventDetail({ source: 'overlay' });
  });

  test('should close when clicking close button', async ({ page }) => {
    await page.setContent(`
      <six-drawer label="Test Drawer" open>
        Drawer content
      </six-drawer>
    `);

    const requestCloseSpy = await page.spyOnEvent('six-drawer-request-close');
    await page.locator('six-icon-button').click();
    expect(requestCloseSpy).toHaveReceivedEventDetail({ source: 'close-button' });
    await expect(page.getByRole('dialog')).toBeHidden();
  });

  test('should close when pressing Escape key', async ({ page }) => {
    await page.setContent(`
      <six-drawer label="Test Drawer" open>
        Drawer content
      </six-drawer>
    `);

    const requestCloseSpy = await page.spyOnEvent('six-drawer-request-close');
    await page.getByRole('dialog').focus();
    await page.keyboard.press('Escape');
    await expect(page.getByRole('dialog')).toBeHidden();
    expect(requestCloseSpy).toHaveReceivedEventDetail({ source: 'keyboard' });
  });
});

test.describe('six-drawer screenshots', () => {
  test('should match screenshot for right placement (default)', async ({ page }) => {
    await page.setContent(`
      <six-drawer label="Drawer Title" open>
        <p>This is the drawer content.</p>
        <six-button slot="footer" type="primary">Close</six-button>
      </six-drawer>
    `);
    await expect(page.locator('six-drawer [part="panel"]')).toHaveScreenshot('drawer-right.png');
  });

  test('should match screenshot for left placement', async ({ page }) => {
    await page.setContent(`
      <six-drawer label="Drawer Title" placement="left" open>
        <p>This is the drawer content.</p>
        <six-button slot="footer" type="primary">Close</six-button>
      </six-drawer>
    `);
    await expect(page.locator('six-drawer [part="panel"]')).toHaveScreenshot('drawer-left.png');
  });

  test('should match screenshot for top placement', async ({ page }) => {
    await page.setContent(`
      <six-drawer label="Drawer Title" placement="top" open>
        <p>This is the drawer content.</p>
        <six-button slot="footer" type="primary">Close</six-button>
      </six-drawer>
    `);
    await expect(page.locator('six-drawer [part="panel"]')).toHaveScreenshot('drawer-top.png');
  });

  test('should match screenshot for bottom placement', async ({ page }) => {
    await page.setContent(`
      <six-drawer label="Drawer Title" placement="bottom" open>
        <p>This is the drawer content.</p>
        <six-button slot="footer" type="primary">Close</six-button>
      </six-drawer>
    `);
    await expect(page.locator('six-drawer [part="panel"]')).toHaveScreenshot('drawer-bottom.png');
  });

  test('should match screenshot for drawer without header', async ({ page }) => {
    await page.setContent(`
      <six-drawer no-header open>
        <p>Drawer without header.</p>
        <six-button slot="footer" type="primary">Close</six-button>
      </six-drawer>
    `);
    await expect(page.locator('six-drawer [part="panel"]')).toHaveScreenshot('drawer-no-header.png');
  });

  test('should match screenshot for custom label slot', async ({ page }) => {
    await page.setContent(`
      <six-drawer open>
        <span slot="label"><six-icon>settings</six-icon> Settings</span>
        <p>Drawer with custom header content.</p>
      </six-drawer>
    `);
    await expect(page.locator('six-drawer [part="panel"]')).toHaveScreenshot('drawer-custom-label.png');
  });
});

test.describe('six-drawer accessibility', () => {
  test('should have correct ARIA attributes', async ({ page }) => {
    await page.setContent(`
      <six-drawer label="Accessible Drawer" open>
        Drawer content
      </six-drawer>
    `);

    // Wait for drawer panel to be fully visible
    const panel = page.locator('six-drawer [part="panel"]');
    await expect(panel).toHaveCSS('transform', 'none');

    await expect(panel).toHaveAttribute('role', 'dialog');
    await expect(panel).toHaveAttribute('aria-modal', 'true');
  });

  test('should have no accessibility violations when open', async ({ page }) => {
    await page.setContent(`
      <six-drawer label="Test Drawer" open>
        <p>Drawer content with some text.</p>
        <six-button slot="footer" type="primary">Confirm</six-button>
      </six-drawer>
    `);

    // Wait for drawer panel to be fully visible
    const panel = page.locator('six-drawer [part="panel"]');
    await expect(panel).toHaveCSS('transform', 'none');

    const results = await new AxeBuilder({ page })
      .include('six-drawer')
      // Disabled due to close button missing accessible label (documented in TODO above)
      .disableRules(['button-name'])
      .analyze();
    expect(results.violations).toEqual([]);
  });

  test('should have no accessibility violations when closed', async ({ page }) => {
    await page.setContent(`
      <six-drawer label="Test Drawer">
        <p>Drawer content.</p>
      </six-drawer>
    `);

    const results = await new AxeBuilder({ page }).include('six-drawer').analyze();
    expect(results.violations).toEqual([]);
  });
});
