/**
 * Webpack helpers & dependencies
 */
const defaultConfig = require('./webpack.universal.browser.common'),
  prodConfig = require('./webpack.common.prod'),
  webpackMerge = require('webpack-merge');

const aotPlugin = require('@ngtools/webpack').AotPlugin;

/**
 * Webpack configuration
 *
 * See: http://webpack.github.io/docs/configuration.html#cli
 */
module.exports = function(options, root, settings) {
  return webpackMerge(defaultConfig(options, root, settings), prodConfig({platform: 'browser'}, root, settings), {
    /**
     * Add additional plugins to the compiler.
     *
     * See: http://webpack.github.io/docs/configuration.html#plugins
     */
    plugins: [
      new aotPlugin({
        tsConfigPath: './tsconfig.json',
        entryModule: root(`${settings.paths.src.client.app.root}/app.browser.module#AppBrowserModule`)
      })
    ],
  });
};
