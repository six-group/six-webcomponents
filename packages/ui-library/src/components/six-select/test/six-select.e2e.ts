import { E2EPage, newE2EPage } from '@stencil/core/testing';

describe('six-select', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<six-select></six-select>');

    const element = await page.find('six-select');
    expect(element).toHaveClass('hydrated');
  });

  it('should emit six-focus when gaining focus', async () => {
    const page = await newE2EPage({
      html: `
        <six-select>
          <six-menu-item value="option-1">Option 1</six-menu-item>
          <six-menu-item value="option-2">Option 2</six-menu-item>
          <six-menu-item value="option-3">Option 3</six-menu-item>
        </six-select>
      `,
    });
    const select = await page.find('six-select');
    const slFocus = await select.spyOnEvent('six-select-focus');

    await select.click();

    expect(slFocus).toHaveReceivedEventTimes(1);
  });

  it('should emit six-blur when losing focus', async () => {
    const page = await newE2EPage({
      html: `
        <button>Other Element</button>
        <six-select>
          <six-menu-item value="option-1">Option 1</six-menu-item>
          <six-menu-item value="option-2">Option 2</six-menu-item>
          <six-menu-item value="option-3">Option 3</six-menu-item>
        </six-select>
      `,
    });
    const select = await page.find('six-select');
    const button = await page.find('button');
    const sixBlur = await select.spyOnEvent('six-select-blur');

    await select.click();
    await button.click();

    expect(sixBlur).toHaveReceivedEventTimes(1);
  });

  it('should emit six-change when a menu item is selected', async () => {
    const page = await newE2EPage({
      html: `
        <six-select>
          <six-menu-item value="option-1">Option 1</six-menu-item>
          <six-menu-item value="option-2">Option 2</six-menu-item>
          <six-menu-item value="option-3">Option 3</six-menu-item>
        </six-select>
      `,
    });
    const select = await page.find('six-select');
    const menuItem = await page.find('six-menu-item');
    const sixChange = await select.spyOnEvent('six-select-change');

    await select.click();
    await menuItem.click();

    expect(sixChange).toHaveReceivedEventTimes(1);
  });

  it('should change value when menu item selected', async () => {
    const page = await newE2EPage({
      html: `
        <six-select>
          <six-menu-item value="option-1">Option 1</six-menu-item>
          <six-menu-item value="option-2">Option 2</six-menu-item>
          <six-menu-item value="option-3">Option 3</six-menu-item>
        </six-select>
      `,
    });
    const select = await page.find('six-select');
    const menuItem = await page.find('six-menu-item');

    expect(await select.getProperty('value')).toBe('');

    await select.click();
    await menuItem.click();

    expect(await select.getProperty('value')).toBe('option-1');
  });

  it('should change value when menu item selected (multiple)', async () => {
    const page = await newE2EPage({
      html: `
        <six-select multiple>
          <six-menu-item value="option-1">Option 1</six-menu-item>
          <six-menu-item value="option-2">Option 2</six-menu-item>
          <six-menu-item value="option-3">Option 3</six-menu-item>
        </six-select>
      `,
    });
    const select = await page.find('six-select');
    const menuItems = await page.findAll('six-menu-item');

    expect(await select.getProperty('value')).toBe('');

    await select.click();
    await menuItems[0].click();
    await menuItems[2].click();

    const result: string[] = await select.getProperty('value');
    expect(result[0]).toBe('option-1');
    expect(result[1]).toBe('option-3');
  });

  it('should remove value when menu item is cleared', async () => {
    const page = await newE2EPage({
      html: `
        <six-select clearable>
          <six-menu-item value="option-1">Option 1</six-menu-item>
          <six-menu-item value="option-2">Option 2</six-menu-item>
          <six-menu-item value="option-3">Option 3</six-menu-item>
        </six-select>
      `,
    });
    const select = await page.find('six-select');
    expect(await select.getProperty('value')).toBe('');
    await select.click();

    const menuItem = await page.find('six-menu-item');
    await menuItem.click();
    expect(await select.getProperty('value')).toBe('option-1');

    const icon = await page.find('six-select >>> six-icon-button');
    await icon.click();
    expect(await select.getProperty('value')).toBe('');
  });

  it('should select stuff on ArrowDown and ArrowUp and Enter', async () => {
    const page = await newE2EPage({
      html: `
        <six-select>
          <six-menu-item value="option-1">Option 1</six-menu-item>
          <six-menu-item value="option-2">Option 2</six-menu-item>
          <six-menu-item value="option-3">Option 3</six-menu-item>
        </six-select>
      `,
    });

    await page.click('six-select');
    let dropdown = await page.find('six-select >>> six-dropdown');
    let open = await dropdown.getProperty('open');
    expect(open).toBe(true);

    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowUp');
    await page.keyboard.press('Enter');

    const select = await page.find('six-select');
    expect(await select.getProperty('value')).toBe('option-2');

    dropdown = await page.find('six-select >>> six-dropdown');
    open = await dropdown.getProperty('open');
    expect(open).toBe(false);
  });

  it('should render placeholder correctly', async () => {
    // given
    const page: E2EPage = await newE2EPage();

    await page.setContent(
      '<six-select placeholder="Select one">' +
        ' <six-menu-item value="option-1">Option 1</six-menu-item>' +
        ' <six-menu-item value="option-2">Option 2</six-menu-item>' +
        ' <six-menu-item value="option-3">Option 3</six-menu-item>' +
        '</six-select>'
    );

    await page.setViewport({ width: 520, height: 120 });

    // when
    const results = await page.compareScreenshot('SIX Select (placeholder)', { fullPage: false });

    // then test against hard pixels
    expect(results).toMatchScreenshot({ allowableMismatchedPixels: 100 });
  });

  it('should render pill correctly', async () => {
    // given
    const page: E2EPage = await newE2EPage();

    await page.setContent(
      '<six-select pill>' +
        ' <six-menu-item value="option-1">Option 1</six-menu-item>' +
        ' <six-menu-item value="option-2">Option 2</six-menu-item>' +
        ' <six-menu-item value="option-3">Option 3</six-menu-item>' +
        '</six-select>'
    );

    await page.setViewport({ width: 520, height: 120 });

    // when
    const results = await page.compareScreenshot('SIX Select (pill)', { fullPage: false });

    // then test against hard pixels
    expect(results).toMatchScreenshot({ allowableMismatchedPixels: 100 });
  });

  it('should render line correctly', async () => {
    // given
    const page: E2EPage = await newE2EPage();

    await page.setContent(
      '<six-select line>' +
        ' <six-menu-item value="option-1">Option 1</six-menu-item>' +
        ' <six-menu-item value="option-2">Option 2</six-menu-item>' +
        ' <six-menu-item value="option-3">Option 3</six-menu-item>' +
        '</six-select>'
    );

    await page.setViewport({ width: 520, height: 120 });

    // when
    const results = await page.compareScreenshot('SIX Select (line)', { fullPage: false });

    // then test against hard pixels
    expect(results).toMatchScreenshot({ allowableMismatchedPixels: 100 });
  });

  it('should render disabled correctly', async () => {
    // given
    const page: E2EPage = await newE2EPage();

    await page.setContent(
      '<six-select disabled>' +
        ' <six-menu-item value="option-1">Option 1</six-menu-item>' +
        ' <six-menu-item value="option-2">Option 2</six-menu-item>' +
        ' <six-menu-item value="option-3">Option 3</six-menu-item>' +
        '</six-select>'
    );

    await page.setViewport({ width: 520, height: 120 });

    // when
    const results = await page.compareScreenshot('SIX Select (disabled)', { fullPage: false });

    // then test against hard pixels
    expect(results).toMatchScreenshot({ allowableMismatchedPixels: 100 });
  });

  it('should render line disabled correctly', async () => {
    // given
    const page: E2EPage = await newE2EPage();

    await page.setContent(
      '<six-select line disabled>' +
        ' <six-menu-item value="option-1">Option 1</six-menu-item>' +
        ' <six-menu-item value="option-2">Option 2</six-menu-item>' +
        ' <six-menu-item value="option-3">Option 3</six-menu-item>' +
        '</six-select>'
    );

    await page.setViewport({ width: 520, height: 120 });

    // when
    const results = await page.compareScreenshot('SIX Select (line disabled)', { fullPage: false });

    // then test against hard pixels
    expect(results).toMatchScreenshot({ allowableMismatchedPixels: 100 });
  });

  it('should render size correctly', async () => {
    // given
    const page: E2EPage = await newE2EPage();

    await page.setContent(
      '<six-select placeholder="Small" size="small" multiple>' +
        '<six-menu-item value="option-1">Option 1</six-menu-item>' +
        '<six-menu-item value="option-2">Option 2</six-menu-item>' +
        '<six-menu-item value="option-3">Option 3</six-menu-item>' +
        '</six-select>' +
        '<br>' +
        '<six-select placeholder="Medium" size="medium" multiple>' +
        '<six-menu-item value="option-1">Option 1</six-menu-item>' +
        '<six-menu-item value="option-2">Option 2</six-menu-item>' +
        '<six-menu-item value="option-3">Option 3</six-menu-item>' +
        '</six-select>' +
        '<br>' +
        '<six-select placeholder="Large" size="large" multiple>' +
        '<six-menu-item value="option-1">Option 1</six-menu-item>' +
        '<six-menu-item value="option-2">Option 2</six-menu-item>' +
        '<six-menu-item value="option-3">Option 3</six-menu-item>' +
        '</six-select>'
    );

    await page.setViewport({ width: 520, height: 240 });

    // when
    const results = await page.compareScreenshot('SIX Select (size)', { fullPage: false });

    // then test against hard pixels
    expect(results).toMatchScreenshot({ allowableMismatchedPixels: 100 });
  });

  it('should render help text correctly', async () => {
    // given
    const page: E2EPage = await newE2EPage();

    await page.setContent(
      '<six-select label="Experience" help-text="Please tell us your skill level.">' +
        '<six-menu-item value="option-1">Novice</six-menu-item>' +
        '<six-menu-item value="option-2">Intermediate</six-menu-item>' +
        '<six-menu-item value="option-3">Advanced</six-menu-item>' +
        '</six-select>'
    );

    await page.setViewport({ width: 520, height: 120 });

    // when
    const results = await page.compareScreenshot('SIX Select (help text)', { fullPage: false });

    // then test against hard pixels
    expect(results).toMatchScreenshot({ allowableMismatchedPixels: 100 });
  });
});
