/*
 * Defines the different time periods for the 12-hour-clock
 */
export enum SixTimePeriod {
  AM = 'AM',
  PM = 'PM',
}

export enum SixTimePropertyName {
  HOURS = 'hours',
  MINUTES = 'minutes',
  SECONDS = 'seconds',
  MILLISECONDS = 'milliseconds',
  HAS_24_HOURS = 'has24Hours',
  PERIOD = 'period',
}

/*
 * Defines a format independent interface for time used internally in the six-timepicker
 */
export interface SixTime {
  [SixTimePropertyName.HOURS]?: number;
  [SixTimePropertyName.MINUTES]?: number;
  [SixTimePropertyName.SECONDS]?: number;
  [SixTimePropertyName.MILLISECONDS]?: number;
  [SixTimePropertyName.HAS_24_HOURS]?: boolean; // true => 24h, false => 12h
  [SixTimePropertyName.PERIOD]?: SixTimePeriod; // only needed for 12-hour clock
}

/*
 * Defines the different time units allowed to use in a timestring
 */
export enum TIME_FORMAT_CHAR {
  HOUR_24 = 'HH',
  HOUR_12 = 'hh',
  MINUTE = 'mm',
  SECOND = 'ss',
  MILLISECOND = 'ms',
  PERIOD = 'aa',
}

/*
 * Defines a mapping from the time format unit characters to the sixTime property name
 */
export const TIME_FORMAT_CHAR_TO_SIX_TIME_PROPERTY_MAP = {
  [TIME_FORMAT_CHAR.HOUR_24]: 'hours',
  [TIME_FORMAT_CHAR.HOUR_12]: 'hours',
  [TIME_FORMAT_CHAR.MINUTE]: 'minutes',
  [TIME_FORMAT_CHAR.SECOND]: 'seconds',
  [TIME_FORMAT_CHAR.MILLISECOND]: 'milliseconds',
  [TIME_FORMAT_CHAR.PERIOD]: 'period',
};
