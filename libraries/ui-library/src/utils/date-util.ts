/* eslint-disable */
// @ts-nocheck

import { isDate, isNil, isString } from './type-check';
import { SixDateFormats } from '../components/six-date/six-date-formats';
import { CalendarCell } from '../components/six-date/six-date';

export type DateLocale = typeof i18nDate.en;
export const i18nDate = {
  en: {
    months: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
    monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    monthsShortGrouped: [
      ['Jan', 'Feb', 'Mar', 'Apr'],
      ['May', 'Jun', 'Jul', 'Aug'],
      ['Sep', 'Oct', 'Nov', 'Dec'],
    ],
    weekdays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    weekdaysShort: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    weekdaysMin: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
  },
  de: {
    months: [
      'Januar',
      'Februar',
      'März',
      'April',
      'Mai',
      'Juni',
      'Juli',
      'August',
      'September',
      'Oktober',
      'November',
      'Dezember',
    ],
    monthsShort: ['Jan.', 'Feb.', 'März', 'Apr.', 'Mai', 'Juni', 'Juli', 'Aug.', 'Sep.', 'Okt.', 'Nov.', 'Dez.'],
    monthsShortGrouped: [
      ['Jan.', 'Feb.', 'März', 'Apr.'],
      ['Mai', 'Juni', 'Juli', 'Aug.'],
      ['Sep.', 'Okt.', 'Nov.', 'Dez.'],
    ],
    weekdays: ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag', 'Sonntag'],
    weekdaysShort: ['Mo.', 'Di.', 'Mi.', 'Do.', 'Fr.', 'Sa.', 'So.'],
    weekdaysMin: ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'],
  },
  fr: {
    months: [
      'janvier',
      'février',
      'mars',
      'avril',
      'mai',
      'juin',
      'juillet',
      'août',
      'septembre',
      'octobre',
      'novembre',
      'décembre',
    ],
    monthsShort: ['janv.', 'févr.', 'mars', 'avr.', 'mai', 'juin', 'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.'],
    monthsShortGrouped: [
      ['janv.', 'févr.', 'mars', 'avr.'],
      ['mai', 'juin', 'juil.', 'août'],
      ['sept.', 'oct.', 'nov.', 'déc.'],
    ],
    weekdays: ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'],
    weekdaysShort: ['lun.', 'mar.', 'mer.', 'jeu.', 'ven.', 'sam.', 'dim.'],
    weekdaysMin: ['lu', 'ma', 'me', 'je', 've', 'sa', 'di'],
  },
  it: {
    months: [
      'gennaio',
      'febbraio',
      'marzo',
      'aprile',
      'maggio',
      'giugno',
      'luglio',
      'agosto',
      'settembre',
      'ottobre',
      'novembre',
      'dicembre',
    ],
    monthsShort: ['gen', 'feb', 'mar', 'apr', 'mag', 'giu', 'lug', 'ago', 'set', 'ott', 'nov', 'dic'],
    monthsShortGrouped: [
      ['gen', 'feb', 'mar', 'apr'],
      ['mag', 'giu', 'lug', 'ago'],
      ['set', 'ott', 'nov', 'dic'],
    ],
    weekdays: ['lunedì', 'martedì', 'mercoledì', 'giovedì', 'venerdì', 'sabato', 'domenica'],
    weekdaysShort: ['lun', 'mar', 'mer', 'gio', 'ven', 'sab', 'dom'],
    weekdaysMin: ['lu', 'ma', 'me', 'gi', 've', 'sa', 'do'],
  },
  es: {
    months: [
      'enero',
      'febrero',
      'marzo',
      'abril',
      'mayo',
      'junio',
      'julio',
      'agosto',
      'septiembre',
      'octubre',
      'noviembre',
      'diciembre',
    ],
    monthsShort: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'],
    monthsShortGrouped: [
      ['ene', 'feb', 'mar', 'abr'],
      ['may', 'jun', 'jul', 'ago'],
      ['sep', 'oct', 'nov', 'dic'],
    ],
    weekdays: ['lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado', 'domingo'],
    weekdaysShort: ['lun', 'mar', 'mié', 'jue', 'vie', 'sáb', 'dom'],
    weekdaysMin: ['lu', 'ma', 'mi', 'ju', 'vi', 'sa', 'do'],
  },
};

