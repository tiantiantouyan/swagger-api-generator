var path = require('path')
var fs = require('fs')

export function generateFile (fileStr, outputPath, outputName) {
	fs.writeFileSync(path.join(outputPath, outputName), fileStr)
}