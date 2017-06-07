'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.generateConfigList = generateConfigList;

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _jsonfile = require('jsonfile');

var _jsonfile2 = _interopRequireDefault(_jsonfile);

var _generateFile = require('../util/generate-file');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function generateConfigList(basePath, sourcePath, outputOption) {
	var filePath = _path2.default.join(basePath, sourcePath);
	_jsonfile2.default.readFile(filePath, function (err, swaggerObj) {
		// const configList = generateConfigList(swaggerObj)
		console.log(swaggerObj, swaggerObj.version);
		(0, _generateFile.generateFile)('sss', basePath, 'output.js');
	});
}