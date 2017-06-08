import path from 'path'
import chalk from 'chalk';
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
import { readJsonSync } from 'fs-extra';

export function init (excuteConfig) {
	let config = excuteConfig
	if (!config) {
		const configJsonPath = path.join(basePath, './swagger-api-config.json')
		const userConfig = readJsonSync(configJsonPath)
		config = {
			...defaultConfig,
			...userConfig
		}
	}
	if (!checkConfig(config)) return;
	if (config.inputMode !== 'url') {
		config.inputPath = path.join(basePath, config.inputPath)
	}
	config.outputPath = path.join(basePath, config.outputPath)
	excuteOutput(excuteConfig)
}

function checkConfig (excuteConfig) {
	if (!excuteConfig)  {
		console.warn(chalk.blue('cannot find swagger-api-config.json, please define this file\n'))
		console.log(chalk.bgRed('没有找到配置文件 swagger-api-config.json，请定义'))
		return;
	}
	const {
		inputMode,
		inputPath,
		outputPath,
		outputMode
	} = excuteConfig
	if (!inputMode) {
		console.log(chalk.bgRed('"inputMode" is undefined, please define this parameter\n'))
		return;
	}
	if (!inputPath) {
		console.log(chalk.bgRed('"inputPath" is undefined, please define this parameter\n'))
		return;
	}
	if (!outputPath) {
		console.log(chalk.bgRed('"outputPath" is undefined, please define this parameter\n'))
		return;
	}
	if (!outputMode) {
		console.log(chalk.bgRed('"outputMode" is undefined, please define this parameter\n'))
		return;
	}
	return true
}

function excuteOutput (excuteConfig) {
	const {
		inputMode,
		inputPath,
		outputPath,
		outputMode
	} = excuteConfig
	const configList = getInitConfigList(excuteConfig)
		.then(function (configList) {
			generateOutput (configList, outputPath, outputMode)
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