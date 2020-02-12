'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./cjs/react-use-less.min.js');
} else {
  module.exports = require('./cjs/react-use-less.js');
}
