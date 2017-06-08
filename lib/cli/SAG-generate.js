'use strict';

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

var _version = require('../version');

var _init = require('./init');

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var program = _commander2.default;
var inputPath = void 0;
var outputPath = void 0;
var outputMode = 'default';

program.version((0, _version.version)()).option("-d, --default", "default outputMode").option("-a, --apiOnly", "only output api function list").option("-A, --all", "output include FetchFastModel").command('[inputPath]', 'inputPath').action(function (_ip) {
	inputPath = _ip;
}).command('[outputPath]', 'inputPath').action(function (_op) {
	outputPath = _op;
});

program.parse(process.argv);

if (inputPath) {
	var getInputMode = function getInputMode(inputPath) {
		var _matchJson = inputPath.match(/\.json/g);
		var _matchHttp = inputPath.match(/^((http|https):\/\/)/g);
		if (_matchHttp && _matchHttp.length) return 'url';
		if (_matchJson && _matchJson.length) return 'json';
		console.log(_chalk2.default.bgRed('输入路径的格式不正确，请确认使用.json文件或者http|https请求'));
		return;
	};

	if (!outputPath) {
		console.log(_chalk2.default.bgGreen('未输入输出路径，使用默认路径输出，/SAG'));
	}
	if (program.apiOnly) outputMode = 'apiOnly';
	if (program.all) outputMode = 'all';

	var excConfig = {
		inputPath: inputPath,
		inputMode: getInputMode(inputPath),
		outputPath: outputPath || './SAG',
		outputMode: outputMode
	};
	(0, _init.init)(excConfig);
} else {
	(0, _init.init)();
}