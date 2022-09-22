const myIsOdd = require('./index');

describe('package-a', () => {
  it('should return true for odd numbers', () => {
    expect(myIsOdd(1)).toBe(true);
    expect(myIsOdd(3)).toBe(true);
    expect(myIsOdd(5)).toBe(true);
  });

  it('should return false for even numbers', () => {
    expect(myIsOdd(2)).toBe(false);
    expect(myIsOdd(4)).toBe(false);
    expect(myIsOdd(6)).toBe(false);
  });
})