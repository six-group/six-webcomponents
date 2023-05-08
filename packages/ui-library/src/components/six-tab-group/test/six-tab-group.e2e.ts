import { E2EPage, newE2EPage } from '@stencil/core/testing';

const testTabGroup = `
    <six-tab-group>
      <six-tab slot="nav" panel="general">General</six-tab>
      <six-tab slot="nav" panel="custom">Custom</six-tab>
      <six-tab slot="nav" panel="advanced">Advanced</six-tab>

      <six-tab-panel name="general">This is the general tab panel.</six-tab-panel>
      <six-tab-panel name="custom">This is the custom tab panel.</six-tab-panel>
      <six-tab-panel name="advanced">This is the advanced tab panel.</six-tab-panel>
    </six-tab-group>
  `;

describe('six-tab-group', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<six-tab-group></six-tab-group>');

    const element = await page.find('six-tab-group');
    expect(element).toHaveClass('hydrated');
  });

  it('should only show first panel by default', async () => {
    const page = await newE2EPage({
      html: testTabGroup,
    });
    const firstPanelName = 'general';
    const firstPanel = await page.find(`six-tab-panel[name=${firstPanelName}]`);

    expect(await firstPanel.isVisible()).toBe(true);

    const otherPanels = await page.findAll(`six-tab-panel:not([name=${firstPanelName}]`);
    for (const panel of otherPanels) {
      expect(await panel.isVisible()).not.toBe(true);
    }
  });

  it('should have first tab activated by default', async () => {
    const page = await newE2EPage({
      html: testTabGroup,
    });
    const firstPanelName = 'general';
    const tab = await page.find(`six-tab[panel=${firstPanelName}] >>> .tab`);

    expect(tab).toHaveClass('tab--active');
  });

  it('should show appropriate panel when tab is selected by clicking', async () => {
    const page = await newE2EPage({
      html: testTabGroup,
    });
    const selectedPanelName = 'custom';
    const selectedTab = await page.find(`six-tab[panel=${selectedPanelName}]`);

    await selectedTab.click();

    const selectedPanel = await page.find(`six-tab-panel[name=${selectedPanelName}]`);
    expect(await selectedPanel.isVisible()).toBe(true);

    const otherPanels = await page.findAll(`six-tab-panel:not([name=${selectedPanelName}]`);
    for (const panel of otherPanels) {
      expect(await panel.isVisible()).not.toBe(true);
    }
  });

  it('should have appropriate tab activated when selected by clicking', async () => {
    const page = await newE2EPage({
      html: testTabGroup,
    });
    const selectedPanelName = 'advanced';
    const selectedTab = await page.find(`six-tab[panel=${selectedPanelName}]`);

    await selectedTab.click();

    const tab = await page.find(`six-tab[panel=${selectedPanelName}] >>> .tab`);
    expect(tab).toHaveClass('tab--active');
  });

  it('should show appropriate panel when show() is called', async () => {
    const page = await newE2EPage({
      html: testTabGroup,
    });
    const selectedPanelName = 'custom';
    const tabGroup = await page.find('six-tab-group');

    await tabGroup.callMethod('show', selectedPanelName);

    const selectedPanel = await page.find(`six-tab-panel[name=${selectedPanelName}]`);
    expect(await selectedPanel.isVisible()).toBe(true);

    const tab = await page.find(`six-tab[panel=${selectedPanelName}] >>> .tab`);
    expect(tab).toHaveClass('tab--active');
  });

  it('should emit six-tab-hide and six-tab-show events when tab is changed', async () => {
    const page = await newE2EPage({
      html: testTabGroup,
    });
    const tabGroup = await page.find('six-tab-group');
    const sixTabHide = await tabGroup.spyOnEvent('six-tab-hide');
    const sixTabShow = await tabGroup.spyOnEvent('six-tab-show');
    const selectedPanelName = 'advanced';
    const selectedTab = await page.find(`six-tab[panel=${selectedPanelName}]`);

    await selectedTab.click();

    expect(sixTabHide).toHaveReceivedEventTimes(1);
    expect(sixTabHide).toHaveReceivedEventDetail({ name: 'general' });
    expect(sixTabShow).toHaveReceivedEventTimes(1);
    expect(sixTabShow).toHaveReceivedEventDetail({ name: 'advanced' });
  });

  it('should change tabs when show() is called', async () => {
    const page = await newE2EPage({
      html: testTabGroup,
    });
    const tabGroup = await page.find('six-tab-group');
    const sixTabHide = await tabGroup.spyOnEvent('six-tab-hide');
    const sixTabShow = await tabGroup.spyOnEvent('six-tab-show');
    const selectedPanelName = 'advanced';
    const selectedTab = await page.find(`six-tab[panel=${selectedPanelName}]`);

    await selectedTab.click();

    expect(sixTabHide).toHaveReceivedEventTimes(1);
    expect(sixTabHide).toHaveReceivedEventDetail({ name: 'general' });
    expect(sixTabShow).toHaveReceivedEventTimes(1);
    expect(sixTabShow).toHaveReceivedEventDetail({ name: 'advanced' });
  });

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Screenshot tests
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  it('should render tabs on top correctly', async () => {
    // given
    const page: E2EPage = await newE2EPage();

    await page.setContent(
      '<six-tab-group>' +
        '<six-tab slot="nav" panel="general">General</six-tab>' +
        '<six-tab slot="nav" panel="custom">Custom</six-tab>' +
        '<six-tab slot="nav" panel="advanced">Advanced</six-tab>' +
        '<six-tab slot="nav" panel="disabled" disabled>Disabled</six-tab>' +
        '<six-tab-panel name="general">This is the general tab panel.</six-tab-panel>' +
        '<six-tab-panel name="custom">This is the custom tab panel.</six-tab-panel>' +
        '<six-tab-panel name="advanced">This is the advanced tab panel.</six-tab-panel>' +
        '<six-tab-panel name="disabled">This is a disabled tab panel.</six-tab-panel>' +
        '</six-tab-group>',
    );
    await page.setViewport({ width: 600, height: 150 });

    // when
    const results = await page.compareScreenshot('SIX Tab Group', { fullPage: false });

    // then test against hard pixels
    expect(results).toMatchScreenshot({ allowableMismatchedPixels: 5 });
  });

  it('should render tabs on bottom correctly', async () => {
    // given
    const page: E2EPage = await newE2EPage();

    await page.setContent(
      '<six-tab-group placement="bottom">' +
        '<six-tab slot="nav" panel="general">General</six-tab>' +
        '<six-tab slot="nav" panel="custom">Custom</six-tab>' +
        '<six-tab slot="nav" panel="advanced">Advanced</six-tab>' +
        '<six-tab slot="nav" panel="disabled" disabled>Disabled</six-tab>' +
        '<six-tab-panel name="general">This is the general tab panel.</six-tab-panel>' +
        '<six-tab-panel name="custom">This is the custom tab panel.</six-tab-panel>' +
        '<six-tab-panel name="advanced">This is the advanced tab panel.</six-tab-panel>' +
        '<six-tab-panel name="disabled">This is a disabled tab panel.</six-tab-panel>' +
        '</six-tab-group>',
    );
    await page.setViewport({ width: 600, height: 150 });

    // when
    const results = await page.compareScreenshot('SIX Tab Group', { fullPage: false });

    // then test against hard pixels
    expect(results).toMatchScreenshot({ allowableMismatchedPixels: 5 });
  });

  it('should render tabs on left correctly', async () => {
    // given
    const page: E2EPage = await newE2EPage();

    await page.setContent(
      '<six-tab-group placement="left">' +
        '<six-tab slot="nav" panel="general">General</six-tab>' +
        '<six-tab slot="nav" panel="custom">Custom</six-tab>' +
        '<six-tab slot="nav" panel="advanced">Advanced</six-tab>' +
        '<six-tab slot="nav" panel="disabled" disabled>Disabled</six-tab>' +
        '<six-tab-panel name="general">This is the general tab panel.</six-tab-panel>' +
        '<six-tab-panel name="custom">This is the custom tab panel.</six-tab-panel>' +
        '<six-tab-panel name="advanced">This is the advanced tab panel.</six-tab-panel>' +
        '<six-tab-panel name="disabled">This is a disabled tab panel.</six-tab-panel>' +
        '</six-tab-group>',
    );
    await page.setViewport({ width: 600, height: 250 });

    // when
    const results = await page.compareScreenshot('SIX Tab Group', { fullPage: false });

    // then test against hard pixels
    expect(results).toMatchScreenshot({ allowableMismatchedPixels: 5 });
  });

  it('should render tabs on right correctly', async () => {
    // given
    const page: E2EPage = await newE2EPage();

    await page.setContent(
      '<six-tab-group placement="right">' +
        '<six-tab slot="nav" panel="general">General</six-tab>' +
        '<six-tab slot="nav" panel="custom">Custom</six-tab>' +
        '<six-tab slot="nav" panel="advanced">Advanced</six-tab>' +
        '<six-tab slot="nav" panel="disabled" disabled>Disabled</six-tab>' +
        '<six-tab-panel name="general">This is the general tab panel.</six-tab-panel>' +
        '<six-tab-panel name="custom">This is the custom tab panel.</six-tab-panel>' +
        '<six-tab-panel name="advanced">This is the advanced tab panel.</six-tab-panel>' +
        '<six-tab-panel name="disabled">This is a disabled tab panel.</six-tab-panel>' +
        '</six-tab-group>',
    );
    await page.setViewport({ width: 600, height: 250 });

    // when
    const results = await page.compareScreenshot('SIX Tab Group', { fullPage: false });

    // then test against hard pixels
    expect(results).toMatchScreenshot({ allowableMismatchedPixels: 5 });
  });
});
