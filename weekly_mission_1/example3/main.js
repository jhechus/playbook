/*
  node main.js
*/

const logger1 = require('./logger_1')
const logger2 = require('./logger_2')
const logger3 = require('./logger_3')
const logger4 = require('./logger_4')

logger1('This is an informational message')
logger2.verbose('This is a verbose message')
logger3('this is a test message')
logger4.bad('this is a bad message')
