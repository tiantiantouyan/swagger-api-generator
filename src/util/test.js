var fs = require('fs')
var path = require('path')
var jsonfile = require('jsonfile')



export function test (basePath, source, outputOpt) {
	const filePath = path.join(basePath, source)
	console.log(filePath, 'filePathfilePath');
	jsonfile.readFile(filePath, function(err, swaggerObj) {
		// const configList = generateConfigList(swaggerObj)
	  console.log(swaggerObj, swaggerObj.version)
	})

	// const file = fs.existsSync(filePath) ? require(source) : null
	// 判断验证
	// console.log(file, outputOpt, 'asdsadsadasd');
}