/**
 * Returns a JS Date instance of the exact moment
 *
 * ```typescript
 * const date = now()
 * // Wed Mar 10 2021 20:30:32 GMT+0100 (Central European Standard Time)
 * ```
 */
export const now = () => new Date();

export const removeTime = (date: Date) => new Date(date.getFullYear(), date.getMonth(), date.getDate());

export const pad = (value: number) => String(value).padStart(2, '0');

/**
 * Returns `true` if the given date is valid
 */
export const isValidDate = (value: unknown): boolean => {
  return value instanceof Date && !isNaN(value.getTime()) && new Date(value).toString() !== 'Invalid Date';
};

/**
 * Returns the year number of the given date
 *
 * ```typescript
 * year(new Date(2020, 0, 1)) // 2020
 * ```
 */
export const year = (date: Date | undefined): number => {
  if (date && isValidDate(date)) {
    return date.getFullYear();
  }
  throw new Error('Not a valid date');
};

/**
 * Returns the month number of the given date
 *
 * ```typescript
 * month(new Date(2020, 0, 1)) // 0
 * ```
 */
export const month = (date: Date | undefined): number => {
  if (date && isValidDate(date)) {
    return date.getMonth();
  }
  throw new Error('Not a valid date');
};

/**
 * Returns the day number of the given date
 *
 * ```typescript
 * day(new Date(2020, 0, 1)) // 1
 * ```
 */
export const day = (date: Date | undefined): number => {
  if (date && isValidDate(date)) {
    return date.getDate();
  }
  throw new Error('Not a valid date');
};

/**
 * Returns the hours of the given date
 */
export const hours = (date: Date | undefined): number => {
  if (date && isValidDate(date)) {
    return date.getHours();
  }
  throw new Error('Not a valid date');
};

/**
 * Returns the minutes of the given date
 */
export const minutes = (date: Date | undefined): number => {
  if (date && isValidDate(date)) {
    return date.getMinutes();
  }
  throw new Error('Not a valid date');
};

/**
 * Returns the seconds of the given date
 */
export const seconds = (date: Date | undefined): number => {
  if (date && isValidDate(date)) {
    return date.getSeconds();
  }
  throw new Error('Not a valid date');
};

/**
 * Returns the first day of the week of the given date.
 */
export const getFirstDayOfTheWeek = (date: Date) => {
  const weekdayDiff = [6, 0, 1, 2, 3, 4, 5];
  const day = new Date(date);
  day.setDate(day.getDate() - weekdayDiff[day.getDay()]);
  return day;
};

/**
 * Returns `true` when the year of the dates are the same
 */
export const isSameYear = (a: Date | undefined, b: Date | undefined) => a?.getFullYear() === b?.getFullYear();

/**
 * Returns `true` when the month of the dates are the same
 */
export const isSameMonth = (a: Date | undefined, b: Date | undefined) =>
  isSameYear(a, b) && a?.getMonth() === b?.getMonth();

/**
 * Returns `true` when the day of the dates are the same
 */
export const isSameDay = (a: Date | undefined, b: Date | undefined) =>
  isSameMonth(a, b) && a?.getDate() === b?.getDate();

/**
 * Returns `true` when the week of the dates are the same
 */
export const isSameWeek = (a: Date, b: Date) => isSameDay(getFirstDayOfTheWeek(a), getFirstDayOfTheWeek(b));

const localDatetime = (date: Date) => new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));

/**
 * Returns the ISO string `yyyy-mm-dd` of the given date
 *
 * ```typescript
 * isoString(new Date(2020, 0, 13)) // '2020-01-13'
 * ```
 */
export const isoString = (date: Date | undefined): string => {
  if (isNil(date) || Date.toString() === 'Invalid Date') {
    return '';
  }

  return `${year(date)}-${pad(month(date) + 1)}-${pad(day(date))}`;
};

/**
 * Returns the ISO string `yyyy-mm-dd` of the given parameters year, month and day
 *
 * ```typescript
 * newDateString(2020, 0, 13) // '2020-01-13'
 * or
 * newDateString(new Date(2020, 0, 13)) // '2020-01-13'
 * ```
 */
export const newDateString = (yearOrDate: Date | number, month?: number, day?: number): string => {
  let date;
  if (isDate(yearOrDate)) {
    date = localDatetime(yearOrDate);
  } else {
    date = new Date(Date.UTC(yearOrDate, (month as number) - 1, day as number));
  }

  return isoString(date);
};

