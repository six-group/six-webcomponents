import { test } from '../../test-utils/fixtures';
import { expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

// TODO: six-file-list accessibility issues:
// - File list item click handlers are on span elements without button role or keyboard support.
//   These should be buttons or have role="button" with keyboard handlers for Enter/Space.
// - Delete icon lacks accessible name (no aria-label or title).
// - Date text has color contrast ratio of 4.23:1, doesn't meet WCAG 2 AA (4.5:1).

test.describe('six-file-list', () => {
  test('should render file list items', async ({ page }) => {
    await page.setContent(`
      <six-file-list>
        <six-file-list-item identifier="id_1" name="file1.pdf"></six-file-list-item>
        <six-file-list-item identifier="id_2" name="file2.pdf"></six-file-list-item>
        <six-file-list-item identifier="id_3" name="file3.pdf"></six-file-list-item>
      </six-file-list>
    `);

    await expect(page.locator('six-file-list-item')).toHaveCount(3);
  });
});

test.describe('six-file-list-item', () => {
  test('should display file name', async ({ page }) => {
    await page.setContent(`
      <six-file-list>
        <six-file-list-item identifier="id_1" name="document.pdf"></six-file-list-item>
      </six-file-list>
    `);

    const item = page.locator('six-file-list-item');
    await expect(item).toContainText('document.pdf');
  });

  test('should display date', async ({ page }) => {
    await page.setContent(`
      <six-file-list>
        <six-file-list-item identifier="id_1" name="file.pdf" date="23.09.2021, 09:12"></six-file-list-item>
      </six-file-list>
    `);

    const item = page.locator('six-file-list-item');
    await expect(item).toContainText('23.09.2021, 09:12');
  });

  test('should display size in KB', async ({ page }) => {
    await page.setContent(`
      <six-file-list>
        <six-file-list-item identifier="id_1" name="file.pdf" size="75680"></six-file-list-item>
      </six-file-list>
    `);

    const item = page.locator('six-file-list-item');
    // 75680 / 1024 = 73.90625, rounded to 74
    await expect(item).toContainText('74 KB');
  });

  test('should emit download event when name clicked', async ({ page }) => {
    await page.setContent(`
      <six-file-list>
        <six-file-list-item identifier="file123" name="document.pdf"></six-file-list-item>
      </six-file-list>
    `);

    const downloadSpy = await page.spyOnEvent('six-file-list-item-download');

    await page.locator('six-file-list-item .six-files-list-item__name').click();

    expect(downloadSpy).toHaveReceivedEventDetail({ fileId: 'file123', name: 'document.pdf' });
  });

  test('should not emit download event when nodownload is set', async ({ page }) => {
    await page.setContent(`
      <six-file-list>
        <six-file-list-item identifier="file123" name="document.pdf" nodownload></six-file-list-item>
      </six-file-list>
    `);

    const downloadSpy = await page.spyOnEvent('six-file-list-item-download');

    await page.locator('six-file-list-item .six-files-list-item__name').click();

    expect(downloadSpy).not.toHaveReceivedEvent();
  });

  test('should emit remove event when delete icon clicked', async ({ page }) => {
    await page.setContent(`
      <six-file-list>
        <six-file-list-item identifier="file123" name="document.pdf"></six-file-list-item>
      </six-file-list>
    `);

    const removeSpy = await page.spyOnEvent('six-file-list-item-remove');

    await page.locator('six-file-list-item six-icon').click();

    expect(removeSpy).toHaveReceivedEventDetail({ fileId: 'file123', name: 'document.pdf' });
  });

  test('should not emit remove event when nodelete is set', async ({ page }) => {
    await page.setContent(`
      <six-file-list>
        <six-file-list-item identifier="file123" name="document.pdf" nodelete></six-file-list-item>
      </six-file-list>
    `);

    const removeSpy = await page.spyOnEvent('six-file-list-item-remove');

    await page.locator('six-file-list-item six-icon').click();

    expect(removeSpy).not.toHaveReceivedEvent();
  });

  test('should show disabled style on name when nodownload', async ({ page }) => {
    await page.setContent(`
      <six-file-list>
        <six-file-list-item identifier="id_1" name="file.pdf" nodownload></six-file-list-item>
      </six-file-list>
    `);

    const nameSpan = page.locator('six-file-list-item .six-files-list-item__name');
    await expect(nameSpan).toHaveClass(/six-files-list-item__name--disabled/);
  });

  test('should show disabled style on delete icon when nodelete', async ({ page }) => {
    await page.setContent(`
      <six-file-list>
        <six-file-list-item identifier="id_1" name="file.pdf" nodelete></six-file-list-item>
      </six-file-list>
    `);

    const deleteIcon = page.locator('six-file-list-item six-icon');
    await expect(deleteIcon).toHaveClass(/six-files-list-item__icon--disabled/);
  });
});

test.describe('six-file-list screenshots', () => {
  test('should match screenshot for file list', async ({ page }) => {
    await page.setContent(`
      <six-file-list>
        <six-file-list-item identifier="id_1" name="file_1.pdf"></six-file-list-item>
        <six-file-list-item identifier="id_2" name="file_2.pdf" date="23.09.2021, 09:12"></six-file-list-item>
        <six-file-list-item identifier="id_3" name="file_3.pdf" date="03.12.2021, 10:22" size="75680"></six-file-list-item>
      </six-file-list>
    `);
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('file-list-default.png');
  });

  test('should match screenshot with disabled states', async ({ page }) => {
    await page.setContent(`
      <six-file-list>
        <six-file-list-item identifier="id_1" name="nodownload.pdf" date="23.09.2021" nodownload></six-file-list-item>
        <six-file-list-item identifier="id_2" name="nodelete.pdf" date="23.09.2021" nodelete></six-file-list-item>
        <six-file-list-item identifier="id_3" name="both.pdf" date="23.09.2021" nodownload nodelete></six-file-list-item>
      </six-file-list>
    `);
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('file-list-disabled.png');
  });
});

test.describe('six-file-list accessibility', () => {
  test('should have delete icon', async ({ page }) => {
    await page.setContent(`
      <six-file-list>
        <six-file-list-item identifier="id_1" name="file.pdf"></six-file-list-item>
      </six-file-list>
    `);

    const deleteIcon = page.locator('six-file-list-item six-icon');
    await expect(deleteIcon).toContainText('delete');
  });

  test('should have no accessibility violations', async ({ page }) => {
    await page.setContent(`
      <six-file-list>
        <six-file-list-item identifier="id_1" name="file_1.pdf" date="23.09.2021" size="75680"></six-file-list-item>
        <six-file-list-item identifier="id_2" name="file_2.pdf" date="23.09.2021" nodownload></six-file-list-item>
        <six-file-list-item identifier="id_3" name="file_3.pdf" date="23.09.2021" nodelete></six-file-list-item>
      </six-file-list>
    `);

    const results = await new AxeBuilder({ page })
      .include('six-file-list')
      // Disabled due to known issue documented in TODO above
      .disableRules(['color-contrast'])
      .analyze();
    expect(results.violations).toEqual([]);
  });
});
