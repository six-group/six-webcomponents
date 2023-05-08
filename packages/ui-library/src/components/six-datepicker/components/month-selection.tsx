import { h } from '@stencil/core';
import { now } from '../../../utils/date-util';

export const MonthSelection = ({ locale, selectedDate, onClickMonthCell }) => {
  const isToday = (value: string) => locale.monthsShort[now().getMonth()] === value;

  const isSelectedMonth = (value: string) =>
    selectedDate?.getMonth() === locale.monthsShort.findIndex((m) => m === value);

  return (
    <table class="datepicker-table" part="month-selection">
      <tbody>
        {locale.monthsShortGrouped.map((row) => (
          <tr class="datepicker-table__row">
            {row.map((month) => (
              <td
                onClick={() => onClickMonthCell(month)}
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
