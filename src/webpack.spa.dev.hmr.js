/**
 * Webpack helpers & dependencies
 */
const defaultConfig = require('./webpack.spa.common'),
  devConfig = require('./webpack.common.dev'),
  webpack = require('webpack'),
  webpackMerge = require('webpack-merge');

const hmrConfig = function(root, settings) {
  return {
    /**
     * The entry point for the bundle
     * Our Angular app
     *
     * See: http://webpack.github.io/docs/configuration.html#entry
     */
    entry: {
      'polyfills': [
        root(`${settings.paths.src.client.root}/polyfills.ts`)
      ],
      'app': [
        'webpack-hot-middleware/client',
        root(`${settings.paths.src.client.root}/main-spa.ts`)
      ]
    },

    /**
     * Options affecting the output of the compilation.
     *
     * See: http://webpack.github.io/docs/configuration.html#output
     */
    output: {
      /**
       * The output directory as absolute path (required).
       *
       * See: http://webpack.github.io/docs/configuration.html#output-path
       */
      path: root(settings.paths.public.assets.root),
      publicPath: `http://${settings.host}:${settings.port.browser}/assets/`
    },

    /**
     * Add additional plugins to the compiler.
     *
     * See: http://webpack.github.io/docs/configuration.html#plugins
     */
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  };
};

/**
 * Webpack configuration
 *
 * See: http://webpack.github.io/docs/configuration.html#cli
 */
module.exports = function(options, root, settings) {
  return webpackMerge(defaultConfig(options, root, settings), devConfig({platform: 'browser'}, root, settings), hmrConfig(root, settings));
};
