import { newE2EPage } from '@stencil/core/testing';

describe('six-sidebar-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<six-sidebar-item></six-sidebar-item>');

    const element = await page.find('six-sidebar-item');
    expect(element).toHaveClass('hydrated');
  });
});
