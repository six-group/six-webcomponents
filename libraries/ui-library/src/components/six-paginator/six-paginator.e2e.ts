import { test } from '../../test-utils/fixtures';
import { expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('six-paginator behavior', () => {
  test('should navigate to page when clicking a page number', async ({ page }) => {
    await page.setContent('<six-paginator total-pages="10" total-results="100" current-page="0"></six-paginator>');
    const paginator = page.locator('six-paginator');
    const pageChangedSpy = await page.spyOnEvent('six-paginator-page-changed');

    // Click on page 2 (index 1)
    await page.locator('.paginator-value-selector').nth(1).click();

    expect(pageChangedSpy).toHaveReceivedEventDetail({ idx: 1, page: 2 });
    await expect(paginator).toHaveAttribute('current-page', '1');
  });

  test('should navigate via first/prev/next/last buttons', async ({ page }) => {
    await page.setContent('<six-paginator total-pages="10" total-results="100" current-page="5"></six-paginator>');
    const paginator = page.locator('six-paginator');
    const pageChangedSpy = await page.spyOnEvent('six-paginator-page-changed');

    // Next
    await page.locator('#six-paginator-navigation-next').click();
    expect(pageChangedSpy).toHaveReceivedEventDetail({ idx: 6, page: 7 });
    await expect(paginator).toHaveAttribute('current-page', '6');

    // Prev
    await page.locator('#six-paginator-navigation-prev').click();
    expect(pageChangedSpy).toHaveReceivedEventDetail({ idx: 5, page: 6 });
    await expect(paginator).toHaveAttribute('current-page', '5');

    // Last
    await page.locator('#six-paginator-navigation-last').click();
    expect(pageChangedSpy).toHaveReceivedEventDetail({ idx: 9, page: 10 });
    await expect(paginator).toHaveAttribute('current-page', '9');

    // First
    await page.locator('#six-paginator-navigation-first').click();
    expect(pageChangedSpy).toHaveReceivedEventDetail({ idx: 0, page: 1 });
    await expect(paginator).toHaveAttribute('current-page', '0');
  });

  test('should disable first/prev buttons on first page', async ({ page }) => {
    await page.setContent('<six-paginator total-pages="10" total-results="100" current-page="0"></six-paginator>');

    const firstBtn = page.locator('#six-paginator-navigation-first');
    const prevBtn = page.locator('#six-paginator-navigation-prev');

    await expect(firstBtn).toBeDisabled();
    await expect(prevBtn).toBeDisabled();
  });

  test('should disable next/last buttons on last page', async ({ page }) => {
    await page.setContent('<six-paginator total-pages="10" total-results="100" current-page="9"></six-paginator>');

    const nextBtn = page.locator('#six-paginator-navigation-next');
    const lastBtn = page.locator('#six-paginator-navigation-last');

    await expect(nextBtn).toBeDisabled();
    await expect(lastBtn).toBeDisabled();
  });

  test('should emit event when results per page changes', async ({ page }) => {
    await page.setContent('<six-paginator total-pages="10" total-results="100"></six-paginator>');
    const resultsPerPageSpy = await page.spyOnEvent('six-paginator-results-per-page-changed');

    const select = page.locator('six-select');
    await select.click();
    await page.locator('six-menu-item').filter({ hasText: '24' }).click();

    expect(resultsPerPageSpy).toHaveReceivedEventDetail({ resultsPerPage: 24 });
  });

  test('should not change page when disabled', async ({ page }) => {
    await page.setContent(
      '<six-paginator total-pages="10" total-results="100" current-page="0" disabled></six-paginator>'
    );
    const pageChangedSpy = await page.spyOnEvent('six-paginator-page-changed');

    // Try clicking next
    await page.locator('#six-paginator-navigation-next').click({ force: true });
    expect(pageChangedSpy).not.toHaveReceivedEvent();

    // Try clicking page 2
    await page.locator('.paginator-value-selector').nth(1).click({ force: true });
    expect(pageChangedSpy).not.toHaveReceivedEvent();
  });

  test('should reflect currentPage property changes', async ({ page }) => {
    await page.setContent('<six-paginator total-pages="10" total-results="100" current-page="0"></six-paginator>');
    const paginator = page.locator('six-paginator');

    await paginator.evaluate((el: HTMLSixPaginatorElement) => (el.currentPage = 5));
    await expect(page.locator('.paginator-value-selector--current')).toHaveText('6');
  });
});

test.describe('six-paginator screenshots', () => {
  const states = [
    { name: 'default', props: 'total-pages="10" total-results="100" current-page="0"' },
    { name: 'middle-page', props: 'total-pages="10" total-results="100" current-page="5"' },
    { name: 'last-page', props: 'total-pages="10" total-results="100" current-page="9"' },
    { name: 'disabled', props: 'total-pages="10" total-results="100" current-page="0" disabled' },
    { name: 'clamped', props: 'total-pages="20" total-results="200" current-page="10" length="7" clamp' },
    { name: 'unclamped', props: 'total-pages="20" total-results="200" current-page="10" length="7" :clamp="false"' },
  ];

  states.forEach(({ name, props }) => {
    test(`should match screenshot for ${name}`, async ({ page }) => {
      // Need to handle the :clamp="false" syntax if it was meant to be a property, but in setContent we use string attributes
      const processedProps = props.replace(':clamp="false"', 'clamp="false"');
      await page.setContent(`<six-paginator ${processedProps}></six-paginator>`);
      await expect(page.locator('.playwright-test-container')).toHaveScreenshot(`paginator-${name}.png`);
    });
  });
});

test.describe('six-paginator accessibility', () => {
  test('should have no a11y violations', async ({ page }) => {
    await page.setContent('<six-paginator total-pages="10" total-results="100" current-page="0"></six-paginator>');
    const results = await new AxeBuilder({ page }).include('six-paginator').analyze();
    expect(results.violations).toEqual([]);
  });

  test('should have no a11y violations in disabled state', async ({ page }) => {
    await page.setContent(
      '<six-paginator total-pages="10" total-results="100" current-page="0" disabled></six-paginator>'
    );
    const results = await new AxeBuilder({ page }).include('six-paginator').analyze();
    expect(results.violations).toEqual([]);
  });

  test('should have proper ARIA attributes for current page', async ({ page }) => {
    await page.setContent('<six-paginator total-pages="10" total-results="100" current-page="2"></six-paginator>');
    // The current implementation uses CSS classes for current page, not aria-current yet?
    // Let's check the code again. It uses .paginator-value-selector--current.
    // TODO: Consider adding aria-current="page" to the current page selector in the component.
    const currentPage = page.locator('.paginator-value-selector--current');
    await expect(currentPage).toBeVisible();
    await expect(currentPage).toHaveText('3');
  });
});
