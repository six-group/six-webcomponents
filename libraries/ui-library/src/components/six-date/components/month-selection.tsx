import { h } from '@stencil/core';
import { getMonth, IsoDate, today } from '../iso-date';
import { Language } from '../../../utils/error-messages';
import { translateMonthShort } from '../translations';

export const MonthSelection = (props: {
  language: Language;
  selected: IsoDate | '';
  monthClicked: (month: number) => void;
}) => {
  const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((month) => ({
    month,
    label: translateMonthShort(month, props.language),
    today: getMonth(today()) === month,
    selected: props.selected === '' ? false : getMonth(props.selected) === month,
  }));

  return (
    <div class="month-selection">
      {months.map((month) => (
        <div
          class={{
            cell: true,
            'cell--today': month.today,
            'cell--selected': month.selected,
          }}
          onClick={() => props.monthClicked(month.month)}
        >
          <span class="label">{month.label}</span>
        </div>
      ))}
    </div>
  );
};
