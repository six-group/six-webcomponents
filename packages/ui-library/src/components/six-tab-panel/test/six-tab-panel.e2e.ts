import { newE2EPage } from '@stencil/core/testing';

describe('six-tab-panel', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<six-tab-panel></six-tab-panel>');

    const element = await page.find('six-tab-panel');
    expect(element).toHaveClass('hydrated');
  });
});
