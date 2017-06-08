'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getInitConfigList = getInitConfigList;

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _fsExtra = require('fs-extra');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fs = require('fs');
var path = require('path'
// var pathConfig = require('../config')

);var configKeys = ['needAuth', 'formData', 'easySignature'];

function getInitConfigList(config) {
	var inputMode = config.inputMode,
	    inputPath = config.inputPath,
	    outputPath = config.outputPath,
	    outputMode = config.outputMode;

	var configList = [];
	switch (inputMode) {
		case 'json':
			{
				configList = getByJson(inputPath, outputPath, outputMode);
				break;
			}
		case 'url':
			{
				configList = getByUrl(inputPath, outputPath, outputMode);
				break;
			}
		default:
			{
				configList = getByJson(inputPath, outputPath, outputMode);break;
			}
	}
	return configList;
}

function getByJson(inputPath, outputPath, outputMode) {
	var swaggerObj = (0, _fsExtra.readJsonSync)(inputPath);
	if (swaggerObj) {
		var configListPath = path.join(outputPath, 'api-config-list.js');
		var apiConfigList = fs.existsSync(configListPath) ? require(configListPath) : [];
		if (!apiConfigList.length) apiConfigList = [];
		return getConfigList(apiConfigList, swaggerObj, outputMode);
	} else {
		console.warn(_chalk2.default.blue('error occur in generateByJson'));
		return 'error occur in generateByJson';
	}
}

function getByUrl(url) {
	console.log('敬请期待');
}

function getConfigList(originList, swaggerObj, outputMode) {
	var configList = originList || [];
	// 遍历swagger api path
	// 如果没有该path存在，任何该path的方法都不存在，直接生成新的
	// 如果有该path的api存在
	// 如果该path下的某一个method不存在，则生在该method的api
	// 如果该method也存在
	// 遍历对比api parameters，如果有不同
	// 则更新该api
	// 先过滤掉swaiggerApi中不存在的项目
	if (configList && configList.length) {
		configList = filterUnExistInSwagger(configList, swaggerObj);
	}
	// 更新configList
	configList = updateConfigList(configList, swaggerObj, outputMode // here
	);return configList;
}

function updateConfigList(configList, swaggerObj, outputMode) {
	var _configList = configList || [];
	Object.keys(swaggerObj.paths).forEach(function (path) {
		var apiObj = swaggerObj.paths[path];
		var _findIndex = '';
		var _find = _configList.map(function (api, index) {
			if (api.path === path) {
				_findIndex = index;
				return api;
			}
		}).filter(function (a) {
			return !!a;
		})[0];
		if (!_find) {
			Object.keys(apiObj).forEach(function (method) {
				var api = generateApi(path, method, apiObj[method], outputMode);
				_configList.push(api);
			});
		} else {
			var _findMethod = Object.keys(apiObj).find(function (key) {
				return key === _find.method;
			});
			var _api = apiObj[_find.method];
			configKeys.forEach(function (key) {
				if (_find[key]) {
					_api[key] = _find[key];
				}
			});
			var api = generateApi(path, _find.method, _api, outputMode);
			if (!_findMethod) {
				_configList.push(api);
			} else {
				_configList[_findIndex] = api;
			}
		}
	});
	return _configList;
}

function filterUnExistInSwagger(list, swaggerObj) {
	return list.filter(function (api) {
		var checkPath = '';
		var findSwaggerPath = Object.keys(swaggerObj.paths).find(function (path) {
			if (path === api.path) {
				checkPath = path;
				return true;
			}
			return false;
		});
		if (!findSwaggerPath) {
			return false; // 过滤掉
		} else {
			var apiObj = swaggerObj.paths[checkPath];
			var findSwaggerMehod = Object.keys(apiObj).find(function (method) {
				return method === api.method;
			});
			if (!findSwaggerMehod) return false;
		}
		return true;
	});
}

// // apiObj 是 path[某一个path][某一种方法] 如 path['/v1/users/{user_id}/attentions']['get']
function generateApi(path, method, apiObj, outputMode) {
	var params = {};
	if (apiObj.parameters) {
		apiObj.parameters.forEach(function (param) {
			var IN = param.in;
			if (!params[IN]) {
				params[IN] = [].concat({
					key: param.name,
					require: param.required
				});
			} else {
				params[IN].push({
					key: param.name,
					require: param.required
				});
			}
		});
	}
	var defaultApi = {
		description: apiObj.description,
		method: method,
		path: path,
		parameters: params,
		tags: apiObj.tags,
		name: getApiName(method, path)
	};
	if (outputMode === 'all') defaultApi.FFModelCombine = firstUpperCase(apiObj.tags[0]);
	configKeys.forEach(function (key) {
		if (apiObj[key]) {
			defaultApi[key] = apiObj[key];
		}
	});
	return defaultApi;
}

function getApiName(method, path) {
	var items = path.split('/');
	var index = 0;
	items.forEach(function (item, i) {
		if (item.indexOf('{') >= 0) index = i;
	});
	var lastFindItem = items[index];
	var filterItems = items.slice(index).filter(function (a) {
		return !!a;
	});
	var nameGroup = filterItems.map(function (item, i) {
		var _item = item.replace('{', '') || item;
		_item = _item.replace('}', '') || _item;
		var findIndex = _item.indexOf('_');
		if (findIndex > 0) {
			_item = _item.slice(0, findIndex);
		}
		return '' + _item[0].toUpperCase() + _item.slice(1);
	});
	var _method = '' + method[0].toUpperCase() + method.slice(1);
	return '' + _method + nameGroup.join('');
}

function firstUpperCase(str) {
	return str.toLowerCase().replace(/( |^)[a-z]/g, function (L) {
		return L.toUpperCase();
	});
}