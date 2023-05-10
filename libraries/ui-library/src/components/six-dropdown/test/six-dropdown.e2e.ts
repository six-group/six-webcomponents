import { E2EPage, newE2EPage } from '@stencil/core/testing';
import { delay } from '../../../testUtil/delay';

describe('six-dropdown', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<six-dropdown></six-dropdown>');

    const element = await page.find('six-dropdown');
    expect(element).toHaveClass('hydrated');
  });

  it('should open dropdown on click', async () => {
    const page: E2EPage = await newE2EPage();

    await page.setContent(`
      <six-dropdown>
        <six-button slot="trigger" caret>Dropdown</six-button>
        <six-menu>
          <six-menu-item>Dropdown Item 1</six-menu-item>
          <six-menu-item>Dropdown Item 2</six-menu-item>
        </six-menu>
      </six-dropdown>
    `);

    const beforeClick = await page.find('six-dropdown >>> div.popover-visible');
    expect(beforeClick).toBeNull();

    await page.click('six-button');
    await page.waitForChanges();
    const afterOpenClick = await page.find('six-dropdown >>> div.popover-visible');
    expect(afterOpenClick).not.toBeNull();

    await page.click('six-button');
    const afterCloseClick = await page.find('six-dropdown >>> div.popover-visible');
    expect(afterCloseClick).toBeNull();
  });

  it('should emit events on click', async () => {
    const page: E2EPage = await newE2EPage();

    await page.setContent(`
      <six-dropdown>
        <six-button slot="trigger" caret>Dropdown</six-button>
        <six-menu>
          <six-menu-item>Dropdown Item 1</six-menu-item>
          <six-menu-item>Dropdown Item 2</six-menu-item>
        </six-menu>
      </six-dropdown>
    `);

    const sixShow = await page.spyOnEvent('six-dropdown-show');
    await page.click('six-button');
    expect(sixShow).toHaveReceivedEvent();

    const sixHide = await page.spyOnEvent('six-dropdown-hide');
    await page.click('six-button');
    expect(sixHide).toHaveReceivedEvent();
  });

  it('should close dropdown after select', async () => {
    const page: E2EPage = await newE2EPage();

    await page.setContent(`
      <six-dropdown open="true">
        <six-button slot="trigger" caret>Dropdown</six-button>
        <six-menu>
          <six-menu-item value="entry1">entry1</six-menu-item>
          <six-menu-item class="second" value="entry2">entry2</six-menu-item>
        </six-menu>
      </six-dropdown>
    `);

    const shouldBeOpen = await page.find('six-dropdown >>> div.popover-visible');
    expect(shouldBeOpen).not.toBeNull();

    const sixSelect = await page.spyOnEvent('six-menu-item-selected');

    await page.click('six-menu-item.second');
    expect(sixSelect).toHaveReceivedEvent();
    expect(sixSelect.lastEvent.detail.name).toBe('entry2');

    const shouldBeClosed = await page.find('six-dropdown >>> div.popover-visible');
    expect(shouldBeClosed).toBeNull();
  });

  it('should select stuff on ArrowDown and ArrowUp and Enter', async () => {
    const page = await newE2EPage();

    await page.setContent(`
      <six-dropdown>
        <six-button slot="trigger" caret>Dropdown</six-button>
        <six-menu>
          <six-menu-item value="entry1">entry1</six-menu-item>
          <six-menu-item value="entry2">entry2</six-menu-item>
          <six-menu-item value="entry3">entry3</six-menu-item>
        </six-menu>
      </six-dropdown>
    `);

    await page.click('six-button');
    const shouldBeOpen = await page.find('six-dropdown >>> div.popover-visible');
    expect(shouldBeOpen).not.toBeNull();

    const sixSelect = await page.spyOnEvent('six-menu-item-selected');

    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowUp');
    await page.keyboard.press('Enter');
    expect(sixSelect.lastEvent.detail.name).toBe('entry1');

    const shouldBeClosed = await page.find('six-dropdown >>> div.popover-visible');
    expect(shouldBeClosed).toBeNull();
  });

  it('should close dropdown on Escape', async () => {
    const page = await newE2EPage();

    await page.setContent(`
      <six-dropdown>
        <six-button slot="trigger" caret>Dropdown</six-button>
        <six-menu>
          <six-menu-item value="entry1">entry1</six-menu-item>
          <six-menu-item value="entry2">entry2</six-menu-item>
          <six-menu-item value="entry3">entry3</six-menu-item>
        </six-menu>
      </six-dropdown>
    `);

    await page.click('six-button');
    const shouldBeOpen = await page.find('six-dropdown >>> div.popover-visible');
    expect(shouldBeOpen).not.toBeNull();

    await page.keyboard.press('Escape');

    const shouldBeClosed = await page.find('six-dropdown >>> div.popover-visible');
    expect(shouldBeClosed).toBeNull();
  });

  it('should close dropdown on Tab', async () => {
    const page = await newE2EPage();

    await page.setContent(`
      <six-dropdown>
        <six-button slot="trigger" caret>Dropdown</six-button>
        <six-menu>
          <six-menu-item value="entry1">entry1</six-menu-item>
          <six-menu-item value="entry2">entry2</six-menu-item>
          <six-menu-item value="entry3">entry3</six-menu-item>
        </six-menu>
      </six-dropdown>
    `);

    await page.click('six-button');
    const shouldBeOpen = await page.find('six-dropdown >>> div.popover-visible');
    expect(shouldBeOpen).not.toBeNull();

    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');

    const shouldBeClosed = await page.find('six-dropdown >>> div.popover-visible');
    expect(shouldBeClosed).toBeNull();
  });

  it('should render the dropdown (open) correctly', async () => {
    // given
    const page: E2EPage = await newE2EPage();

    await page.setContent(`
      <six-dropdown open="true">
        <six-button slot="trigger" caret>Dropdown</six-button>
        <six-menu>
          <six-menu-item>Dropdown Item 1</six-menu-item>
          <six-menu-item>Dropdown Item 2</six-menu-item>
        </six-menu>
      </six-dropdown>
    `);

    await page.setViewport({ width: 520, height: 300 });

    // when
    const results = await page.compareScreenshot('SIX Dropdown', { fullPage: false });

    // then test against hard pixels
    expect(results).toMatchScreenshot({ allowableMismatchedPixels: 100 });
  });

  it('should render the dropdown (skidding) correctly', async () => {
    // given
    const page: E2EPage = await newE2EPage();

    await page.setContent(`
      <six-dropdown open="true" skidding="30">
        <six-button slot="trigger" caret>Dropdown</six-button>
        <six-menu>
          <six-menu-item>Dropdown Item 1</six-menu-item>
          <six-menu-item>Dropdown Item 2</six-menu-item>
        </six-menu>
      </six-dropdown>
    `);

    await page.setViewport({ width: 520, height: 300 });

    // when
    const results = await page.compareScreenshot('SIX Dropdown (skidding)', { fullPage: false });

    // then test against hard pixels
    expect(results).toMatchScreenshot({ allowableMismatchedPixels: 100 });
  });

  it('should render the dropdown (distance) correctly', async () => {
    // given
    const page: E2EPage = await newE2EPage();

    await page.setContent(`
      <six-dropdown open="true" distance="30">
        <six-button slot="trigger" caret>Dropdown</six-button>
        <six-menu>
          <six-menu-item>Dropdown Item 1</six-menu-item>
          <six-menu-item>Dropdown Item 2</six-menu-item>
        </six-menu>
      </six-dropdown>
    `);

    await page.setViewport({ width: 520, height: 300 });

    // when
    const results = await page.compareScreenshot('SIX Dropdown (skidding)', { fullPage: false });

    // then test against hard pixels
    expect(results).toMatchScreenshot({ allowableMismatchedPixels: 100 });
  });

  it('should properly filter elements', async () => {
    const page = await newE2EPage();

    await page.setContent(`
      <six-dropdown filter="true" filter-debounce="0">
        <six-button slot="trigger" caret>Dropdown</six-button>
        <six-menu>
          <six-menu-item value="AUSTRALIA">Australia</six-menu-item>
          <six-menu-item value="BRAZIL">Brazil</six-menu-item>
          <six-menu-item value="CHINA">China</six-menu-item>
          <six-menu-item value="EGYPT">Egypt</six-menu-item>
          <six-menu-item value="FRANCE">France</six-menu-item>
          <six-menu-item value="GERMANY">Germany</six-menu-item>
          <six-menu-item value="INDIA">India</six-menu-item>
          <six-menu-item value="JAPAN">Japan</six-menu-item>
          <six-menu-item value="SPAIN">Spain</six-menu-item>
          <six-menu-item value="UNITED_STATES">United States</six-menu-item>
        </six-menu>
      </six-dropdown>
    `);

    await page.click('six-button');

    const filterPlaceholder = await page.evaluate(() => {
      return document
        .querySelector('six-dropdown')
        .shadowRoot.querySelector('six-input')
        .shadowRoot.querySelector('input').placeholder;
    });

    expect(filterPlaceholder).toEqual('Filter...');

    const filterInput = await page.find('six-dropdown >>> six-input');
    await filterInput.callMethod('setFocus');

    const getNumberOfShownMenuItems = () => {
      return page.evaluate(async () => {
        return Array.from(document.querySelectorAll('six-menu-item')).filter((e) => e.style.display !== 'none').length;
      });
    };

    const numberOfShownMenuItems = await getNumberOfShownMenuItems();
    expect(numberOfShownMenuItems).toEqual(10);

    const filterInputControl = await page.find('six-dropdown >>> six-input >>> .input__control');
    await filterInputControl.press('a');

    const numberOfShownMenuItems1 = await getNumberOfShownMenuItems();
    expect(numberOfShownMenuItems1).toEqual(9);

    await filterInputControl.press('n');

    const numberOfShownMenuItems2 = await getNumberOfShownMenuItems();
    expect(numberOfShownMenuItems2).toEqual(3);

    await filterInputControl.press('y');

    const numberOfShownMenuItems3 = await getNumberOfShownMenuItems();
    expect(numberOfShownMenuItems3).toEqual(1);

    // make sure everything is cleared when the dropdown is closed and reopened
    await page.keyboard.press('Escape');
    await page.waitForChanges();

    await delay(200);
    await page.click('six-button');

    // short delay seems to be necessary to guarantee the dropdown is shown again
    await delay(100);

    const filterPlaceholderAfterClose = await page.evaluate(() => {
      return document
        .querySelector('six-dropdown')
        .shadowRoot.querySelector('six-input')
        .shadowRoot.querySelector('input').placeholder;
    });

    expect(filterPlaceholderAfterClose).toEqual('Filter...');

    const numberOfShownMenuItems4 = await getNumberOfShownMenuItems();
    expect(numberOfShownMenuItems4).toEqual(10);
  });

  it('arrow down works for filter field', async () => {
    const page = await newE2EPage();

    await page.setContent(`
      <six-dropdown filter="true" filter-debounce="0">
        <six-button slot="trigger" caret>Dropdown</six-button>
        <six-menu>
          <six-menu-item value="CHINA">China</six-menu-item>
          <six-menu-item value="FRANCE">France</six-menu-item>
        </six-menu>
      </six-dropdown>
    `);

    await page.click('six-button');

    const filterPlaceholder = await page.evaluate(() => {
      return document
        .querySelector('six-dropdown')
        .shadowRoot.querySelector('six-input')
        .shadowRoot.querySelector('input').placeholder;
    });

    expect(filterPlaceholder).toEqual('Filter...');

    const filterInput = await page.find('six-dropdown >>> six-input');
    await filterInput.callMethod('setFocus');

    const getNumberOfShownMenuItems = () => {
      return page.evaluate(async () => {
        return Array.from(document.querySelectorAll('six-menu-item')).filter((e) => e.style.display !== 'none').length;
      });
    };

    const numberOfShownMenuItems = await getNumberOfShownMenuItems();
    expect(numberOfShownMenuItems).toEqual(2);

    const filterInputControl = await page.find('six-dropdown >>> six-input >>> .input__control');
    await filterInputControl.press('F');

    const numberOfShownMenuItems1 = await getNumberOfShownMenuItems();
    expect(numberOfShownMenuItems1).toEqual(1);

    const sixSelect = await page.spyOnEvent('six-menu-item-selected');

    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');

    expect(sixSelect.lastEvent.detail.name).toBe('FRANCE');
  });
});
