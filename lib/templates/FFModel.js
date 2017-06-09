"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getTemplate = getTemplate;
var fileHeadInfo = function fileHeadInfo() {
	return "// {\n" + "//   key: model\u7684key,\n" + "//   initialProps: \u521D\u59CB\u5BFC\u5165\u7ED9\u7EC4\u4EF6\u7684\u6570\u636E,\n" + "//   select: \u8BF7\u6C42\u6210\u529F\u540E\u7684\u6570\u636E\u7B5B\u9009\u51FD\u6570,\n" + "//   error: \u9519\u8BEF\u6570\u636E\u7B5B\u9009\u51FD\u6570\n" + "// }\n\n" + "// \u4F7F\u7528\u65F6\u5C06FFModel\u6587\u4EF6\u5939\u540D\u79F0\u653E\u5165\u5230\u9875\u9762\u7684model\u4E0B\n" + ("// \u672C\u6587\u4EF6\u751F\u6210\u65F6\u95F4\uFF1A" + getDate(new Date()) + "\n");
};

function getTemplate(str) {
	return fileHeadInfo() + "\n" + ("const FFModelCombine = [\n" + str + "]\n\n") + "module.exports = FFModelCombine\n";
}

function getDate(d) {
	return ("0" + d.getDate()).slice(-2) + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" + d.getFullYear() + " " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2);
}