/**
 * Webpack helpers & dependencies
 */
const defaultConfig = function (root, settings) {
  return {
    /**
     * The entry point for the bundle
     * Our Angular app
     *
     * See: http://webpack.github.io/docs/configuration.html#entry
     */
    entry: {
      'polyfills': root(`${settings.paths.src.client.root}/polyfills.ts`),
      'app': root(`${settings.paths.src.client.root}/main-browser.ts`)
    },

    /**
     * Include polyfills or mocks for various node stuff
     * Description: Node configuration
     *
     * See: https://webpack.github.io/docs/configuration.html#node
     */
    node: {
      global: true,
      crypto: true,
      __dirname: true,
      __filename: true,
      process: true,
      Buffer: true
    }
  };
};

/**
 * Webpack configuration
 *
 * See: http://webpack.github.io/docs/configuration.html#cli
 */
module.exports = function(root, settings) {
  return defaultConfig(root, settings);
};
