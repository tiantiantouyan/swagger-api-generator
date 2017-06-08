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
	generateFFModelFolder,
	genereteRelyFiles
} from '../models';
import { generateFile } from '../util/generate-file'

export async function init () {
	let excuteConfig = defaultConfig
	const configPath = path.join(basePath, './swagger-api-config.json')
	jsonfile.readFile(configPath, function(err, config) {
	  // console.log(err, config, 'jsonfilereadFile')
		if (err) {
			console.warn(chalk.blue('cannot find swagger-api-config.json, please define this file\n'))
			return;
		}
		if (config) {
			excuteConfig = {
				...excuteConfig,
				...config
			}
		}

		const {
			inputMode,
			inputPath,
			outputPath,
			outputMode
		} = excuteConfig

		if (!inputPath) {
			console.log(chalk.blue('"inputPath" is undefined, please define this parameter\n'))
			return;
		}

		if (inputMode !== 'url') {
			excuteConfig.inputPath = path.join(basePath, inputPath)
		}
		excuteConfig.outputPath = path.join(basePath, outputPath)
		const configList = getInitConfigList(excuteConfig)
			.then(function (configList) {
				generateOutput (configList, outputPath, outputMode)
			})
	})
}

function generateOutput (configList, outputPath, outputMode) {
		if (!(configList && configList.length)) {
			console.log(chalk.bgRed('未读取到swagger api 相关数据，请检查数据源:json格式是否正确或者网络请求是否正常'));
			return;
		}
		switch (outputMode) {
			case 'default':
			default: {
				const configListOutput = generateConfigList(configList)
				const ApiListOutput = generateApiList(configList)
				generateFile(configListOutput, outputPath, 'api-config-list.js')
				generateFile(ApiListOutput, outputPath, 'index.js')
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
				generateFFModelFolder(configList, outputPath)
				generateFile(configListOutput, outputPath, 'api-config-list.js')
				generateFile(ApiListOutput, outputPath, 'index.js')
				// generateFFModelFolder(ApiListOutput, outputPath)
				break;
			}
		}
		genereteRelyFiles(outputPath)
		console.log(chalk.white('┌────────────────────────────────────────────────────────────────────────────┐'));
		console.log(chalk.white('│ complete !                                                                 │'));
		console.log(chalk.white('│ complete !                                                                 │'));
		console.log(chalk.white('│ complete !                                                                 │'));
		console.log(chalk.white('│ complete !                                                                 │'));
		console.log(chalk.white('│ complete !                                                                 │'));
		console.log(chalk.white('│ complete !                                                                 │'));
		console.log(chalk.white('└────────────────────────────────────────────────────────────────────────────┘'));
}