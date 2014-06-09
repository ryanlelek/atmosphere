
'use strict';

// Modules
require('should');

// Subject
var atmosphere = require('../lib/index.js');

describe('Library - Atmosphere', function () {

  it('should return process.env.PORT if defined', function () {

    var instance = atmosphere({ PORT : 1234 }, {});
    instance.port().should.equal(1234);

  });

  it('should return config.server.port if defined', function () {

    var instance = atmosphere({}, { server : { port : 5678 } });
    instance.port().should.equal(5678);

  });

  it('should return default of 3000 if neither process.env.PORT nor config.server.port are defined', function () {

    var instance = atmosphere({}, {});
    instance.port().should.equal(3000);

  });

  it('should convert a string port into a number', function () {

    var environment = atmosphere({ PORT : '1234' }, {});
    environment.port().should.equal(1234);

    var config = atmosphere({}, { server : { port : '5678' } });
    config.port().should.equal(5678);

  });

});
