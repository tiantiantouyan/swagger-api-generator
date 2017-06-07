
import path from 'path'
import jsonfile from 'jsonfile'
import { generateFile } from '../util/generate-file'


export function generateConfigList(basePath, sourcePath, outputOption) {
	const filePath = path.join(basePath, sourcePath)
	jsonfile.readFile(filePath, function(err, swaggerObj) {
		// const configList = generateConfigList(swaggerObj)
	  console.log(swaggerObj, swaggerObj.version)
		generateFile('sss',  basePath, 'output.js')
	})
}