/**
 * Returns `true` if the given datestring is valid
 */
export const isValidDateString = (datestring: string | undefined, format: string) => {
  if (!isString(datestring) || !isString(format)) {
    return false;
  }

  if (datestring.length < 6 || format.length < 6) {
    return false;
  }

  const { day, month } = getDateParts(datestring, format);

  if (day > 31 || month > 11 || day <= 0 || month < 0) {
    return false;
  }

  const date = toDate(datestring, format);

  if (isNil(date)) {
    return false;
  }

  return date.toString() !== 'Invalid Date';
};

/**
 * Returns `true` when the given date is not smaller than the minDate and not bigger than the maxDate.
 *
 * ```typescript
 * isInRange(new Date(2020, 1, 1), new Date(2020, 0, 1), new Date(2020, 2, 1)) // true
 * ```
 */
export const isInRange = (date: Date | undefined, minDate: Date | undefined, maxDate: Date | undefined): boolean => {
  if (!date) {
    return true;
  }

  if (minDate && date < minDate) {
    return false;
  }

  if (maxDate && maxDate < date) {
    return false;
  }

  return true;
};

const validateTwoDates = (
  first: any,
  second: Date | string | undefined,
  validateFn: (irst: Date, second: Date) => boolean
) => {
  if (isNil(first) && isNil(second)) {
    return false;
  }

  const _first: Date = new Date(first as string | Date);
  const _second: Date = new Date(second as string | Date);

  if (!isValidDate(_first) || !isValidDate(_second)) {
    return false;
  }

  return validateFn(_first, _second);
};

/**
 * Returns `true` when the given date is not smaller than the before date.
 *
 * ```typescript
 * isBefore(new Date(2020, 1, 1), new Date(2020, 3, 1)) // true
 * ```
 */
export const isBefore = (date: any, beforeDate: Date | string | undefined): boolean =>
  validateTwoDates(date, beforeDate, (first, second) => first < second);

/**
 * Returns `true` when the given date is not smaller than the before date.
 *
 * ```typescript
 * isAfter(new Date(2020, 5, 1), new Date(2020, 3, 1)) // true
 * ```
 */
export const isAfter = (date: any, afterDate: Date | string | undefined): boolean =>
  validateTwoDates(date, afterDate, (first, second) => first > second);

/**
 * Increases the year of a date and retunrs the result
 *
 * ```typescript
 * increaseYear(new Date(2020, 0, 1), 1) // 2021
 * ```
 */
export const increaseYear = (date: Date, years: number): number => year(date) + years;

/**
 * Decreases the year of a date and retunrs the result
 *
 * ```typescript
 * decreaseYear(new Date(2020, 0, 1), 1) // 2019
 * ```
 */
export const decreaseYear = (date: Date, years: number): number => year(date) - years;

const lookAhead = (iFormat: number, format: string, match: string, length = 2) => {
  const increment = length - 1;
  const followingCharacterMatches = format.charAt(iFormat + increment) === match;
  const hasProperLength = iFormat + increment < format.length;
  return hasProperLength && followingCharacterMatches;
};

const formatNumber = (value, len) => {
  let num = String(value);

  while (num.length < len) {
    num = '0' + num;
  }

  return num;
};

export const formatDate = (date: Date | undefined | null, format: string): string => {
  if (date == null) {
    return '';
  }

  let output = '';

  for (let iFormat = 0; iFormat < format.length; iFormat++) {
    switch (format.charAt(iFormat)) {
      case 'd':
        if (lookAhead(iFormat, format, 'd')) {
          output += formatNumber(date.getDate(), 2);
          iFormat++;
        } else {
          output += String(date.getDate());
        }
        break;
      case 'm':
        if (lookAhead(iFormat, format, 'm')) {
          output += formatNumber(date.getMonth() + 1, 2);
          iFormat++;
        } else {
          output += String(date.getMonth() + 1);
        }
        break;
      case 'y':
        if (lookAhead(iFormat, format, 'y', 4)) {
          iFormat += 3;
          output += date.getFullYear();
        } else {
          output += (date.getFullYear() % 100 < 10 ? '0' : '') + (date.getFullYear() % 100);
          iFormat++;
        }
        break;
      case 'h':
        if (lookAhead(iFormat, format, 'h')) {
          output += formatNumber(date.getHours(), 2);
          iFormat++;
        } else {
          output += String(date.getHours());
        }
        break;
      case 'M':
        if (lookAhead(iFormat, format, 'M')) {
          output += formatNumber(date.getMinutes(), 2);
          iFormat++;
        } else {
          output += String(date.getMinutes());
        }
        break;
      case 's':
        if (lookAhead(iFormat, format, 's')) {
          output += formatNumber(date.getSeconds(), 2);
          iFormat++;
        } else {
          output += String(date.getSeconds());
        }
        break;
      default:
        output += format.charAt(iFormat);
    }
  }
  return output;
};

