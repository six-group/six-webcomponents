import {
  CalendarGridArgs,
  createCalendarGrid,
  day,
  decreaseYear,
  formatDate,
  getFirstDayOfTheWeek,
  increaseYear,
  isAfter,
  isBefore,
  isInRange,
  isoString,
  isSameDay,
  isSameMonth,
  isSameWeek,
  isSameYear,
  isValidDateString,
  month,
  newDateString,
  pad,
  parseDate,
  rangeAround,
  toDate,
  year,
} from './date-util';
import { SixDateFormats } from '../components/six-datepicker/six-date-formats';

describe('date-util helpers', () => {
  describe('rangeAround', () => {
    it('returns range around 2023', () => {
      expect(rangeAround(2023, 25)).toStrictEqual([
        [2011, 2012, 2013, 2014, 2015],
        [2016, 2017, 2018, 2019, 2020],
        [2021, 2022, 2023, 2024, 2025],
        [2026, 2027, 2028, 2029, 2030],
        [2031, 2032, 2033, 2034, 2035],
      ]);
    });

    it('returns range around 0', () => {
      expect(rangeAround(0, 6)).toStrictEqual([[-3, -2, -1, 0, 1], [2]]);
    });
  });

  describe('pad', () => {
    it('should properly pad a single digit', async () => {
      // given
      const input = 2;

      // when
      const padded = pad(input);

      // then
      expect(padded).toEqual('02');
    });
  });
});

