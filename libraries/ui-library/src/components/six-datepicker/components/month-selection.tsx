import { h } from '@stencil/core';
import { DateLocale, now } from '../../../utils/date-util';

interface MonthSelectionParams {
  locale: DateLocale;
  selectedDate?: Date;
  onClickMonthCell: (month: string) => void;
}
export const MonthSelection = (monthSelectionParams: MonthSelectionParams) => {
  const locale = monthSelectionParams.locale;
  const isToday = (value: string) => locale.monthsShort[now().getMonth()] === value;

  const isSelectedMonth = (value: string) =>
    monthSelectionParams.selectedDate?.getMonth() === locale.monthsShort.findIndex((m) => m === value);

  return (
    <table class="datepicker-table" part="month-selection">
      <tbody>
        {locale.monthsShortGrouped.map((row: string[]) => (
          <tr class="datepicker-table__row">
            {row.map((month) => (
              <td
                onClick={() => monthSelectionParams.onClickMonthCell(month)}
                class={{
                  'datepicker-table__cell': true,
                  'datepicker-table__cell--is-today': isToday(month),
                  'datepicker-table__cell--is-selected': isSelectedMonth(month),
                }}
              >
                {month}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
