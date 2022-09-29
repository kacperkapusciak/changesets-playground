const myIsEven = require('./index');

describe('package-b', () => {
  it('should return true for even numbers', () => {
    expect(myIsEven(2)).toBe(true);
    expect(myIsEven(4)).toBe(true);
    expect(myIsEven(6)).toBe(true);
  });

  it('should return false for odd numbers', () => {
    expect(myIsEven(1)).toBe(false);
    expect(myIsEven(3)).toBe(false);
    expect(myIsEven(5)).toBe(false);
  });
});
