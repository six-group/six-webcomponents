import { test } from '../../test-utils/fixtures';
import { expect, Page } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

// TODO: Component uses role="button" on a <header> element, which is not allowed.
// The header element should be changed to <summary> with role="button".
// See: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/button_role
// See: https://github.com/shoelace-style/webawesome/blob/next/packages/webawesome/src/components/details/details.ts

test.describe('six-details', () => {
  test('should open and close via click', async ({ page }) => {
    await page.setContent(`
      <six-details summary="Toggle Me">
        Content
      </six-details>
    `);

    const header = page.locator('[part="header"]');

    // Initially closed
    await isCollapsed(page);

    // Click header to open
    await header.click();
    await isExpanded(page);

    // Click header to close
    await header.click();
    await isCollapsed(page);
  });

  test('should open and close via keyboard (Enter, Space, arrows)', async ({ page }) => {
    await page.setContent(
      `
      <six-details summary="Toggle Me">
        <p>Content</p>
      </six-details>
    `
    );

    // Focus header
    await page.locator('[part="header"]').focus();

    // Enter opens
    await page.keyboard.press('Enter');
    await isExpanded(page);

    // Enter closes
    await page.keyboard.press('Enter');
    await expect(page.locator('.details__body')).toHaveCSS('height', '0px');

    // Space opens
    await page.keyboard.press('Space');
    expect(
      await page.locator('.details__body').evaluate((el) => parseFloat(getComputedStyle(el).height))
    ).toBeGreaterThan(0);

    // Space closes
    await page.keyboard.press('Space');
    await expect(page.locator('.details__body')).toHaveCSS('height', '0px');

    // ArrowDown opens
    await page.keyboard.press('ArrowDown');
    expect(
      await page.locator('.details__body').evaluate((el) => parseFloat(getComputedStyle(el).height))
    ).toBeGreaterThan(0);

    // ArrowUp closes
    await page.keyboard.press('ArrowUp');
    await expect(page.locator('.details__body')).toHaveCSS('height', '0px');

    // ArrowRight opens
    await page.keyboard.press('ArrowRight');
    expect(
      await page.locator('.details__body').evaluate((el) => parseFloat(getComputedStyle(el).height))
    ).toBeGreaterThan(0);

    await page.keyboard.press('ArrowLeft');
    await expect(page.locator('.details__body')).toHaveCSS('height', '0px');
  });

  test('should not toggle when disabled', async ({ page }) => {
    await page.setContent(`
      <six-details summary="Disabled" disabled>
        <p>Content</p>
      </six-details>
    `);

    // Initially closed
    await isCollapsed(page);

    // Force click on header doesn't open when disabled
    await page.locator('[part="header"]').click({ force: true });
    await isCollapsed(page);
  });

  test('should skip disabled in tab navigation', async ({ page }) => {
    await page.setContent(`
      <button id="before">Before</button>
      <six-details summary="Disabled" disabled>Content</six-details>
      <button id="after">After</button>
    `);

    // Tab from first button should skip disabled details
    await page.locator('#before').focus();
    await page.keyboard.press('Tab');

    // Should focus the After button, not the disabled details
    await expect(page.locator('#after')).toBeFocused();
  });

  test('should emit events (show, after-show, hide, after-hide)', async ({ page }) => {
    await page.setContent(
      `
      <six-details summary="Toggle Me">
        <p>Content</p>
      </six-details>
    `,
      // after events are not fired when animations are disabled
      { disableAnimations: false }
    );

    const header = page.locator('[part="header"]');
    const showSpy = await page.spyOnEvent('six-details-show');
    const afterShowSpy = await page.spyOnEvent('six-details-after-show');
    const hideSpy = await page.spyOnEvent('six-details-hide');
    const afterHideSpy = await page.spyOnEvent('six-details-after-hide');

    // Click header to open
    await header.click();
    expect(showSpy).toHaveReceivedEvent();

    // Wait for open animation to complete
    await expect.poll(() => afterShowSpy.length).toBeGreaterThan(0);

    // Click header to close
    await header.click();
    expect(hideSpy).toHaveReceivedEvent();
    await expect.poll(() => afterHideSpy.length).toBeGreaterThan(0);
  });

  test('should open and close programmatically via open attribute', async ({ page }) => {
    await page.setContent(`
      <six-details summary="Toggle Me">
        <p>Content</p>
      </six-details>
    `);

    // Set open attribute
    await page.locator('six-details').evaluate((el: HTMLElement) => el.setAttribute('open', ''));
    await isExpanded(page);

    // Remove open attribute
    await page.locator('six-details').evaluate((el: HTMLElement) => el.removeAttribute('open'));
    await isCollapsed(page);
  });

  test('should open and close via show/hide methods', async ({ page }) => {
    await page.setContent(`
      <six-details summary="Toggle Me">
        <p>Content</p>
      </six-details>
    `);

    // Call show()
    await page.locator('six-details').evaluate((el: HTMLElement & { show: () => Promise<void> }) => el.show());
    await isExpanded(page);

    // Call hide()
    await page.locator('six-details').evaluate((el: HTMLElement & { hide: () => Promise<void> }) => el.hide());
    await isCollapsed(page);
  });

  test('should prevent opening when six-details-show is cancelled', async ({ page }) => {
    await page.setContent(`
      <six-details summary="Toggle Me">
        <p>Content</p>
      </six-details>
    `);

    // Add event listener that prevents opening
    await page.evaluate(() => {
      document.querySelector('six-details')?.addEventListener('six-details-show', (e) => {
        e.preventDefault();
      });
    });

    // Click header to open - should be prevented
    await page.locator('[part="header"]').click();
    await isCollapsed(page);
  });

  test('should prevent closing when six-details-hide is cancelled', async ({ page }) => {
    await page.setContent(`
      <six-details summary="Toggle Me" open>
        <p>Content</p>
      </six-details>
    `);

    await isExpanded(page);

    // Add event listener that prevents closing
    await page.evaluate(() => {
      document.querySelector('six-details')?.addEventListener('six-details-hide', (e) => {
        e.preventDefault();
      });
    });

    // Click header to close - should be prevented
    await page.locator('[part="header"]').click();
    await isExpanded(page);
  });

  test('should hide icon and disable toggle when hasContent is false', async ({ page }) => {
    await page.setContent(`
      <six-details summary="No Content" has-content="false">
        <p>Content</p>
      </six-details>
    `);

    // Icon should not be visible
    await expect(page.locator('[part="summary-icon"] six-icon')).not.toBeVisible();

    // Initially closed
    await isCollapsed(page);

    // Click header doesn't open (hasContent=false)
    await page.locator('[part="header"]').click();
    await isCollapsed(page);
  });
});

