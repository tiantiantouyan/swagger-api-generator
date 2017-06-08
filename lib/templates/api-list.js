"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getApiListTemplate = getApiListTemplate;
var fileHeadInfo = function fileHeadInfo() {
	return "// apiRequest\u662F\u4E00\u4E2A\u5C01\u88C5\u4E86axios\u8BF7\u6C42\u7684\u51FD\u6570\n" + "// https://github.com/mzabriskie/axios\n" + "// \u4F60\u4E5F\u53EF\u4EE5\u81EA\u5DF1\u5B9A\u4E49 apiRequest \u6765\u53D1\u8D77\u5BA2\u6237\u7AEF\u7F51\u7EDC\u8BF7\u6C42\n" + ("// \u672C\u6587\u4EF6\u66F4\u65B0\u65F6\u95F4\uFF1A" + new Date().toDateString() + "\n") + "import api from './client'\n\n" + "import { forEach } from './utils'\n" + "// \u672C\u6587\u4EF6\u4F7F\u7528configList\u751F\u6210\u5668\u751F\u6210\u7684configList\u6587\u4EF6\u751F\u6210\uFF0C\u8BF7\u4E0D\u8981\u624B\u52A8\u4FEE\u6539\n\n";
};

function getApiListTemplate(outputStr) {
	return "" + fileHeadInfo() + outputStr + "\n";
}