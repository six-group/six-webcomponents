import {
  createTimeString,
  getCurrentTime,
  getCurrentTimeIn12Hours,
  getCurrentTimeIn24Hours,
  getHoursIn12HourFormat,
  parseTimeString,
  Time,
} from './time.util';

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
      // when
      const hoursIn12HourClock = getHoursIn12HourFormat(14);

      // then
      expect(hoursIn12HourClock).toEqual(2);
    });

    it('should correctly return hour equal to 12', async () => {
      // when
      const hoursIn12HourClock = getHoursIn12HourFormat(12);

      // then
      expect(hoursIn12HourClock).toEqual(12);
    });
  });

  describe('getCurrentTimeIn12Hours', () => {
    it('should correctly return current time', async () => {
      // when
      const linuxTime = convertToLinuxTime(getCurrentTimeIn12Hours());
      const timeNow = new Date().getTime();

      // then
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
      // when
      const sixTime = parseTimeString('13:32:35', 'HH:mm:ss');

      // then
      expect(sixTime.hours).toEqual(13);
      expect(sixTime.minutes).toEqual(32);
      expect(sixTime.seconds).toEqual(35);
      expect(sixTime.milliseconds).toEqual(undefined);
      expect(sixTime.has24Hours).toEqual(true);
      expect(sixTime.period).toEqual(undefined);
    });

    it('should correctly parse hh:mm:ss:aa', () => {
      // when
      const sixTime = parseTimeString('05:12:23:am', 'hh:mm:ss:aa');

      // then
      expect(sixTime.hours).toEqual(5);
      expect(sixTime.minutes).toEqual(12);
      expect(sixTime.seconds).toEqual(23);
      expect(sixTime.milliseconds).toEqual(undefined);
      expect(sixTime.has24Hours).toEqual(false);
      expect(sixTime.period).toEqual('AM');
    });

    it('should correctly parse HH:mm:ss:ms', () => {
      // when
      const sixTime = parseTimeString('02:12:43:832', 'HH:mm:ss:ms');

      // then
      expect(sixTime.hours).toEqual(2);
      expect(sixTime.minutes).toEqual(12);
      expect(sixTime.seconds).toEqual(43);
      expect(sixTime.milliseconds).toEqual(832);
      expect(sixTime.has24Hours).toEqual(true);
      expect(sixTime.period).toEqual(undefined);
    });

    it('should correctly parse hh:mm:ss:ms:aa', () => {
      // when
      const sixTime = parseTimeString('11:59:58:999:pm', 'hh:mm:ss:ms:aa');

      // then
      expect(sixTime.hours).toEqual(11);
      expect(sixTime.minutes).toEqual(59);
      expect(sixTime.seconds).toEqual(58);
      expect(sixTime.milliseconds).toEqual(999);
      expect(sixTime.has24Hours).toEqual(false);
      expect(sixTime.period).toEqual('PM');
    });

    it('should correctly parse HH:mm', () => {
      // when
      const sixTime = parseTimeString('14:13', 'HH:mm');

      // then
      expect(sixTime.hours).toEqual(14);
      expect(sixTime.minutes).toEqual(13);
      expect(sixTime.seconds).toEqual(undefined);
      expect(sixTime.milliseconds).toEqual(undefined);
      expect(sixTime.has24Hours).toEqual(true);
      expect(sixTime.period).toEqual(undefined);
    });

    it('should correctly parse hh:mm:aa', () => {
      // when
      const sixTime = parseTimeString('12:01:am', 'hh:mm:aa');

      // then
      expect(sixTime.hours).toEqual(12);
      expect(sixTime.minutes).toEqual(1);
      expect(sixTime.seconds).toEqual(undefined);
      expect(sixTime.milliseconds).toEqual(undefined);
      expect(sixTime.has24Hours).toEqual(false);
      expect(sixTime.period).toEqual('AM');
    });

    it('should correctly parse hh:mm:aa when using only single digit', () => {
      // when
      const sixTime = parseTimeString('5:8:3:7:pm', 'hh:mm:ss:ms:aa');

      // then
      expect(sixTime.hours).toEqual(5);
      expect(sixTime.minutes).toEqual(8);
      expect(sixTime.seconds).toEqual(3);
      expect(sixTime.milliseconds).toEqual(7);
      expect(sixTime.has24Hours).toEqual(false);
      expect(sixTime.period).toEqual('PM');
    });

    it('should correctly parse HH', () => {
      // when
      const sixTime = parseTimeString('16', 'HH');

      // then
      expect(sixTime.hours).toEqual(16);
      expect(sixTime.minutes).toEqual(undefined);
      expect(sixTime.seconds).toEqual(undefined);
      expect(sixTime.milliseconds).toEqual(undefined);
      expect(sixTime.has24Hours).toEqual(true);
      expect(sixTime.period).toEqual(undefined);
    });

    it('should correctly parse hh:aa', () => {
      // when
      const sixTime = parseTimeString('10:am', 'hh:aa');

      // then
      expect(sixTime.hours).toEqual(10);
      expect(sixTime.minutes).toEqual(undefined);
      expect(sixTime.seconds).toEqual(undefined);
      expect(sixTime.milliseconds).toEqual(undefined);
      expect(sixTime.has24Hours).toEqual(false);
      expect(sixTime.period).toEqual('AM');
    });

    it('should correctly parse mm', () => {
      // when
      const sixTime = parseTimeString('22', 'mm');

      // then
      expect(sixTime.hours).toEqual(undefined);
      expect(sixTime.minutes).toEqual(22);
      expect(sixTime.seconds).toEqual(undefined);
      expect(sixTime.milliseconds).toEqual(undefined);
      expect(sixTime.has24Hours).toEqual(undefined);
      expect(sixTime.period).toEqual(undefined);
    });

    it('should correctly parse ss', () => {
      // when
      const sixTime = parseTimeString('59', 'ss');

      // then
      expect(sixTime.hours).toEqual(undefined);
      expect(sixTime.minutes).toEqual(undefined);
      expect(sixTime.seconds).toEqual(59);
      expect(sixTime.milliseconds).toEqual(undefined);
      expect(sixTime.has24Hours).toEqual(undefined);
      expect(sixTime.period).toEqual(undefined);
    });

    it('should correctly parse ms', () => {
      // when
      const sixTime = parseTimeString('647', 'ms');

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
      // when
      const timeString = createTimeString(
        {
          hours: 21,
          minutes: 33,
          seconds: 15,
          milliseconds: 238,
          has24Hours: true,
        },
        'HH:mm:ss'
      );

      // then
      expect(timeString).toEqual('21:33:15');
    });

    it('should correctly format hh:mm:ss:aa', async () => {
      // when
      const timeString = createTimeString(
        {
          hours: 11,
          minutes: 59,
          seconds: 15,
          milliseconds: 281,
          has24Hours: false,
          period: 'AM',
        },
        'hh:mm:ss:aa'
      );

      // then
      expect(timeString).toEqual('11:59:15:AM');
    });

    it('should correctly format HH:mm:ss:ms', () => {
      // when
      const timeString = createTimeString(
        {
          hours: 11,
          minutes: 59,
          seconds: 15,
          milliseconds: 281,
          has24Hours: true,
        },
        'HH:mm:ss:ms'
      );

      // then
      expect(timeString).toEqual('11:59:15:281');
    });

    it('should correctly format hh:mm:ss:ms:aa', () => {
      // when
      const timeString = createTimeString(
        {
          hours: 11,
          minutes: 59,
          seconds: 15,
          milliseconds: 281,
          has24Hours: false,
          period: 'PM',
        },
        'hh:mm:ss:ms:aa'
      );

      // then
      expect(timeString).toEqual('11:59:15:281:PM');
    });

    it('should correctly format HH:mm', () => {
      // when
      const timeString = createTimeString(
        {
          hours: 11,
          minutes: 59,
          seconds: 15,
          milliseconds: 281,
          has24Hours: true,
        },
        'HH:mm'
      );

      // then
      expect(timeString).toEqual('11:59');
    });

    it('should correctly format hh:mm:aa', () => {
      // when
      const timeString = createTimeString(
        {
          hours: 11,
          minutes: 59,
          seconds: 15,
          milliseconds: 281,
          has24Hours: false,
          period: 'AM',
        },
        'hh:mm:aa'
      );

      // then
      expect(timeString).toEqual('11:59:AM');
    });

    it('should correctly format HH', () => {
      // when
      const timeString = createTimeString(
        {
          hours: 14,
          minutes: 32,
          seconds: 15,
          milliseconds: 281,
          has24Hours: true,
        },
        'HH'
      );

      // then
      expect(timeString).toEqual('14');
    });

    it('should correctly format hh:aa', () => {
      // when
      const timeString = createTimeString(
        {
          hours: 8,
          minutes: 59,
          seconds: 15,
          milliseconds: 281,
          has24Hours: false,
          period: 'PM',
        },
        'hh:aa'
      );

      // then
      expect(timeString).toEqual('08:PM');
    });

    it('should correctly format mm', () => {
      // when
      const timeString = createTimeString(
        {
          hours: 11,
          minutes: 2,
          seconds: 15,
          milliseconds: 281,
          has24Hours: false,
          period: 'AM',
        },
        'mm'
      );

      // then
      expect(timeString).toEqual('02');
    });

    it('should correctly format ss', () => {
      // when
      const timeString = createTimeString(
        {
          hours: 11,
          minutes: 59,
          seconds: 7,
          milliseconds: 281,
          has24Hours: false,
          period: 'AM',
        },
        'ss'
      );

      // then
      expect(timeString).toEqual('07');
    });

    it('should correctly format ms', () => {
      // when
      const timeString = createTimeString(
        {
          hours: 11,
          minutes: 59,
          seconds: 15,
          milliseconds: 6,
          has24Hours: false,
          period: 'AM',
        },
        'ms'
      );

      // then
      expect(timeString).toEqual('006');
    });
  });
});

function convertToLinuxTime(time: Time) {
  const date = new Date();

  const hours = time.hours ?? 0;
  if (time.has24Hours) {
    date.setHours(hours ?? 0);
  } else {
    if (time.period === 'AM') {
      if (hours === 12) {
        date.setHours(0);
      } else {
        date.setHours(hours);
      }
    } else {
      if (hours === 12) {
        date.setHours(hours);
      } else {
        date.setHours(hours + 12);
      }
    }
  }

  date.setMinutes(time.minutes ?? 0);
  date.setSeconds(time.seconds ?? 0);
  date.setMilliseconds(time.milliseconds ?? 0);
  return date.getTime();
}
