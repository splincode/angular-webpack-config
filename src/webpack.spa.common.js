/**
 * Webpack helpers & dependencies
 */
const defaultConfig = function (options, root, settings) {
  const isProd = options.env === 'prod' || options.env === 'production';

  return {
    /**
     * The entry point for the bundle
     * Our Angular app
     *
     * See: http://webpack.github.io/docs/configuration.html#entry
     */
    entry: {
      'polyfills': root(`${settings.paths.src.client.root}/polyfills.ts`),
      'app': root(`${settings.paths.src.client.root}/main-spa${isProd ? '-aot' : ''}.ts`)
    },

    /**
     * Include polyfills or mocks for various node stuff
     * Description: Node configuration
     *
     * See: https://webpack.github.io/docs/configuration.html#node
     */
    node: {
      global: true,
      crypto: 'empty',
      process: true,
      module: false,
      clearImmediate: false,
      setImmediate: false
    }
  };
};

/**
 * Webpack configuration
 *
 * See: http://webpack.github.io/docs/configuration.html#cli
 */
module.exports = function(options, root, settings) {
  return defaultConfig(options, root, settings);
};
