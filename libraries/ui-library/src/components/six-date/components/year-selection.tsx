import { now } from '../../../utils/date-util';
import { h } from '@stencil/core';

interface YearSelectionParams {
  selectedDate?: Date;
  yearSelection: number[][];
  onClickYearCell: (year: number) => void;
}
export const YearSelection = (yearSelectionParams: YearSelectionParams) => {
  return (
    <table class="datepicker-table" part="year-selection">
      <tbody>
        {yearSelectionParams.yearSelection.map((row) => (
          <tr class="datepicker-table__row">
            {row.map((year) => (
              <td
                onClick={() => yearSelectionParams.onClickYearCell(year)}
                class={{
                  'datepicker-table__cell': true,
                  'datepicker-table__cell--is-today': now().getFullYear() === year,
                  'datepicker-table__cell--is-selected': yearSelectionParams.selectedDate?.getFullYear() === year,
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