describe('parseDate', () => {
  describe('isoString', () => {
    it('should correctly handle undefined', async () => {
      // given
      const date = undefined;

      // when
      const isoDateString = isoString(date);

      // then
      expect(isoDateString).toBe('');
    });

    it('should correctly handle beginning of year', async () => {
      // given
      const date = new Date(2022, 0, 1);

      // when
      const isoDateString = isoString(date);

      // then
      expect(isoDateString).toBe('2022-01-01');
    });

    it('should correctly handle end of year', async () => {
      // given
      const date = new Date(2022, 11, 31);

      // when
      const isoDateString = isoString(date);

      // then
      expect(isoDateString).toBe('2022-12-31');
    });
  });

  describe('newDateString', () => {
    it('should correctly handle date separated into parameters', async () => {
      // given
      const year = 2033;
      const month = 3;
      const day = 2;

      // when
      const datestring = newDateString(year, month, day);

      // then
      expect(datestring).toBe('2033-03-02');
    });

    it('should correctly handle date object', async () => {
      // given
      const date = new Date(2022, 1, 1);

      // when
      const dateString = newDateString(date);

      // then
      expect(dateString).toBe('2022-02-01');
    });
  });

  describe('isValidDateString', () => {
    it('should correctly handle valid date with dashes', () => {
      // given
      const datestring = '1900-01-01';

      // when
      const isValidDateStringOutput = isValidDateString(datestring, 'yyyy-mm-dd');

      // then
      expect(isValidDateStringOutput).toBe(true);
    });

    it('should correctly handle date with periods', () => {
      // given
      const datestring = '01.01.1900';

      // when
      const isValidDateStringOutput = isValidDateString(datestring, 'dd.mm.yyyy');

      // then
      expect(isValidDateStringOutput).toBe(true);
    });

    it('should correctly handle reversed date with periods', () => {
      // given
      const datestring = '1900.01.01';

      // when
      const isValidDateStringOutput = isValidDateString(datestring, 'yyyy.mm.dd');

      // then
      expect(isValidDateStringOutput).toBe(true);
    });

    it('should correctly handle very old date with dashes', () => {
      // given
      const datestring = '1899-02-07';

      // when
      const isValidDateStringOutput = isValidDateString(datestring, 'yyyy-mm-dd');

      // then
      expect(isValidDateStringOutput).toBe(true);
    });

    it('should correctly handle date with dashes where month and year switched', () => {
      // given
      const datestring = '1999-15-07';

      // when
      const isValidDateStringOutput = isValidDateString(datestring, 'yyyy-mm-dd');

      // then
      expect(isValidDateStringOutput).toBe(false);
    });

    it('should correctly handle invalid day and month', () => {
      // given
      const datestring = '1999-00-32';

      // when
      const isValidDateStringOutput = isValidDateString(datestring, 'yyyy-mm-dd');

      // then
      expect(isValidDateStringOutput).toBe(false);
    });

    it('should correctly handle zero day', () => {
      // given
      const datestring = '1999-01-00';

      // when
      const isValidDateStringOutput = isValidDateString(datestring, 'yyyy-mm-dd');

      // then
      expect(isValidDateStringOutput).toBe(false);
    });

    it('should correctly handle exceeding day', () => {
      // given
      const datestring = '1999-01-32';

      // when
      const isValidDateStringOutput = isValidDateString(datestring, 'yyyy-mm-dd');

      // then
      expect(isValidDateStringOutput).toBe(false);
    });

    it('should correctly handle empty string', () => {
      // given
      const datestring = '';

      // when
      const isValidDateStringOutput = isValidDateString(datestring, 'yyyy-mm-dd');

      // then
      expect(isValidDateStringOutput).toBe(false);
    });

    it('should correctly handle undefined', () => {
      // given
      const datestring = undefined;

      // when
      const isValidDateStringOutput = isValidDateString(datestring, 'yyyy-mm-dd');

      // then
      expect(isValidDateStringOutput).toBe(false);
    });

    it('should correctly handle undefined', () => {
      // given
      const datestring = '1800-01-01';

      // when
      const isValidDatestring = isValidDateString(datestring, 'yyyy-mm-dd');

      // then
      expect(isValidDatestring).toBe(true);
    });
  });

  describe('isBefore', () => {
    it('should correctly handle different date objects', () => {
      // given
      const date = new Date(2020, 0, 1);
      const beforeDate = new Date(2020, 0, 2);

      // when
      const isBeforeOutput = isBefore(date, beforeDate);

      // then
      expect(isBeforeOutput).toBe(true);
    });

    it('should correctly handle same date objects', () => {
      // given
      const date = new Date(2020, 0, 1);
      const beforeDate = new Date(2020, 0, 1);

      // when
      const isBeforeOutput = isBefore(date, beforeDate);

      // then
      expect(isBeforeOutput).toBe(false);
    });

    it('should correctly handle different date strings', () => {
      // given
      const date = '2000-01-01';
      const beforeDate = '2000-01-02';

      // when
      const isBeforeOutput = isBefore(date, beforeDate);

      // then
      expect(isBeforeOutput).toBe(true);
    });

    it('should correctly handle same date string', () => {
      // given
      const date = '2000-01-01';
      const beforeDate = '2000-01-01';

      // when
      const isBeforeOutput = isBefore(date, beforeDate);

      // then
      expect(isBeforeOutput).toBe(false);
    });
  });

  describe('isAfter', () => {
    it('should correctly handle different date objects', () => {
      // given
      const date = new Date(2020, 0, 2);
      const afterDate = new Date(2020, 0, 1);

      // when
      const isAfterOutput = isAfter(date, afterDate);

      // then
      expect(isAfterOutput).toBe(true);
    });

    it('should correctly handle same objects', () => {
      // given
      const date = new Date(2020, 0, 1);
      const afterDate = new Date(2020, 0, 1);

      // when
      const isAfterOutput = isAfter(date, afterDate);

      // then
      expect(isAfterOutput).toBe(false);
    });

    it('should correctly handle different datestrings', () => {
      // given
      const date = '2000-01-02';
      const afterDate = '2000-01-01';

      // when
      const isAfterOutput = isAfter(date, afterDate);

      // then
      expect(isAfterOutput).toBe(true);
    });

    it('should correctly handle same datestrings', () => {
      // given
      const date = '2000-01-01';
      const afterDate = '2000-01-01';

      // when
      const isAfterOutput = isAfter(date, afterDate);

      // then
      expect(isAfterOutput).toBe(false);
    });
  });

  describe('year', () => {
    it('should correctly handle date object', () => {
      // given
      const yearInput = new Date(2020, 0, 1);

      // when
      const yearOutput = year(yearInput);

      // then
      expect(yearOutput).toBe(2020);
    });

    it('should correctly handle undefined', () => {
      // given
      const yearInput = undefined;

      // when
      const yearOutput = () => year(yearInput);

      // then
      expect(yearOutput).toThrow(Error);
    });

    it('should correctly handle invalid date', () => {
      // given
      const yearInput = new Date('adsf');

      // when
      const yearOutput = () => year(yearInput);

      // then
      expect(yearOutput).toThrow(Error);
    });
  });

  describe('month', () => {
    it('should correctly handle date object', () => {
      // given
      const monthInput = new Date(2020, 0, 1);

      // when
      const monthOutput = month(monthInput);

      // then
      expect(monthOutput).toBe(0);
    });

    it('should correctly handle undefined', () => {
      // given
      const monthInput = undefined;

      // when
      const monthOutput = () => month(monthInput);

      // then
      expect(monthOutput).toThrow(Error);
    });

    it('should correctly handle invalid date', () => {
      // given
      const monthInput = new Date('adsf');

      // when
      const monthOutput = () => month(monthInput);

      // then
      expect(monthOutput).toThrow(Error);
    });
  });

  describe('day', () => {
    it('should correctly handle valid date object', () => {
      // given
      const dayInput = new Date(2020, 0, 1);

      // when
      const dayOutput = day(dayInput);

      // then
      expect(dayOutput).toBe(1);
    });

    it('should correctly handle undefined', () => {
      // given
      const dayInput = undefined;

      // when
      const dayOutput = () => day(dayInput);

      // then
      expect(dayOutput).toThrow(Error);
    });

    it('should correctly handle invalid date object', () => {
      // given
      const dayInput = new Date('adsf');

      // when
      const dayOutput = () => day(dayInput);

      // then
      expect(dayOutput).toThrow(Error);
    });
  });

  describe('increase year', () => {
    it('should properly increase year', async () => {
      // given
      const year = new Date(2020, 0, 1);
      const increment = 1;

      // when
      const increasedYear = increaseYear(year, increment);

      // then
      expect(increasedYear).toBe(2021);
    });
  });

  describe('decrease year', () => {
    it('should properly decrease year', () => {
      // given
      const year = new Date(2020, 0, 1);
      const decrement = 1;

      // when
      const decreasedYear = decreaseYear(year, decrement);

      // then
      expect(decreasedYear).toBe(2019);
    });
  });

  describe('isInRange', () => {
    it('should correctly handle lower than min range', () => {
      // given
      const date = new Date(2020, 0, 4);
      const minDate = new Date(2020, 0, 5);
      const maxDate = new Date(2020, 0, 10);

      // when
      const isInRangeOutput = isInRange(date, minDate, maxDate);

      // then
      expect(isInRangeOutput).toBe(false);
    });

    it('should correctly handle lower than min range when only min date defined', () => {
      // given
      const date = new Date(2020, 0, 4);
      const minDate = new Date(2020, 0, 5);
      const maxDate = null;

      // when
      const isInRangeOutput = isInRange(date, minDate, maxDate);

      // then
      expect(isInRangeOutput).toBe(false);
    });

    it('should correctly handle equal to min range', () => {
      // given
      const date = new Date(2020, 0, 5);
      const minDate = new Date(2020, 0, 5);
      const maxDate = new Date(2020, 0, 10);

      // when
      const isInRangeOutput = isInRange(date, minDate, maxDate);

      // then
      expect(isInRangeOutput).toBe(true);
    });

    it('should correctly handle equal to min range when only minDate defined', () => {
      // given
      const date = new Date(2020, 0, 5);
      const minDate = new Date(2020, 0, 5);
      const maxDate = null;

      // when
      const isInRangeOutput = isInRange(date, minDate, maxDate);

      // then
      expect(isInRangeOutput).toBe(true);
    });

    it('should correctly handle in range', () => {
      // given
      const date = new Date(2020, 0, 6);
      const minDate = new Date(2020, 0, 5);
      const maxDate = new Date(2020, 0, 10);

      // when
      const isInRangeOutput = isInRange(date, minDate, maxDate);

      // then
      expect(isInRangeOutput).toBe(true);
    });

    it('should correctly handle in range when only minDate defined', () => {
      // given
      const date = new Date(2020, 0, 6);
      const minDate = new Date(2020, 0, 5);
      const maxDate = null;

      // when
      const isInRangeOutput = isInRange(date, minDate, maxDate);

      // then
      expect(isInRangeOutput).toBe(true);
    });

    it('should correctly handle in range when only maxDate is defined', () => {
      // given
      const date = new Date(2020, 0, 6);
      const maxDate = new Date(2020, 0, 10);
      const minDate = null;

      // when
      const isInRangeOutput = isInRange(date, minDate, maxDate);

      // then
      expect(isInRangeOutput).toBe(true);
    });

    it('should correctly handle just below max range', () => {
      // given
      const date = new Date(2020, 0, 9);
      const minDate = new Date(2020, 0, 5);
      const maxDate = new Date(2020, 0, 10);

      // when
      const isInRangeOutput = isInRange(date, minDate, maxDate);

      // then
      expect(isInRangeOutput).toBe(true);
    });

    it('should correctly handle just below max range when only maxDate is defined', () => {
      // given
      const date = new Date(2020, 0, 9);
      const maxDate = new Date(2020, 0, 10);
      const minDate = null;

      // when
      const isInRangeOutput = isInRange(date, minDate, maxDate);

      // then
      expect(isInRangeOutput).toBe(true);
    });

    it('should correctly handle equal to max range', () => {
      // given
      const date = new Date(2020, 0, 10);
      const minDate = new Date(2020, 0, 5);
      const maxDate = new Date(2020, 0, 10);

      // when
      const isInRangeOutput = isInRange(date, minDate, maxDate);

      // then
      expect(isInRangeOutput).toBe(true);
    });

    it('should correctly handle equal to max range when only maxDate defined', () => {
      // given
      const date = new Date(2020, 0, 10);
      const maxDate = new Date(2020, 0, 10);
      const minDate = null;

      // when
      const isInRangeOutput = isInRange(date, minDate, maxDate);

      // then
      expect(isInRangeOutput).toBe(true);
    });

    it('should correctly handle higher than max range', () => {
      // given
      const date = new Date(2020, 0, 11);
      const minDate = new Date(2020, 0, 5);
      const maxDate = new Date(2020, 0, 10);

      // when
      const isInRangeOutput = isInRange(date, minDate, maxDate);

      // then
      expect(isInRangeOutput).toBe(false);
    });

    it('should correctly handle higher than max range when only maxDate defined', () => {
      // given
      const date = new Date(2020, 0, 11);
      const maxDate = new Date(2020, 0, 10);
      const minDate = null;

      // when
      const isInRangeOutput = isInRange(date, minDate, maxDate);

      // then
      expect(isInRangeOutput).toBe(false);
    });
  });

  describe('getFirstDayOfTheWeek', () => {
    it('should return correct day', () => {
      // given
      const date = new Date(2021, 1, 26);

      // when
      const firstDayOfTheWeek = getFirstDayOfTheWeek(date).getDay();

      // then
      expect(firstDayOfTheWeek).toBe(1);
    });

    it('should return correct date', () => {
      // given
      const date = new Date(2021, 1, 26);

      // when
      const firstDayOfTheWeek = getFirstDayOfTheWeek(date).getDate();

      // then
      expect(firstDayOfTheWeek).toBe(22);
    });
  });

  describe('isSameYear', () => {
    it('should correctly handle same year', () => {
      // given
      const year1 = new Date(2021, 1, 26);
      const year2 = new Date(2021, 2, 2);

      // when
      const isSameYearOutput = isSameYear(year1, year2);

      // then
      expect(isSameYearOutput).toBe(true);
    });

    it('should correctly handle different year', () => {
      // given
      const year1 = new Date(2021, 1, 26);
      const year2 = new Date(2022, 2, 2);

      // when
      const isSameYearOutput = isSameYear(year1, year2);

      // then
      expect(isSameYearOutput).toBe(false);
    });

    it('should handle null values', () => {
      // given
      const year1 = new Date(2021, 1, 26);

      // when
      const isSameYearOutput = isSameYear(year1, null);

      // then
      expect(isSameYearOutput).toBe(false);
    });
  });

  describe('isSameMonth', () => {
    it('should correctly handle same month', () => {
      // given
      const month1 = new Date(2021, 1, 26);
      const month2 = new Date(2021, 1, 2);

      // when
      const isSameMonthOutput = isSameMonth(month1, month2);

      // then
      expect(isSameMonthOutput).toBe(true);
    });

    it('should correctly handle different month', () => {
      // given
      const month1 = new Date(2021, 1, 26);
      const month2 = new Date(2021, 2, 2);

      // when
      const isSameMonthOutput = isSameMonth(month1, month2);

      // then
      expect(isSameMonthOutput).toBe(false);
    });

    it('should handle null values', () => {
      // given
      const month1 = new Date(2021, 1, 26);

      // when
      const isSameMonthOutput = isSameMonth(month1, null);

      // then
      expect(isSameMonthOutput).toBe(false);
    });
  });

  describe('isSameWeek', () => {
    it('should correctly handle', () => {
      // given
      const week1 = new Date(2021, 1, 26);
      // when
      const isSameWeekOutput = isSameWeek(week1, week1);

      // then
      expect(isSameWeekOutput).toBe(true);
    });

    it('should correctly handle', () => {
      // given
      const week1 = new Date(2021, 1, 26);
      const week2 = new Date(2021, 1, 21);

      // when
      const isSameWeekOutput = isSameWeek(week1, week2);

      // then
      expect(isSameWeekOutput).toBe(false);
    });

    it('should correctly handle', () => {
      // given
      const week1 = new Date(2021, 1, 26);
      const week2 = new Date(2021, 1, 22);

      // when
      const isSameWeekOutput = isSameWeek(week1, week2);

      // then
      expect(isSameWeekOutput).toBe(true);
    });

    it('should correctly handle', () => {
      // given
      const week1 = new Date(2021, 1, 26);
      const week2 = new Date(2021, 1, 28);

      // when
      const isSameWeekOutput = isSameWeek(week1, week2);

      // then
      expect(isSameWeekOutput).toBe(true);
    });

    it('should correctly handle', () => {
      // given
      const week1 = new Date(2021, 1, 26);
      const week2 = new Date(2021, 2, 1);

      // when
      const isSameWeekOutput = isSameWeek(week1, week2);

      // then
      expect(isSameWeekOutput).toBe(false);
    });

    it('should handle null values', () => {
      // given
      const week1 = new Date(2021, 1, 26);

      // when
      const isSameWeekOutput = isSameWeek(week1, null);

      // then
      expect(isSameWeekOutput).toBe(false);
    });
  });

  describe('isSameDay', () => {
    it('should correctly handle same day', () => {
      // given
      const day1 = new Date(2021, 1, 26);
      const day2 = new Date(2021, 1, 26);

      // when
      const isSameDayOutput = isSameDay(day1, day2);

      // then
      expect(isSameDayOutput).toBe(true);
    });

    it('should correctly handle different days', () => {
      // given
      const day1 = new Date(2021, 1, 26);
      const day2 = new Date(2021, 1, 25);

      // when
      const isSameDayOutput = isSameDay(day1, day2);

      // then
      expect(isSameDayOutput).toBe(false);
    });

    it('should correctly handle same day in different years', () => {
      // given
      const day1 = new Date(2021, 1, 25);
      const day2 = new Date(2022, 1, 25);

      // when
      const isSameDayOutput = isSameDay(day1, day2);

      // then
      expect(isSameDayOutput).toBe(false);
    });

    it('should handle null values', () => {
      // given
      const day1 = new Date(2021, 1, 25);

      // when
      const isSameDayOutput = isSameDay(day1, null);

      // then
      expect(isSameDayOutput).toBe(false);
    });
  });

  describe('formatDate', () => {
    it('should handle undefined date', async () => {
      // given
      const date = undefined;
      const format = 'dd/mm/yyyy';

      // when
      const formattedDate = formatDate(date, format);

      // then
      expect(formattedDate).toEqual('');
    });

    it('should correctly format dd/mm/yyyy', async () => {
      // given
      const date = new Date(2021, 1, 26);
      const format = 'dd/mm/yyyy';

      // when
      const formattedDate = formatDate(date, format);

      // then
      expect(formattedDate).toEqual('26/02/2021');
    });

    it('should correctly format d/m/yyyy', async () => {
      // given
      const date = new Date(2021, 1, 5);
      const format = 'd/m/yyyy';

      // when
      const formattedDate = formatDate(date, format);

      // then
      expect(formattedDate).toEqual('5/2/2021');
    });

    it('should correctly format yyyy/mm/dd', async () => {
      // given
      const date = new Date(2021, 1, 5);
      const format = 'yyyy/mm/dd';

      // when
      const formattedDate = formatDate(date, format);

      // then
      expect(formattedDate).toEqual('2021/02/05');
    });

    it('should correctly format dd.mm.yyyy', async () => {
      // given
      const date = new Date(2021, 1, 5);
      const format = 'dd.mm.yyyy';

      // when
      const formattedDate = formatDate(date, format);

      // then
      expect(formattedDate).toEqual('05.02.2021');
    });

    it('should correctly format dd-mm-yyyy', async () => {
      // given
      const date = new Date(2021, 1, 5);
      const format = 'dd-mm-yyyy';

      // when
      const formattedDate = formatDate(date, format);

      // then
      expect(formattedDate).toEqual('05-02-2021');
    });
  });

  describe('parseDate', () => {
    it('should properly parse yyyy-mm-dd', async () => {
      // given
      const datestring = '2021-05-22';
      const format = 'yyyy-mm-dd';
      const locale = 'en';

      // when
      const parsedDate = parseDate(datestring, format, locale);

      // then
      expect(parsedDate).toEqual(new Date(2021, 4, 22));
    });

    it('should properly parse dd-mm-yyyy', async () => {
      // given
      const datestring = '22-05-2021';
      const format = 'dd-mm-yyyy';
      const locale = 'en';

      // when
      const parsedDate = parseDate(datestring, format, locale);

      // then
      expect(parsedDate).toEqual(new Date(2021, 4, 22));
    });

    it('should properly parse dd/mm/yyyy', async () => {
      // given
      const datestring = '22/05/2021';
      const format = 'dd/mm/yyyy';
      const locale = 'en';

      // when
      const parsedDate = parseDate(datestring, format, locale);

      // then
      expect(parsedDate).toEqual(new Date(2021, 4, 22));
    });
  });

  describe('toDate', () => {
    const getRandomInt = (upperBound: number, lowerBound = 0) =>
      Math.floor(Math.random() * upperBound) + 1 + lowerBound;
    const addMissingZero = (numb: number): string => String(numb).padStart(2, '0');
    const addMissingZeroRandomly = (numb: number): string => {
      // add a leading zero in 50% of the cases
      if (Math.round(Math.random())) {
        return String(numb);
      } else {
        return addMissingZero(numb);
      }
    };
    const getRandomYYYY = () => getRandomInt(1000, 1000);
    const getRandomYY = () => addMissingZero(getRandomInt(30));
    const getRandomMonth = () => addMissingZeroRandomly(getRandomInt(12));
    const getRandomDay = () => addMissingZeroRandomly(getRandomInt(31));

    it('should properly parse yyyy-mm-dd', async () => {
      // given
      const year = getRandomYYYY();
      const month = getRandomMonth();
      const day = getRandomDay();
      const dateString = `${year}-${month}-${day}`;
      const format = 'yyyy-mm-dd';

      // when
      const date = toDate(dateString, format);

      // then
      expect(date).toEqual(new Date(year, Number(month) - 1, Number(day)));
    });

    it('should properly parse yy-mm-dd', async () => {
      // given
      const year = getRandomYY();
      const month = getRandomMonth();
      const day = getRandomDay();
      const dateString = `${year}-${month}-${day}`;
      const format = 'yy-mm-dd';

      // when
      const date = toDate(dateString, format);

      // then
      expect(date).toEqual(new Date(Number(`20${year}`), Number(month) - 1, Number(day)));
    });

    it('should properly parse dd.mm.yyyy', async () => {
      // given
      const year = getRandomYYYY();
      const day = getRandomDay();
      const month = getRandomMonth();
      const dateString = `${day}.${month}.${year}`;
      const format = 'dd.mm.yyyy';

      // when
      const date = toDate(dateString, format);

      // then
      expect(date).toEqual(new Date(year, Number(month) - 1, Number(day)));
    });

    it('should properly parse dd.mm.yyyy with no leading zero', async () => {
      // given
      const dateString = '2.5.1990';
      const format = 'dd.mm.yyyy';

      // when
      const date = toDate(dateString, format);

      // then
      expect(date).toEqual(new Date(1990, 4, 2));
    });

    it('should properly parse dd.mm.yy', async () => {
      // given
      const day = getRandomDay();
      const month = getRandomMonth();
      const year = getRandomYY();
      const dateString = `${day}.${month}.${year}`;
      const format = 'dd.mm.yy';

      // when
      const date = toDate(dateString, format);

      // then
      expect(date).toEqual(new Date(Number(`20${year}`), Number(month) - 1, Number(day)));
    });

    it('should properly parse dd-mm-yyyy', async () => {
      // given
      const year = getRandomYYYY();
      const month = getRandomMonth();
      const day = getRandomDay();
      const dateString = `${day}-${month}-${year}`;
      const format = 'dd-mm-yyyy';

      // when
      const date = toDate(dateString, format);

      // then
      expect(date).toEqual(new Date(year, Number(month) - 1, Number(day)));
    });

    it('should properly parse dd-mm-yy', async () => {
      // given
      const month = getRandomMonth();
      const day = getRandomDay();
      const year = getRandomYY();
      const dateString = `${day}-${month}-${year}`;
      const format = 'dd-mm-yy';

      // when
      const date = toDate(dateString, format);

      // then
      expect(date).toEqual(new Date(Number(`20${year}`), Number(month) - 1, Number(day)));
    });

    it('should properly parse dd/mm/yyyy', async () => {
      // given
      const year = getRandomYYYY();
      const month = getRandomMonth();
      const day = getRandomDay();
      const dateString = `${day}/${month}/${year}`;
      const format = 'dd/mm/yyyy';

      // when
      const date = toDate(dateString, format);

      // then
      expect(date).toEqual(new Date(year, Number(month) - 1, Number(day)));
    });

    it('should properly parse dd/mm/yy', async () => {
      // given
      const day = getRandomDay();
      const month = getRandomMonth();
      const year = getRandomYY();
      const dateString = `${day}/${month}/${year}`;
      const format = 'dd/mm/yy';

      // when
      const date = toDate(dateString, format);

      // then
      expect(date).toEqual(new Date(Number(`20${year}`), Number(month) - 1, Number(day)));
    });

    it('should properly parse yyyy/mm/dd', async () => {
      // given
      const year = getRandomYYYY();
      const month = getRandomMonth();
      const day = getRandomDay();
      const dateString = `${year}/${month}/${day}`;
      const format = 'yyyy/mm/dd';

      // when
      const date = toDate(dateString, format);

      // then
      expect(date).toEqual(new Date(year, Number(month) - 1, Number(day)));
    });

    it('should properly parse yy/mm/dd', async () => {
      // given
      const year = getRandomYY();
      const month = getRandomMonth();
      const day = getRandomDay();
      const dateString = `${year}/${month}/${day}`;
      const format = 'yy/mm/dd';

      // when
      const date = toDate(dateString, format);

      // then
      expect(date).toEqual(new Date(Number(`20${year}`), Number(month) - 1, Number(day)));
    });
  });
});

