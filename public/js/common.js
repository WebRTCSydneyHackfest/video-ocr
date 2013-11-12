'use strict';
var glue = require('rtc-glue');

// signal host is just the browser url without any path
glue.config.signalhost = location.href.replace(/(^.*\/).*$/, '$1');
