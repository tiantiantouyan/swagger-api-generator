'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateApiList = generateApiList;

var _apiList = require('../templates/api-list');

var _stringObject = require('../util/stringObject');

var _getTabIndent = require('../util/getTabIndent');

function generateApiList(configList) {
  return (0, _apiList.getApiListTemplate)(generateFileStr(configList));
}

function generateFileStr(list) {
  var arrayOutputStr = '';
  list.forEach(function (data, index) {
    if (data && data.name) {
      arrayOutputStr += generateApi(data) + '\n';
    }
  });
  return arrayOutputStr;
}

// 使用的参数默认字段应该在文档中标注出来

var PAYLOAD = {
  ATTACHMENT: 'attachment', // 表单提交参数
  USERID: 'userId', // 用户的user_id
  Authorization: 'Authorization' // 用户的access_toekn
};

function generateApi(api) {
  var output = api.description + '\n' + ('export function ' + api.name + ' (payload) {\n');
  if (api.formData) {
    output += '\tconst { ' + PAYLOAD.ATTACHMENT + ', ' + PAYLOAD.USERID + ', ' + PAYLOAD.Authorization + ' } = payload\n' + '\treturn api.FormDataRequest({\n' + '\t\turl: `' + ('' + getUrl(api.path)) + '`,\n' + ('\t\t' + PAYLOAD.ATTACHMENT + ',\n') + '\t\tAuthorization\n' + '\t})\n';
  } else {
    if (api.parameters.path) {
      output += getApiPathParams(api.parameters.path);
    }
    output += '\tconst config = {\n' + ('\t\tmethod: \'' + api.method + '\',\n') + '\t\turl: `' + ('' + getUrl(api.path)) + '`,\n' + '\t}\n';
    if (api.needAuth) {
      output += '\tconfig.headers = { ' + PAYLOAD.Authorization + ': payload.' + PAYLOAD.Authorization + ' }\n';
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
    output += '\treturn api.Request(config)\n';
  }
  output += '}\n';
  return output;
}

function getApiPathParams(data) {
  var output = '\tconst { ' + getPayloadKeys(data) + ' } = payload\n';
  return output;
}

function getApiDataParams(data) {
  var output = '\tconst data = {}\n' + ('\tconst dataKeyList = ' + getKeys(data) + '\n') + '\tforEach(dataKeyList, key => {\n' + '\t\tif (payload[key]) {\n' + '\t\t\tdata[key] = payload[key]\n' + '\t\t}\n' + '\t})\n';
  return output;
}

function getApiQueryParams(data) {
  var output = '\tconst params = {}\n' + ('\tconst paramsKeyList = ' + getKeys(data) + '\n') + '\tforEach(paramsKeyList, key => {\n' + '\t\tif (payload[key]) {\n' + '\t\t\tparams[key] = payload[key]\n' + '\t\t}\n' + '\t})\n';
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