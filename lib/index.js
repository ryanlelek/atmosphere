
'use strict';

module.exports = function () {
  if (!process.env) { process.env = {}; }
  return process.env;
};
