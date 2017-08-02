# Change Log
All notable changes to this project will be documented in this file.

## v1.0.2 - 2017-08-02
### Added
- Added `node_modules` for SCSS compilation (closes [#6](https://github.com/fulls1z3/angular-webpack-config/issues/6), [#3](https://github.com/fulls1z3/angular-webpack-config/pull/3))
- Added dev/prod modes for SCSS compilation (closes [#4](https://github.com/fulls1z3/angular-webpack-config/issues/4))
- Added HMR support for external SCSS (merges [#1](https://github.com/fulls1z3/angular-webpack-config/pull/1))

### Fixed
- Resolved broken AoT compilation (closes [#5](https://github.com/fulls1z3/angular-webpack-config/issues/5))

### Changed
- Updated `chunkhash` to `hash` on `file-loader` (merges [#2](https://github.com/fulls1z3/angular-webpack-config/pull/2))
- Updated deps

## v1.0.1 - 2017-06-29
### Fixed
- Resolved `path` issues

### Changed
- Removed `CopyWebpackPlugin`
- Removed `HtmlElementsWebpackPlugin`
- Updated `scss` rules
- Updated deps, jshint, ignorers

## v1.0.0 - 2017-06-28
- Initial commit
