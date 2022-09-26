'use strict';

const isOdd = require('is-odd');

module.exports = function myIsOdd(value) {
  console.log("value: ", value);
  return isOdd(value);
};