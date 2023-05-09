import { E2EPage, newE2EPage } from '@stencil/core/testing';

describe('six-textarea', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<six-textarea></six-textarea>');

    const element = await page.find('six-textarea');
    expect(element).toHaveClass('hydrated');
  });

  it('should emit six-focus when gaining focus', async () => {
    const page = await newE2EPage({
      html: `
        <six-textarea></six-textarea>
      `,
    });
    const textarea = await page.find('six-textarea');
    const sixFocus = await textarea.spyOnEvent('six-textarea-focus');

    await textarea.click();

    expect(sixFocus).toHaveReceivedEventTimes(1);
  });

  it('should emit six-blur when losing focus', async () => {
    const page = await newE2EPage({
      html: `
        <six-textarea></six-textarea>
        <button>Other Element</button>
      `,
    });
    const textarea = await page.find('six-textarea');
    const button = await page.find('button');
    const sixBlur = await textarea.spyOnEvent('six-textarea-blur');

    await textarea.click();
    await button.click();

    expect(sixBlur).toHaveReceivedEventTimes(1);
  });

  it('should emit six-focus when setFocus() is called', async () => {
    const page = await newE2EPage({
      html: `
        <six-textarea></six-textarea>
      `,
    });
    const textarea = await page.find('six-textarea');
    const sixFocus = await textarea.spyOnEvent('six-textarea-focus');

    await textarea.callMethod('setFocus');

    expect(sixFocus).toHaveReceivedEventTimes(1);
  });

  it('should emit six-blur when removeFocus() is called', async () => {
    const page = await newE2EPage({
      html: `
        <six-textarea></six-textarea>
      `,
    });
    const textarea = await page.find('six-textarea');
    const sixBlur = await textarea.spyOnEvent('six-textarea-blur');

    await textarea.callMethod('setFocus');
    await textarea.callMethod('removeFocus');

    expect(sixBlur).toHaveReceivedEventTimes(1);
  });

  it('should emit six-change when text is entered and focus is removed', async () => {
    const page = await newE2EPage({
      html: `
        <six-textarea></six-textarea>
      `,
    });
    const textarea = await page.find('six-textarea');
    const textareaControl = await page.find('six-textarea >>> .textarea__control');
    const sixChange = await textarea.spyOnEvent('six-textarea-change');

    await textareaControl.press('A');
    await textarea.callMethod('removeFocus');

    expect(sixChange).toHaveReceivedEventTimes(1);
  });

  it('should emit six-textarea when text entered', async () => {
    const page = await newE2EPage({
      html: `
        <six-textarea></six-textarea>
      `,
    });
    const textarea = await page.find('six-textarea');
    const textareaControl = await page.find('six-textarea >>> .textarea__control');
    const sixInput = await textarea.spyOnEvent('six-textarea-input');

    await textareaControl.press('A');

    expect(sixInput).toHaveReceivedEventTimes(1);
  });

  it('should sync value when text is entered', async () => {
    const page = await newE2EPage({
      html: `
        <six-textarea></six-textarea>
        <button>Other Element</button>
      `,
    });
    const textarea = await page.find('six-textarea');
    const textareaControl = await page.find('six-textarea >>> .textarea__control');

    await textareaControl.press('A');

    expect(await textarea.getProperty('value')).toBe('A');
  });

  it('should select all text when select() method is called', async () => {
    const page = await newE2EPage({
      html: `
        <six-textarea></six-textarea>
      `,
    });
    const textarea = await page.find('six-textarea');
    const textareaControl = await page.find('six-textarea >>> .textarea__control');

    await textareaControl.press('S');
    await textareaControl.press('h');
    await textareaControl.press('o');
    await textareaControl.press('e');
    await textarea.callMethod('select');

    const selectedText = await page.evaluate(() => window.getSelection().toString());

    expect(selectedText).toBe('Shoe');
  });

  it('should select a range of text when setSelectionRange() is called', async () => {
    const page = await newE2EPage({
      html: `
        <six-textarea></six-textarea>
      `,
    });
    const textarea = await page.find('six-textarea');
    const textareaControl = await page.find('six-textarea >>> .textarea__control');

    await textareaControl.press('S');
    await textareaControl.press('h');
    await textareaControl.press('o');
    await textareaControl.press('e');
    await textarea.callMethod('setSelectionRange', 1, 3);

    const selectedText = await page.evaluate(() => window.getSelection().toString());

    expect(selectedText).toBe('ho');
  });

  it('should replace text when setRangeText() is called', async () => {
    const page = await newE2EPage({
      html: `
        <six-textarea></six-textarea>
      `,
    });
    const textarea = await page.find('six-textarea');
    const textareaControl = await page.find('six-textarea >>> .textarea__control');

    await textareaControl.press('S');
    await textareaControl.press('h');
    await textareaControl.press('o');
    await textareaControl.press('e');
    await textarea.callMethod('setRangeText', 'ur', 1, 3);

    const value = await textarea.getProperty('value');

    expect(value).toBe('Sure');
  });

  it('should render placeholder correctly', async () => {
    // given
    const page: E2EPage = await newE2EPage();

    await page.setContent('<six-textarea placeholder="Type something"></six-textarea>');

    await page.setViewport({ width: 520, height: 200 });

    // when
    const results = await page.compareScreenshot('SIX Textarea (placeholder)', { fullPage: false });

    // then test against hard pixels
    expect(results).toMatchScreenshot({ allowableMismatchedPixels: 100 });
  });

  it('should render disable correctly', async () => {
    // given
    const page: E2EPage = await newE2EPage();

    await page.setContent('<six-textarea placeholder="Textarea" disabled></six-textarea>');

    await page.setViewport({ width: 520, height: 200 });

    // when
    const results = await page.compareScreenshot('SIX Textarea (disable)', { fullPage: false });

    // then test against hard pixels
    expect(results).toMatchScreenshot({ allowableMismatchedPixels: 100 });
  });

  it('should render sizes correctly', async () => {
    // given
    const page: E2EPage = await newE2EPage();

    await page.setContent(
      '<six-textarea placeholder="Small" size="small"></six-textarea>\n' +
        '    <br>\n' +
        '    <six-textarea placeholder="Medium" size="medium"></six-textarea>\n' +
        '    <br>\n' +
        '    <six-textarea placeholder="Large" size="large"></six-textarea>'
    );

    await page.setViewport({ width: 520, height: 450 });

    // when
    const results = await page.compareScreenshot('SIX Textarea (sizes)', { fullPage: false });

    // then test against hard pixels
    expect(results).toMatchScreenshot({ allowableMismatchedPixels: 100 });
  });

  it('should help-text sizes correctly', async () => {
    // given
    const page: E2EPage = await newE2EPage();

    await page.setContent('<six-textarea label="Feedback" help-text="Please tell us what you think."></six-textarea>');

    await page.setViewport({ width: 520, height: 200 });

    // when
    const results = await page.compareScreenshot('SIX Textarea (help-text)', { fullPage: false });

    // then test against hard pixels
    expect(results).toMatchScreenshot({ allowableMismatchedPixels: 100 });
  });

  it('should help-text no resize correctly', async () => {
    // given
    const page: E2EPage = await newE2EPage();

    await page.setContent('<six-textarea resize="none"></six-textarea>');

    await page.setViewport({ width: 520, height: 200 });

    // when
    const results = await page.compareScreenshot('SIX Textarea (no resize)', { fullPage: false });

    // then test against hard pixels
    expect(results).toMatchScreenshot({ allowableMismatchedPixels: 100 });
  });
});
