import path from 'path'
import chalk from 'chalk';
import jsonfile from 'jsonfile'
import { getInitConfigList } from './getInitConfigList'
import {
	basePath,
	defaultConfig
} from '../config';
import {
	generateConfigList,
	generateApiList,
	generateFFModel
} from '../models';
import { generateFile } from '../util/generate-file'

export function init () {
	let excuteConfig = defaultConfig
	const configPath = path.join(basePath, './swagger-api-config.json')
	jsonfile.readFile(configPath, function(err, config) {
	  console.log(err, config, 'jsonfilereadFile')
		if (err) {
			console.log(chalk.blue('cannot find swagger-api-config.json, please define this file\n'))
			return;
		}
		if (config) {
			excuteConfig = {
				...excuteConfig,
				...config
			}
		}
		if (!excuteConfig.inputPath) {
			console.log(chalk.blue('"inputPath" is undefined, please define this parameter\n'))
			return;
		}
		excuteConfig.inputPath = path.join(basePath, excuteConfig.inputPath)
		excuteConfig.outputPath = path.join(basePath, excuteConfig.outputPath)

		const configList = getInitConfigList(excuteConfig)

		console.log('configListconfigList', configList);
		const {
			outputPath,
			outputMode
		} = excuteConfig
		switch (outputMode) {
			case 'default':
			default: {
				const configListOutput = generateConfigList(configList)
				const ApiListOutput = generateApiList(configList)
				generateFile(configListOutput, outputPath, 'api-config-list.js')
				// generateFile(ApiListOutput, outputPath, 'index.js')
				break;
			}
			case 'apiOnly': {
				const ApiListOutput = generateApiList(configList)
				generateFile(ApiListOutput, outputPath, 'index.js')
				break;
			}
			case 'all': {
				const configListOutput = generateConfigList(configList)
				const ApiListOutput = generateApiList(configList)
				const FFModelOutput = generateFFModel(configList)
				generateFile(configListOutput, outputPath, 'api-config-list.js')
				generateFile(ApiListOutput, outputPath, 'index.js')
				// generateFFModelFolder(ApiListOutput, outputPath)
				break;
			}
		}
	})
}