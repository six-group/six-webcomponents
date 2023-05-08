/*
 * Returns the current time in the format of your choice
 */
import {
  SixTime,
  SixTimePeriod,
  TIME_FORMAT_CHAR,
  TIME_FORMAT_CHAR_TO_SIX_TIME_PROPERTY_MAP,
} from '../components/six-timepicker/six-timepicker.types';
import { SixTimeFormat } from '../components/six-timepicker/six-time-format';

export const getCurrentTimeIn24Hours = (): SixTime => {
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

export const getCurrentTimeIn12Hours = (): SixTime => {
  const now = new Date();
  const hours = now.getHours();
  return {
    hours: getHoursIn12HourFormat(hours),
    minutes: now.getMinutes(),
    seconds: now.getSeconds(),
    milliseconds: now.getMilliseconds(),
    has24Hours: false,
    period: hours >= HOURS_IN_12_HOUR_CLOCK_FORMAT ? SixTimePeriod.PM : SixTimePeriod.AM,
  };
};

export const getCurrentTime = (has24Hours: boolean = true): SixTime => {
  return has24Hours ? getCurrentTimeIn24Hours() : getCurrentTimeIn12Hours();
};

export const TIME_FORMAT_SEPARATOR = ':';
export const isValidTimeString = (timeStr: string, format: SixTimeFormat) => {
  const timeStringParts = timeStr.split(TIME_FORMAT_SEPARATOR);
  const timeFormatParts = format.split(TIME_FORMAT_SEPARATOR);
  return timeStringParts.length === timeFormatParts.length;
};

export const parseTimeString = (timeStr: string, format: SixTimeFormat): SixTime => {
  const timeStringParts = timeStr.split(TIME_FORMAT_SEPARATOR);
  const timeFormatParts = format.split(TIME_FORMAT_SEPARATOR);

  if (!isValidTimeString(timeStr, format)) {
    console.error(
      `Timestring did not match expected format.\nExpected format: ${format}\nReceived timestring: ${timeStr}`,
    );
  }

  const sixTime: SixTime = {};

  timeStringParts.forEach((timeStringPart, i) => {
    const formatStringPart = timeFormatParts[i];
    const sixTimePropertyName = TIME_FORMAT_CHAR_TO_SIX_TIME_PROPERTY_MAP[formatStringPart];

    if (sixTimePropertyName !== undefined) {
      if (formatStringPart === TIME_FORMAT_CHAR.PERIOD) {
        sixTime.period = timeStringPart.toUpperCase() === SixTimePeriod.PM ? SixTimePeriod.PM : SixTimePeriod.AM;
      } else {
        sixTime[sixTimePropertyName] = Number(timeStringPart);
      }
    }

    if (formatStringPart === TIME_FORMAT_CHAR.HOUR_24) {
      sixTime.has24Hours = true;
    } else if (formatStringPart === TIME_FORMAT_CHAR.HOUR_12) {
      sixTime.has24Hours = false;
    }
  });

  return sixTime;
};

export const createTimeString = (time: SixTime, format: SixTimeFormat) => {
  return format
    .split(TIME_FORMAT_SEPARATOR)
    .map((timeFormatPart) => {
      const sixTimePropertyName = TIME_FORMAT_CHAR_TO_SIX_TIME_PROPERTY_MAP[timeFormatPart];
      const paddingLength = timeFormatPart === TIME_FORMAT_CHAR.MILLISECOND ? 3 : 2;
      return String(time[sixTimePropertyName]).padStart(paddingLength, '0');
    })
    .join(TIME_FORMAT_SEPARATOR);
};
