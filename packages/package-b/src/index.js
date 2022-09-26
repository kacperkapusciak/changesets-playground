'use strict';

const myIsOdd = require('@kacperkapusciak/package-a');

module.exports = function myIsEven(value) {
  console.log('value: %d', value);
  return !myIsOdd(value);
}