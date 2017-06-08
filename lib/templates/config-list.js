"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _templateObject = _taggedTemplateLiteral(["// }\n\n"], ["// }\\n\\n"]);

exports.getConfigListTemplate = getConfigListTemplate;

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var fileHeadInfo = function fileHeadInfo() {
	return "// {\n" + "//   description: api\u7684\u63CF\u8FF0,\n" + "//   method: api\u7684\u8BF7\u6C42\u65B9\u6CD5,\n" + "//   path: api\u8BF7\u6C42\u540E\u7F00\u5730\u5740,\n" + "//   parameters: api\u8BF7\u6C42\u65F6\u53EF\u80FD\u9700\u8981\u7684\u53C2\u6570,\n" + "//   tags: api\u7684\u6807\u7B7E,\n" + "//   needAuth: \u5B58\u5728\u8BE5\u5B57\u6BB5\u65F6\u5E76\u4E14\u4E3Atrue\u65F6\u8C03\u7528api\u65F6\u4F1A\u7ED1\u5B9A\u7528\u6237access_token,\n" + "//   easySignature: \u5B58\u5728\u8BE5\u5B57\u6BB5\u65F6\u5E76\u4E14\u4E3Atrue\u65F6\u8C03\u7528api\u4F1A\u751F\u6210\u53C2\u6570\u7B7E\u540D,\n" + "//   formData:\u5B58\u5728\u8BE5\u5B57\u6BB5\u65F6\u5E76\u4E14\u4E3Atrue\u65F6\u8C03\u7528api\u65F6\u4F7F\u7528\u8868\u5355\u63D0\u4EA4\u7684\u63A5\u53E3\u914D\u7F6E api.formDataRequest\n"(_templateObject) + "// \u53EF\u4EE5\u8BBF\u95EE\u9644\u5C5E\u540E\u53F0\n" + "// http://localhost:1000/editme\n" + // 这里编辑后台对应的路由
	"// \u67E5\u770BconfigList\u5217\u8868\n" + ("// \u672C\u6587\u4EF6\u66F4\u65B0\u65F6\u95F4\uFF1A" + new Date().toDateString() + "\n");
};

function getConfigListTemplate(str) {
	return fileHeadInfo + "\n" + ("const configList = [\n" + str + "]\n\n") + "module.exports = configList\n";
}