import { test } from '../../test-utils/fixtures';
import { expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('six-card', () => {
  test('should not render optional sections when no slots are provided', async ({ page }) => {
    await page.setContent(`
      <six-card>
        <p>Card content</p>
      </six-card>
    `);

    const card = page.locator('six-card');
    await expect(card.locator('[part="image"]')).toHaveCount(0);
    await expect(card.locator('[part="header"]')).toHaveCount(0);
    await expect(card.locator('[part="footer"]')).toHaveCount(0);
    await expect(card.locator('[part="content"]')).toBeVisible();
  });

  test('should render the media section when a media slot is provided', async ({ page }) => {
    await page.setContent(`
      <six-card>
        <img slot="media" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBTAA7" alt="placeholder" />
        <p>Card content</p>
      </six-card>
    `);

    await expect(page.locator('six-card').locator('[part="image"]')).toBeVisible();
  });

  test('should render the header when only a header slot is provided', async ({ page }) => {
    await page.setContent(`
      <six-card>
        <h2 slot="header">Card Title</h2>
        <p>Card content</p>
      </six-card>
    `);

    const header = page.locator('six-card').locator('[part="header"]');
    await expect(header).toBeVisible();
    await expect(header.locator('.card__header__actions')).toHaveCount(0);
  });

  test('should render the header actions when only a header-actions slot is provided', async ({ page }) => {
    await page.setContent(`
      <six-card>
        <span slot="header-actions">Action</span>
        <p>Card content</p>
      </six-card>
    `);

    const header = page.locator('six-card').locator('[part="header"]');
    await expect(header).toBeVisible();
    await expect(header.locator('.card__header__actions')).toBeVisible();
  });

  test('should render the footer when only a footer slot is provided', async ({ page }) => {
    await page.setContent(`
      <six-card>
        <p>Card content</p>
        <span slot="footer">Footer text</span>
      </six-card>
    `);

    const footer = page.locator('six-card').locator('[part="footer"]');
    await expect(footer).toBeVisible();
    await expect(footer.locator('.card__footer__content')).toBeVisible();
    await expect(footer.locator('.card__footer__actions')).toHaveCount(0);
  });

  test('should render the footer actions when only a footer-actions slot is provided', async ({ page }) => {
    await page.setContent(`
      <six-card>
        <p>Card content</p>
        <six-button slot="footer-actions" type="primary">Action</six-button>
      </six-card>
    `);

    const footer = page.locator('six-card').locator('[part="footer"]');
    await expect(footer).toBeVisible();
    await expect(footer.locator('.card__footer__content')).toHaveCount(0);
    await expect(footer.locator('.card__footer__actions')).toBeVisible();
  });

  test('should render the shadow class when the shadow prop is set', async ({ page }) => {
    await page.setContent(`
      <six-card shadow>
        <p>Card content</p>
      </six-card>
    `);

    await expect(page.locator('six-card')).toHaveClass(/card__shadow/);
  });

  test('should not render the shadow class by default', async ({ page }) => {
    await page.setContent(`
      <six-card>
        <p>Card content</p>
      </six-card>
    `);

    await expect(page.locator('six-card')).not.toHaveClass(/card__shadow/);
  });

  test('should render media, header, header-actions, footer and footer-actions together', async ({ page }) => {
    await page.setContent(`
      <six-card shadow>
        <img slot="media" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBTAA7" alt="placeholder" />
        <h2 slot="header">Card Title</h2>
        <six-icon slot="header-actions" name="headset"></six-icon>
        <p>Card content</p>
        <six-icon-button slot="footer" name="share" label="Share"></six-icon-button>
        <six-button slot="footer-actions" type="primary">Action</six-button>
      </six-card>
    `);

    const card = page.locator('six-card');
    await expect(card.locator('[part="image"]')).toBeVisible();
    await expect(card.locator('[part="header"]')).toBeVisible();
    await expect(card.locator('[part="header"] .card__header__actions')).toBeVisible();
    await expect(card.locator('[part="footer"]')).toBeVisible();
    await expect(card.locator('[part="footer"] .card__footer__content')).toBeVisible();
    await expect(card.locator('[part="footer"] .card__footer__actions')).toBeVisible();
  });
});

test.describe('six-card screenshots', () => {
  test('should match screenshot for default card', async ({ page }) => {
    await page.setContent(`
      <six-card>
        <p>Card content</p>
      </six-card>
    `);
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('card-default.png');
  });
});

test.describe('six-card accessibility', () => {
  test('should have no accessibility violations', async ({ page }) => {
    await page.setContent(`
      <six-card>
        <p>Card content</p>
      </six-card>
    `);

    const results = await new AxeBuilder({ page }).include('six-card').analyze();
    expect(results.violations).toEqual([]);
  });
});
