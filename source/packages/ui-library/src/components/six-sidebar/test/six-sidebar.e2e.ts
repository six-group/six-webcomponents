import { newE2EPage } from '@stencil/core/testing';

describe('six-sidebar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<six-sidebar></six-sidebar>');

    const element = await page.find('six-sidebar');
    expect(element).toHaveClass('hydrated');
  });
});