const daylightSavingAdjust = (date): Date => {
  if (!date) {
    return null;
  }

  date.setHours(date.getHours() > 12 ? date.getHours() + 2 : 0);

  return date;
};

const getDaysCountInMonth = (month: number, year: number) =>
  32 - daylightSavingAdjust(new Date(year, month, 32)).getDate();

export const parseDate = (value: any, format: string, locale: string): Date => {
  if (format == null || value == null) {
    throw 'Invalid arguments';
  }

  value = typeof value === 'object' ? value.toString() : value + '';
  if (value === '') {
    return null;
  }

  let iFormat;
  let dim;
  let extra;
  let iValue = 0;
  let shortYearCutoff = 100;
  let year = -1;
  let month = -1;
  let day = -1;
  let doy = -1;
  let literal = false;
  let date: Date;
  let lookAhead = (match: string, len = 2) => {
    const increment = len - 1;
    let matches = iFormat + increment < format.length && format.charAt(iFormat + increment) === match;
    if (matches) {
      iFormat += increment;
    }
    return matches;
  };
  let getNumber = (match, len = 2) => {
    let isDoubled = lookAhead(match, len),
      size = match === '@' ? 14 : match === '!' ? 20 : match === 'y' && isDoubled ? 4 : match === 'o' ? 3 : 2,
      minSize = match === 'y' ? size : 1,
      digits = new RegExp('^\\d{' + minSize + ',' + size + '}'),
      num = value.substring(iValue).match(digits);
    if (!num) {
      throw 'Missing number at position ' + iValue;
    }
    iValue += num[0].length;
    return parseInt(num[0], 10);
  };
  let getName = (match, shortNames, longNames) => {
    let index = -1;
    let arr = lookAhead(match) ? longNames : shortNames;
    let names = [];

    for (let i = 0; i < arr.length; i++) {
      names.push([i, arr[i]]);
    }
    names.sort((a, b) => {
      return -(a[1].length - b[1].length);
    });

    for (let i = 0; i < names.length; i++) {
      let name = names[i][1];
      if (value.substr(iValue, name.length).toLowerCase() === name.toLowerCase()) {
        index = names[i][0];
        iValue += name.length;
        break;
      }
    }

    if (index !== -1) {
      return index + 1;
    } else {
      throw 'Unknown name at position ' + iValue;
    }
  };
  let checkLiteral = () => {
    if (value.charAt(iValue) !== format.charAt(iFormat)) {
      throw 'Unexpected literal at position ' + iValue;
    }
    iValue++;
  };

  for (iFormat = 0; iFormat < format.length; iFormat++) {
    if (literal) {
      if (format.charAt(iFormat) === "'" && !lookAhead("'")) {
        literal = false;
      } else {
        checkLiteral();
      }
    } else {
      switch (format.charAt(iFormat)) {
        case 'd':
          day = getNumber('d');
          break;
        case 'D':
          getName('D', i18nDate[locale].weekdaysShort, i18nDate[locale].weekdays);
          break;
        case 'm':
          month = getNumber('m');
          break;
        case 'M':
          month = getName('M', i18nDate[locale].monthsShort, i18nDate[locale].months);
          break;
        case 'y':
          year = getNumber('y', 4);
          break;
        default:
          checkLiteral();
      }
    }
  }

  if (iValue < value.length) {
    extra = value.substr(iValue);
    if (!/^\s+/.test(extra)) {
      throw 'Extra/unparsed characters found in date: ' + extra;
    }
  }

  if (year === -1) {
    year = new Date().getFullYear();
  } else if (year < 100) {
    year += new Date().getFullYear() - (new Date().getFullYear() % 100) + (year <= shortYearCutoff ? 0 : -100);
  }

  if (doy > -1) {
    month = 1;
    day = doy;
    do {
      dim = getDaysCountInMonth(year, month - 1);
      if (day <= dim) {
        break;
      }
      month++;
      day -= dim;
    } while (true);
  }

  date = daylightSavingAdjust(new Date(year, month - 1, day));
  if (date.getFullYear() !== year || date.getMonth() + 1 !== month || date.getDate() !== day) {
    throw 'Invalid date'; // E.g. 31/02/00
  }

  return date;
};

