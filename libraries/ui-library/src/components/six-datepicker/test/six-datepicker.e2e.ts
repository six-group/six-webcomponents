import { newE2EPage } from '@stencil/core/testing';
import { getExpectedMonthString } from './six-datepicker.test-helpers';

describe('six-datepicker', () => {
  it('should close popup on pressing escape', async () => {
    // given
    const page = await newE2EPage();
    await page.setContent('<six-datepicker></six-datepicker>');

    const datepicker = await page.find('six-datepicker');
    const closedPopup = await page.find('six-datepicker >>> .datepicker__popup');

    // at startup popup should not be shown
    expect(closedPopup).toEqual(null);

    // when clicking on datepicker
    await datepicker.click();

    // then expect popup to be open
    const openPopup = await page.find('six-datepicker >>> .datepicker__popup');
    expect(openPopup).not.toEqual(null);

    // when pressing escape
    await page.keyboard.press('Escape');
    await page.waitForChanges();

    // then expect popup to be closed again
    const closedPopupAgain = await page.find('six-datepicker >>> .datepicker__popup');

    expect(closedPopupAgain).toEqual(null);
  });

  it('should show current date', async () => {
    // given
    const page = await newE2EPage();
    await page.setContent('<six-datepicker></six-datepicker>');

    // when clicking on datepicker
    const datepicker = await page.find('six-datepicker');
    await datepicker.click();

    // then expect today to be marked in the calendar popup
    const shownDateCell = await page.find('six-datepicker >>> .datepicker__table__cell--is-today');
    const shownDate = shownDateCell.getAttribute('data-date');

    const today = new Date();
    const pad = (value) => String(value).padStart(2, '0');
    const formattedToday = `${today.getFullYear()}-${pad(today.getMonth() + 1)}-${pad(today.getDate())}`;

    expect(shownDate).toEqual(formattedToday);

    // and the cell to be styled
    const borderStyling = await page.evaluate(() => {
      const todayDateCell = document
        .querySelector('six-datepicker')
        .shadowRoot.querySelector('.datepicker__table__cell--is-today');
      const computedStyle = getComputedStyle(todayDateCell);
      return computedStyle.border;
    });
    expect(borderStyling).toEqual('1px solid rgb(195, 195, 195)');

    const monthSelector = await page.find('six-datepicker >>> .datepicker-header__label-month');
    expect(monthSelector.innerText.trim()).toEqual(getExpectedMonthString());

    const yearSelector = await page.find('six-datepicker >>> .datepicker-header__label-year');
    expect(yearSelector.innerText.trim()).toEqual(String(today.getFullYear()));
  });

  it('should show months when clicking on month', async () => {
    // given
    const page = await newE2EPage();
    await page.setContent('<six-datepicker></six-datepicker>');
    const datepicker = await page.find('six-datepicker');
    await datepicker.click();

    // when clickin on month selector
    const monthSelector = await page.find('six-datepicker >>> .datepicker-header__label-month');
    await monthSelector.click();

    // then expect months to be displayed
    const monthCells = await page.findAll('six-datepicker >>> .datepicker__table__cell');
    expect(monthCells.length).toEqual(12);

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const displayedMonths = monthCells.map((c) => c.innerText);
    expect(displayedMonths).toEqual(months);

    const todaysMonthCell = await page.find('six-datepicker >>> .datepicker__table__cell--is-today');
    expect(todaysMonthCell.innerText).toEqual(months[new Date().getMonth()]);

    const monthSelectorInMonthView = await page.find('six-datepicker >>> .datepicker-header__label-month');
    expect(monthSelectorInMonthView).toEqual(null);

    const yearSelectorInMonthView = await page.find('six-datepicker >>> .datepicker-header__label-year');
    expect(yearSelectorInMonthView).not.toEqual(null);
  });

  it('should show years when clicking on year', async () => {
    // given
    const page = await newE2EPage();
    await page.setContent('<six-datepicker></six-datepicker>');
    const datepicker = await page.find('six-datepicker');
    await datepicker.click();

    // when clicking on year selector
    const yearSelector = await page.find('six-datepicker >>> .datepicker-header__label-year');
    await yearSelector.click();

    // then expect year cells to be shown
    const yearCells = await page.findAll('six-datepicker >>> .datepicker__table__cell');
    expect(yearCells.length).toEqual(25);

    const displayedMonths = yearCells.map((c) => c.innerText).join(',');
    const currentYear = new Date().getFullYear();
    const expectedYearsToBeShown = Array.from(new Array(25).keys())
      .map((i) => i + currentYear - 12)
      .join(',');
    expect(displayedMonths).toEqual(expectedYearsToBeShown);

    const todaysYearCell = await page.find('six-datepicker >>> .datepicker__table__cell--is-today');
    expect(todaysYearCell.innerText).toEqual(String(currentYear));
  });

  it('should should navigate correctly in all days view', async () => {
    // given
    const page = await newE2EPage();
    await page.setContent('<six-datepicker></six-datepicker>');
    const datepicker = await page.find('six-datepicker');
    await datepicker.click();

    const monthsInOrder = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    const getCurrentlyShownMonthIndex = async () => {
      const monthSelector = await page.find('six-datepicker >>> .datepicker-header__label-month');
      const currentlyShownMonth = monthSelector.innerText;
      return monthsInOrder.findIndex((m) => m === currentlyShownMonth);
    };

    const monthIndex0 = await getCurrentlyShownMonthIndex();
    const year0 = (await page.find('six-datepicker >>> .datepicker-header__label-year')).innerText;

    // when navigating one month back
    const prevMonthSelector = await page.find('six-datepicker >>> .datepicker-header__btn.prev');
    await prevMonthSelector.click();

    // then expect the correct month to be shown
    const monthIndex1 = await getCurrentlyShownMonthIndex();
    const expectedMonthIndex1 = (monthIndex1 + 1) % 12;
    expect(monthIndex0).toEqual(expectedMonthIndex1);

    // when navigation in total half a year back
    for (let i = 0; i < 5; i++) {
      await prevMonthSelector.click();
    }

    // then expect the correct month to be shown
    const monthIndex2 = await getCurrentlyShownMonthIndex();
    const expectedMonthIndex2 = (monthIndex2 + 6) % 12;
    expect(monthIndex0).toEqual(expectedMonthIndex2);

    // when navigation in total a full year back
    for (let i = 0; i < 6; i++) {
      await prevMonthSelector.click();
    }

    // then expect the month to be the same again
    const monthIndex3 = await getCurrentlyShownMonthIndex();
    expect(monthIndex0).toEqual(monthIndex3);

    // and the year to be one less than at the beginning
    const year1 = (await page.find('six-datepicker >>> .datepicker-header__label-year')).innerText;
    expect(year0).toEqual(String(Number(year1) + 1));

    // when navigating forward to initial state
    const nextMonthSelector = await page.find('six-datepicker >>> .datepicker-header__btn.next');
    for (let i = 0; i < 12; i++) {
      await nextMonthSelector.click();
    }

    const monthIndex4 = await getCurrentlyShownMonthIndex();
    expect(monthIndex0).toEqual(monthIndex4);

    const year2 = (await page.find('six-datepicker >>> .datepicker-header__label-year')).innerText;
    expect(year0).toEqual(year2);
  });

  it('should should navigate correctly in years view', async () => {
    // given
    const page = await newE2EPage();
    await page.setContent('<six-datepicker></six-datepicker>');
    const datepicker = await page.find('six-datepicker');
    await datepicker.click();

    // when clicking on year selector
    const yearSelector0 = await page.find('six-datepicker >>> .datepicker-header__label-year');
    await yearSelector0.click();

    const yearsLabel0 = await page.find('six-datepicker >>> .datepicker-header__label');
    const shownYears0 = yearsLabel0.innerText.trim().split(' – ').map(Number);

    // when navigating back
    const prevYearSelector = await page.find('six-datepicker >>> .datepicker-header__btn.prev');
    await prevYearSelector.click();

    // then expect the correct years to be shown
    const yearsLabel1 = await page.find('six-datepicker >>> .datepicker-header__label');
    const shownYears1 = yearsLabel1.innerText.trim().split(' – ').map(Number);

    expect(shownYears0[0]).toEqual(shownYears1[0] + 25);
    expect(shownYears0[1]).toEqual(shownYears1[1] + 25);

    // when navigatin forward
    const nextYearSelector = await page.find('six-datepicker >>> .datepicker-header__btn.next');
    await nextYearSelector.click();
    await nextYearSelector.click();

    // then expect the correct years to be shown
    const yearsLabel2 = await page.find('six-datepicker >>> .datepicker-header__label');
    const shownYears2 = yearsLabel2.innerText.trim().split(' – ').map(Number);

    expect(shownYears0[0]).toEqual(shownYears2[0] - 25);
    expect(shownYears0[1]).toEqual(shownYears2[1] - 25);
  });

  it('should handle date entered', async () => {
    // given
    const page = await newE2EPage();
    await page.setContent('<six-datepicker></six-datepicker>');
    const datepicker = await page.find('six-datepicker');
    await datepicker.click();

    // when entering a specific date
    await page.keyboard.type('15.5.2021');
    await page.keyboard.press('Enter');
    await page.waitForChanges();

    // then expect correct date to be highlighted
    const selectedDateCell = await page.find('six-datepicker >>> .datepicker__table__cell--is-selected');
    expect(selectedDateCell.innerText).toEqual('15');

    const cellStyling = await page.evaluate(() => {
      const selectedDateCell = document
        .querySelector('six-datepicker')
        .shadowRoot.querySelector('.datepicker__table__cell--is-selected');
      const computedStyle = getComputedStyle(selectedDateCell);
      return computedStyle.backgroundColor;
    });
    expect(cellStyling).toEqual('rgb(222, 57, 25)');

    const currentYear = (await page.find('six-datepicker >>> .datepicker-header__label-year')).innerText;
    expect(currentYear).toEqual('2021');

    const currentMonth = (await page.find('six-datepicker >>> .datepicker-header__label-month')).innerText;
    expect(currentMonth).toEqual('May');
  });
});
