import { E2EPage, newE2EPage } from '@stencil/core/testing';
import { selectByTestId } from '../../../utils/testing';

describe('six-search-field', () => {
  let page: E2EPage;

  beforeEach(async () => {
    page = await newE2EPage();
  });

  it('renders', async () => {
    await page.setContent('<six-search-field></six-search-field>');

    const element = await page.find('six-search-field');

    // then
    expect(element).toHaveClass('hydrated');
  });

  it(`should emit 'six-search-field-change' event when 'clear' button is clicked`, async () => {
    // given
    await page.setContent('<six-search-field debounce="0" value="value" clearable></six-search-field>');

    const clearEvent = await page.spyOnEvent('six-input-clear');
    const inputEvent = await page.spyOnEvent('six-input-input');
    const changeEvent = await page.spyOnEvent('six-input-change');

    const clearButton = await selectByTestId(page, 'input-clear-button');

    const searchChangeEvent = await page.spyOnEvent('six-search-field-change');

    // when
    await clearButton.click();
    await page.waitForChanges();

    // then
    expect(clearEvent).toHaveReceivedEventTimes(1);
    expect(inputEvent).toHaveReceivedEventTimes(1);
    expect(changeEvent).toHaveReceivedEventTimes(1);

    expect(searchChangeEvent).toHaveReceivedEventTimes(1);
    expect(searchChangeEvent).toHaveReceivedEventDetail({ value: '' });
  });
});
