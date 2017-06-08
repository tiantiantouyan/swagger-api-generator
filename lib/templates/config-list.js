"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getConfigListTemplate = getConfigListTemplate;
var fileHeadInfo = "\n/** \u5728\u672C\u6587\u4EF6\u4E2D\u4F60\u9700\u8981\u505A\u7684\u5C31\u662F\u7ED9\u6BCF\u4E00\u4E2A\u901A\u8FC7swagger\u751F\u6210\u5E76\u4E14\u4E4B\u524D\u672A\u505A\u8FC7\u914D\u7F6E\u7684\u7684api\u8FDB\u884C\u914D\u7F6E **/\n\n" + "// {\n" + "//   description: swaggerApiObject\u7684\u63CF\u8FF0\u5B57\u6BB5,\n" + "//   method: api\u7684\u8BF7\u6C42\u65B9\u6CD5,\n" + "//   path: api\u8BF7\u6C42\u540E\u7F00\u5730\u5740,\n" + "//   parameters: api\u8BF7\u6C42\u65F6\u53EF\u80FD\u9700\u8981\u7684\u53C2\u6570,\n" + "//   tags: swaggerApiObject\u7ED9api\u6253\u4E0A\u7684tag\uFF0C\u7528\u4E8E\u540E\u53F0api\u7BA1\u7406,\n" + "//   needAuth: \u5B58\u5728\u8BE5\u5B57\u6BB5\u65F6\u5E76\u4E14\u4E3Atrue\u65F6\u8C03\u7528api\u65F6\u4F1A\u7ED1\u5B9A\u7528\u6237access_token,\n" + "//   easySignature: \u5B58\u5728\u8BE5\u5B57\u6BB5\u65F6\u5E76\u4E14\u4E3Atrue\u65F6\u8C03\u7528api\u4F1A\u751F\u6210\u53C2\u6570\u7B7E\u540D,\n" + "//   formData:\u5B58\u5728\u8BE5\u5B57\u6BB5\u65F6\u5E76\u4E14\u4E3Atrue\u65F6\u8C03\u7528api\u65F6\u4F7F\u7528\u8868\u5355\u63D0\u4EA4\u7684\u63A5\u53E3\u914D\u7F6E api.formDataRequest\n" + "//   middleware:\u51FD\u6570\uFF0C\u5C06\u914D\u7F6E\u597D\u7684api\u53C2\u6570\u4F20\u9012\u51FA\u6765\u505A\u81EA\u5B9A\u4E49\u5904\u7406\uFF0C\u9700\u8981return\u65B0\u7684api config\n" + "// }\n\n" + "// \u53EF\u4EE5\u8BBF\u95EE\u9644\u5C5E\u540E\u53F0\n" + "// http://localhost:1000/editme\n" + // 这里编辑后台对应的路由
"// \u67E5\u770BconfigList\u8868\u683C\uFF0C\u8FDB\u884C\u67E5\u770B\u4F60\u672A\u914D\u7F6EFFmodel\u7684api\u7B49\u64CD\u4F5C\n";

function getConfigListTemplate(str) {
  return fileHeadInfo + "\n" + ("const configList = [\n" + str + "]\n\n") + "module.exports = configList\n";
}