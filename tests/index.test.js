import isObject from '../src/';

describe('isObject', () => {
  test('When empty parameter, return false', () => {
    expect( isObject() ).toBe(false);
  })
});
