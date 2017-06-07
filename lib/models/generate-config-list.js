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

var _getApiConfigList = require('../util/get-api-config-list');

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

	(0, _generateFile.generateFile)(output, outputPath, 'api-config-list.js');
}

function generateByJson(inputPath, outputPath) {
	_jsonfile2.default.readFile(inputPath, function (err, swaggerObj) {
		if (swaggerObj) {
			var configListPath = _path2.default.join(outputPath, 'api-config-list.js');
			var apiConfigList = fs.existsSync(configListPath) ? require(configListPath) : [];
			(0, _getApiConfigList.getConfigList)(originList, swaggerObj);
		} else {
			console.warn('error occur in generateByJson');
		}
	});
}

function generateByUrl(url) {
	console.log('敬请期待');
}