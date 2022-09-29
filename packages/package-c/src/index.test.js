const logger = require('./index');

describe('package-c', () => {
  it("shouldn't return any value", () => {
    expect(logger.log('test')).toBe(undefined);
  });

  it('should log provided value', () => {
    const consoleSpy = jest.spyOn(console, 'log');

    logger.log('test');

    expect(consoleSpy).toHaveBeenCalledWith('test');
  });
});