test.describe('six-details screenshots', () => {
  test('should match screenshot for closed state', async ({ page }) => {
    await page.setContent(`
      <six-details summary="Toggle Me">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </six-details>
    `);
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('details-closed.png');
  });

  test('should match screenshot for open state', async ({ page }) => {
    await page.setContent(`
      <six-details summary="Toggle Me" open>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </six-details>
    `);
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('details-open.png');
  });

  test('should match screenshot for disabled closed state', async ({ page }) => {
    await page.setContent(`
      <six-details summary="Disabled" disabled>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </six-details>
    `);
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('details-disabled-closed.png');
  });

  test('should match screenshot for disabled open state', async ({ page }) => {
    await page.setContent(`
      <six-details summary="Disabled" disabled open>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </six-details>
    `);
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('details-disabled-open.png');
  });

  test('should match screenshot for focused state', async ({ page }) => {
    await page.setContent(`
      <six-details summary="Toggle Me">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </six-details>
    `);
    await page.locator('[part="header"]').focus();
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('details-focused.png');
  });

  test('should match screenshot for custom summary icon prop', async ({ page }) => {
    await page.setContent(`
      <six-details summary="Toggle Me" summary-icon="settings">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </six-details>
    `);
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('details-custom-icon.png');
  });

  test('should match screenshot for custom summary slot', async ({ page }) => {
    await page.setContent(`
      <six-details>
        <span slot="summary"><strong>Custom Summary</strong></span>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </six-details>
    `);
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('details-custom-summary-slot.png');
  });

  test('should match screenshot for custom summary-icon slot', async ({ page }) => {
    await page.setContent(`
      <six-details summary="Toggle Me">
        <span slot="summary-icon">99%</span>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </six-details>
    `);
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('details-custom-icon-slot.png');
  });

  test('should match screenshot for inline style', async ({ page }) => {
    await page.setContent(`
      <six-details summary="Toggle Me" inline open>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </six-details>
    `);
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('details-inline.png');
  });
});

