/**
 * Exports
 */
exports.spa = {
  hmr: require('./src/webpack.spa.dev.hmr'),
  dev: require('./src/webpack.spa.dev'),
  prod: require('./src/webpack.spa.prod')
};

exports.universal = {
  browser: {
    dev: require('./src/webpack.universal.browser.dev'),
    prod: require('./src/webpack.universal.browser.prod')
  },
  server: {
    dev: require('./src/webpack.universal.server.dev'),
    prod: require('./src/webpack.universal.server.prod')
  }
};

exports.test = require('./src/webpack.test');
