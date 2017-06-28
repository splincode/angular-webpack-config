/**
 * Webpack helpers & dependencies
 */
const prodConfig = require('./webpack.common.prod');

/**
 * Webpack configuration
 *
 * See: http://webpack.github.io/docs/configuration.html#cli
 */
module.exports = function(root, settings) {
  return prodConfig({platform: 'server'}, root, settings);
};