test.describe('six-details accessibility', () => {
  test('should have correct ARIA attributes on header', async ({ page }) => {
    await page.setContent(`
      <six-details summary="Toggle Me">
        <p>Content</p>
      </six-details>
    `);

    const header = page.locator('[part="header"]');

    await expect(header).toHaveAttribute('role', 'button');
    await expect(header).toHaveAttribute('aria-expanded', 'false');
    await expect(header).toHaveAttribute('aria-controls', /details-\d+-content/);
    await expect(header).toHaveAttribute('aria-disabled', 'false');
  });

  test('should have aria-expanded="true" when open', async ({ page }) => {
    await page.setContent(`
      <six-details summary="Toggle Me" open>
        <p>Content</p>
      </six-details>
    `);

    await expect(page.locator('[part="header"]')).toHaveAttribute('aria-expanded', 'true');
  });

  test('should have aria-disabled="true" when disabled', async ({ page }) => {
    await page.setContent(`
      <six-details summary="Toggle Me" disabled>
        <p>Content</p>
      </six-details>
    `);
    await expect(page.locator('[part="header"]')).toHaveAttribute('aria-disabled', 'true');
  });

  test('should have content with role="region" and aria-labelledby', async ({ page }) => {
    await page.setContent(`
      <six-details summary="Toggle Me" open>
        <p>Content</p>
      </six-details>
    `);

    const content = page.locator('[part="content"]');
    await expect(content).toHaveAttribute('role', 'region');
    await expect(content).toHaveAttribute('aria-labelledby', /details-\d+-header/);
  });

  test('should have no accessibility violations for closed state', async ({ page }) => {
    await page.setContent(`
      <six-details summary="Toggle Me">
        <p>Content</p>
      </six-details>
    `);

    // Disable aria-allowed-role due to role="button" on header element (see TODO at top)
    const results = await new AxeBuilder({ page }).include('six-details').disableRules(['aria-allowed-role']).analyze();
    expect(results.violations).toEqual([]);
  });

  test('should have no accessibility violations for open state', async ({ page }) => {
    await page.setContent(`
      <six-details summary="Toggle Me" open>
        <p>Content</p>
      </six-details>
    `);

    // Disable aria-allowed-role due to role="button" on header element (see TODO at top)
    const results = await new AxeBuilder({ page }).include('six-details').disableRules(['aria-allowed-role']).analyze();
    expect(results.violations).toEqual([]);
  });

  test('should have no accessibility violations for disabled state', async ({ page }) => {
    await page.setContent(`
      <six-details summary="Disabled" disabled>
        <p>Content</p>
      </six-details>
    `);

    // Disable aria-allowed-role due to role="button" on header element (see TODO at top)
    const results = await new AxeBuilder({ page }).include('six-details').disableRules(['aria-allowed-role']).analyze();
    expect(results.violations).toEqual([]);
  });
});

async function isExpanded(page: Page) {
  expect(
    await page.locator('.details__body').evaluate((el) => parseFloat(getComputedStyle(el).height))
  ).toBeGreaterThan(0);
}

async function isCollapsed(page: Page) {
  await expect(page.locator('.details__body')).toHaveCSS('height', '0px');
}