const FORMATTING_TOKENS = /(\[[^\[]*\])|(mm|dd|yyyy|yy|hh|MM|ss|.)/g;

const TWO_NUMERICS_REGEX = /\d\d/; // 00 - 99
const FOUR_NUMERICS_REGEX = /\d{4}/; // 0000 - 9999
const NON_NUMERIC_REGEX = /[^0-9]/g;

const YEAR = 'year';
const MONTH = 'month';
const DAY = 'day';
const HOUR = 'hour';
const MINUTE = 'minute';
const SECOND = 'second';

interface ParseFlagMark {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  second: number;
  date: Date;
}

type ParseFlagCallBackReturn = any;

type ParseFlagRegExp = RegExp | ((locale: any) => RegExp);
type ParseFlagCallBack = (input: string) => ParseFlagCallBackReturn;

interface ParseFlag {
  [key: string]: [ParseFlagRegExp, ParseFlagCallBack];
}

const parseFlags: ParseFlag = {};

const addParseFlag = (token: string | string[], regex: ParseFlagRegExp, callback) => {
  const tokens = Array.isArray(token) ? token : [token];
  let func: ParseFlagCallBack;
  if (typeof callback === 'string') {
    func = (input) => {
      const value = parseInt(input, 10);
      return { [callback]: value };
    };
  } else {
    func = callback;
  }
  tokens.forEach((key) => {
    parseFlags[key] = [regex, func];
  });
};

addParseFlag('yy', TWO_NUMERICS_REGEX, (input) => {
  const year = new Date().getFullYear();
  const cent = Math.floor(year / 100);
  let value = parseInt(input, 10);
  value = (value > 68 ? cent - 1 : cent) * 100 + value;
  return { [YEAR]: value };
});
addParseFlag('yyyy', FOUR_NUMERICS_REGEX, YEAR);
addParseFlag('mm', TWO_NUMERICS_REGEX, (input) => ({ [MONTH]: parseInt(input, 10) - 1 }));
addParseFlag('dd', TWO_NUMERICS_REGEX, DAY);
addParseFlag('hh', TWO_NUMERICS_REGEX, HOUR);
addParseFlag('MM', TWO_NUMERICS_REGEX, MINUTE);
addParseFlag('ss', TWO_NUMERICS_REGEX, SECOND);

type DateArgs = [number, number, number, number, number, number];

const getFullInputArray = (input: Array<number | undefined>, backupDate = new Date()) => {
  const result: DateArgs = [0, 0, 1, 0, 0, 0];
  const backupArr = [
    backupDate.getFullYear(),
    backupDate.getMonth(),
    backupDate.getDate(),
    backupDate.getHours(),
    backupDate.getMinutes(),
    backupDate.getSeconds(),
  ];

  let useBackup = true;
  for (let i = 0; i < 7; i++) {
    if (input[i] === undefined) {
      result[i] = useBackup ? backupArr[i] : result[i];
    } else {
      result[i] = input[i]!;
      useBackup = false;
    }
  }
  return result;
};

const createDate = (year: number, month: number, day: number, hour: number, minute: number, second: number): Date => {
  if (!(year < 100 && year >= 0)) {
    return new Date(year, month, day, hour, minute, second);
  }

  const date = new Date(year + 400, month, day, hour, minute, second);
  if (isFinite(date.getFullYear())) {
    date.setFullYear(year);
  }
  return date;
};

const makeParser = (dateString: string, format: string) => {
  const tokens = format.match(FORMATTING_TOKENS);
  if (!tokens) {
    throw new Error();
  }
  const { length } = tokens;
  let mark: Partial<ParseFlagMark> = {};
  for (let i = 0; i < length; i += 1) {
    const token = tokens[i];
    const parseTo = parseFlags[token];
    if (!parseTo) {
      const word = token.replace(/^\[|\]$/g, '');
      if (dateString.indexOf(word) === 0) {
        dateString = dateString.substr(word.length);
      } else {
        throw new Error('not match');
      }
    } else {
      const regex = parseTo[0] as RegExp;
      const parser = parseTo[1];
      const value = (regex.exec(dateString) || [])[0];
      const obj = parser(value);
      mark = { ...mark, ...obj };
      dateString = dateString.replace(value, '');
    }
  }
  return mark;
};

const getCleanDateString = (dirtyDateString: string, format: string) => {
  if (dirtyDateString.length === format.length) {
    return dirtyDateString;
  }

  const separator = dirtyDateString.match(NON_NUMERIC_REGEX)[0];

  // pad signle digits to follow supported dateformats
  return dirtyDateString
    .split(separator)
    .map((s) => (s.length === 1 ? '0' + s : s))
    .join(separator);
};

const getDateParts: (dirtyDateString: string, format: string) => Partial<ParseFlagMark> = (
  dirtyDateString: string,
  format: string
) => {
  const dateString = getCleanDateString(dirtyDateString, format);

  return makeParser(dateString, format);
};

export const toDate = (dirtyDateString: string | undefined, format: string): Date | undefined => {
  try {
    const { backupDate = new Date() } = {};
    const { year, month, day, hour, minute, second, date } = getDateParts(dirtyDateString, format);
    if (date != null) {
      return date;
    }
    const inputArray = [year, month, day, hour, minute, second];
    const result = getFullInputArray(inputArray, backupDate);
    return createDate(...result);
  } catch (e) {
    return new Date(NaN);
  }
};

export interface PointerDate {
  year: number;
  month: number;
  day: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export interface CalendarGridArgs {
  firstDateOfBox: Date;
  minDate?: Date;
  maxDate?: Date;
  dateFormat: SixDateFormats;
  pointerDate: { month: number; year: number; day: number };
  allowedDates: (date: Date) => boolean;
  locale: 'en' | 'de' | 'fr' | 'it' | 'es';
  selectedDate?: Date;
}

export const createCalendarGrid: (calendarGridArguments: CalendarGridArgs) => CalendarCell[][] = (
  calendarGridArguments: CalendarGridArgs
) => {
  const { firstDateOfBox, allowedDates, dateFormat, selectedDate, minDate, maxDate, pointerDate } =
    calendarGridArguments;

  const weekDatePointer = new Date(firstDateOfBox);
  const dayDatePointer = new Date(firstDateOfBox);

  let calendar: CalendarCell[][] = [];

  do {
    let row: CalendarCell[] = [];
    do {
      row = [
        ...row,
        {
          date: new Date(dayDatePointer),
          display: formatDate(dayDatePointer, dateFormat),
          dateString: formatDate(dayDatePointer, dateFormat),
          label: day(dayDatePointer).toString(),
          isToday: isSameDay(dayDatePointer, now()),
          isSelected: selectedDate && isSameDay(dayDatePointer, selectedDate),
          isDisabled: !allowedDates(dayDatePointer) || !isInRange(dayDatePointer, minDate, maxDate),
          isOutdated: pointerDate.month !== dayDatePointer.getMonth() || !isInRange(dayDatePointer, minDate, maxDate),
        },
      ];
      dayDatePointer.setDate(dayDatePointer.getDate() + 1);
    } while (isSameWeek(dayDatePointer, weekDatePointer));
    calendar = [...calendar, row];
    weekDatePointer.setDate(weekDatePointer.getDate() + 7);
  } while (isSameMonth(new Date(pointerDate.year, pointerDate.month, pointerDate.day), dayDatePointer));
  return calendar;
};

/**
 * Returns a range of numbers around the given number grouped into buckets of 5.
 * @param number the given number around which you want to get the other numbers
 * @param range range of numbers to include in the result
 */
export function rangeAround(number: number, range: number): number[][] {
  const itemsPerGroup = 5;
  return [...Array(range).keys()]
    .map((n) => n + number - Math.floor(range / 2))
    .reduce((curr, item, index) => {
      if (index % itemsPerGroup === 0) {
        curr.push([]);
      }
      curr[curr.length - 1].push(item);
      return curr;
    }, [] as number[][]);
}
