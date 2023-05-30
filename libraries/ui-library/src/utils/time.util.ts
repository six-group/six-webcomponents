export type TimePeriod = 'AM' | 'PM';

export interface Time {
  hours?: number;
  minutes?: number;
  seconds?: number;
  milliseconds?: number;
  has24Hours?: boolean; // true => 24h, false => 12h
  period?: TimePeriod; // only needed for 12-hour clock
}

export type TimeProperties = keyof Time;

export type TimeFormatChar =
  | 'HH' // 24h
  | 'hh' // 12h
  | 'mm' // minutes
  | 'ss' // seconds
  | 'ms' // milliseconds
  | 'aa'; // period (AM/PM)

/*
 * Supported time formats
 */
export type TimeFormat =
  | 'HH:mm:ss'
  | 'hh:mm:ss:aa'
  | 'HH:mm:ss:ms'
  | 'hh:mm:ss:ms:aa'
  | 'HH:mm'
  | 'hh:mm:aa'
  | 'HH'
  | 'hh:aa'
  | 'mm'
  | 'ss'
  | 'ms';

export const getCurrentTimeIn24Hours = (): Time => {
  const now = new Date();
  return {
    hours: now.getHours(),
    minutes: now.getMinutes(),
    seconds: now.getSeconds(),
    milliseconds: now.getMilliseconds(),
    has24Hours: true,
  };
};

const HOURS_IN_12_HOUR_CLOCK_FORMAT = 12;

export const getHoursIn12HourFormat = (hours: number) =>
  hours > HOURS_IN_12_HOUR_CLOCK_FORMAT ? hours - HOURS_IN_12_HOUR_CLOCK_FORMAT : hours;

export const getCurrentTimeIn12Hours = (): Time => {
  const now = new Date();
  const hours = now.getHours();
  return {
    hours: getHoursIn12HourFormat(hours),
    minutes: now.getMinutes(),
    seconds: now.getSeconds(),
    milliseconds: now.getMilliseconds(),
    has24Hours: false,
    period: hours >= HOURS_IN_12_HOUR_CLOCK_FORMAT ? 'PM' : 'AM',
  };
};

export const getCurrentTime = (has24Hours = true): Time => {
  return has24Hours ? getCurrentTimeIn24Hours() : getCurrentTimeIn12Hours();
};

export const isValidTimeString = (timeStr: string, format: TimeFormat) => {
  const timeStringParts = timeStr.split(':');
  const timeFormatParts = format.split(':');
  return timeStringParts.length === timeFormatParts.length;
};

export const parseTimeString = (timeStr: string, format: TimeFormat): Time => {
  const timeParts = timeStr.split(':');
  const formatParts = format.split(':') as TimeFormatChar[];

  if (!isValidTimeString(timeStr, format)) {
    console.error(
      `Timestring did not match expected format.\nExpected format: ${format}\nReceived timestring: ${timeStr}`
    );
  }

  const time: Time = {};

  timeParts.forEach((timeStringPart, i) => {
    const formatStringPart: TimeFormatChar = formatParts[i];
    switch (formatStringPart) {
      case 'HH':
        time.hours = Number(timeStringPart);
        time.has24Hours = true;
        break;
      case 'hh':
        time.hours = Number(timeStringPart);
        time.has24Hours = false;
        break;
      case 'mm':
        time.minutes = Number(timeStringPart);
        break;
      case 'ss':
        time.seconds = Number(timeStringPart);
        break;
      case 'ms':
        time.milliseconds = Number(timeStringPart);
        break;
      case 'aa':
        time.period = timeStringPart.toUpperCase() === 'PM' ? 'PM' : 'AM';
    }
  });
  return time;
};

export const createTimeString = (time: Time | undefined, format: TimeFormat): string => {
  if (time == null) {
    return '';
  }

  const formatParts = format.split(':') as TimeFormatChar[];

  return formatParts
    .map((timeFormatPart) => {
      switch (timeFormatPart) {
        case 'HH':
        case 'hh':
          return String(time.hours).padStart(2, '0');
        case 'mm':
          return String(time.minutes).padStart(2, '0');
        case 'ss':
          return String(time.seconds).padStart(2, '0');
        case 'ms':
          return String(time.milliseconds).padStart(3, '0');
        case 'aa':
          return String(time.period);
      }
    })
    .join(':');
};
