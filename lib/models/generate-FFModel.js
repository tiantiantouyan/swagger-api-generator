'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateFFModelFolder = generateFFModelFolder;

var _generateFile = require('../util/generate-file');

var _FFModel = require('../templates/FFModel');

var _stringObject = require('../util/stringObject');

var _getTabIndent = require('../util/getTabIndent');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var path = require('path');
var mkdirp = require('mkdirp');
var fs = require('fs');
function generateFFModelFolder(configList, outputPath) {
  var targetPath = path.join(outputPath, '../');
  var FFModelPath = path.join(targetPath, './FetchFastModel');
  if (!fs.existsSync(FFModelPath)) {
    mkdirp(FFModelPath, function () {
      var FFModelGroup = groupArrayByKey(configList, 'FFModelCombine');
      FFModelGroup.forEach(function (data) {
        var _combinePath = path.join(FFModelPath, '/' + data.FFModelCombine);
        mkdirp(_combinePath, function () {
          var fileStr = (0, _FFModel.getTemplate)(generaFFModelFileStr(getTemplateFFModel(data.data)));
          console.log(fileStr, _combinePath, 'fileStrfileStr');
          (0, _generateFile.generateFile)(fileStr, _combinePath, 'index.js');
        });
      });
    });
  }
}

function getTemplateFFModel(api) {
  var _return = api.map(function (item) {
    return {
      key: item.name,
      initialProps: {
        data: []
      },
      select: function select(res) {
        console.log(item.name + '\'s response is: ' + res);
        return {
          data: []
        };
      },
      error: function error(_error) {
        return _error;
      }
    };
  });
  return _return;
}

function generaFFModelFileStr(list) {
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
  console.log(',arrayOutputStrarrayOutputStr', arrayOutputStr);
  return arrayOutputStr;
}

function groupArrayByKey(arr) {
  var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'none';

  var _return = [];
  arr.forEach(function (a) {
    var _find = _return.find(function (f) {
      return f[key] === a[key];
    });
    if (_find) {
      _find.data.push(a);
    } else {
      var _return$push;

      _return.push((_return$push = {}, _defineProperty(_return$push, key, a[key]), _defineProperty(_return$push, 'data', [].concat(a)), _return$push));
    }
  });
  return _return;
}