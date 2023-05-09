import { newE2EPage } from '@stencil/core/testing';

describe('six-input', () => {
  it('should emit six-focus when gaining focus', async () => {
    const page = await newE2EPage({
      html: `
        <six-input></six-input>
      `,
    });
    const input = await page.find('six-input');
    const sixFocus = await input.spyOnEvent('six-input-focus');

    await input.click();

    expect(sixFocus).toHaveReceivedEventTimes(1);
  });

  it('should emit six-blur when losing focus', async () => {
    const page = await newE2EPage({
      html: `
        <six-input></six-input>
        <button>Other Element</button>
      `,
    });
    const input = await page.find('six-input');
    const button = await page.find('button');
    const sixBlur = await input.spyOnEvent('six-input-blur');

    await input.click();
    await button.click();

    expect(sixBlur).toHaveReceivedEventTimes(1);
  });

  it('should emit six-focus when setFocus() is called', async () => {
    const page = await newE2EPage({
      html: `
        <six-input></six-input>
      `,
    });
    const input = await page.find('six-input');
    const sixFocus = await input.spyOnEvent('six-input-focus');

    await input.callMethod('setFocus');

    expect(sixFocus).toHaveReceivedEventTimes(1);
  });

  it('should emit six-blur when removeFocus() is called', async () => {
    const page = await newE2EPage({
      html: `
        <six-input></six-input>
      `,
    });
    const input = await page.find('six-input');
    const sixBlur = await input.spyOnEvent('six-input-blur');

    await input.callMethod('setFocus');
    await input.callMethod('removeFocus');

    expect(sixBlur).toHaveReceivedEventTimes(1);
  });

  it('should emit six-change when text is entered and focus is removed', async () => {
    const page = await newE2EPage({
      html: `
        <six-input></six-input>
      `,
    });
    const input = await page.find('six-input');
    const inputControl = await page.find('six-input >>> .input__control');
    const sixChange = await input.spyOnEvent('six-input-change');

    await inputControl.press('A');
    await input.callMethod('removeFocus');

    expect(sixChange).toHaveReceivedEventTimes(1);
  });

  it('should emit six-input when text entered', async () => {
    const page = await newE2EPage({
      html: `
        <six-input></six-input>
      `,
    });
    const input = await page.find('six-input');
    const inputControl = await page.find('six-input >>> .input__control');
    const sixInput = await input.spyOnEvent('six-input-input');

    await inputControl.press('A');

    expect(sixInput).toHaveReceivedEventTimes(1);
  });

  it('should sync value when text is entered', async () => {
    const page = await newE2EPage({
      html: `
        <six-input></six-input>
        <button>Other Element</button>
      `,
    });
    const input = await page.find('six-input');
    const inputControl = await page.find('six-input >>> .input__control');

    await inputControl.press('A');

    expect(await input.getProperty('value')).toBe('A');
  });

  it('should emit six-clear when cleared', async () => {
    const page = await newE2EPage({
      html: `
        <six-input clearable></six-input>
      `,
    });
    const input = await page.find('six-input');
    const inputControl = await page.find('six-input >>> .input__control');
    const inputClear = await page.find('six-input >>> .input__clear');
    const sixClear = await input.spyOnEvent('six-input-clear');

    await inputControl.press('A');
    await inputClear.click();

    expect(sixClear).toHaveReceivedEventTimes(1);
  });

  it('should select all text when select() method is called', async () => {
    const page = await newE2EPage({
      html: `
        <six-input></six-input>
      `,
    });
    const input = await page.find('six-input');
    const inputControl = await page.find('six-input >>> .input__control');

    await inputControl.press('S');
    await inputControl.press('h');
    await inputControl.press('o');
    await inputControl.press('e');
    await input.callMethod('select');

    const selectedText = await page.evaluate(() => window.getSelection().toString());
    expect(selectedText).toBe('Shoe');
  });

  it('should select a range of text when setSelectionRange() is called', async () => {
    const page = await newE2EPage({
      html: `
        <six-input></six-input>
      `,
    });
    const input = await page.find('six-input');
    const inputControl = await page.find('six-input >>> .input__control');

    await inputControl.press('S');
    await inputControl.press('h');
    await inputControl.press('o');
    await inputControl.press('e');
    await input.callMethod('setSelectionRange', 1, 3);

    const selectedText = await page.evaluate(() => window.getSelection().toString());
    expect(selectedText).toBe('ho');
  });

  it('should replace text when setRangeText() is called', async () => {
    const page = await newE2EPage({
      html: `
        <six-input></six-input>
      `,
    });
    const input = await page.find('six-input');
    const inputControl = await page.find('six-input >>> .input__control');

    await inputControl.press('S');
    await inputControl.press('h');
    await inputControl.press('o');
    await inputControl.press('e');
    await input.callMethod('setRangeText', 'ur', 1, 3);

    const value = await input.getProperty('value');
    expect(value).toBe('Sure');
  });
});
