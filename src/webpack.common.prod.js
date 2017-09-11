/**
 * Webpack helpers & dependencies
 */
const commonConfig = require('./webpack.common'),
  webpackMerge = require('webpack-merge');

const noEmitOnErrorsPlugin = require('webpack/lib/NoEmitOnErrorsPlugin'),
  optimizeJsPlugin = require('optimize-js-plugin'),
  commonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin'),
  uglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin'),
  normalModuleReplacementPlugin = require('webpack/lib/NormalModuleReplacementPlugin'),
  loaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');

const ENV = process.env.ENV = process.env.NODE_ENV = 'production';

const defaultConfig = function() {
  return {
    /**
     * Developer tool to enhance debugging
     *
     * See: http://webpack.github.io/docs/configuration.html#devtool
     * See: https://github.com/webpack/docs/wiki/build-performance#sourcemaps
     */
    // devtool: settings.webpack.devtool.PROD,

    /**
     * Add additional plugins to the compiler.
     *
     * See: http://webpack.github.io/docs/configuration.html#plugins
     */
    plugins: [
      /**
       * Plugin: NoEmitOnErrorsPlugin
       * Description: Skips the emitting phase (and recording phase) when
       * there are errors while compiling.
       *
       * See: https://github.com/webpack/docs/wiki/list-of-plugins#noerrorsplugin
       */
      new noEmitOnErrorsPlugin(),

      /**
       * Webpack plugin to optimize a JavaScript file for faster initial load
       * by wrapping eagerly-invoked functions.
       *
       * See: https://github.com/vigneshshanmugam/optimize-js-plugin
       */
      new optimizeJsPlugin({
        sourceMap: false
      }),

      /**
       * Plugin LoaderOptionsPlugin (experimental)
       *
       * See: https://gist.github.com/sokra/27b24881210b56bbaff7
       */
      new loaderOptionsPlugin({
        minimize: true,
        debug: false
      })
    ]
  };
};

const browserConfig = function(root, settings) {
  return {
    /**
     * Options affecting the output of the compilation.
     *
     * See: http://webpack.github.io/docs/configuration.html#output
     */
    output: {
      /**
       * Specifies the name of each output file on disk.
       * IMPORTANT: You must not specify an absolute path here!
       *
       * See: http://webpack.github.io/docs/configuration.html#output-filename
       */
      filename: '[name].[chunkhash].bundle.js',

      /**
       * The filename of the SourceMaps for the JavaScript files.
       * They are inside the output.path directory.
       *
       * See: http://webpack.github.io/docs/configuration.html#output-sourcemapfilename
       */
      sourceMapFilename: '[name].[chunkhash].bundle.map',

      /**
       * The filename of non-entry chunks as relative path
       * inside the output.path directory.
       *
       * See: http://webpack.github.io/docs/configuration.html#output-chunkfilename
       */
      chunkFilename: '[id].[chunkhash].chunk.js'
    },

    /**
     * Add additional plugins to the compiler.
     *
     * See: http://webpack.github.io/docs/configuration.html#plugins
     */
    plugins: [
      /**
       * Plugin: CommonsChunkPlugin
       * Description: Shares common code between the pages.
       * It identifies common modules and put them into a commons chunk.
       *
       * See: https://webpack.github.io/docs/list-of-plugins.html#commonschunkplugin
       * See: https://github.com/webpack/docs/wiki/optimization#multi-page-app
       */
      new commonsChunkPlugin({
        name: ['app', 'polyfills']
      }),

      /**
       * Plugin: UglifyJsPlugin
       * Description: Minimize all JavaScript output of chunks.
       * Loaders are switched into minimizing mode.
       *
       * See: https://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
       */
      new uglifyJsPlugin({
        // beautify: false,
        // mangle: {
        //   screw_ie8: true
        // },
        output: {
          comments: false
        },
        compress: {
          screw_ie8: true,
          warnings: false,
          conditionals: true,
          unused: true,
          comparisons: true,
          sequences: true,
          dead_code: true,
          evaluate: true,
          if_return: true,
          join_vars: true,
          negate_iife: false // we need this for lazy v8
        }
      }),

      // fix Angular
      new normalModuleReplacementPlugin(
        /facade([\\\/])async/,
        root(`node_modules/@angular/core/src/facade/async.js`)
      ),
      new normalModuleReplacementPlugin(
        /facade([\\\/])collection/,
        root(`node_modules/@angular/core/src/facade/collection.js`)
      ),
      new normalModuleReplacementPlugin(
        /facade([\\\/])errors/,
        root(`node_modules/@angular/core/src/facade/errors.js`)
      ),
      new normalModuleReplacementPlugin(
        /facade([\\\/])lang/,
        root(`node_modules/@angular/core/src/facade/lang.js`)
      ),
      new normalModuleReplacementPlugin(
        /facade([\\\/])math/,
        root(`node_modules/@angular/core/src/facade/math.js`)
      ),

      /**
       * Plugin LoaderOptionsPlugin (experimental)
       *
       * See: https://gist.github.com/sokra/27b24881210b56bbaff7
       */
      new loaderOptionsPlugin({
        options: {
          /**
           * Html loader advanced options
           *
           * See: https://github.com/webpack/html-loader#advanced-options
           */
          // TODO: Need to workaround Angular's html syntax => #id [bind] (event) *ngFor
          htmlLoader: {
            minimize: true,
            removeAttributeQuotes: false,
            caseSensitive: true,
            customAttrSurround: [
              [/#/, /(?:)/],
              [/\*/, /(?:)/],
              [/\[?\(?/, /(?:)/]
            ],
            customAttrAssign: [/\)?]?=/]
          }
        }
      })
    ]
  };
};

const serverConfig = function() {
  return {
    /**
     * Add additional plugins to the compiler.
     *
     * See: http://webpack.github.io/docs/configuration.html#plugins
     */
    plugins: [
      /**
       * Plugin: UglifyJsPlugin
       * Description: Minimize all JavaScript output of chunks.
       * Loaders are switched into minimizing mode.
       *
       * See: https://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
       */
      new uglifyJsPlugin({
        // beautify: false,
        mangle: false, // to ensure process.env still works
        output: {
          comments: false
        },
        compress: {
          screw_ie8: true,
          warnings: false,
          conditionals: true,
          unused: true,
          comparisons: true,
          sequences: true,
          dead_code: true,
          evaluate: true,
          if_return: true,
          join_vars: true,
          negate_iife: false // we need this for lazy v8
        }
      })
    ]
  };
};

/**
 * Webpack configuration
 *
 * See: http://webpack.github.io/docs/configuration.html#cli
 */
module.exports = function(options, root, settings) {
  return webpackMerge(commonConfig({
    env: ENV,
    platform: options.platform
  }, root, settings), defaultConfig(), options.platform === 'server' ? serverConfig() : browserConfig(root, settings));
};
