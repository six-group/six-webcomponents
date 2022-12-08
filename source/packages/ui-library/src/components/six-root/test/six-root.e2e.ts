import { newE2EPage } from '@stencil/core/testing';

describe('six-root', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<six-root></six-root>');

    const element = await page.find('six-root');
    expect(element).toHaveClass('hydrated');
  });
});
