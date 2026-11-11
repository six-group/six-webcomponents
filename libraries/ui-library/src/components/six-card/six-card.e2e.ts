import { test } from '../../test-utils/fixtures';
import { expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const IMAGE_SRC = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBTAA7';

test.describe('six-card', () => {
  test('should hide optional sections when no slots are provided', async ({ page }) => {
    await page.setContent(`
      <six-card>
        <p>Card content</p>
      </six-card>
    `);

    const card = page.locator('six-card');
    await expect(card.locator('[part="media"]')).toBeHidden();
    await expect(card.locator('[part="header"]')).toBeHidden();
    await expect(card.locator('[part="footer"]')).toBeHidden();
    await expect(card.locator('[part="content"]')).toBeVisible();
  });

  test('should show the media section when a media slot is provided', async ({ page }) => {
    await page.setContent(`
      <six-card>
        <img slot="media" src="${IMAGE_SRC}" alt="placeholder" />
        <p>Card content</p>
      </six-card>
    `);

    await expect(page.locator('six-card').locator('[part="media"]')).toBeVisible();
  });

  test('should show the header when only a header slot is provided', async ({ page }) => {
    await page.setContent(`
      <six-card>
        <h2 slot="header">Card Title</h2>
        <p>Card content</p>
      </six-card>
    `);

    const header = page.locator('six-card').locator('[part="header"]');
    await expect(header).toBeVisible();
    await expect(header.locator('.card__header__actions')).toBeHidden();
  });

  test('should style headings in the header as title and other elements as subtitle', async ({ page }) => {
    await page.setContent(`
      <six-card>
        <h4 slot="header">Card Title</h4>
        <p slot="header">Card Subtitle</p>
        <p>Card content</p>
      </six-card>
    `);

    const fontWeight = (selector: string) =>
      page.locator(selector).evaluate((el) => Number(getComputedStyle(el).fontWeight));
    expect(await fontWeight('six-card h4[slot="header"]')).toBeGreaterThanOrEqual(600);
    expect(await fontWeight('six-card p[slot="header"]')).toBeLessThan(600);
  });

  test('should show the header actions when only a header-actions slot is provided', async ({ page }) => {
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

  test('should show the footer when only a footer slot is provided', async ({ page }) => {
    await page.setContent(`
      <six-card>
        <p>Card content</p>
        <span slot="footer">Footer text</span>
      </six-card>
    `);

    const footer = page.locator('six-card').locator('[part="footer"]');
    await expect(footer).toBeVisible();
    await expect(footer.locator('.card__footer__content')).toBeVisible();
    await expect(footer.locator('.card__footer__actions')).toBeHidden();
  });

  test('should show the footer actions when only a footer-actions slot is provided', async ({ page }) => {
    await page.setContent(`
      <six-card>
        <p>Card content</p>
        <six-button slot="footer-actions" type="primary">Action</six-button>
      </six-card>
    `);

    const footer = page.locator('six-card').locator('[part="footer"]');
    await expect(footer).toBeVisible();
    await expect(footer.locator('.card__footer__content')).toBeHidden();
    await expect(footer.locator('.card__footer__actions')).toBeVisible();
  });

  test('should show and hide sections when slotted content is added or removed after rendering', async ({ page }) => {
    await page.setContent(`
      <six-card>
        <p>Card content</p>
      </six-card>
    `);

    const card = page.locator('six-card');
    const media = card.locator('[part="media"]');
    const header = card.locator('[part="header"]');
    const footer = card.locator('[part="footer"]');
    await expect(media).toBeHidden();
    await expect(header).toBeHidden();
    await expect(footer).toBeHidden();

    await card.evaluate((el, src) => {
      el.insertAdjacentHTML(
        'beforeend',
        `<img slot="media" src="${src}" alt="placeholder" />
         <h2 slot="header">Card Title</h2>
         <six-button slot="footer-actions" type="primary">Action</six-button>`
      );
    }, IMAGE_SRC);

    await expect(media).toBeVisible();
    await expect(header).toBeVisible();
    await expect(footer).toBeVisible();
    await expect(footer.locator('.card__footer__actions')).toBeVisible();

    await card.evaluate((el) => el.querySelectorAll('[slot]').forEach((node) => node.remove()));

    await expect(media).toBeHidden();
    await expect(header).toBeHidden();
    await expect(footer).toBeHidden();
  });

  test('should apply the elevated style and reflect the attribute when the elevated prop is set', async ({ page }) => {
    await page.setContent(`
      <six-card>
        <p>Card content</p>
      </six-card>
    `);

    const card = page.locator('six-card');
    const base = card.locator('[part="base"]');
    await expect(base).not.toHaveClass(/card--elevated/);

    await card.evaluate((el: HTMLSixCardElement) => (el.elevated = true));

    await expect(card).toHaveAttribute('elevated', '');
    await expect(base).toHaveClass(/card--elevated/);
  });

  test('should show all sections together', async ({ page }) => {
    await page.setContent(`
      <six-card elevated>
        <img slot="media" src="${IMAGE_SRC}" alt="placeholder" />
        <h2 slot="header">Card Title</h2>
        <six-icon slot="header-actions" name="headset"></six-icon>
        <p>Card content</p>
        <six-icon-button slot="footer" name="share" label="Share"></six-icon-button>
        <six-button slot="footer-actions" type="primary">Action</six-button>
      </six-card>
    `);

    const card = page.locator('six-card');
    await expect(card.locator('[part="media"]')).toBeVisible();
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
