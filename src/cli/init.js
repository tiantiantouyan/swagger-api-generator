import path from 'path'
import chalk from 'chalk';
import jsonfile from 'jsonfile'
import {
	basePath,
	defaultConfig
} from '../config';
import {
	generateConfigList,
	generateApiList,
	generateFFModel
} from '../models';

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
		console.log(excuteConfig, 'excuteConfigexcuteConfig');

		switch (excuteConfig.outputMode) {
			case 'default':
			default: {
				generateConfigList(excuteConfig)
				generateApiList(excuteConfig)
				break;
			}
			case 'apiOnly': {
				generateApiList(excuteConfig)
				break;
			}
			case 'all': {
				generateConfigList(excuteConfig)
				generateApiList(excuteConfig)
				generateFFModel(excuteConfig)
				break;
			}
		}

		// generateFile('sss',  basePath, 'output.js')
	})

}