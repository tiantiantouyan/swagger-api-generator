'use strict';

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

var _version = require('../version');

var _generateFile = require('../util/generate-file');

var _config = require('../config');

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fs = require('fs');
var path = require('path');

var program = _commander2.default;

program.version((0, _version.version)());

var configStr = '{\n' + '\t"inputMode": "json" // "json", "url"\n' + '\t"inputPath": "./swagger.json" // relative path\n' + '\t"outputMode": "default", // "default", "apiOnly", "all"\n' + '\t"outputPath": "./src/api" // relative path\n' + '}\n';

if (!fs.existsSync(path.join(_config.basePath, './swagger-api-config'))) {
	(0, _generateFile.generateFile)(configStr, _config.basePath, 'swagger-api-config');
	console.log(_chalk2.default.bgYellow('成功生成swagger-api-config.json配置文件'));
}

program.parse(process.argv);