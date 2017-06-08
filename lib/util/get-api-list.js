'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.generateApiList = generateApiList;
var path = require('path');
var fs = require('fs');
var pathConfig = require('../config');

function generateApiList(from) {
	var to = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : './';
	// 如果to存在，就保留
	var apiConfigList = require(from);
	var TotalFile = 'import api from \'./client\'\n\n' + '// \u672C\u6587\u4EF6\u4F7F\u7528configList\u751F\u6210\u5668\u751F\u6210\u7684configList\u6587\u4EF6\u751F\u6210\uFF0C\u8BF7\u4E0D\u8981\u624B\u52A8\u4FEE\u6539\n\n' + (generateApiFunctionStr(apiConfigList) + '\n');
	fs.writeFileSync(path.join(__dirname, to, 'index.js'), TotalFile);
	function generateApiFunctionStr(array) {
		var arrayOutputStr = '';
		array.forEach(function (data, index) {
			if (data.FFModel !== '暂无') {
				arrayOutputStr += generateApi(data) + '\n';
			}
		});
		return arrayOutputStr;
	}

	function generateApi(api) {
		var output = 'export function ' + api.FFModel + ' (payload) {\n';
		if (api.formData) {
			output += '\tconst { attachment, userId, Authorization } = payload\n' + '\treturn api.v1FormDataRequest({\n' + '\t\turl: `' + ('' + getUrl(api.path)) + '`,\n' + '\t\tattachment,\n' + '\t\tAuthorization\n' + '\t})\n';
		} else {
			if (api.parameters.path) {
				output += getApiPathParams(api.parameters.path);
			}
			output += '\tconst config = {\n' + ('\t\tmethod: \'' + api.method + '\',\n') + '\t\turl: `' + ('' + getUrl(api.path)) + '`,\n' + '\t}\n';
			if (api.needAuth) {
				output += '\tconfig.headers = { Authorization: payload.Authorization }\n';
			}
			if (api.parameters.formData) {
				output += getApiDataParams(api.parameters.formData);
				output += '\tconfig.data = data\n';
			}
			if (api.parameters.query) {
				output += getApiQueryParams(api.parameters.query);
			}
			if (api.easySignature) {
				var signP = '';
				if (api.parameters.formData) signP = 'data';
				if (api.parameters.query) signP = 'params';
				if (api.parameters.formData && api.parameters.query) signP = '{ ...data, ...params }';
				output += '\tconfig.params = easySignature(' + signP + ')\n';
			} else {
				if (api.parameters.query) output += '\tconfig.params = params\n';
			}
			output += '\treturn api.v1Request(config)\n';
		}
		output += '}\n\n';
		return output;
	}

	function getApiPathParams(data) {
		var output = '\tconst { ' + getPayloadKeys(data) + ' } = payload\n';
		return output;
	}

	function getApiDataParams(data) {
		var output = '\tconst data = {}\n' + ('\tconst dataKeyList = ' + getKeys(data) + '\n') + '\tdataKeyList.forEach(key => {\n' + '\t\tif (payload[key]) {\n' + '\t\t\tdata[key] = payload[key]\n' + '\t\t}\n' + '\t})\n';
		return output;
	}

	function getApiQueryParams(data) {
		var output = '\tconst params = {}\n' + ('\tconst paramsKeyList = ' + getKeys(data) + '\n') + '\tparamsKeyList.forEach(key => {\n' + '\t\tif (payload[key]) {\n' + '\t\t\tparams[key] = payload[key]\n' + '\t\t}\n' + '\t})\n';
		return output;
	}

	function getKeys(dataArray) {
		var output = '[';
		dataArray.forEach(function (data, index) {
			if (index === dataArray.length - 1) {
				output += '\'' + data.key + '\'';
			} else {
				output += '\'' + data.key + '\', ';
			}
		});
		output += ']';
		return output;
	}

	function getPayloadKeys(dataArray) {
		var output = '';
		dataArray.forEach(function (data, index) {
			if (index === dataArray.length - 1) {
				output += '' + data.key;
			} else {
				output += data.key + ', ';
			}
		});
		return output;
	}

	function getUrl(path) {
		return path.replace(/\{/gi, '${');
	}
}