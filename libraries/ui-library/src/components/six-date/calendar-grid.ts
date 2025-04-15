import { fromDate, IsoDate, today } from './iso-date';
import { eachDayOfInterval, endOfMonth, endOfWeek, formatDate, startOfWeek } from 'date-fns';

export interface CalendarCell {
  date: IsoDate;
  label: string;
  display: string;
  disabled: boolean;
  outdated: boolean;
  selected: boolean;
  today: boolean;
}

export interface CalendarGridOptions {
  year: number;
  month: number;
  selected?: IsoDate;
  minDate?: IsoDate;
  maxDate?: IsoDate;
  dateFormat: string;
  allowedDates?: (date: IsoDate) => boolean;
}

export function createCalendarGrid(options: CalendarGridOptions): CalendarCell[] {
  const firstDayOfMonth = new Date(options.year, options.month - 1, 1);
  const daysInCalendarMonth = eachDayOfInterval({
    start: startOfWeek(firstDayOfMonth, { weekStartsOn: 1 }),
    end: endOfWeek(endOfMonth(firstDayOfMonth), { weekStartsOn: 1 }),
  });
  const calendarGrid: CalendarCell[] = [];

  for (const day of daysInCalendarMonth) {
    const isoDate = fromDate(day);
    const isInMonth = day.getMonth() === options.month - 1;
    const isBeforeMinDate = options.minDate == null ? false : isoDate < options.minDate;
    const isAfterMaxDate = options.maxDate == null ? false : isoDate > options.maxDate;
    const isDateAllowed = options.allowedDates === undefined ? true : options.allowedDates(isoDate);
    const isDisabled = !isDateAllowed || isBeforeMinDate || isAfterMaxDate;
    const isToday = isoDate === today();
    calendarGrid.push({
      date: fromDate(day),
      label: day.getDate().toString(),
      display: formatDate(day, options.dateFormat),
      disabled: isDisabled,
      outdated: !isInMonth,
      selected: options.selected === isoDate,
      today: isToday,
    });
  }

  return calendarGrid;
}