describe('createCalendarGrid', () => {
  const mapGridToProperty = (grid, property) => grid.map((row) => row.map((cell) => cell[property]));
  const stringifyGrid = (grid) => mapGridToProperty(grid, 'label');
  const extractDisabledMapFromGrid = (grid) => mapGridToProperty(grid, 'isDisabled');
  const extractOutdatedMapFromGrid = (grid) => mapGridToProperty(grid, 'isOutdated');

  it('should correctly show some specific date', async () => {
    // given
    const args: CalendarGridArgs = {
      allowedDates: () => true,
      firstDateOfBox: new Date(2022, 1, 28),
      dateFormat: SixDateFormats.DDMMYY_DOT,
      locale: 'en',
      selectedDate: null,
      minDate: null,
      maxDate: null,
      pointerDate: {
        year: 2022,
        month: 2,
        day: 31,
      },
    };

    // when
    const calendarGrid = createCalendarGrid(args);

    // then
    expect(stringifyGrid(calendarGrid)).toEqual([
      ['28', '1', '2', '3', '4', '5', '6'],
      ['7', '8', '9', '10', '11', '12', '13'],
      ['14', '15', '16', '17', '18', '19', '20'],
      ['21', '22', '23', '24', '25', '26', '27'],
      ['28', '29', '30', '31', '1', '2', '3'],
    ]);

    expect(extractDisabledMapFromGrid(calendarGrid)).toEqual([
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
    ]);

    expect(extractOutdatedMapFromGrid(calendarGrid)).toEqual([
      [true, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, true, true, true],
    ]);
  });

  it('should correctly show some box when today is first day of the month', async () => {
    // given
    const args: CalendarGridArgs = {
      allowedDates: () => true,
      firstDateOfBox: new Date(2022, 1, 28),
      dateFormat: SixDateFormats.DDMMYY_DOT,
      locale: 'en',
      selectedDate: null,
      minDate: null,
      maxDate: null,
      pointerDate: {
        year: 2022,
        month: 2,
        day: 1,
      },
    };

    // when
    const calendarGrid = createCalendarGrid(args);

    // then
    expect(stringifyGrid(calendarGrid)).toEqual([
      ['28', '1', '2', '3', '4', '5', '6'],
      ['7', '8', '9', '10', '11', '12', '13'],
      ['14', '15', '16', '17', '18', '19', '20'],
      ['21', '22', '23', '24', '25', '26', '27'],
      ['28', '29', '30', '31', '1', '2', '3'],
    ]);

    expect(extractDisabledMapFromGrid(calendarGrid)).toEqual([
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
    ]);

    expect(extractOutdatedMapFromGrid(calendarGrid)).toEqual([
      [true, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, true, true, true],
    ]);
  });

  it('should correclty create calendargrid with non allowed dates', async () => {
    // given
    const args: CalendarGridArgs = {
      allowedDates: (date) => date.getDate() % 2 === 0,
      firstDateOfBox: new Date(2022, 1, 28),
      dateFormat: SixDateFormats.DDMMYY_DOT,
      locale: 'en',
      selectedDate: null,
      minDate: null,
      maxDate: null,
      pointerDate: {
        year: 2022,
        month: 2,
        day: 31,
      },
    };

    // when
    const calendarGrid = createCalendarGrid(args);

    // then
    expect(stringifyGrid(calendarGrid)).toEqual([
      ['28', '1', '2', '3', '4', '5', '6'],
      ['7', '8', '9', '10', '11', '12', '13'],
      ['14', '15', '16', '17', '18', '19', '20'],
      ['21', '22', '23', '24', '25', '26', '27'],
      ['28', '29', '30', '31', '1', '2', '3'],
    ]);

    expect(extractDisabledMapFromGrid(calendarGrid)).toEqual([
      [false, true, false, true, false, true, false],
      [true, false, true, false, true, false, true],
      [false, true, false, true, false, true, false],
      [true, false, true, false, true, false, true],
      [false, true, false, true, true, false, true],
    ]);

    expect(extractOutdatedMapFromGrid(calendarGrid)).toEqual([
      [true, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, true, true, true],
    ]);
  });
});
