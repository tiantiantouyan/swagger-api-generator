"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof3 = require("babel-runtime/helpers/typeof");

var _typeof4 = _interopRequireDefault(_typeof3);

exports.stringObject = stringObject;

var _getTabIndent = require("./getTabIndent");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var class2type = {};
"Boolean Number String Function Array Date RegExp Object Error".split(" ").forEach(function (e, i) {
	class2type["[object " + e + "]"] = e.toLowerCase();
});
//当然为了兼容IE低版本，forEach需要一个polyfill，不作细谈了。
function _typeof(obj) {
	if (obj == null) {
		return String(obj);
	}
	return (typeof obj === "undefined" ? "undefined" : (0, _typeof4.default)(obj)) === "object" || typeof obj === "function" ? class2type[class2type.toString.call(obj)] || "object" : typeof obj === "undefined" ? "undefined" : (0, _typeof4.default)(obj);
}

function formatTransfer(origin, content, isLast) {
	if (isLast) {
		return (origin += content) + "\n";
	} else {
		return (origin += content) + ",\n";
	}
}

function generateObjBody(object, tabIndex) {
	var str = '';
	Object.keys(object).forEach(function (p, index) {
		var member = object[p];
		var isLast = index === Object.keys(object).length - 1;
		var indent = (0, _getTabIndent.getTabIndent)(tabIndex);
		switch (_typeof(member)) {
			case 'object':
				{
					var content = "" + indent + p + ": " + stringObject(member, tabIndex);
					str = formatTransfer(str, content, isLast);
					break;
				}
			case 'function':
				{
					var _content = "" + indent + p + ": " + member;
					str = formatTransfer(str, _content, isLast);
					break;
				}
			case 'array':
				{
					var _content2 = "" + indent + p + ": " + generateArrayStr(member, tabIndex);
					str = formatTransfer(str, _content2, isLast);
					break;
				}
			case 'boolean':
				{
					var _content3 = "" + indent + p + ": " + member;
					str = formatTransfer(str, _content3, isLast);
					break;
				}
			default:
				{
					var _content4 = "" + indent + p + ": \"" + member + "\"";
					str = formatTransfer(str, _content4, isLast);
					break;
				}
		}
	});
	return str;
}

function generateArrayStr(array, tabIndex) {
	return "[\n" + getArrayContent(array, tabIndex + 1) + (0, _getTabIndent.getTabIndent)(tabIndex) + "]";
}

function getArrayContent(array, tabIndex) {
	var str = '';
	var indent = (0, _getTabIndent.getTabIndent)(tabIndex);
	array.forEach(function (data, i) {
		var isLastArrayElement = i === array.length - 1;
		switch (_typeof(data)) {
			case 'object':
				{
					var content = "" + indent + stringObject(data, tabIndex);
					str = formatTransfer(str, content, isLastArrayElement);
					break;
				}
			case 'string':
				{
					var _content5 = indent + "\"" + data + "\"";
					str = formatTransfer(str, _content5, isLastArrayElement);
					break;
				}
		}
	});
	return str;
}

function stringObject(object) {
	var tabIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

	var indent = (0, _getTabIndent.getTabIndent)(tabIndex);
	return "{\n" + generateObjBody(object, tabIndex + 1) + indent + "}";
}