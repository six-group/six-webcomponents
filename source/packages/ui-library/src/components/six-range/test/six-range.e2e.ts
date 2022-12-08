import { E2EPage, newE2EPage } from '@stencil/core/testing';

describe('<six-range>', () => {
  it('should emit six-focus when gaining focus', async () => {
    const page = await newE2EPage({
      html: `
        <six-range min="0" max="100" step="1"></six-range>
      `,
    });
    const range = await page.find('six-range');
    const slFocus = await range.spyOnEvent('six-range-focus');

    await range.click();

    expect(slFocus).toHaveReceivedEventTimes(1);
  });

  it('should emit six-blur when losing focus', async () => {
    const page = await newE2EPage({
      html: `
        <six-range min="0" max="100" step="1"></six-range>
        <button>Other Element</button>
      `,
    });
    const range = await page.find('six-range');
    const button = await page.find('button');
    const slBlur = await range.spyOnEvent('six-range-blur');

    await range.click();
    await button.click();

    expect(slBlur).toHaveReceivedEventTimes(1);
  });

  it('should emit six-focus when setFocus() is called', async () => {
    const page = await newE2EPage({
      html: `
        <six-range min="0" max="100" step="1"></six-range>
      `,
    });
    const range = await page.find('six-range');
    const slFocus = await range.spyOnEvent('six-range-focus');

    await range.callMethod('setFocus');

    expect(slFocus).toHaveReceivedEventTimes(1);
  });

  it('should emit six-blur when removeFocus() is called', async () => {
    const page = await newE2EPage({
      html: `
        <six-range min="0" max="100" step="1"></six-range>
      `,
    });
    const range = await page.find('six-range');
    const slBlur = await range.spyOnEvent('six-range-blur');

    await range.callMethod('setFocus');
    await range.callMethod('removeFocus');

    expect(slBlur).toHaveReceivedEventTimes(1);
  });

  it('should emit six-change when value changes with click', async () => {
    const page = await newE2EPage({
      html: `
        <six-range min="0" max="100" step="1"></six-range>
      `,
    });
    const range = await page.find('six-range');
    const slChange = await range.spyOnEvent('six-range-change');

    await range.click();

    expect(slChange).toHaveReceivedEventTimes(1);
  });

  it('should sync value when changed with click', async () => {
    const page = await newE2EPage({
      html: `
        <six-range min="0" max="100" step="1"></six-range>
      `,
    });
    const range = await page.find('six-range');

    await range.click();

    expect(await range.getProperty('value')).toBe(50);
  });

  it('should render correctly', async () => {
    // given
    const page: E2EPage = await newE2EPage();

    await page.setContent(
      '<six-range label="Volume" help-text="Controls the volume of the current song." min="50" max="100" step="1"></six-range>',
    );

    await page.$eval('six-range', (elm: any) => (elm.value = 55));

    await page.setViewport({ width: 520, height: 120 });

    // when
    const results = await page.compareScreenshot('SIX Range', { fullPage: false });

    // then test against hard pixels
    expect(results).toMatchScreenshot({ allowableMismatchedPixels: 100 });
  });

  it('should render disabled correctly', async () => {
    // given
    const page: E2EPage = await newE2EPage();

    await page.setContent(
      '<six-range label="Volume" help-text="Controls the volume of the current song." min="0" max="100" step="1" disabled></six-range>',
    );

    await page.setViewport({ width: 520, height: 120 });

    // when
    const results = await page.compareScreenshot('SIX Range (disabled)', { fullPage: false });

    // then test against hard pixels
    expect(results).toMatchScreenshot({ allowableMismatchedPixels: 100 });
  });
});
