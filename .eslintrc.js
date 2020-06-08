const path = require('path');

module.exports = {
  env: {
    jest: true,
  },
  extends: require.resolve('eslint-config-react-app', {
    paths: [path.dirname(require.resolve('react-app/package.json'))],
  }),
};
