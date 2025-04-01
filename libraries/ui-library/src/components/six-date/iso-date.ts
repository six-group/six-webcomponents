import * as fns from 'date-fns';

type Year = `${number}${number}${number}${number}`;
type Month = `${number}${number}`;
type Day = `${number}${number}`;

/**
 * Represent an iso date string like `2021-01-08`.
 */
export type IsoDate = `${Year}-${Month}-${Day}`;

export interface PointerDate {
  year: number;
  month: number;
  day: number;
}

/**
 * Validates a date string against a given format and returns an IsoDate if valid.
 *
 * Example format patterns for year, month, and day:
 * - Year: "yyyy" (e.g., "2021")
 * - Month: "MM" (e.g., "01" for January, "12" for December)
 * - Day: "dd" (e.g., "08" for the 8th day of the month)
 *
 * Common format examples:
 * - "yyyy-MM-dd" (e.g., "2021-01-08")
 * - "dd.MM.yyyy" (e.g., "08.01.2021")
 * - "MM/dd/yyyy" (e.g., "01/08/2021")
 *
 * @param dateString - The date string to validate.
 * @param format - The expected format of the date string (e.g., "yyyy-MM-dd").
 * @returns An IsoDate if the date string is valid, otherwise undefined.
 */
export function fromDateString(dateString: string, format: string): IsoDate | undefined {
  const date = fns.parse(dateString, format, new Date());
  return fns.isValid(date) ? fromDate(date) : undefined;
}

/**
 * Formats a given ISO date string into a specified format.
 *
 * Example format patterns for year, month, and day:
 * - Year: "yyyy" (e.g., "2021")
 * - Month: "MM" (e.g., "01" for January, "12" for December)
 * - Day: "dd" (e.g., "08" for the 8th day of the month)
 *
 * Common format examples:
 * - "yyyy-MM-dd" (e.g., "2021-01-08")
 * - "dd.MM.yyyy" (e.g., "08.01.2021")
 * - "MM/dd/yyyy" (e.g., "01/08/2021")
 *
 * @param {IsoDate} isoDate - The ISO date string to be formatted.
 * @param {string} format - The desired date format string.
 * @return {string} A string representing the formatted date.
 */
export function formatDate(isoDate: IsoDate, format: string): string {
  return fns.format(fns.parseISO(isoDate), format);
}

export function fromDate(date: Date): IsoDate {
  return fns.formatISO(date, { representation: 'date' }) as IsoDate;
}

export function today(): IsoDate {
  return fromDate(new Date());
}

export function isValidIsoDate(isoDate: string): isoDate is IsoDate {
  return fns.isValid(fns.parseISO(isoDate));
}

export function getDaysInMonth(year: number, month: number) {
  return fns.getDaysInMonth(new Date(year, month - 1));
}

export function getMonth(isoDate: IsoDate): number {
  return toPointerDate(isoDate).month;
}

export function getYear(isoDate: IsoDate): number {
  return toPointerDate(isoDate).year;
}

export function getDay(isoDate: IsoDate): number {
  return toPointerDate(isoDate).day;
}

export function toPointerDate(isoDate: IsoDate): PointerDate {
  if (!isValidIsoDate(isoDate)) {
    throw new Error(`Invalid ISO date: ${isoDate}`);
  }

  return {
    year: parseInt(isoDate.slice(0, 4), 10),
    month: parseInt(isoDate.slice(5, 7), 10),
    day: parseInt(isoDate.slice(8), 10),
  };
}

export function todayAsPointerDate(): PointerDate {
  const today = new Date();
  return {
    year: today.getFullYear(),
    month: today.getMonth() + 1,
    day: today.getDate(),
  };
}
