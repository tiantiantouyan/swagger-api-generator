'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.generateConfigList = generateConfigList;

var _configList = require('../templates/config-list');

var _stringObject = require('../util/stringObject');

var _getTabIndent = require('../util/getTabIndent');

function generateConfigList(configList) {
	return (0, _configList.getConfigListTemplate)(generateFileStr(configList));
}

function generateFileStr(list) {
	var tabIndex = 0;
	var indent = (0, _getTabIndent.getTabIndent)(tabIndex);
	var arrayOutputStr = '';
	list.forEach(function (data, index) {
		if (index === list.length - 1) {
			arrayOutputStr += '' + indent + (0, _stringObject.stringObject)(data, tabIndex) + '\n';
		} else {
			arrayOutputStr += '' + indent + (0, _stringObject.stringObject)(data, tabIndex) + ',\n';
		}
	});
	return arrayOutputStr;
}