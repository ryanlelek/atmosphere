
'use strict';

module.exports = function (environment, config) {

  // if (!process.env) { process.env = {}; }
  // return process.env;

  return {

    port : function () {

      var port = 3000;

      if (environment.PORT !== undefined) {
        port = environment.PORT;
      }

      if (config && config.server && config.server.port) {
        port = config.server.port;
      }

      if (typeof port === 'string') {
        port = parseInt(port, 10);
      }

      return port;

    }

  };

};
