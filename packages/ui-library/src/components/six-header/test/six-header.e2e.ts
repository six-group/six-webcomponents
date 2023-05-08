import { E2EPage, newE2EPage } from '@stencil/core/testing';
import { selectByTestId } from '../../../utils/testing';

describe('six-header', () => {
  let page: E2EPage;

  beforeEach(async () => {
    page = await newE2EPage();
  });

  it('renders', async () => {
    await page.setContent('<six-header></six-header>');
    const element = await page.find('six-header');

    // then
    expect(element).toHaveClass('hydrated');
  });

  describe('search field input', () => {
    beforeEach(async () => {
      await page.setContent(`
        <six-header>
          <six-search-field slot="search-field">
          </six-search-field>
        </six-header>
      `);
    });

    it(`should emit 'six-header-search-field-toggle' event`, async () => {
      const toggleEvent = await page.spyOnEvent('six-header-search-field-toggle');
      const searchTrigger = await selectByTestId(page, 'search-trigger');

      // when
      await searchTrigger.click();
      await page.waitForChanges();

      await searchTrigger.click();
      await page.waitForChanges();

      // then
      expect(toggleEvent).toHaveReceivedEventTimes(2);
      expect(toggleEvent).toHaveNthReceivedEventDetail(0, { visible: true });
      expect(toggleEvent).toHaveNthReceivedEventDetail(1, { visible: false });
    });

    it('shold not be focused by default', async () => {
      // when
      await page.waitForChanges();

      // then
      const focused = await page.evaluate(() => document.activeElement.tagName.toLowerCase());
      expect(focused).not.toEqual('six-search-field');
    });

    it('should focus on input when search is triggered', async () => {
      // when
      const searchTrigger = await selectByTestId(page, 'search-trigger');
      await searchTrigger.click();
      await page.waitForChanges();

      // then
      const focused = await page.evaluate(() => document.activeElement.tagName.toLowerCase());
      expect(focused).toEqual('six-search-field');
    });
  });
});
