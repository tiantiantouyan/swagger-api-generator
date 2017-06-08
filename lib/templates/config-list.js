'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['// \u672C\u6587\u4EF6\u66F4\u65B0\u65F6\u95F4\uFF1A', '\n'], ['// \u672C\u6587\u4EF6\u66F4\u65B0\u65F6\u95F4\uFF1A', '\\n']);

exports.getConfigListTemplate = getConfigListTemplate;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fs = require('fs');

var fileHeadInfo = function fileHeadInfo() {
	return '\n' + ('' + fs.readFileSync('./config-list-header.js', 'utf8').toString())(_templateObject, getDate(new Date()));
};

function getConfigListTemplate(str) {
	return fileHeadInfo() + '\n' + ('const configList = [\n' + str + ']\n\n') + 'module.exports = configList\n';
}

function getDate(d) {
	return ("0" + d.getDate()).slice(-2) + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" + d.getFullYear() + " " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2);
}