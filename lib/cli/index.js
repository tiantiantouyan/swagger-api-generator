'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

var _version = require('../version');

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _generateConfigList = require('../models/generate-config-list');

var _config = require('../config');

var _jsonfile = require('jsonfile');

var _jsonfile2 = _interopRequireDefault(_jsonfile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var program = _commander2.default;

// program
//   .version(version());

// program
// 	.usage('[command] [options] <?outputOption> <sourcePath>')
//   .command('generate', 'generates new code from json')
//   .command('g', 'alias for generate')
//   .option('-json', 'use local file')
//   .option('-url', 'use url fetch swagger api json data');

// program.parse(process.argv);


program.version('0.0.1').description('config'
// .option('-j, --json', 'use local json file')
// .option('-u, --url', 'use url fetch swagger api json data')
// .option('-d, --outputConfig', 'output default files')
// .option('-a, --outputConfig', 'output all files include configList/index/FFModel')
// .arguments('<sourcePath>')
).action(function () {
	var excuteConfig = _config.defaultConfig;
	_jsonfile2.default.readFile(filePath, function (err, config) {
		console.log(err, config, 'errerrerr');
		if (err) {
			console.log(_chalk2.default.blue('cannot find swagger-api-config.json, please define'));
			return;
		}
		if (config) {
			excuteConfig = _extends({}, excuteConfig, config);
		}
		// generateFile('sss',  basePath, 'output.js')
	});

	if (!excuteConfig.inputPath) {
		console.log(_chalk2.default.blue('sourcePath is undefined'));
		return;
	}
	console.log(excuteConfig, 'excuteConfigexcuteConfig');
	// if (!sourcePath) {
	// 	console.log(chalk.blue('sourcePath is undefined'))
	// 	return;
	// }
	// console.log(basePath, sourcePath, 'sourcesource')
	// if (program.json) {
	// 	generateConfigList(basePath, sourcePath, program.outputConfig)
	// }
	// if (program.url) console.log('  - url');
}).parse(process.argv);

console.log('asdsadsa');