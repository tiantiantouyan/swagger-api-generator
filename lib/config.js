"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.defaultConfig = exports.pkgBasePath = exports.basePath = undefined;

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var basePath = exports.basePath = process.cwd();

var pkgBasePath = exports.pkgBasePath = _path2.default.dirname(module.id);

var defaultConfig = exports.defaultConfig = {
	"inputMode": "json", //  "json", "url"
	"outputMode": "default", //  "default", "apiOnly", "all (include FFModel)"
	"outputPath": "./src/api" // relative path
};