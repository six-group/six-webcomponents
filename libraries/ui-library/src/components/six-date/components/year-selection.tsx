import { h } from '@stencil/core';
import { getYear, IsoDate, today } from '../iso-date';

export const YearSelection = (props: {
  selected: IsoDate | '';
  pointerYear: number;
  yearCount: number;
  yearClicked: (year: number) => void;
}) => {
  const years = Array.from({ length: props.yearCount }, (_, i) => props.pointerYear - 12 + i);
  const yearsToDisplay = years.map((year) => ({
    year: year,
    today: getYear(today()) === year,
    selected: props.selected === '' ? false : getYear(props.selected) === year,
  }));

  return (
    <div class="year-selection">
      {yearsToDisplay.map((year) => (
        <div
          class={{
            cell: true,
            'cell--today': year.today,
            'cell--selected': year.selected,
          }}
          onClick={() => props.yearClicked(year.year)}
        >
          <span class="label">{year.year}</span>
        </div>
      ))}
    </div>
  );
};
