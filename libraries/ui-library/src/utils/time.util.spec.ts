import { SixTime, SixTimePeriod } from '../components/six-timepicker/six-timepicker.types';
import {
  createTimeString,
  getCurrentTime,
  getCurrentTimeIn12Hours,
  getCurrentTimeIn24Hours,
  getHoursIn12HourFormat,
  parseTimeString,
} from './time.util';
import { SixTimeFormat } from '../components/six-timepicker/six-time-format';

const convertToLinuxTime = (sixTime: SixTime) => {
  const date = new Date();
  if (sixTime.has24Hours) {
    date.setHours(sixTime.hours);
  } else {
    if (sixTime.period === SixTimePeriod.AM) {
      if (sixTime.hours === 12) {
        date.setHours(0);
      } else {
        date.setHours(sixTime.hours);
      }
    } else {
      if (sixTime.hours === 12) {
        date.setHours(sixTime.hours);
      } else {
        date.setHours(sixTime.hours + 12);
      }
    }
  }

  date.setMinutes(sixTime.minutes);
  date.setSeconds(sixTime.seconds);
  date.setMilliseconds(sixTime.milliseconds);

  return date.getTime();
};

describe('Time Util', () => {
  describe('getHoursIn12HourFormat', () => {
    it('should correctly return hour smaller than 12', async () => {
      // given
      const hours = 5;

      // when
      const hoursIn12HourClock = getHoursIn12HourFormat(hours);

      // then
      expect(hoursIn12HourClock).toEqual(5);
    });

    it('should correctly return hour greater than 12', async () => {
      // given
      const hours = 14;

      // when
      const hoursIn12HourClock = getHoursIn12HourFormat(hours);

      // then
      expect(hoursIn12HourClock).toEqual(2);
    });

    it('should correctly return hour equal to 12', async () => {
      // given
      const hours = 12;

      // when
      const hoursIn12HourClock = getHoursIn12HourFormat(hours);

      // then
      expect(hoursIn12HourClock).toEqual(12);
    });
  });

  describe('getCurrentTimeIn12Hours', () => {
    it('should correctly return current time', async () => {
      // when
      const currentTimeIn12Hours = getCurrentTimeIn12Hours();

      // then
      const linuxTime = convertToLinuxTime(currentTimeIn12Hours);
      const timeNow = new Date().getTime();
      expect(timeNow - linuxTime).toBeLessThan(3000);
    });
  });

  describe('getCurrentTimeIn24Hours', () => {
    it('should correctly return current time', async () => {
      // when
      const currentTimeIn12Hours = getCurrentTimeIn24Hours();

      // then
      const linuxTime = convertToLinuxTime(currentTimeIn12Hours);
      const timeNow = new Date().getTime();
      expect(timeNow - linuxTime).toBeLessThan(3000);
    });
  });

  describe('getCurrentTime', () => {
    it('should correctly return current time for 24-hour-clock', async () => {
      // when
      const currentTime = getCurrentTime(true);

      // then
      const linuxTime = convertToLinuxTime(currentTime);
      const timeNow = new Date().getTime();
      expect(timeNow - linuxTime).toBeLessThan(3000);
    });

    it('should correctly return current time for 12-hour-clock', async () => {
      // when
      const currentTime = getCurrentTime(false);

      // then
      const linuxTime = convertToLinuxTime(currentTime);
      const timeNow = new Date().getTime();
      expect(timeNow - linuxTime).toBeLessThan(3000);
    });
  });

  describe('parseTimeString', () => {
    it('should correctly parse HH:mm:ss', async () => {
      // given
      const format = 'HH:mm:ss' as SixTimeFormat;
      const timeString = '13:32:35';

      // when
      const sixTime = parseTimeString(timeString, format);

      // then
      expect(sixTime.hours).toEqual(13);
      expect(sixTime.minutes).toEqual(32);
      expect(sixTime.seconds).toEqual(35);
      expect(sixTime.milliseconds).toEqual(undefined);
      expect(sixTime.has24Hours).toEqual(true);
      expect(sixTime.period).toEqual(undefined);
    });

    it('should correctly parse hh:mm:ss:aa', () => {
      // given
      const format = 'hh:mm:ss:aa' as SixTimeFormat;
      const timeString = '05:12:23:am';

      // when
      const sixTime = parseTimeString(timeString, format);

      // then
      expect(sixTime.hours).toEqual(5);
      expect(sixTime.minutes).toEqual(12);
      expect(sixTime.seconds).toEqual(23);
      expect(sixTime.milliseconds).toEqual(undefined);
      expect(sixTime.has24Hours).toEqual(false);
      expect(sixTime.period).toEqual(SixTimePeriod.AM);
    });

    it('should correctly parse HH:mm:ss:ms', () => {
      // given
      const format = 'HH:mm:ss:ms' as SixTimeFormat;
      const timeString = '02:12:43:832';

      // when
      const sixTime = parseTimeString(timeString, format);

      // then
      expect(sixTime.hours).toEqual(2);
      expect(sixTime.minutes).toEqual(12);
      expect(sixTime.seconds).toEqual(43);
      expect(sixTime.milliseconds).toEqual(832);
      expect(sixTime.has24Hours).toEqual(true);
      expect(sixTime.period).toEqual(undefined);
    });

    it('should correctly parse hh:mm:ss:ms:aa', () => {
      // given
      const format = 'hh:mm:ss:ms:aa' as SixTimeFormat;
      const timeString = '11:59:58:999:pm';

      // when
      const sixTime = parseTimeString(timeString, format);

      // then
      expect(sixTime.hours).toEqual(11);
      expect(sixTime.minutes).toEqual(59);
      expect(sixTime.seconds).toEqual(58);
      expect(sixTime.milliseconds).toEqual(999);
      expect(sixTime.has24Hours).toEqual(false);
      expect(sixTime.period).toEqual(SixTimePeriod.PM);
    });

    it('should correctly parse HH:mm', () => {
      // given
      const format = 'HH:mm' as SixTimeFormat;
      const timeString = '14:13';

      // when
      const sixTime = parseTimeString(timeString, format);

      // then
      expect(sixTime.hours).toEqual(14);
      expect(sixTime.minutes).toEqual(13);
      expect(sixTime.seconds).toEqual(undefined);
      expect(sixTime.milliseconds).toEqual(undefined);
      expect(sixTime.has24Hours).toEqual(true);
      expect(sixTime.period).toEqual(undefined);
    });

    it('should correctly parse hh:mm:aa', () => {
      // given
      const format = 'hh:mm:aa' as SixTimeFormat;
      const timeString = '12:01:am';

      // when
      const sixTime = parseTimeString(timeString, format);

      // then
      expect(sixTime.hours).toEqual(12);
      expect(sixTime.minutes).toEqual(1);
      expect(sixTime.seconds).toEqual(undefined);
      expect(sixTime.milliseconds).toEqual(undefined);
      expect(sixTime.has24Hours).toEqual(false);
      expect(sixTime.period).toEqual(SixTimePeriod.AM);
    });

    it('should correctly parse hh:mm:aa when using only single digit', () => {
      // given
      const format = 'hh:mm:ss:ms:aa' as SixTimeFormat;
      const timeString = '5:8:3:7:pm';

      // when
      const sixTime = parseTimeString(timeString, format);

      // then
      expect(sixTime.hours).toEqual(5);
      expect(sixTime.minutes).toEqual(8);
      expect(sixTime.seconds).toEqual(3);
      expect(sixTime.milliseconds).toEqual(7);
      expect(sixTime.has24Hours).toEqual(false);
      expect(sixTime.period).toEqual(SixTimePeriod.PM);
    });

    it('should correctly parse HH', () => {
      // given
      const format = 'HH' as SixTimeFormat;
      const timeString = '16';

      // when
      const sixTime = parseTimeString(timeString, format);

      // then
      expect(sixTime.hours).toEqual(16);
      expect(sixTime.minutes).toEqual(undefined);
      expect(sixTime.seconds).toEqual(undefined);
      expect(sixTime.milliseconds).toEqual(undefined);
      expect(sixTime.has24Hours).toEqual(true);
      expect(sixTime.period).toEqual(undefined);
    });

    it('should correctly parse hh:aa', () => {
      // given
      const format = 'hh:aa' as SixTimeFormat;
      const timeString = '10:am';

      // when
      const sixTime = parseTimeString(timeString, format);

      // then
      expect(sixTime.hours).toEqual(10);
      expect(sixTime.minutes).toEqual(undefined);
      expect(sixTime.seconds).toEqual(undefined);
      expect(sixTime.milliseconds).toEqual(undefined);
      expect(sixTime.has24Hours).toEqual(false);
      expect(sixTime.period).toEqual(SixTimePeriod.AM);
    });

    it('should correctly parse mm', () => {
      // given
      const format = 'mm' as SixTimeFormat;
      const timeString = '22';

      // when
      const sixTime = parseTimeString(timeString, format);

      // then
      expect(sixTime.hours).toEqual(undefined);
      expect(sixTime.minutes).toEqual(22);
      expect(sixTime.seconds).toEqual(undefined);
      expect(sixTime.milliseconds).toEqual(undefined);
      expect(sixTime.has24Hours).toEqual(undefined);
      expect(sixTime.period).toEqual(undefined);
    });

    it('should correctly parse ss', () => {
      // given
      const format = 'ss' as SixTimeFormat;
      const timeString = '59';

      // when
      const sixTime = parseTimeString(timeString, format);

      // then
      expect(sixTime.hours).toEqual(undefined);
      expect(sixTime.minutes).toEqual(undefined);
      expect(sixTime.seconds).toEqual(59);
      expect(sixTime.milliseconds).toEqual(undefined);
      expect(sixTime.has24Hours).toEqual(undefined);
      expect(sixTime.period).toEqual(undefined);
    });

    it('should correctly parse ms', () => {
      // given
      const format = 'ms' as SixTimeFormat;
      const timeString = '647';

      // when
      const sixTime = parseTimeString(timeString, format);

      // then
      expect(sixTime.hours).toEqual(undefined);
      expect(sixTime.minutes).toEqual(undefined);
      expect(sixTime.seconds).toEqual(undefined);
      expect(sixTime.milliseconds).toEqual(647);
      expect(sixTime.has24Hours).toEqual(undefined);
      expect(sixTime.period).toEqual(undefined);
    });
  });

  describe('createTimeString', () => {
    it('should correctly format HH:mm:ss', async () => {
      // given
      const time: SixTime = {
        hours: 21,
        minutes: 33,
        seconds: 15,
        milliseconds: 238,
        has24Hours: true,
      };

      const format = SixTimeFormat.HHmmss;

      // when
      const timeString = createTimeString(time, format);

      // then
      expect(timeString).toEqual('21:33:15');
    });

    it('should correctly format hh:mm:ss:aa', async () => {
      // given
      const time: SixTime = {
        hours: 11,
        minutes: 59,
        seconds: 15,
        milliseconds: 281,
        has24Hours: false,
        period: SixTimePeriod.AM,
      };

      const format = SixTimeFormat.hhmmssaa;

      // when
      const timeString = createTimeString(time, format);

      // then
      expect(timeString).toEqual('11:59:15:AM');
    });

    it('should correctly format HH:mm:ss:ms', () => {
      const time: SixTime = {
        hours: 11,
        minutes: 59,
        seconds: 15,
        milliseconds: 281,
        has24Hours: true,
      };

      const format = SixTimeFormat.HHmmssms;

      // when
      const timeString = createTimeString(time, format);

      // then
      expect(timeString).toEqual('11:59:15:281');
    });

    it('should correctly format hh:mm:ss:ms:aa', () => {
      const time: SixTime = {
        hours: 11,
        minutes: 59,
        seconds: 15,
        milliseconds: 281,
        has24Hours: false,
        period: SixTimePeriod.PM,
      };

      const format = SixTimeFormat.hhmmssmsaa;

      // when
      const timeString = createTimeString(time, format);

      // then
      expect(timeString).toEqual('11:59:15:281:PM');
    });

    it('should correctly format HH:mm', () => {
      const time: SixTime = {
        hours: 11,
        minutes: 59,
        seconds: 15,
        milliseconds: 281,
        has24Hours: true,
      };

      const format = SixTimeFormat.HHmm;

      // when
      const timeString = createTimeString(time, format);

      // then
      expect(timeString).toEqual('11:59');
    });

    it('should correctly format hh:mm:aa', () => {
      const time: SixTime = {
        hours: 11,
        minutes: 59,
        seconds: 15,
        milliseconds: 281,
        has24Hours: false,
        period: SixTimePeriod.AM,
      };

      const format = SixTimeFormat.hhmmaa;

      // when
      const timeString = createTimeString(time, format);

      // then
      expect(timeString).toEqual('11:59:AM');
    });

    it('should correctly format HH', () => {
      const time: SixTime = {
        hours: 14,
        minutes: 32,
        seconds: 15,
        milliseconds: 281,
        has24Hours: true,
      };

      const format = SixTimeFormat.HH;

      // when
      const timeString = createTimeString(time, format);

      // then
      expect(timeString).toEqual('14');
    });

    it('should correctly format hh:aa', () => {
      const time: SixTime = {
        hours: 8,
        minutes: 59,
        seconds: 15,
        milliseconds: 281,
        has24Hours: false,
        period: SixTimePeriod.PM,
      };

      const format = SixTimeFormat.hhaa;

      // when
      const timeString = createTimeString(time, format);

      // then
      expect(timeString).toEqual('08:PM');
    });

    it('should correctly format mm', () => {
      const time: SixTime = {
        hours: 11,
        minutes: 2,
        seconds: 15,
        milliseconds: 281,
        has24Hours: false,
        period: SixTimePeriod.AM,
      };

      const format = SixTimeFormat.mm;

      // when
      const timeString = createTimeString(time, format);

      // then
      expect(timeString).toEqual('02');
    });

    it('should correctly format ss', () => {
      const time: SixTime = {
        hours: 11,
        minutes: 59,
        seconds: 7,
        milliseconds: 281,
        has24Hours: false,
        period: SixTimePeriod.AM,
      };

      const format = SixTimeFormat.ss;

      // when
      const timeString = createTimeString(time, format);

      // then
      expect(timeString).toEqual('07');
    });

    it('should correctly format ms', () => {
      const time: SixTime = {
        hours: 11,
        minutes: 59,
        seconds: 15,
        milliseconds: 6,
        has24Hours: false,
        period: SixTimePeriod.AM,
      };

      const format = SixTimeFormat.ms;

      // when
      const timeString = createTimeString(time, format);

      // then
      expect(timeString).toEqual('006');
    });
  });
});
