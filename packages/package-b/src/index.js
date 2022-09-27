'use strict';

const myIsOdd = require('@kacperkapusciak/package-a');

module.exports = function myIsEven(value) {
  console.log('value: %d, isEven: %d', value, !myIsOdd(value));
  return !myIsOdd(value);
}