import { newE2EPage } from '@stencil/core/testing';

describe('six-tab', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<six-tab></six-tab>');

    const element = await page.find('six-tab');
    expect(element).toHaveClass('hydrated');
  });
});
