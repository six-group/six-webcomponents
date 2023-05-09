import { h } from '@stencil/core';

export const DaySelection = ({ locale, calendarGrid, onClickDateCell }) => {
  return (
    <table class="datepicker-table" part="day-selection">
      <thead part="weekday-header">
        {locale.weekdaysMin.map((weekday) => (
          <th class="datepicker__cell">{weekday}</th>
        ))}
      </thead>
      <tbody>
        {calendarGrid.map((row) => (
          <tr class="datepicker-table__row">
            {row.map((cell) => (
              <td
                data-date={cell.dateString}
                onClick={() => onClickDateCell(cell)}
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
