import { E2EPage, newE2EPage } from '@stencil/core/testing';

describe('six-radio', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<six-radio></six-radio>');

    const element = await page.find('six-radio');
    expect(element).toHaveClass('hydrated');
  });

  it('should render the radio buttons correctly', async () => {
    // given
    const page: E2EPage = await newE2EPage();

    await page.setContent(
      '<six-radio>Radio</six-radio>' +
        '<six-radio checked>Checked</six-radio>' +
        '<six-radio checked disabled>Checked Disabled</six-radio>' +
        '<six-radio disabled>Disabled</six-radio>'
    );
    await page.setViewport({ width: 800, height: 100 });

    // when
    const results = await page.compareScreenshot('SIX Radio', { fullPage: false });

    // then test against hard pixels
    expect(results).toMatchScreenshot({ allowableMismatchedPixels: 5 });
  });

  it('should toggle checked radiobutton within a group on click', async () => {
    const page: E2EPage = await newE2EPage();
    await page.setContent(
      '<six-radio value="one" name="option">Equipo Cuatro</six-radio>' +
        '<six-radio value="two" name="option">NOrigami</six-radio>' +
        '<six-radio value="three" name="option" checked>Snowman</six-radio>'
    );
    const sixChange = await page.spyOnEvent('six-radio-change');

    const radioChecked = await page.find('six-radio[checked]');
    expect(radioChecked.getAttribute('value')).toBe('three');

    // switch radio button "two"
    await page.click('six-radio[value="two"]');
    await page.waitForChanges();
    let radioOne = await page.find('six-radio[value="one"]');
    let radioTwo = await page.find('six-radio[value="two"]');
    let radioThree = await page.find('six-radio[value="three"]');
    expect(sixChange).toHaveReceivedEvent();
    expect(radioOne.getAttribute('checked')).toBeNull();
    expect(radioTwo.getAttribute('checked')).not.toBeNull();
    expect(radioThree.getAttribute('checked')).toBeNull();

    // switch radio button "one"
    await page.click('six-radio[value="one"]');
    await page.waitForChanges();
    radioOne = await page.find('six-radio[value="one"]');
    radioTwo = await page.find('six-radio[value="two"]');
    radioThree = await page.find('six-radio[value="three"]');
    expect(sixChange).toHaveReceivedEvent();
    expect(radioOne.getAttribute('checked')).not.toBeNull();
    expect(radioTwo.getAttribute('checked')).toBeNull();
    expect(radioThree.getAttribute('checked')).toBeNull();
  });
});
