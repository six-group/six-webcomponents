import { now } from '../../../utils/date-util';
import { h } from '@stencil/core';

export const YearSelection = ({ selectedDate, yearSelection, onClickYearCell }) => {
  return (
    <table class="datepicker-table" part="year-selection">
      <tbody>
        {yearSelection.map((row) => (
          <tr class="datepicker-table__row">
            {row.map((year) => (
              <td
                onClick={() => onClickYearCell(year)}
                class={{
                  'datepicker-table__cell': true,
                  'datepicker-table__cell--is-today': now().getFullYear() === year,
                  'datepicker-table__cell--is-selected': selectedDate?.getFullYear() === year,
                }}
              >
                {year}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
