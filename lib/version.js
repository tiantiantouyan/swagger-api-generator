'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.version = undefined;

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _fsExtra = require('fs-extra');

var _config = require('./config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var version = exports.version = function version() {
  var pkgPath = _path2.default.join(_config.pkgBasePath, '../package.json');
  return (0, _fsExtra.readJsonSync)(pkgPath).version;
};