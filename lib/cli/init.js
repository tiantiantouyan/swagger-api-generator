'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.init = init;

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _jsonfile = require('jsonfile');

var _jsonfile2 = _interopRequireDefault(_jsonfile);

var _getInitConfigList = require('./getInitConfigList');

var _config = require('../config');

var _models = require('../models');

var _generateFile = require('../util/generate-file');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function init() {
	var excuteConfig = _config.defaultConfig;
	var configPath = _path2.default.join(_config.basePath, './swagger-api-config.json');
	_jsonfile2.default.readFile(configPath, function (err, config) {
		console.log(err, config, 'jsonfilereadFile');
		if (err) {
			console.log(_chalk2.default.blue('cannot find swagger-api-config.json, please define this file\n'));
			return;
		}
		if (config) {
			excuteConfig = _extends({}, excuteConfig, config);
		}
		if (!excuteConfig.inputPath) {
			console.log(_chalk2.default.blue('"inputPath" is undefined, please define this parameter\n'));
			return;
		}
		excuteConfig.inputPath = _path2.default.join(_config.basePath, excuteConfig.inputPath);
		excuteConfig.outputPath = _path2.default.join(_config.basePath, excuteConfig.outputPath);

		var configList = (0, _getInitConfigList.getInitConfigList)(excuteConfig);

		console.log('configListconfigList', configList);
		var _excuteConfig = excuteConfig,
		    outputPath = _excuteConfig.outputPath,
		    outputMode = _excuteConfig.outputMode;

		switch (outputMode) {
			case 'default':
			default:
				{
					var configListOutput = (0, _models.generateConfigList)(configList);
					var ApiListOutput = (0, _models.generateApiList)(configList);
					(0, _generateFile.generateFile)(configListOutput, outputPath, 'api-config-list.js');
					(0, _generateFile.generateFile)(ApiListOutput, outputPath, 'index.js');
					break;
				}
			case 'apiOnly':
				{
					var _ApiListOutput = (0, _models.generateApiList)(configList);
					(0, _generateFile.generateFile)(_ApiListOutput, outputPath, 'index.js');
					break;
				}
			case 'all':
				{
					var _configListOutput = (0, _models.generateConfigList)(configList);
					var _ApiListOutput2 = (0, _models.generateApiList)(configList);
					var FFModelOutput = (0, _models.generateFFModel)(configList);
					(0, _generateFile.generateFile)(_configListOutput, outputPath, 'api-config-list.js');
					(0, _generateFile.generateFile)(_ApiListOutput2, outputPath, 'index.js'
					// generateFFModelFolder(ApiListOutput, outputPath)
					);break;
				}
		}
	});
}