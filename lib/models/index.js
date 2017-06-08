'use strict';

var _generateFFModel = require('./generate-FFModel');

var _generateConfigList = require('./generate-config-list');

var _generateApiList = require('./generate-api-list');

module.exports = {
	generateFFModel: _generateFFModel.generateFFModel,
	generateConfigList: _generateConfigList.generateConfigList,
	generateApiList: _generateApiList.generateApiList
};