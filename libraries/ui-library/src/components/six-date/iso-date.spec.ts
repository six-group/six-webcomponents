import {
  cleanupValue,
  fromFormattedString,
  getMonth,
  IsoDate,
  isValidIsoDate,
  today,
  todayAsPointerDate,
  toPointerDate,
} from './iso-date';

/**
 * Testing suite for iso-date utility functions that handle ISO 8601 date format (YYYY-MM-DD).
 */
describe('iso-date', () => {
  describe('cleanupValue', () => {
    test.each([
      {
        input: 12345,
        expected: {
          value: '',
          pointerDate: todayAsPointerDate(),
          warning: `The specified value '12345' does not conform to the required format, "yyyy-MM-dd".`,
        },
      },
      {
        input: null,
        expected: {
          value: '',
          pointerDate: todayAsPointerDate(),
          warning: `The specified value 'null' does not conform to the required format, "yyyy-MM-dd".`,
        },
      },
      {
        input: undefined,
        expected: {
          value: '',
          pointerDate: todayAsPointerDate(),
          warning: `The specified value 'undefined' does not conform to the required format, "yyyy-MM-dd".`,
        },
      },
      {
        input: {},
        expected: {
          value: '',
          pointerDate: todayAsPointerDate(),
          warning: `The specified value '[object Object]' does not conform to the required format, "yyyy-MM-dd".`,
        },
      },
      {
        input: '2022-01-01',
        expected: { value: '2022-01-01', pointerDate: toPointerDate('2022-01-01') },
      },
      {
        input: 'invalid-date',
        expected: {
          value: '',
          pointerDate: todayAsPointerDate(),
          warning: `The specified value 'invalid-date' does not conform to the required format, "yyyy-MM-dd".`,
        },
      },
      {
        input: '',
        expected: { value: '', pointerDate: todayAsPointerDate() },
      },
      {
        input: ' ',
        expected: {
          value: '',
          pointerDate: todayAsPointerDate(),
          warning: `The specified value ' ' does not conform to the required format, "yyyy-MM-dd".`,
        },
      },
    ])('validates cleanupValue for input $input', ({ input, expected }) => {
      expect(cleanupValue(input)).toEqual(expected);
    });
  });
  /**
   * Tests date-related functions with mocked system time to ensure consistent results.
   * Uses a fixed timezone (UTC+02:00) to validate that date operations work correctly
   * across different timezones. The mock date is set to 2022-01-01T01:00:00+02:00.
   *
   * Note: We can't simply use new Date().toISOString().substring(0,10) because:
   * 1. toISOString() always converts to UTC time first, which can give the wrong date
   *    in edge cases near midnight due to timezone differences
   * 2. We need a local date based on the user's timezone, not UTC
   */
  describe('tests with faked timers', () => {
    beforeAll(() => {
      jest.useFakeTimers();
      jest.setSystemTime(new Date('2022-01-01T01:00:00+02:00'));
    });
    afterAll(() => jest.useRealTimers());

    test('todayAsPointerDate', () => {
      expect(todayAsPointerDate()).toEqual({ year: 2022, month: 1, day: 1 });
    });

    test('today', () => {
      expect(today()).toBe('2022-01-01');
    });

    test('verifies test environment timezone is in UTC+1 or UTC+2 range', () => {
      const offset = new Date().getTimezoneOffset();
      // -60 represents UTC+1, -120 represents UTC+2
      expect([-60, -120]).toContain(offset);
    });

    test('demonstrates why using toISOString() is incorrect', () => {
      expect(new Date().toISOString().substring(0, 10)).toBe('2021-12-31');
    });
  });

  describe('isValidIsoDate', () => {
    const isoDateCases = [
      { input: '2022-01-01', expected: true }, // Valid ISO date
      { input: '2020-02-29', expected: true }, // Valid leap year ISO date
      { input: '2022-02-30', expected: false }, // Invalid day in February
      { input: 'invalid-date', expected: false }, // Invalid string
      { input: '', expected: false }, // Empty string
      { input: '2022-13-01', expected: false }, // Invalid month
      { input: '2022-00-01', expected: false }, // Invalid month 0
      { input: '2022-01-32', expected: false }, // Invalid day
      { input: '2022-1-1', expected: false }, // Invalid format
    ];

    test.each(isoDateCases)('validates ISO date string `$input`, expects `$expected`', ({ input, expected }) => {
      expect(isValidIsoDate(input)).toBe(expected);
    });
  });

  describe('fromFormattedString', () => {
    const dateCases = [
      { input: '1.1.2022', format: 'd.M.yyyy', expected: '2022-01-01' }, // Valid
      { input: '2022-01-01', format: 'yyyy-MM-dd', expected: '2022-01-01' }, // Valid
      { input: '29.02.2020', format: 'dd.MM.yyyy', expected: '2020-02-29' }, // Valid leap year
      { input: '2.2.2', format: 'dd.MM.yyyy', expected: '0002-02-02' }, // pattern not fulfilled
      { input: 'invalid-date', format: 'yyyy-MM-dd', expected: undefined }, // Invalid string
      { input: '31.02.2022', format: 'dd.MM.yyyy', expected: undefined }, // Invalid date
      { input: '', format: 'yyyy-MM-dd', expected: undefined }, // Empty string
      { input: '2022-01-01', format: '', expected: undefined }, // Missing format
    ];

    test.each(dateCases)(
      'parses date string `$input` with format `$format`, expects `$expected`',
      ({ input, format, expected }) => {
        expect(fromFormattedString(input, format)).toBe(expected);
      }
    );
  });

  describe('getMonth', () => {
    const monthCases: { input: IsoDate; expected: number }[] = [
      { input: '2023-01-15', expected: 1 },
      { input: '2023-02-15', expected: 2 },
      { input: '2023-03-15', expected: 3 },
      { input: '2023-04-15', expected: 4 },
      { input: '2023-05-15', expected: 5 },
      { input: '2023-06-15', expected: 6 },
      { input: '2023-07-15', expected: 7 },
      { input: '2023-08-15', expected: 8 },
      { input: '2023-09-15', expected: 9 },
      { input: '2023-10-15', expected: 10 },
      { input: '2023-11-15', expected: 11 },
      { input: '2023-12-15', expected: 12 },
    ];
    test.each(monthCases)('extracts month $expected from $input', ({ input, expected }) => {
      expect(getMonth(input)).toBe(expected);
    });

    test('throws error for invalid date 2024-02-31', () => {
      expect(() => getMonth('2024-02-31')).toThrow('Invalid ISO date');
    });
  });
});
