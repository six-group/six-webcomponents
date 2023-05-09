import { E2EPage, newE2EPage } from '@stencil/core/testing';

describe('six-menu', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<six-menu></six-menu>');

    const element = await page.find('six-menu');
    expect(element).toHaveClass('hydrated');
  });

  it('six-select', async () => {
    const page = await newE2EPage();
    await page.setContent(
      '<six-menu>' +
        '<six-menu-item value="entry1">entry1</six-menu-item>' +
        '<six-menu-item class="second" value="entry2">entry2</six-menu-item>' +
        '</six-menu>'
    );

    const sixSelect = await page.spyOnEvent('six-menu-item-selected');

    await page.click('six-menu-item.second');

    expect(sixSelect).toHaveReceivedEvent();
    expect(sixSelect.lastEvent.detail.name).toBe('entry2');
  });

  it('ArrowDown and ArrowUp', async () => {
    const page = await newE2EPage();
    await page.setContent(
      '<six-menu>' +
        '<six-menu-item value="entry1">entry1</six-menu-item>' +
        '<six-menu-item value="entry2">entry2</six-menu-item>' +
        '<six-menu-item value="entry3">entry3</six-menu-item>' +
        '</six-menu>'
    );

    const sixSelect = await page.spyOnEvent('six-menu-item-selected');

    const menu = await page.find('six-menu >>> div');
    await menu.focus();

    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');
    expect(sixSelect.lastEvent.detail.name).toBe('entry2');

    await page.keyboard.press('ArrowUp');
    await page.keyboard.press('Enter');
    expect(sixSelect.lastEvent.detail.name).toBe('entry1');
  });

  it('End and Home', async () => {
    const page = await newE2EPage();
    await page.setContent(
      '<six-menu>' +
        '<six-menu-item value="entry1">entry1</six-menu-item>' +
        '<six-menu-item value="entry2">entry2</six-menu-item>' +
        '<six-menu-item value="entry3">entry3</six-menu-item>' +
        '</six-menu>'
    );

    const sixSelect = await page.spyOnEvent('six-menu-item-selected');

    const menu = await page.find('six-menu >>> div');
    await menu.focus();

    await page.keyboard.press('End');
    await page.keyboard.press('Enter');
    await page.waitForChanges();
    // see https://github.com/ionic-team/stencil/issues/1841
    expect(sixSelect.lastEvent.detail.name).toBe('entry3');

    await page.keyboard.press('Home');
    await page.keyboard.press('Enter');
    // see https://github.com/ionic-team/stencil/issues/1841
    expect(sixSelect.lastEvent.detail.name).toBe('entry1');
  });

  it('should render the menu correctly', async () => {
    // given
    const page: E2EPage = await newE2EPage();

    await page.setContent(
      '<six-menu style="max-width: 200px; border: solid 1px var(--six-panel-border-color); border-radius: var(--six-border-radius-medium);">' +
        '<six-menu-item value="apple">Apple</six-menu-item>' +
        '<six-menu-item value="apple">Orange</six-menu-item>' +
        '</six-menu>'
    );

    await page.setViewport({ width: 520, height: 120 });

    // when
    const results = await page.compareScreenshot('SIX Menu', { fullPage: false });

    // then test against hard pixels
    expect(results).toMatchScreenshot({ allowableMismatchedPixels: 100 });
  });
});
