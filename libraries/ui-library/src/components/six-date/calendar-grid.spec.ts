import { CalendarCell, CalendarGridOptions, createCalendarGrid } from './calendar-grid';

describe('calendarGridDays', () => {
  beforeAll(() => jest.useFakeTimers().setSystemTime(new Date('2023-07-25')));
  afterAll(() => jest.useRealTimers());

  it('should generate a correct grid with proper day numbers for July 2023 (6 weeks)', () => {
    const options: CalendarGridOptions = {
      year: 2023,
      month: 7,
      dateFormat: 'yyyy-MM-dd',
      selected: '2023-07-12',
    };

    const expected = mapExpected(createCalendarGrid(options));

    // prettier-ignore
    expect(expected).toEqual([
      "26 xxoo", "27 xxoo", "28 xxoo", "29 xxoo", "30 xxoo", "01 xooo", "02 xooo",
      "03 xooo", "04 xooo", "05 xooo", "06 xooo", "07 xooo", "08 xooo", "09 xooo",
      "10 xooo", "11 xooo", "12 xoxo", "13 xooo", "14 xooo", "15 xooo", "16 xooo",
      "17 xooo", "18 xooo", "19 xooo", "20 xooo", "21 xooo", "22 xooo", "23 xooo",
      "24 xooo", "25 xoox", "26 xooo", "27 xooo", "28 xooo", "29 xooo", "30 xooo",
      "31 xooo", "01 xxoo", "02 xxoo", "03 xxoo", "04 xxoo", "05 xxoo", "06 xxoo"
    ]);
  });

  it('min date and allowed days', () => {
    const options: CalendarGridOptions = {
      year: 2023,
      month: 7,
      minDate: '2023-07-02',
      allowedDates: (date) => date !== '2023-07-26' && date !== '2023-07-29',
      dateFormat: 'yyyy-MM-dd',
    };

    const expected = mapExpected(createCalendarGrid(options));

    // prettier-ignore
    expect(expected).toEqual([
      "26 oxoo", "27 oxoo", "28 oxoo", "29 oxoo", "30 oxoo", "01 oooo", "02 xooo",
      "03 xooo", "04 xooo", "05 xooo", "06 xooo", "07 xooo", "08 xooo", "09 xooo",
      "10 xooo", "11 xooo", "12 xooo", "13 xooo", "14 xooo", "15 xooo", "16 xooo",
      "17 xooo", "18 xooo", "19 xooo", "20 xooo", "21 xooo", "22 xooo", "23 xooo",
      "24 xooo", "25 xoox", "26 oooo", "27 xooo", "28 xooo", "29 oooo", "30 xooo",
      "31 xooo", "01 xxoo", "02 xxoo", "03 xxoo", "04 xxoo", "05 xxoo", "06 xxoo"
    ]);
  });

  it('max date and allowed days', () => {
    const options: CalendarGridOptions = {
      year: 2023,
      month: 7,
      maxDate: '2023-08-02',
      allowedDates: (date) => date !== '2023-07-26' && date !== '2023-07-29',
      dateFormat: 'yyyy-MM-dd',
    };

    const expected = mapExpected(createCalendarGrid(options));

    // enabled, outdated, selected, today
    // prettier-ignore
    expect(expected).toEqual([
      "26 xxoo", "27 xxoo", "28 xxoo", "29 xxoo", "30 xxoo", "01 xooo", "02 xooo",
      "03 xooo", "04 xooo", "05 xooo", "06 xooo", "07 xooo", "08 xooo", "09 xooo",
      "10 xooo", "11 xooo", "12 xooo", "13 xooo", "14 xooo", "15 xooo", "16 xooo",
      "17 xooo", "18 xooo", "19 xooo", "20 xooo", "21 xooo", "22 xooo", "23 xooo",
      "24 xooo", "25 xoox", "26 oooo", "27 xooo", "28 xooo", "29 oooo", "30 xooo",
      "31 xooo", "01 xxoo", "02 xxoo", "03 oxoo", "04 oxoo", "05 oxoo", "06 oxoo"
    ]);
  });

  it('should generate a correct grid with proper day numbers for February 2024 (leap year)', () => {
    const options: CalendarGridOptions = {
      year: 2024,
      month: 2,
      dateFormat: 'yyyy-MM-dd',
    };

    const expectedLabels = mapToLabels(createCalendarGrid(options));

    // prettier-ignore
    expect(expectedLabels).toEqual([
      "29", "30", "31", "01", "02", "03", "04",
      "05", "06", "07", "08", "09", "10", "11",
      "12", "13", "14", "15", "16", "17", "18",
      "19", "20", "21", "22", "23", "24", "25",
      "26", "27", "28", "29", "01", "02", "03"
    ]);
  });

  it('should generate a correct grid with proper day numbers for April 2023 (30 days)', () => {
    const options: CalendarGridOptions = {
      year: 2023,
      month: 4,
      dateFormat: 'yyyy-MM-dd',
    };

    const expectedLabels = mapToLabels(createCalendarGrid(options));

    // prettier-ignore
    expect(expectedLabels).toEqual([
      "27", "28", "29", "30", "31", "01", "02",
      "03", "04", "05", "06", "07", "08", "09",
      "10", "11", "12", "13", "14", "15", "16",
      "17", "18", "19", "20", "21", "22", "23",
      "24", "25", "26", "27", "28", "29", "30"
    ]);
  });
});

function mapToLabels(grid: CalendarCell[]) {
  return grid.map((day) => day.label.padStart(2, '0'));
}

/**
 * Maps the given array of calendar cells to a formatted string representation.
 * Used in tests to verify the correct combination of day, disabled, outdated, selected, and today statuses.
 * Examples:
 * - "05 oxoo" (enabled: false, outdated: false, selected: false, today: false)
 * - "12 xxox" (enabled: true, outdated: true, selected: false, today: true)
 * - "26 xoxo" (enabled: true, outdated: false, selected: true, today: false)
 */
function mapExpected(grid: CalendarCell[]) {
  return grid.map(({ label, disabled, outdated, selected, today }) => {
    const dayStr = label.padStart(2, '0');
    const status = [disabled ? 'o' : 'x', outdated ? 'x' : 'o', selected ? 'x' : 'o', today ? 'x' : 'o'].join('');
    return `${dayStr} ${status}`;
  });
}
