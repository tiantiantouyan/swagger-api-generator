'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.init = init;

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _getInitConfigList = require('./getInitConfigList');

var _config = require('../config');

var _models = require('../models');

var _generateFile = require('../util/generate-file');

var _fsExtra = require('fs-extra');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function init(excuteConfig) {
	var config = excuteConfig;
	if (!config) {
		var configJsonPath = _path2.default.join(_config.basePath, './swagger-api-config.json');
		var userConfig = (0, _fsExtra.readJsonSync)(configJsonPath);
		config = (0, _extends3.default)({}, _config.defaultConfig, userConfig);
	}
	if (!checkConfig(config)) return;
	if (config.inputMode !== 'url') {
		config.inputPath = _path2.default.join(_config.basePath, config.inputPath);
	}
	config.outputPath = _path2.default.join(_config.basePath, config.outputPath);
	excuteOutput(excuteConfig);
}

function checkConfig(excuteConfig) {
	if (!excuteConfig) {
		console.warn(_chalk2.default.blue('cannot find swagger-api-config.json, please define this file\n'));
		console.log(_chalk2.default.bgRed('没有找到配置文件 swagger-api-config.json，请定义'));
		return;
	}
	var inputMode = excuteConfig.inputMode,
	    inputPath = excuteConfig.inputPath,
	    outputPath = excuteConfig.outputPath,
	    outputMode = excuteConfig.outputMode;

	if (!inputMode) {
		console.log(_chalk2.default.bgRed('"inputMode" is undefined, please define this parameter\n'));
		return;
	}
	if (!inputPath) {
		console.log(_chalk2.default.bgRed('"inputPath" is undefined, please define this parameter\n'));
		return;
	}
	if (!outputPath) {
		console.log(_chalk2.default.bgRed('"outputPath" is undefined, please define this parameter\n'));
		return;
	}
	if (!outputMode) {
		console.log(_chalk2.default.bgRed('"outputMode" is undefined, please define this parameter\n'));
		return;
	}
	return true;
}

function excuteOutput(excuteConfig) {
	var inputMode = excuteConfig.inputMode,
	    inputPath = excuteConfig.inputPath,
	    outputPath = excuteConfig.outputPath,
	    outputMode = excuteConfig.outputMode;

	var configList = (0, _getInitConfigList.getInitConfigList)(excuteConfig).then(function (configList) {
		generateOutput(configList, outputPath, outputMode);
	}).catch(function (err) {
		console.log(_chalk2.default.bgRed('输入源有误', err));
	});
}

function generateOutput(configList, outputPath, outputMode) {
	if (!(configList && configList.length)) {
		console.log(_chalk2.default.bgRed('未读取到swagger api 相关数据，请检查数据源:json格式是否正确或者网络请求是否正常'));
		return;
	}
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
				(0, _models.generateFFModelFolder)(configList, outputPath);
				(0, _generateFile.generateFile)(_configListOutput, outputPath, 'api-config-list.js');
				(0, _generateFile.generateFile)(_ApiListOutput2, outputPath, 'index.js'
				// generateFFModelFolder(ApiListOutput, outputPath)
				);break;
			}
	}
	(0, _models.genereteRelyFiles)(outputPath);
	console.log(_chalk2.default.white('┌────────────────────────────────────────────────────────────────────────────┐'));
	console.log(_chalk2.default.white('│ complete !                                                                 │'));
	console.log(_chalk2.default.white('│ complete !                                                                 │'));
	console.log(_chalk2.default.white('│ complete !                                                                 │'));
	console.log(_chalk2.default.white('│ complete !                                                                 │'));
	console.log(_chalk2.default.white('│ complete !                                                                 │'));
	console.log(_chalk2.default.white('│ complete !                                                                 │'));
	console.log(_chalk2.default.white('└────────────────────────────────────────────────────────────────────────────┘'));
}