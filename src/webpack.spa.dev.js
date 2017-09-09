/**
 * Webpack helpers & dependencies
 */
const defaultConfig = require('./webpack.spa.common'),
  devConfig = require('./webpack.common.dev'),
  webpackMerge = require('webpack-merge');

/**
 * Webpack configuration
 *
 * See: http://webpack.github.io/docs/configuration.html#cli
 */
module.exports = function(root, settings) {
  return webpackMerge(defaultConfig({ env: 'dev' }, root, settings), devConfig({platform: 'browser'}, root, settings));
};
