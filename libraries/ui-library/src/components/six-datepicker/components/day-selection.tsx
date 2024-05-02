import { h } from '@stencil/core';
import { DateLocale } from '../../../utils/date-util';
import { CalendarCell } from '../six-datepicker';

interface DaySelectionParams {
  locale: DateLocale;
  calendarGrid: CalendarCell[][];
  onClickDateCell: (cell: CalendarCell) => void;
}
export const DaySelection = (daySelectionParams: DaySelectionParams) => {
  return (
    <table class="datepicker-table" part="day-selection">
      <thead part="weekday-header">
        {daySelectionParams.locale.weekdaysMin.map((weekday) => (
          <th class="datepicker__cell">{weekday}</th>
        ))}
      </thead>
      <tbody>
        {daySelectionParams.calendarGrid.map((row) => (
          <tr class="datepicker-table__row">
            {row.map((cell) => (
              <td
                data-date={cell.dateString}
                onClick={() => daySelectionParams.onClickDateCell(cell)}
                class={{
                  'datepicker-table__cell': true,
                  'datepicker-table__cell--is-today': cell.isToday,
                  'datepicker-table__cell--is-selected': cell.isSelected,
                  'datepicker-table__cell--is-start': cell.isStart,
                  'datepicker-table__cell--is-end': cell.isEnd,
                  'datepicker-table__cell--is-outdated': cell.isOutdated,
                  'datepicker-table__cell--is-disabled': cell.isDisabled,
                  'datepicker-table__cell--is-selectable': !cell.isDisabled,
                  'datepicker-table__cell--is-within-range': cell.isWithinRange,
                }}
              >
                {cell.label}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
