'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.generateFile = generateFile;
var path = require('path');
var fs = require('fs');

function generateFile(fileStr, outputPath, outputName) {
	fs.writeFileSync(path.join(outputPath, outputName), fileStr);
}