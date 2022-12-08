import { E2EPage, newE2EPage } from '@stencil/core/testing';

describe('six-sidebar-item-group', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<six-sidebar-item-group></six-sidebar-item-group>');

    const element = await page.find('six-sidebar-item-group');
    expect(element).toHaveClass('hydrated');
  });

  describe('summary-icon slot', () => {
    let page: E2EPage;

    beforeEach(async () => {
      page = await newE2EPage();
    });

    it('should not be passed through if not defined', async () => {
      // given
      await page.setContent(`
        <six-sidebar-item-group>
        </six-sidebar-item-group>
      `);

      // when
      const summaryIcon = await page.find('slot[name="summary-icon"]');

      // then
      expect(summaryIcon).toBeNull();
    });

    it('should be passed through when defined', async () => {
      // given
      await page.setContent(`
        <six-sidebar-item-group>
          <b slot="summary-icon">99%</b>
        </six-sidebar-item-group>
      `);

      // when
      const summaryIcon = await page.find('slot[name="summary-icon"]');

      // then
      expect(summaryIcon).toBeDefined();
    });
  });
});
