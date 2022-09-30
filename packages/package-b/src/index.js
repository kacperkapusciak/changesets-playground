'use strict';

const myIsOdd = require('@kacperkapusciak/package-a');
const logger = require('@kacperkapusciak/package-c');

module.exports = function myIsEven(value) {
  // when in development mode, log the value
  if (process.env.NODE_ENV === 'development') {
    // important feature
    logger.log(value);
  }
  return !myIsOdd(value);
};
