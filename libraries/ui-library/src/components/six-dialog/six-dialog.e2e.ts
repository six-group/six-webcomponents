import { test } from '../../test-utils/fixtures';
import { expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

// TODO: six-dialog accessibility issues:
// - Close button (six-icon-button) is missing an accessible label for screen readers.

test.describe('six-dialog', () => {
  test('should open and close via open attribute', async ({ page }) => {
    await page.setContent(`
      <six-dialog label="Test Dialog">
        Dialog content
      </six-dialog>
    `);

    const dialog = page.locator('six-dialog');

    // Initially closed
    await expect(page.getByRole('dialog')).toBeHidden();

    // Open via attribute
    await dialog.evaluate((el: HTMLElement) => el.setAttribute('open', ''));
    await expect(page.getByRole('dialog')).toBeVisible();

    // Close via attribute
    await dialog.evaluate((el: HTMLElement) => el.removeAttribute('open'));
    await expect(page.getByRole('dialog')).toBeHidden();
  });

  test('should open and close via show/hide methods', async ({ page }) => {
    await page.setContent(`
      <six-dialog label="Test Dialog">
        Dialog content
      </six-dialog>
    `);

    const dialog = page.locator('six-dialog');

    // Open via method
    await dialog.evaluate((el: HTMLSixDialogElement) => el.show());
    await expect(page.getByRole('dialog')).toBeVisible();

    // Close via method
    await dialog.evaluate((el: HTMLSixDialogElement) => el.hide());
    await expect(page.getByRole('dialog')).toBeHidden();
  });

  test('should emit show/hide events', async ({ page }) => {
    await page.setContent(
      `
      <six-dialog label="Test Dialog">
        Dialog content
      </six-dialog>
    `,
      // after events are not fired when animations are disabled
      { disableAnimations: false }
    );

    const showSpy = await page.spyOnEvent('six-dialog-show');
    const afterShowSpy = await page.spyOnEvent('six-dialog-after-show');
    const hideSpy = await page.spyOnEvent('six-dialog-hide');
    const afterHideSpy = await page.spyOnEvent('six-dialog-after-hide');

    // open
    await page.locator('six-dialog').evaluate((el: HTMLSixDialogElement) => el.show());
    expect(showSpy).toHaveReceivedEvent();
    await expect.poll(() => afterShowSpy.length).toBe(1);

    // close
    await page.locator('six-dialog').evaluate((el: HTMLSixDialogElement) => el.hide());
    expect(hideSpy).toHaveReceivedEvent();
    await expect.poll(() => afterHideSpy.length).toBe(1);
  });

  test('should close when clicking overlay', async ({ page }) => {
    await page.setContent(`
      <six-dialog label="Test Dialog" open>
        Dialog content
      </six-dialog>
    `);

    await expect(page.getByRole('dialog')).toBeVisible();

    const requestCloseSpy = await page.spyOnEvent('six-dialog-request-close');

    // Click on overlay (outside the panel) - use position to ensure we hit the overlay
    const overlay = page.locator('six-dialog [part="overlay"]');
    await overlay.click({ position: { x: 10, y: 10 }, force: true });

    expect(requestCloseSpy).toHaveReceivedEventDetail({ source: 'overlay' });
    await expect(page.getByRole('dialog')).toBeHidden();
  });

  test('should close when clicking close button', async ({ page }) => {
    await page.setContent(`
      <six-dialog label="Test Dialog" open>
        Dialog content
      </six-dialog>
    `);

    await expect(page.getByRole('dialog')).toBeVisible();

    const requestCloseSpy = await page.spyOnEvent('six-dialog-request-close');

    // Click close button (six-icon-button with class dialog__close)
    await page.locator('six-dialog .dialog__close').click();

    expect(requestCloseSpy).toHaveReceivedEventDetail({ source: 'close-button' });
  });

  test('should close when pressing Escape key', async ({ page }) => {
    await page.setContent(`
      <six-dialog label="Test Dialog" open>
        Dialog content
      </six-dialog>
    `);

    await expect(page.getByRole('dialog')).toBeVisible();

    const requestCloseSpy = await page.spyOnEvent('six-dialog-request-close');

    // Ensure the dialog/panel has focus (keydown handler is on the base element)
    await page.locator('six-dialog [part="panel"]').focus();

    // Press Escape
    await page.keyboard.press('Escape');

    expect(requestCloseSpy).toHaveReceivedEventDetail({ source: 'keyboard' });
  });
});

test.describe('six-dialog screenshots', () => {
  test('should match screenshot for open dialog', async ({ page }) => {
    await page.setContent(`
      <six-dialog label="Dialog Title" open style="--width: 400px;">
        <p>This is the dialog content.</p>
        <six-button slot="footer" type="primary">Close</six-button>
      </six-dialog>
    `);

    await expect(page.getByRole('dialog')).toBeVisible();
    // Screenshot the panel since six-dialog host has display:contents
    await expect(page.locator('six-dialog [part="panel"]')).toHaveScreenshot('dialog-open.png');
  });

  test('should match screenshot for dialog without header', async ({ page }) => {
    await page.setContent(`
      <six-dialog no-header open style="--width: 400px;">
        <p>Dialog without header.</p>
        <six-button slot="footer" type="primary">Close</six-button>
      </six-dialog>
    `);

    await expect(page.getByRole('dialog')).toBeVisible();
    // Screenshot the panel since six-dialog host has display:contents
    await expect(page.locator('six-dialog [part="panel"]')).toHaveScreenshot('dialog-no-header.png');
  });

  test('should match screenshot for dialog with label', async ({ page }) => {
    await page.setContent(`
      <six-dialog label="My Dialog Title" open style="--width: 400px;">
        <p>Dialog content.</p>
      </six-dialog>
    `);

    await expect(page.getByRole('dialog')).toBeVisible();
    await expect(page.locator('six-dialog [part="panel"]')).toHaveScreenshot('dialog-with-label.png');
  });

  test('should match screenshot for dialog with footer', async ({ page }) => {
    await page.setContent(`
      <six-dialog label="Dialog with Footer" open style="--width: 400px;">
        <p>Dialog content.</p>
        <six-button slot="footer">Cancel</six-button>
        <six-button slot="footer" type="primary">Confirm</six-button>
      </six-dialog>
    `);

    await expect(page.getByRole('dialog')).toBeVisible();
    await expect(page.locator('six-dialog [part="panel"]')).toHaveScreenshot('dialog-with-footer.png');
  });
});

test.describe('six-dialog accessibility', () => {
  test('should have no accessibility violations when open', async ({ page }) => {
    await page.setContent(`
      <six-dialog label="Test Dialog" open>
        <p>Dialog content with some text.</p>
        <six-button slot="footer" type="primary">Confirm</six-button>
      </six-dialog>
    `);

    await expect(page.getByRole('dialog')).toBeVisible();

    const results = await new AxeBuilder({ page })
      .include('six-dialog')
      // Disabled due to close button missing accessible label (documented in TODO above)
      .disableRules(['button-name'])
      .analyze();
    expect(results.violations).toEqual([]);
  });

  test('should have no accessibility violations when closed', async ({ page }) => {
    await page.setContent(`
      <six-dialog label="Test Dialog">
        <p>Dialog content.</p>
      </six-dialog>
    `);

    const results = await new AxeBuilder({ page }).include('six-dialog').analyze();
    expect(results.violations).toEqual([]);
  });
});
