# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="1.1.0"></a>
# 1.1.0 (2017-09-09)



### Features

* **awc:** make publicPath adjustable ([#17](https://github.com/ng-seed/angular-webpack-config/issues/17)) ([19566f5](https://github.com/ng-seed/angular-webpack-config/commit/19566f5)), closes [#7](https://github.com/ng-seed/angular-webpack-config/issues/7)
* **awc:** separate the image and the font file for simply override file-loader ([#15](https://github.com/ng-seed/angular-webpack-config/issues/15)) ([617e0a1](https://github.com/ng-seed/angular-webpack-config/commit/617e0a1)), closes [#7](https://github.com/ng-seed/angular-webpack-config/issues/7)
* **awc:** support import .json file in node_modules ([#16](https://github.com/ng-seed/angular-webpack-config/issues/16)) ([222cf6a](https://github.com/ng-seed/angular-webpack-config/commit/222cf6a)), closes [#9](https://github.com/ng-seed/angular-webpack-config/issues/9)



## v1.0.2 - 2017-08-02
### Bug Fixes

* **awc:** add HMR support for external SCSS ([ad51727](https://github.com/ng-seed/angular-webpack-config/commit/ad51727))
* **awc:** broken AoT compilation ([#5](https://github.com/ng-seed/angular-webpack-config/issues/5)) ([50b40bf](https://github.com/ng-seed/angular-webpack-config/commit/50b40bf))


### Features
* **awc:** `node_modules` for SCSS compilation ([#6](https://github.com/ng-seed/angular-webpack-config/issues/6)), ([#3](https://github.com/ng-seed/angular-webpack-config/issues/3)) ([765f973](https://github.com/ng-seed/angular-webpack-config/commit/765f973))
* **awc:** add dev/prod modes for scss ([#4](https://github.com/ng-seed/angular-webpack-config/issues/4)), ([#1](https://github.com/ng-seed/angular-webpack-config/issues/1)) ([4bf429d](https://github.com/ng-seed/angular-webpack-config/commit/4bf429d))
* **awc:** change `chunkhash` to `hash` on file-loader ([#2](https://github.com/ng-seed/angular-webpack-config/issues/2)) ([7b4b008](https://github.com/ng-seed/angular-webpack-config/commit/7b4b008))

## v1.0.1 - 2017-06-29
### Bug Fixes
- `path` issues

### Features
- remove `CopyWebpackPlugin`
- remove `HtmlElementsWebpackPlugin`
- update `scss` rules
