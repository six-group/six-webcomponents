import { newE2EPage } from '@stencil/core/testing';
import { selectByTestId } from '../../../utils/testing';

describe('six-table-header-cell', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<six-table-header-cell></six-table-header-cell>');

    const element = await page.find('six-table-header-cell');
    expect(element).toHaveClass('hydrated');
  });

  describe('sorting', () => {
    it('should NOT contain sort trigger when not defined', async () => {
      // given
      const page = await newE2EPage();
      await page.setContent('<six-table-header-cell name="id"></six-table-header-cell>');

      // when
      await page.waitForChanges();

      // then
      expect(await selectByTestId(page, 'table-sort-id')).toBeNull();
    });

    it('should contain sort trigger when defined', async () => {
      // given
      const page = await newE2EPage();
      await page.setContent('<six-table-header-cell name="id" sort="none"></six-table-header-cell>');

      // when
      await page.waitForChanges();

      // then
      expect(await selectByTestId(page, 'table-sort-id')).not.toBeNull();
    });

    it(`should emit 'six-table-header-cell-sort-updated' event with the next state when clicked`, async () => {
      // given
      const page = await newE2EPage();
      await page.setContent('<six-table-header-cell name="id" sort="none"></six-table-header-cell>');

      const sortUpdated = await page.spyOnEvent('six-table-header-cell-sort-updated');
      const trigger = await selectByTestId(page, 'table-sort-id');

      // when
      await trigger.click();
      await page.waitForChanges();

      // then
      expect(sortUpdated).toHaveReceivedEventTimes(1);
      expect(sortUpdated).toHaveReceivedEventDetail({ id: 'asc' });
    });
  });

  describe('filtering', () => {
    it('should NOT contain trigger when not defined', async () => {
      // given
      const page = await newE2EPage();
      await page.setContent('<six-table-header-cell name="id"></six-table-header-cell>');

      // when
      await page.waitForChanges();

      // then
      expect(await selectByTestId(page, 'table-filter-id')).toBeNull();
      expect(await selectByTestId(page, 'table-filter-prefix-id')).toBeNull();
      expect(await selectByTestId(page, 'table-filter-suffix-id')).toBeNull();
    });

    it('should contain filter trigger when defined', async () => {
      // given
      const page = await newE2EPage();
      await page.setContent('<six-table-header-cell name="id" filter="eq"></six-table-header-cell>');

      // when
      await page.waitForChanges();

      // then
      expect(await selectByTestId(page, 'table-filter-id')).not.toBeNull();
      expect(await selectByTestId(page, 'table-filter-prefix-id')).not.toBeNull();
      expect(await selectByTestId(page, 'table-filter-suffix-id')).not.toBeNull();
    });

    it('should NOT trigger menu until clicked', async () => {
      // given
      const page = await newE2EPage();
      await page.setContent('<six-table-header-cell name="id" filter="eq"></six-table-header-cell>');

      // when
      const filterId = await selectByTestId(page, 'table-filter-id');

      const open = await filterId.evaluate((el) => {
        return el.getAttribute('open');
      });

      // then
      expect(open).toBeNull();
    });

    it('should trigger menu when clicked', async () => {
      // given
      const page = await newE2EPage();
      await page.setContent('<six-table-header-cell name="id" filter="eq"></six-table-header-cell>');

      const filterId = await selectByTestId(page, 'table-filter-id');

      // when
      await filterId.click();
      await page.waitForChanges();

      const open = await filterId.evaluate((el) => {
        return el.getAttribute('open');
      });

      // then
      expect(open).not.toBeNull();
    });

    it(`should emit 'six-table-header-cell-filter-updated' event with the next state when clicked`, async () => {
      // given
      const page = await newE2EPage();
      await page.setContent('<six-table-header-cell name="id" filter="eq" value="lorem"></six-table-header-cell>');

      const filterId = await selectByTestId(page, 'table-filter-id');

      const filterUpdated = await page.spyOnEvent('six-table-header-cell-filter-updated');
      const nextFilter = await selectByTestId(page, 'table-filter-prefix-id');

      // when
      await filterId.click();
      await page.waitForChanges();

      await nextFilter.click();
      await page.waitForChanges();

      // then
      expect(filterUpdated).toHaveReceivedEventTimes(1);
      expect(filterUpdated).toHaveReceivedEventDetail({
        id: { ne: 'lorem' },
      });
    });

    it(`should emit 'six-table-header-cell-filter-updated' event with clean value when 'clear' is clicked`, async () => {
      // given
      const page = await newE2EPage();
      await page.setContent('<six-table-header-cell name="id" filter="eq" value="lorem"></six-table-header-cell>');

      const filterId = await selectByTestId(page, 'table-filter-id');

      const filterUpdated = await page.spyOnEvent('six-table-header-cell-filter-updated');
      const clearFilter = await selectByTestId(page, 'table-filter-suffix-id');

      // when
      await filterId.click();
      await page.waitForChanges();

      await clearFilter.click();
      await page.waitForChanges();

      // then
      expect(filterUpdated).toHaveReceivedEventTimes(1);
      expect(filterUpdated).toHaveReceivedEventDetail({
        id: {},
      });
    });

    it(`should emit 'six-table-header-cell-filter-updated' event when filter value is updated`, async () => {
      // given
      const page = await newE2EPage();
      await page.setContent('<six-table-header-cell name="id" filter="eq" value="lorem"></six-table-header-cell>');

      const filterId = await selectByTestId(page, 'table-filter-id');

      const filterUpdated = await page.spyOnEvent('six-table-header-cell-filter-updated');
      const filterInput = await selectByTestId(page, 'input-control');

      // when
      await filterId.click();
      await page.waitForChanges();

      await filterInput.press(' ');
      await filterInput.press('i');
      await filterInput.press('p');
      await filterInput.press('s');
      await filterInput.press('u');
      await filterInput.press('m');
      await filterInput.press('!');
      await page.waitForChanges();

      // then
      expect(filterUpdated).toHaveReceivedEventTimes(7);
      expect(filterUpdated).toHaveReceivedEventDetail({
        id: { eq: 'lorem ipsum!' },
      });
    });
  });
});
