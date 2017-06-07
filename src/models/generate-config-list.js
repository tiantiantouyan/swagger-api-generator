
import path from 'path'
import jsonfile from 'jsonfile'
import { generateFile } from '../util/generate-file'
import { getConfigList } from '../util/get-api-config-list'


export function generateConfigList(config) {
	const {
 		inputMode,
		inputPath,
  	outputPath,
	} = config
	let output = null
	switch (inputMode) {
		case 'json': {
			output = generateByJson(inputPath, outputPath);
			break;
		}
		case 'url':  {
			output = generateByUrl(inputPath, outputPath);
			break;
		}
		default: {
			output = generateByJson(inputPath, outputPath);break;
		}
	}

	generateFile(output, outputPath, 'api-config-list.js')

}

function generateByJson (inputPath, outputPath) {
	jsonfile.readFile(inputPath, function(err, swaggerObj) {
		if (swaggerObj) {
			const configListPath = path.join(outputPath, 'api-config-list.js')
			let apiConfigList = fs.existsSync(configListPath) ? require(configListPath) : []
			getConfigList(originList, swaggerObj)
		} else {
			console.warn('error occur in generateByJson')
		}
	})
}

function generateByUrl (url) {
	console.log('敬请期待');
}