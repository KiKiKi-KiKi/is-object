import isObject from '../src/';

describe('isObject', () => {
  test('When empty parameter, return false', () => {
    expect( isObject() ).toBe(false);
  });

  test('When param is undefined, return false', () => {
    expect( isObject(undefined) ).toBe(false);
  });

  test('When param is null, return false', () => {
    expect( isObject(null) ).toBe(false);
  });

  test('When param is NaN, return false', () => {
    expect( isObject(NaN) ).toBe(false);
  });

  test('When param is function, return false', () => {
    expect( isObject( function(){ return true } ) ).toBe(false);
  });

  test('When param is String, return false', () => {
    expect( isObject( 'String' ) ).toBe(false);
  });

  test('When param is Number, return false', () => {
    expect( isObject( 1 ) ).toBe(false);
    expect( isObject( -1 ) ).toBe(false);
  });

  test('When param is Array, return false', () => {
    expect( isObject( [] ) ).toBe(false);
  });

  test('When param is Object, return true', () => {
    expect( isObject( {} ) ).toBe(true);
  });
});
