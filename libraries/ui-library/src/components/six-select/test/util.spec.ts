import { convertToValidValue, getValue, isValidValue } from '../util';

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

  describe('convertToValidValue(value, multiple)', () => {
    it.each([
      [null, true, []],
      [[null], true, []],
      [[1, 2], true, []],
      [[], true, []],
      [['abcd', 'efgh'], true, ['abcd', 'efgh']],
      [[{}], true, []],
      [{}, true, []],
      ['abc', true, ['abc']],
      ['', true, []],
      [undefined, true, []],
      [1, false, ''],
      ['', false, ''],
      [{}, false, ''],
      ['abc', false, 'abc'],
      [[], false, ''],
      [null, false, ''],
    ])("value '%s', multiple: '%s' === '%s'", (value, multiple, expected) => {
      expect(convertToValidValue(value, multiple)).toStrictEqual(expected);
    });
  });
});
