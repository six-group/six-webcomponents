import { E2EPage, newE2EPage } from '@stencil/core/testing';

describe('six-stage-indicator', () => {
  it('should render if stage is DEV', async () => {
    const page = await newE2EPage();
    await page.setContent('<six-stage-indicator stage="DEV">DEV</six-stage-indicator>');

    const element = await page.find('six-stage-indicator');
    expect(element).toHaveClass('hydrated');
  });

  it('should not render if stage is PROD', async () => {
    // given
    const page: E2EPage = await newE2EPage();

    await page.setContent('<six-stage-indicator stage="PROD"></six-stage-indicator>');

    // when
    const noElement = await page.find('six-stage-indicator');

    // then expect no element found
    expect(noElement).toBeNull();
  });
});
