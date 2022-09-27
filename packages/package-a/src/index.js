'use strict';

const isOdd = require('is-odd');

module.exports = function myIsOdd(value) {
  console.log('value: %d, isOdd: %d', value, isOdd(value));
  return isOdd(value);
};