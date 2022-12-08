import { newE2EPage } from '@stencil/core/testing';

describe('set-attributes', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<set-attributes></set-attributes>');

    const element = await page.find('set-attributes');
    expect(element).toHaveClass('hydrated');
  });
});
