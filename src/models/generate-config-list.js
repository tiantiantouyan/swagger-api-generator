
import path from 'path'
import fs from 'fs'
import jsonfile from 'jsonfile'
import chalk from 'chalk';
import { generateFile } from '../util/generate-file'
import { getConfigList } from '../util/get-api-config-list'
import { readJsonSync } from 'fs-extra';

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
	console.log(output, 'outputoutput');
	generateFile(output, outputPath, 'api-config-list.js')
}

function generateByJson (inputPath, outputPath) {
	const swaggerObj = readJsonSync(inputPath)
	if (swaggerObj) {
		const configListPath = path.join(outputPath, 'api-config-list.js')
		let apiConfigList = fs.existsSync(configListPath) ? require(configListPath) : []
		if (!apiConfigList.length) apiConfigList = []
		return getConfigList(apiConfigList, swaggerObj)
	} else {
		console.warn(chalk.blue('error occur in generateByJson'))
		return 'error occur in generateByJson'
	}
}

function generateByUrl (url) {
	console.log('敬请期待');
}