import isObject from '../src';

describe('isObject', () => {
  test('When empty parameter, return false', () => {
    expect(isObject()).toBe(false);
  });

  test('When param is undefined, return false', () => {
    expect(isObject(undefined)).toBe(false);
  });

  test('When param is null, return false', () => {
    expect(isObject(null)).toBe(false);
  });

  test('When param is NaN, return false', () => {
    expect(isObject(NaN)).toBe(false);
  });

  test('When param is Boolean, return false', () => {
    expect(isObject(true)).toBe(false);
    expect(isObject(false)).toBe(false);
  });

  test('When param is function, return false', () => {
    expect(
      isObject(function () {
        return true;
      }),
    ).toBe(false);
  });

  test('When param is String, return false', () => {
    expect(isObject('String')).toBe(false);
    expect(isObject(new String('String'))).toBe(false);
  });

  test('When param is Number, return false', () => {
    expect(isObject(1)).toBe(false);
    expect(isObject(-1)).toBe(false);
  });

  test('When param is Array, return false', () => {
    expect(isObject([])).toBe(false);
    expect(isObject(new Array())).toBe(false);
  });

  test('When param is Object, return true', () => {
    expect(isObject({})).toBe(true);
    expect(isObject(new Object())).toBe(true);
  });

  test('When param is Date, return true', () => {
    // typeof(date) => "object"
    // date.constructor.name => "Date"
    const date = new Date();
    expect(isObject(date)).toBe(false);
  });

  test('When param is RegExp Object, return true', () => {
    // typeof(class) => "object"
    // class.constructor.name => "RegExp"
    const regex1 = /\w+/;
    expect(isObject(regex1)).toBe(false);

    const regex2 = new RegExp('\\w+');
    expect(isObject(regex2)).toBe(false);
  });

  test('When param is Symbol, return false', () => {
    // typeof(symbol) => "symbol"
    const symbol1 = Symbol();
    expect(isObject(symbol1)).toBe(false);

    const symbol2 = Symbol({} as string);
    expect(isObject(symbol2)).toBe(false);
  });

  test('When param is Class, return false', () => {
    // typeof(class) => "object"
    // class.constructor.name => "Class Name"
    class MyClass {
      constructor() {}
    }
    const classObj = new MyClass();
    expect(isObject(classObj)).toBe(false);
  });
});
