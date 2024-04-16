import { newSpecPage } from '@stencil/core/testing';
import { SixDate } from '../six-date';
import { toDate } from '../../../utils/date-util';
import { SixDateFormats } from '../six-date-formats';
import { SixInput } from '../../six-input/six-input';

describe('six-date', () => {
  it('renders with a specified date', async () => {
    const page = await newSpecPage({
      components: [SixDate],
      html: `<six-date></six-date>`,
    });

    page.rootInstance.value = new Date('2023-05-17');
    await page.waitForChanges();

    expect(page.root).toEqualHtml(`
           <six-date>
       <mock:shadow-root>
         <div class="datepicker__container">
           <six-dropdown hoist="" showoverflow="" style="height: auto; width: 400px;">
             <six-input errortext="" label="" size="medium" slot="trigger" value="17.05.2023">
               <span class="prefix" part="icon" slot="prefix">
                 <six-icon size="medium">
                   today
                 </six-icon>
               </span>
             </six-input>
             <div>
               <six-menu class="datepicker__panel">
                 <header class="datepicker-header" part="header">
                   <div class="datepicker-header__btn prev">
                     <svg height="23" viewBox="0 5 13 13" width="14">
                       <path d="M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"></path>
                     </svg>
                   </div>
                   <div class="datepicker-header__label">
                     <div>
                       <span class="datepicker-header__label-month">
                         May
                       </span>
                       <span>
                         <svg height="20" viewBox="-3 -4 24 24" width="20">
                           <polyline points="6 9 12 15 18 9"></polyline>
                         </svg>
                       </span>
                     </div>
                     <div>
                       <span class="datepicker-header__label-year">
                         2023
                       </span>
                       <span>
                         <svg height="20" viewBox="-3 -4 24 24" width="20">
                           <polyline points="6 9 12 15 18 9"></polyline>
                         </svg>
                       </span>
                     </div>
                   </div>
                   <div class="datepicker-header__btn next">
                     <svg height="23" viewBox="5 5 13 13" width="14">
                       <path d="M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z"></path>
                     </svg>
                   </div>
                 </header>
                 <table class="datepicker-table" part="day-selection">
                   <thead part="weekday-header">
                     <tr>
                     <th class="datepicker__cell">
                       Mo
                     </th>
                     <th class="datepicker__cell">
                       Tu
                     </th>
                     <th class="datepicker__cell">
                       We
                     </th>
                     <th class="datepicker__cell">
                       Th
                     </th>
                     <th class="datepicker__cell">
                       Fr
                     </th>
                     <th class="datepicker__cell">
                       Sa
                     </th>
                     <th class="datepicker__cell">
                       Su
                     </th>
                    </tr>
                   </thead>
                   <tbody>
                     <tr class="datepicker-table__row">
                       <td class="datepicker-table__cell datepicker-table__cell--is-selectable" data-date="01.05.2023">
                         1
                       </td>
                       <td class="datepicker-table__cell datepicker-table__cell--is-selectable" data-date="02.05.2023">
                         2
                       </td>
                       <td class="datepicker-table__cell datepicker-table__cell--is-selectable" data-date="03.05.2023">
                         3
                       </td>
                       <td class="datepicker-table__cell datepicker-table__cell--is-selectable" data-date="04.05.2023">
                         4
                       </td>
                       <td class="datepicker-table__cell datepicker-table__cell--is-selectable" data-date="05.05.2023">
                         5
                       </td>
                       <td class="datepicker-table__cell datepicker-table__cell--is-selectable" data-date="06.05.2023">
                         6
                       </td>
                       <td class="datepicker-table__cell datepicker-table__cell--is-selectable" data-date="07.05.2023">
                         7
                       </td>
                     </tr>
                     <tr class="datepicker-table__row">
                       <td class="datepicker-table__cell datepicker-table__cell--is-selectable" data-date="08.05.2023">
                         8
                       </td>
                       <td class="datepicker-table__cell datepicker-table__cell--is-selectable" data-date="09.05.2023">
                         9
                       </td>
                       <td class="datepicker-table__cell datepicker-table__cell--is-selectable" data-date="10.05.2023">
                         10
                       </td>
                       <td class="datepicker-table__cell datepicker-table__cell--is-selectable" data-date="11.05.2023">
                         11
                       </td>
                       <td class="datepicker-table__cell datepicker-table__cell--is-selectable" data-date="12.05.2023">
                         12
                       </td>
                       <td class="datepicker-table__cell datepicker-table__cell--is-selectable" data-date="13.05.2023">
                         13
                       </td>
                       <td class="datepicker-table__cell datepicker-table__cell--is-selectable" data-date="14.05.2023">
                         14
                       </td>
                     </tr>
                     <tr class="datepicker-table__row">
                       <td class="datepicker-table__cell datepicker-table__cell--is-selectable" data-date="15.05.2023">
                         15
                       </td>
                       <td class="datepicker-table__cell datepicker-table__cell--is-selectable" data-date="16.05.2023">
                         16
                       </td>
                       <td class="datepicker-table__cell datepicker-table__cell--is-selectable datepicker-table__cell--is-selected" data-date="17.05.2023">
                         17
                       </td>
                       <td class="datepicker-table__cell datepicker-table__cell--is-selectable" data-date="18.05.2023">
                         18
                       </td>
                       <td class="datepicker-table__cell datepicker-table__cell--is-selectable" data-date="19.05.2023">
                         19
                       </td>
                       <td class="datepicker-table__cell datepicker-table__cell--is-selectable" data-date="20.05.2023">
                         20
                       </td>
                       <td class="datepicker-table__cell datepicker-table__cell--is-selectable" data-date="21.05.2023">
                         21
                       </td>
                     </tr>
                     <tr class="datepicker-table__row">
                       <td class="datepicker-table__cell datepicker-table__cell--is-selectable" data-date="22.05.2023">
                         22
                       </td>
                       <td class="datepicker-table__cell datepicker-table__cell--is-selectable" data-date="23.05.2023">
                         23
                       </td>
                       <td class="datepicker-table__cell datepicker-table__cell--is-selectable" data-date="24.05.2023">
                         24
                       </td>
                       <td class="datepicker-table__cell datepicker-table__cell--is-selectable" data-date="25.05.2023">
                         25
                       </td>
                       <td class="datepicker-table__cell datepicker-table__cell--is-selectable" data-date="26.05.2023">
                         26
                       </td>
                       <td class="datepicker-table__cell datepicker-table__cell--is-selectable" data-date="27.05.2023">
                         27
                       </td>
                       <td class="datepicker-table__cell datepicker-table__cell--is-selectable" data-date="28.05.2023">
                         28
                       </td>
                     </tr>
                     <tr class="datepicker-table__row">
                       <td class="datepicker-table__cell datepicker-table__cell--is-selectable" data-date="29.05.2023">
                         29
                       </td>
                       <td class="datepicker-table__cell datepicker-table__cell--is-selectable" data-date="30.05.2023">
                         30
                       </td>
                       <td class="datepicker-table__cell datepicker-table__cell--is-selectable" data-date="31.05.2023">
                         31
                       </td>
                       <td class="datepicker-table__cell datepicker-table__cell--is-outdated datepicker-table__cell--is-selectable" data-date="01.06.2023">
                         1
                       </td>
                       <td class="datepicker-table__cell datepicker-table__cell--is-outdated datepicker-table__cell--is-selectable" data-date="02.06.2023">
                         2
                       </td>
                       <td class="datepicker-table__cell datepicker-table__cell--is-outdated datepicker-table__cell--is-selectable" data-date="03.06.2023">
                         3
                       </td>
                       <td class="datepicker-table__cell datepicker-table__cell--is-outdated datepicker-table__cell--is-selectable" data-date="04.06.2023">
                         4
                       </td>
                     </tr>
                   </tbody>
                 </table>
               </six-menu>
               <div class="datepicker__footer">
                 <slot></slot>
               </div>
             </div>
           </six-dropdown>
         </div>
       </mock:shadow-root>
     </six-date>
    `);
  });

  it('opens calendar on input click', async () => {
    const page = await newSpecPage({
      components: [SixDate],
      html: `<six-date></six-date>`,
    });

    const input = page.root?.shadowRoot?.querySelector('six-input');
    input?.click();
    await page.waitForChanges();

    expect(page.rootInstance.open).toBe(true);
  });

  it('closes calendar on escape key press', async () => {
    const page = await newSpecPage({
      components: [SixDate],
      html: `<six-date open></six-date>`,
    });

    const event = new KeyboardEvent('keydown', { key: 'Escape' });
    document.dispatchEvent(event);
    await page.waitForChanges();

    expect(page.rootInstance.open).toBe(false);
  });

  it('emits event on date select', async () => {
    const page = await newSpecPage({
      components: [SixDate],
      html: `<six-date></six-date>`,
    });

    const selectEventSpy = jest.spyOn(page.rootInstance.sixSelect, 'emit');

    const dateCell = page.root?.shadowRoot?.querySelector('.datepicker-table__cell') as HTMLElement;
    dateCell?.click();
    await page.waitForChanges();

    expect(selectEventSpy).toHaveBeenCalled();
  });

  it('handles min and max date restrictions', async () => {
    const page = await newSpecPage({
      components: [SixDate],
      html: `<six-date></six-date>`,
    });

    const datePicker = page.rootInstance;

    datePicker.min = new Date('2023-01-01');
    datePicker.max = new Date('2023-12-31');
    await page.waitForChanges();

    datePicker.select('31.12.2022');
    await page.waitForChanges();
    expect(datePicker.value).toBeUndefined();

    datePicker.select('15.06.2023');
    await page.waitForChanges();
    expect(datePicker.value).toEqual(toDate('15.06.2023', SixDateFormats.DDMMYYY_DOT));

    datePicker.select('01.01.2024');
    await page.waitForChanges();
    expect(datePicker.value).toEqual(toDate('15.06.2023', SixDateFormats.DDMMYYY_DOT));
  });

  it('renders custom icon slot', async () => {
    const page = await newSpecPage({
      components: [SixDate],
      html: `
        <six-date>
          <span slot="custom-icon">📅</span>
        </six-date>
      `,
    });

    const iconSlot = page.root?.shadowRoot?.querySelector('slot[name="custom-icon"]');
    expect(iconSlot).not.toBeNull();
  });

  it('renders error text slot', async () => {
    const page = await newSpecPage({
      components: [SixDate],
      html: `
        <six-date>
          <span slot="error-text">Invalid date</span>
        </six-date>
      `,
    });

    const errorSlot = page.root?.shadowRoot?.querySelector('slot[name="error-text"]');
    expect(errorSlot).not.toBeNull();
  });

  it('clears the date on clear button click', async () => {
    const page = await newSpecPage({
      components: [SixDate],
      html: `<six-date clearable></six-date>`,
    });

    page.rootInstance.value = new Date('2023-05-17');

    const clearButton = page.root?.shadowRoot?.querySelector('.datepicker-clear') as HTMLElement;
    clearButton.click();
    await page.waitForChanges();

    expect(page.rootInstance.value).toBeUndefined();
  });

  // it('should set focus on input when setFocus is called', async () => {
  //   const page = await newSpecPage({
  //     components: [SixDate, SixInput],
  //     html: `<six-date></six-date>`,
  //   });
  //
  //   const inputElement = page.root?.shadowRoot?.querySelector<HTMLSixInputElement>('six-input');
  //   const spy = jest.spyOn(inputElement, 'setFocus');
  //   await page.rootInstance.setFocus();
  //   expect(spy).toHaveBeenCalled();
  // });

  it('should display correct date format', async () => {
    const page = await newSpecPage({
      components: [SixDate, SixInput],
      html: `<six-date dateFormat="yyyy-mm-dd"></six-date>`,
    });

    page.rootInstance.value = new Date('2023-05-17');
    // page.rootInstance.dateFormat = SixDateFormats.YYYYMMDD_DASH;
    await page.waitForChanges();

    const inputElement = page.root?.shadowRoot?.querySelector<HTMLSixInputElement>('six-input');

    expect(inputElement?.shadowRoot?.querySelector('input')?.value).toEqual('17.05.2023');
  });

  it('should handle timepicker change', async () => {
    const page = await newSpecPage({
      components: [SixDate],
      html: `<six-date type="date-time"></six-date>`,
    });

    page.rootInstance.value = new Date('2023-05-17T10:30:00');
    await page.waitForChanges();

    const timepicker = page.root?.shadowRoot?.querySelector('six-timepicker') as HTMLSixTimepickerElement;
    timepicker.value = '12:45:00';
    timepicker.dispatchEvent(
      new CustomEvent('six-timepicker-change-debounced', { detail: { value: { hours: 12, minutes: 45, seconds: 0 } } })
    );
    await page.waitForChanges();

    const changedDate = page.rootInstance.value;
    changedDate.setMilliseconds(0);

    expect(changedDate).toEqual(new Date('2023-05-17T12:45:00'));
  });
});
