var path = require('path')
var fs = require('fs')
var mkdirp = require('mkdirp')

export function generateFile (fileStr, outputPath, outputName) {
	!fs.existsSync(outputPath)
	? mkdirp(outputPath, function () {
		fs.writeFileSync(path.join(outputPath, outputName), fileStr)
	})
	: fs.writeFileSync(path.join(outputPath, outputName), fileStr)
}