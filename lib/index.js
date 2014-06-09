
'use strict';

// Modules
var _ = require('lodash');

module.exports = function (environment, config) {

  // Ensure environment is an object
  if (!_.isObject(environment)) {
    throw new Error('Fatal: Provided environment is not an object!');
  }

  // Merge configuration object, if given
  if (_.isObject(config)) {
    _.merge(environment, config);
  }

  return {
    get : function (name) {
      return environment[name];
    }
  };

};
