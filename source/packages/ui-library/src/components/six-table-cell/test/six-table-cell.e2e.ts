import { newE2EPage } from '@stencil/core/testing';

describe('six-table-cell', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<six-table-cell></six-table-cell>');

    const element = await page.find('six-table-cell');
    expect(element).toHaveClass('hydrated');
  });
});
