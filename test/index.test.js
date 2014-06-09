
'use strict';

// Modules
require('should');

// Subject
var atmosphere = require('../lib/index.js');

describe('Atmosphere Initialization', function () {

  it('should throw an error when provided environment is not an object', function () {

    var exception;

    try {
      atmosphere('notanobject');
    } catch (error) {
      exception = error;
    }

    exception.should.have.property('name').and.equal('Error');
    exception.should.have.property('message').and.equal('Fatal: Provided environment is not an object!');

  });

  it('should continue when provided environment is an object', function () {
    var atmo = atmosphere({});
    atmo.should.be.type('object');
  });

});

describe('Atmosphere.get()', function () {

  it('should return the environment variable when name is given', function () {
    var atmo = atmosphere({ port : 1234 });
    atmo.get('port').should.equal(1234);
  });

  it('should return undefined when the requested environment variable is not set', function () {
    var atmo = atmosphere({ key : 'value' });
    (atmo.get('port') === undefined).should.equal(true);
  });

  it('should return the environment value when a configuration object is given and does not have the same key', function () {
    var atmo = atmosphere({ port : 1234 }, { key : 'value' });
    atmo.get('port').should.equal(1234);
  });

  it('should return the configuration value when a configuration object is given and has the same key', function () {
    var atmo = atmosphere({ port : 1234 }, { port : 5678 });
    atmo.get('port').should.equal(5678);
  });

  it('should automatically uppercase the requested key');

  it('should automatically replace spaces in the requested key');

  it('should support an environment variable prefix');

  it('should convert the return value type to an integer when requested');

  it('should convert the return value type to an string when requested');

  it('should return an intelligent global default (based on best practices) when neither the environment nor configuration match the key');

});
