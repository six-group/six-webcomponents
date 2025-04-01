import { h } from '@stencil/core';
import { Language } from '../../../utils/error-messages';
import { translateWeekday } from '../translations';
import { CalendarCell } from '../calendar-grid';
import { IsoDate } from '../iso-date';

export const DaySelection = (props: {
  language: Language;
  calendarGrid: CalendarCell[];
  dayClicked: (cell: IsoDate) => void;
}) => {
  return (
    <div class="day-selection">
      {[1, 2, 3, 4, 5, 6, 7].map((day) => (
        <div class="cell--header">{translateWeekday(day, props.language)}</div>
      ))}
      {props.calendarGrid.map((day) => (
        <div
          data-date={day.date}
          onClick={() => {
            if (!day.disabled || day.outdated) {
              props.dayClicked(day.date);
            }
          }}
          class={{
            cell: true,
            'cell--today': day.today,
            'cell--selected': day.selected,
            'cell--outdated': day.outdated,
            'cell--disabled': day.disabled,
          }}
        >
          <span class="label">{day.label}</span>
        </div>
      ))}
    </div>
  );
};
