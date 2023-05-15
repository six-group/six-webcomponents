import { E2EPage, newE2EPage } from '@stencil/core/testing';

describe('six-tile', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<six-tile label="MyTile" icon-name="favorite"></six-tile>');
    const element = await page.find('six-tile');
    expect(element).toHaveClass('hydrated');
  });

  it('click event fires', async () => {
    // given
    const page = await newE2EPage();
    await page.setContent('<six-tile label="MyTile" icon-name="favorite"></six-tile>');
    const buttons = await page.findAll('six-tile >>> six-icon-button');
    expect(buttons.length).toEqual(2);
    const tileSelected = await page.spyOnEvent('six-tile-selected');

    // when
    await buttons[1].click();

    // then
    expect(tileSelected).toHaveReceivedEventTimes(1);
  });

  it('click event does not fire when disabled', async () => {
    // given
    const page = await newE2EPage();
    await page.setContent('<six-tile label="MyTile" icon-name="favorite" disabled="true"></six-tile>');
    const buttons = await page.findAll('six-tile >>> six-icon-button');
    expect(buttons.length).toEqual(2);
    const tileSelected = await page.spyOnEvent('six-tile-selected');

    // when
    await buttons[1].click();

    // then
    expect(tileSelected).toHaveReceivedEventTimes(0);
  });

  it('close event fires', async () => {
    // given
    const page = await newE2EPage();
    await page.setContent('<six-tile label="MyTile" icon-name="favorite"></six-tile>');
    const buttons = await page.findAll('six-tile >>> six-icon-button');
    expect(buttons.length).toEqual(2);
    const tileSelected = await page.spyOnEvent('six-tile-closed');

    // when
    await buttons[0].click();

    // then
    expect(tileSelected).toHaveReceivedEventTimes(1);
    const tileDiv = await page.find('six-tile >>> div');
    expect(await tileDiv.isVisible()).toBe(false);
  });

  it('show() and hide()', async () => {
    // given
    const page = await newE2EPage();
    await page.setContent('<six-tile label="MyTile" icon-name="favorite"></six-tile>');
    const tile = await page.find('six-tile');
    const tileDiv = await page.find('six-tile >>> div');
    expect(await tileDiv.isVisible()).toBe(true);

    // when ... then
    await tile.callMethod('hide');
    expect(await tileDiv.isVisible()).toBe(false);

    // when ... then
    await tile.callMethod('show');
    expect(await tileDiv.isVisible()).toBe(true);
  });

  it('should render correctly', async () => {
    // given
    const page: E2EPage = await newE2EPage();

    await page.setContent(
      '<six-tile label="Small" icon-name="home" size="small"></six-tile>' +
        '<six-tile label="Medium" icon-name="home"></six-tile>' +
        '<six-tile label="Medium" icon-name="home" disabled="true"></six-tile>' +
        '<six-tile label="Medium" icon-name="home" closeable="false"></six-tile>' +
        '<six-tile label="Large" icon-name="home" size="large"></six-tile>'
    );

    await page.setViewport({ width: 800, height: 200 });

    // when
    const results = await page.compareScreenshot('SIX Tile', { fullPage: false });

    // then test against hard pixels
    expect(results).toMatchScreenshot({ allowableMismatchedPixels: 100 });
  });
});
