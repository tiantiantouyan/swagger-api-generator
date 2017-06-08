'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getApiListTemplate = getApiListTemplate;
var fs = require('fs');

var fileHeadInfo = function fileHeadInfo() {
	return '' + fs.readFileSync('./api-list-header.js', 'utf8').toString() + 'import api from \'./client\'\n' + 'import { forEach } from \'./utils\'\n\n';
};

function getApiListTemplate(outputStr) {
	return '' + fileHeadInfo() + outputStr + '\n';
}

function getDate(d) {
	return ("0" + d.getDate()).slice(-2) + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" + d.getFullYear() + " " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2);
}