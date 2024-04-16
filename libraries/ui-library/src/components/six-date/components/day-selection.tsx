import { h } from '@stencil/core';
import { DateLocale } from '../../../utils/date-util';
import { CalendarCell } from '../six-date';

interface DaySelectionParams {
  locale: DateLocale;
  calendarGrid: CalendarCell[][];
  onClickDateCell: (cell: CalendarCell) => void;
}

export const DaySelection = (daySelectionParams: DaySelectionParams) => {
  return (
    <table class="datepicker-table" part="day-selection">
      <thead part="weekday-header">
        <tr>
          {daySelectionParams.locale.weekdaysMin.map((weekday) => (
            <th class="datepicker__cell">{weekday}</th>
          ))}
        </tr>
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
                  'datepicker-table__cell--is-outdated': cell.isOutdated,
                  'datepicker-table__cell--is-disabled': cell.isDisabled,
                  'datepicker-table__cell--is-selectable': !cell.isDisabled,
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
