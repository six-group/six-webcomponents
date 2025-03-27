import { now } from '../../../utils/date-util';
import { h } from '@stencil/core';

interface YearSelectionParams {
  selectedDate?: Date;
  yearSelection: number[][];
  onClickYearCell: (year: number) => void;
}
export const YearSelection = (yearSelectionParams: YearSelectionParams) => {
  return (
    <table class="date-table" part="year-selection">
      <tbody>
        {yearSelectionParams.yearSelection.map((row) => (
          <tr class="date-table__row">
            {row.map((year) => (
              <td
                onClick={() => yearSelectionParams.onClickYearCell(year)}
                class={{
                  'date-table__cell': true,
                  'date-table__cell--is-today': now().getFullYear() === year,
                  'date-table__cell--is-selected': yearSelectionParams.selectedDate?.getFullYear() === year,
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
