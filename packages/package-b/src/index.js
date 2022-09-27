'use strict';

const myIsOdd = require('@kacperkapusciak/package-a');

module.exports = function myIsEven(value) {
  return !myIsOdd(value);
}