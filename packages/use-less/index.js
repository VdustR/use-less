'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./cjs/ues-less.min.js');
} else {
  module.exports = require('./cjs/ues-less.js');
}
