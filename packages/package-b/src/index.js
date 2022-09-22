'use strict';

const myIsOdd = require('package-a');

module.exports = function myIsEven(value) {
  return !myIsOdd(value);
}