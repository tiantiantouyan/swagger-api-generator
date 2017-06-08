'use strict';

var _generateFFModel = require('./generate-FFModel');

var _generateConfigList = require('./generate-config-list');

var _generateApiList = require('./generate-api-list');

var _genereteRelyFiles = require('./generete-rely-files');

module.exports = {
	generateFFModelFolder: _generateFFModel.generateFFModelFolder,
	generateConfigList: _generateConfigList.generateConfigList,
	generateApiList: _generateApiList.generateApiList,
	genereteRelyFiles: _genereteRelyFiles.genereteRelyFiles
};