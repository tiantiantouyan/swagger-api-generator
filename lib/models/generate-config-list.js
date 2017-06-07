'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.generateConfigList = generateConfigList;

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _jsonfile = require('jsonfile');

var _jsonfile2 = _interopRequireDefault(_jsonfile);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _generateFile = require('../util/generate-file');

var _getApiConfigList = require('../util/get-api-config-list');

var _fsExtra = require('fs-extra');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function generateConfigList(config) {
	var inputMode = config.inputMode,
	    inputPath = config.inputPath,
	    outputPath = config.outputPath;

	var output = null;
	switch (inputMode) {
		case 'json':
			{
				output = generateByJson(inputPath, outputPath);
				break;
			}
		case 'url':
			{
				output = generateByUrl(inputPath, outputPath);
				break;
			}
		default:
			{
				output = generateByJson(inputPath, outputPath);break;
			}
	}
	console.log(output, 'outputoutput');
	(0, _generateFile.generateFile)(output, outputPath, 'api-config-list.js');
}

function generateByJson(inputPath, outputPath) {
	var swaggerObj = (0, _fsExtra.readJsonSync)(inputPath);
	if (swaggerObj) {
		var configListPath = _path2.default.join(outputPath, 'api-config-list.js');
		var apiConfigList = _fs2.default.existsSync(configListPath) ? require(configListPath) : [];
		if (!apiConfigList.length) apiConfigList = [];
		return (0, _getApiConfigList.getConfigList)(apiConfigList, swaggerObj);
	} else {
		console.warn(_chalk2.default.blue('error occur in generateByJson'));
		return 'error occur in generateByJson';
	}
}

function generateByUrl(url) {
	console.log('敬请期待');
}