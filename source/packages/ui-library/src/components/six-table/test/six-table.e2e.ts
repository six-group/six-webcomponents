import { newE2EPage } from '@stencil/core/testing';
import { selectByTestId } from '../../../utils/testing';
import { getTableRows } from './helpers';

const newMockEvent = () => {
  return { isTrusted: true };
};

describe('six-table', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<six-table></six-table>');

    const element = await page.find('six-table');
    expect(element).toHaveClass('hydrated');
  });

  describe('loading indicator', () => {
    it(`should NOT display when attribute 'loading' is not set`, async () => {
      const page = await newE2EPage();
      await page.setContent('<six-table></six-table>');

      const element = await page.find('six-table');

      // when
      await page.waitForChanges();

      const loadingSpinner = await selectByTestId(page, 'loading-spinner');

      // then
      expect(element.getAttribute('loading')).toBeNull();
      expect(loadingSpinner).toBeNull();
    });

    it(`should display when attribute 'loading' is set`, async () => {
      const page = await newE2EPage();
      await page.setContent('<six-table></six-table>');

      const element = await page.find('six-table');

      // when
      element.setAttribute('loading', '');

      await page.waitForChanges();

      const loadingSpinner = await selectByTestId(page, 'loading-spinner');

      // then
      expect(element.getAttribute('loading')).not.toBeNull();
      expect(loadingSpinner).not.toBeNull();
    });
  });

  describe('created from template', () => {
    it('renders', async () => {
      const page = await newE2EPage();
      await page.setContent(`
        <six-table>
          <six-table-header>
            <six-table-header-cell name="id" sort="none">ID</six-table-header-cell>
            <six-table-header-cell name="name" sort="desc">Name</six-table-header-cell>
            <six-table-header-cell name="description" filter="eq">Description</six-table-header-cell>
          </six-table-header>
          <six-table-row>
            <six-table-cell>ce000646-940a-46d1-9e91-e29a2c1f52c5</six-table-cell>
            <six-table-cell>Jonh Doe</six-table-cell>
            <six-table-cell>Simple table user.</six-table-cell>
          </six-table-row>
          <six-table-row>
            <six-table-cell>814ba21c-85a9-4e50-ba10-689f989d40db</six-table-cell>
            <six-table-cell>Jane Doe</six-table-cell>
            <six-table-cell>Simple table user.</six-table-cell>
          </six-table-row>
        </six-table>
      `);

      // when
      await page.waitForChanges();

      // then
      expect(await getTableRows(page)).toEqual([
        ['ce000646-940a-46d1-9e91-e29a2c1f52c5', 'Jonh Doe', 'Simple table user.'],
        ['814ba21c-85a9-4e50-ba10-689f989d40db', 'Jane Doe', 'Simple table user.'],
      ]);
    });
  });

  describe('created from data', () => {
    const data = {
      columns: {
        id: 'ID',
        name: 'Name',
        description: 'Description',
      },
      rows: [
        { id: 'ce000646-940a-46d1-9e91-e29a2c1f52c5', name: 'Jonh Doe', description: 'Simple table user.' },
        { id: '814ba21c-85a9-4e50-ba10-689f989d40db', name: 'Jane Doe', description: 'Simple table user.' },
      ],
    };

    it('renders', async () => {
      const page = await newE2EPage();
      await page.setContent('<six-table></six-table>');

      const element = await page.find('six-table');

      // given
      await element.callMethod('setData', data);

      // when
      await page.waitForChanges();

      // then
      expect(await selectByTestId(page, 'table-row-0')).not.toBeNull();
      expect(await selectByTestId(page, 'table-row-1')).not.toBeNull();
      expect(await selectByTestId(page, 'table-row-2')).toBeNull();

      expect(await selectByTestId(page, 'table-cell-id-0')).not.toBeNull();
      expect(await selectByTestId(page, 'table-cell-id-1')).not.toBeNull();
      expect(await selectByTestId(page, 'table-cell-id-2')).toBeNull();

      expect(await selectByTestId(page, 'table-cell-name-0')).not.toBeNull();
      expect(await selectByTestId(page, 'table-cell-name-1')).not.toBeNull();
      expect(await selectByTestId(page, 'table-cell-name-2')).toBeNull();

      expect(await selectByTestId(page, 'table-cell-description-0')).not.toBeNull();
      expect(await selectByTestId(page, 'table-cell-description-1')).not.toBeNull();
      expect(await selectByTestId(page, 'table-cell-description-2')).toBeNull();

      expect(await getTableRows(page)).toEqual([
        ['ce000646-940a-46d1-9e91-e29a2c1f52c5', 'Jonh Doe', 'Simple table user.'],
        ['814ba21c-85a9-4e50-ba10-689f989d40db', 'Jane Doe', 'Simple table user.'],
      ]);
    });

    it(`should emit 'six-table-row-clicked' event when row is clicked`, async () => {
      const page = await newE2EPage();
      await page.setContent('<six-table></six-table>');

      const element = await page.find('six-table');
      const rowClicked = await page.spyOnEvent('six-table-row-clicked');

      // given
      await element.callMethod('setData', data);
      await page.waitForChanges();

      // when
      const row = await selectByTestId(page, 'table-row-0');
      await row.click();
      await page.waitForChanges();

      // then
      expect(rowClicked).toHaveReceivedEventTimes(1);
      expect(rowClicked).toHaveReceivedEventDetail({
        event: newMockEvent(),
        item: {
          description: 'Simple table user.',
          id: 'ce000646-940a-46d1-9e91-e29a2c1f52c5',
          name: 'Jonh Doe',
        },
      });
    });

    it(`should emit 'six-table-cell-clicked' event when cell is clicked`, async () => {
      const page = await newE2EPage();
      await page.setContent('<six-table></six-table>');

      const element = await page.find('six-table');
      const cellClicked = await page.spyOnEvent('six-table-cell-clicked');

      // given
      await element.callMethod('setData', data);
      await page.waitForChanges();

      // when
      const cell = await selectByTestId(page, 'table-cell-id-1');
      await cell.click();
      await page.waitForChanges();

      // then
      expect(cellClicked).toHaveReceivedEventTimes(1);
      expect(cellClicked).toHaveReceivedEventDetail({
        event: newMockEvent(),
        item: {
          description: 'Simple table user.',
          id: '814ba21c-85a9-4e50-ba10-689f989d40db',
          name: 'Jane Doe',
        },
        key: 'id',
      });
    });

    describe('sorting', () => {
      const dataWithSort = {
        ...data,
        sort: {
          id: 'none',
          name: 'asc',
          description: 'desc',
        },
      };

      it('should NOT contain sort trigger when not defined', async () => {
        const page = await newE2EPage();
        await page.setContent('<six-table></six-table>');

        const element = await page.find('six-table');

        // given
        await element.callMethod('setData', data);

        // when
        await page.waitForChanges();

        // then
        expect(await selectByTestId(page, 'table-sort-id')).toBeNull();
        expect(await selectByTestId(page, 'table-sort-name')).toBeNull();
        expect(await selectByTestId(page, 'table-sort-description')).toBeNull();
      });

      it('should contain sort trigger when defined', async () => {
        const page = await newE2EPage();
        await page.setContent('<six-table></six-table>');

        const element = await page.find('six-table');

        // given
        await element.callMethod('setData', dataWithSort);

        // when
        await page.waitForChanges();

        // then
        expect(await selectByTestId(page, 'table-sort-id')).not.toBeNull();
        expect(await selectByTestId(page, 'table-sort-name')).not.toBeNull();
        expect(await selectByTestId(page, 'table-sort-description')).not.toBeNull();
      });
    });

    describe('filtering', () => {
      const dataWithFilters = {
        ...data,
        filter: {
          id: { ne: '' },
          description: { eq: '' },
        },
      };

      it('should NOT contain filter trigger when not defined', async () => {
        const page = await newE2EPage();
        await page.setContent('<six-table></six-table>');

        const element = await page.find('six-table');

        // given
        await element.callMethod('setData', data);

        // when
        await page.waitForChanges();

        // then
        expect(await selectByTestId(page, 'table-filter-id')).toBeNull();
        expect(await selectByTestId(page, 'table-filter-name')).toBeNull();
        expect(await selectByTestId(page, 'table-filter-description')).toBeNull();
      });

      it('should contain filter trigger when defined', async () => {
        const page = await newE2EPage();
        await page.setContent('<six-table></six-table>');

        const element = await page.find('six-table');

        // given
        await element.callMethod('setData', dataWithFilters);

        // when
        await page.waitForChanges();

        // then
        expect(await selectByTestId(page, 'table-filter-id')).not.toBeNull();
        expect(await selectByTestId(page, 'table-filter-name')).toBeNull();
        expect(await selectByTestId(page, 'table-filter-description')).not.toBeNull();
      });
    });
  });
});
