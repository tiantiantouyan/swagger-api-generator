'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.easySignature = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _lodash = require('utils/lodash');

var _orderBy = require('lodash/orderBy');

var _orderBy2 = _interopRequireDefault(_orderBy);

var _jsSha = require('js-sha1');

var _jsSha2 = _interopRequireDefault(_jsSha);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var secret = 'FhPRw8bwAVWTcjNNTp4G'; // 本文件为可选文件，不需要签名请求的项目可删除本文件
// 本文件的相关依赖库需要自己安装，比如下面的 lodash以及js-sha1
// 当部分api需要配置签名时，使用到的签名方法来自此文件

function makeupArgs(args) {
  var ordered = (0, _orderBy2.default)((0, _lodash.toPairs)(args), 0, ['desc']);
  return (0, _lodash.join)((0, _lodash.map)(ordered, function (i) {
    return (0, _lodash.join)(i, '=');
  }), '&&');
}

function signature(args) {
  var encoded = makeupArgs(args);
  return (0, _jsSha2.default)(encoded);
}

function easySignature() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var args = (0, _extends3.default)({}, params);
  args.secret = secret;
  args.timestamp = new Date().getTime();
  args.noncestr = Math.random().toString(36).slice(2);
  return (0, _extends3.default)({}, params, {
    timestamp: args.timestamp,
    noncestr: args.noncestr,
    signature: signature(args)
  });
}

exports.easySignature = easySignature;
exports.default = signature;