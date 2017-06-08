'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.genereteRelyFiles = genereteRelyFiles;

var _generateFile = require('../util/generate-file');

var path = require('path');
var fs = require('fs');
var mkdirp = require('mkdirp');
var shell = require('shelljs');

var RELY_FILES = ['utils.js', 'client.js'];

function genereteRelyFiles(outputPath) {
	if (!fs.existsSync(outputPath)) {
		mkdirp(outputPath, generate(outputPath));
	} else {
		generate(outputPath);
	}
}

function generate(outputPath) {
	RELY_FILES.forEach(function (file) {
		var templatePath = path.join(path.dirname(module.id), '../../src/templates/' + file);
		var targetPath = path.join(outputPath, file);
		if (!fs.existsSync(targetPath)) {
			var template = fs.readFileSync(templatePath, 'utf8').toString();
			(0, _generateFile.generateFile)(template, outputPath, file);
		}
	});
}