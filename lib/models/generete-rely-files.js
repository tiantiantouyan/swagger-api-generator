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
		console.log(templatePath, targetPath, 'targetPath');
		if (!fs.existsSync(targetPath)) {
			// shell.echo('Sorry, this script requires git');
			// shell.cp('-Rf', templatePath, `${outputPath}/`);
			// shell.exec('git commit -am "swagger api generate file"')
			var template = fs.readFileSync(templatePath, 'utf8').toString();
			console.log('targetPath,', targetPath);
			(0, _generateFile.generateFile)(template, outputPath, file
			// fs.writeFileSync(targetPath, template,'utf8');


			// fs.writeFile(targetPath, 'default', function () {
			// 	const template = fs.readFileSync(templatePath, 'utf8')
			// 	fs.writeFileSync(targetPath, template);
			// 	// fs.createReadStream(originPath).pipe(fs.createWriteStream(targetPath));
			// });
			);
		}
	});
}