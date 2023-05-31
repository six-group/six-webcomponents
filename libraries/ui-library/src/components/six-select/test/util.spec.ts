import { getValue, isValidValue } from '../util';

describe('util', () => {
  describe('getValue(multiple)', () => {
    it.each([
      [null, [], []],
      [undefined, [], []],
      [10, [], []],
      [[1, 2, 3], [{ value: '1' }, { value: '2' }], []],
      [{}, [], []],
      [[], [], []],
      ['', [], []],
      ['1', [{ value: '1' }], ['1']],
      [['1'], [{ value: '1' }], ['1']],
      ['1', [{ value: '2' }], []],
      [['1'], [{ value: '2' }], []],
      ['1', [{ value: '1' }, { value: '2' }], ['1']],
      [['1'], [{ value: '1' }, { value: '2' }], ['1']],
    ])("value '%s', items: '%s' == '%s'", (value, menuItems, expected) => {
      expect(getValue(value, true, menuItems)).toStrictEqual(expected);
    });
  });

  describe('getValue(single)', () => {
    it.each([
      [null, [], ''],
      [undefined, [], ''],
      [10, [], ''],
      [{}, [], ''],
      [[], [], ''],
      ['', [], ''],
      ['1', [{ value: '1' }], '1'],
      [['1'], [{ value: '1' }], ''],
      ['1', [{ value: '2' }], ''],
      [['1'], [{ value: '2' }], ''],
      ['1', [{ value: '1' }, { value: '2' }], '1'],
      [['2'], [{ value: '1' }, { value: '2' }], ''],
      [[1, 2], [{ value: '1' }, { value: '2' }], ''],
    ])("value '%s', items: '%s' == '%s'", (value, menuItems, expected) => {
      expect(getValue(value, false, menuItems)).toStrictEqual(expected);
    });
  });

  describe('isValidValue(multiple)', () => {
    it.each([
      [null, [], false],
      [undefined, [], false],
      [10, [], false],
      [{}, [], false],
      ['', [], true],
      [[], [], true],
      ['1', [{ value: '1' }], true],
      [['1'], [{ value: '1' }], true],
      ['1', [{ value: '2' }], false],
      [['1'], [{ value: '2' }], false],
      ['1', [{ value: '1' }, { value: '2' }], true],
      [['1'], [{ value: '1' }, { value: '2' }], true],
      [['1', '3'], [{ value: '1' }, { value: '2' }], false],
    ])("value '%s', items: '%s' == '%s'", (value, menuItems, expected) => {
      expect(isValidValue(value, true, menuItems)).toBe(expected);
    });
  });

  describe('isValidValue(single)', () => {
    it.each([
      [null, [], false],
      [undefined, [], false],
      [10, [], false],
      [{}, [], false],
      ['', [], true],
      [[], [], false],
      ['1', [{ value: '1' }], true],
      [['1'], [{ value: '1' }], false],
      ['1', [{ value: '2' }], false],
      [['1'], [{ value: '2' }], false],
      ['1', [{ value: '1' }, { value: '2' }], true],
      [['2'], [{ value: '1' }, { value: '2' }], false],
      [[1, 2], [{ value: '1' }, { value: '2' }], false],
      [['1', '2'], [{ value: '1' }, { value: '2' }], false],
    ])("value '%s', items: '%s' == '%s'", (value, menuItems, expected) => {
      expect(isValidValue(value, false, menuItems)).toBe(expected);
    });
  });
});
