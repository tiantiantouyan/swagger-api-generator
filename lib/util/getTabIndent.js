'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getTabIndent = getTabIndent;
function getTabIndent(tabIndex) {
	var indent = '';
	new Array(tabIndex + 1).fill(null).forEach(function (_, i) {
		indent += '\t';
	});
	return indent;
}