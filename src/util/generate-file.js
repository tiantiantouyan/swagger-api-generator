var path = require('path')
var fs = require('fs')

export function generateFile (fileStr, outputPath, outputName) {
	!fs.existsSync(outputPath)
	? fs.mkdir(outputPath, function () {
		fs.writeFileSync(path.join(outputPath, outputName), fileStr)
	})
	: fs.writeFileSync(path.join(outputPath, outputName), fileStr)
}