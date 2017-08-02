# Change Log
All notable changes to this project will be documented in this file.

## Current iteration
### Breaking changes
- **packaging:** move public API to `ng-seed` organization

## v1.0.2 - 2017-08-02
### Bug fixes
- broken AoT compilation (closes [#5](https://github.com/ng-seed/angular-webpack-config/issues/5))

### Features
- add `node_modules` for SCSS compilation (closes [#6](https://github.com/ng-seed/angular-webpack-config/issues/6), [#3](https://github.com/ng-seed/angular-webpack-config/pull/3))
- add dev/prod modes for SCSS compilation (closes [#4](https://github.com/ng-seed/angular-webpack-config/issues/4))
- add HMR support for external SCSS (merges [#1](https://github.com/ng-seed/angular-webpack-config/pull/1))
- modify `chunkhash` to `hash` on `file-loader` (merges [#2](https://github.com/ng-seed/angular-webpack-config/pull/2))

## v1.0.1 - 2017-06-29
### Bug fixes
- `path` issues

### Features
- remove `CopyWebpackPlugin`
- remove `HtmlElementsWebpackPlugin`
- update `scss` rules
