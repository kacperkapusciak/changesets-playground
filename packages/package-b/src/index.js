'use strict';

const myIsOdd = require('@kacperkapusciak/package-a');

module.exports = function myIsEven(value) {
  // when in development mode, log the value
  if (process.env.NODE_ENV === 'development') {
    const logger = require('@kacperkapusciak/package-c');
    // important fix
    logger.log(value);
  }
  return !myIsOdd(value);
};
