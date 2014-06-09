Atmosphere
==========

Node.js Environment Variable Management


# Why should I use this?
- prevents writing "process.env" everywhere in your project's code.
- increases testability because you can mock different environments (due to above)

# How to Use

## 1) Install via NPM
    $ npm install atmosphere

## 2) Initialize
    // process.env can be substituted for any object
    var atmo = require('atmosphere')(process.env);

## 3) Get Variables
    // Access Environment Variables
    atmo.get('port'); // 3000

# Overrides
Need to override some environment variables?  
It's not recommended, but you can.  
    // Override
    var atmo = require('atmosphere')(process.env, { port : 8080 });
    atmo.get('port'); // 8080

# Upcoming
- Environment Variable Prefix (MYAPP_PORT -> PORT)
- Auto-capitalization (port -> PORT)
- Replacing spaces with underscores
- Converting the return value to another type ('3000' -> 3000)
