'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.init = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var init = exports.init = function () {
	var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
		var excuteConfig, configPath;
		return _regenerator2.default.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						excuteConfig = _config.defaultConfig;
						configPath = _path2.default.join(_config.basePath, './swagger-api-config.json');

						_jsonfile2.default.readFile(configPath, function (err, config) {
							console.log(err, config, 'jsonfilereadFile');
							if (err) {
								console.log(_chalk2.default.blue('cannot find swagger-api-config.json, please define this file\n'));
								return;
							}
							if (config) {
								excuteConfig = (0, _extends3.default)({}, excuteConfig, config);
							}

							var _excuteConfig = excuteConfig,
							    inputMode = _excuteConfig.inputMode,
							    inputPath = _excuteConfig.inputPath,
							    outputPath = _excuteConfig.outputPath,
							    outputMode = _excuteConfig.outputMode;


							if (!inputPath) {
								console.log(_chalk2.default.blue('"inputPath" is undefined, please define this parameter\n'));
								return;
							}

							if (inputMode !== 'url') {
								excuteConfig.inputPath = _path2.default.join(_config.basePath, inputPath);
								excuteConfig.outputPath = _path2.default.join(_config.basePath, outputPath);
							}
							var configList = (0, _getInitConfigList.getInitConfigList)(excuteConfig
							// console.log(configList, 'configListconfigList');
							).then(function (configList) {
								console.log(configList, 'configListconfigList');
								generateOutput(configList, outputPath, outputMode);
							});
						});

					case 3:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, this);
	}));

	return function init() {
		return _ref.apply(this, arguments);
	};
}();

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

function generateOutput(configList, outputPath, outputMode) {
	if (!(configList && configList.length)) {
		console.log(_chalk2.default.bgRed('未读取到swagger api 相关数据，请检查数据源:json格式是否正确或者网络请求是否正常'));
		return;
	}
	console.log('configList:', configList);
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