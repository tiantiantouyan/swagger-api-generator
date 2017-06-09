'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.generateFile = generateFile;
var path = require('path');
var fs = require('fs');
var mkdirp = require('mkdirp');

function generateFile(fileStr, outputPath, outputName) {
	!fs.existsSync(outputPath) ? mkdirp(outputPath, function () {
		fs.writeFileSync(path.join(outputPath, outputName), fileStr);
	}) : fs.writeFileSync(path.join(outputPath, outputName), fileStr);
}