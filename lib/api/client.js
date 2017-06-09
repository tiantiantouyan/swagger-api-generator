'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resServer = undefined;

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var baseURL = 'http://ec2-52-201-242-128.compute-1.amazonaws.com/mocks/f4b769f1-2344-4208-8715-e268db1ea14a';
var resServer = 'https://res.tiantiantouyan.com/res';

// if (__API_DEV__) {
//   // baseURL = `http://192.168.1.100:808/api`
//   // resServer = `http://192.168.1.100:808/res`
//   baseURL = `http://ec2-52-201-242-128.compute-1.amazonaws.com/mocks/f4b769f1-2344-4208-8715-e268db1ea14a`
//   resServer = `https://res.tiantiantouyan.com/res`
// } else if (__API_TEST__) {
//   baseURL = `http://wechat.tiantiantouyan.com/api`
//   resServer = `http://wechat.tiantiantouyan.com/res`
// } else if (__API_RC__) {
//   baseURL = `https://rc.wechat.tiantiantouyan.com/api`
//   resServer = `https://res.tiantiantouyan.com/res`
// } else if (__API_PROD__) {
//   baseURL = `https://wechat.tiantiantouyan.com/api`
//   resServer = `https://res.tiantiantouyan.com/res`
// }

var commonConfig = {
  baseURL: baseURL,
  timeout: 30 * 1000
  // headers: { 'Access-Control-Allow-Origin': true }
};

var v1 = _axios2.default.create(Object.assign(commonConfig, {
  baseURL: baseURL + '/v1'
}));

function v1Request(config) {
  return v1.request(config).then(function (response) {
    return { response: response.data };
  }).catch(function (error) {
    return { error: error };
  });
}

function v1FormDataRequest(_ref) {
  var url = _ref.url,
      attachment = _ref.attachment,
      Authorization = _ref.Authorization;
  // 上传图片类型的请求模型
  var formDataconfig = {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  };
  if (Authorization) formDataconfig.headers.Authorization = Authorization;
  return _axios2.default.post(baseURL + '/v1' + url, attachment, formDataconfig).then(function (response) {
    return { response: response.data };
  }).catch(function (error) {
    return { error: error };
  });
}

exports.resServer = resServer;
exports.default = { v1: v1, baseURL: baseURL, v1Request: v1Request, v1FormDataRequest: v1FormDataRequest };