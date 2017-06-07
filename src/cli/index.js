import commander from 'commander';
import { version } from '../version';
import chalk from 'chalk';
import { generateConfigList } from '../models/generate-config-list';
import { basePath, defaultConfig } from '../config';
import jsonfile from 'jsonfile'
const program = commander;

// program
//   .version(version());

// program
// 	.usage('[command] [options] <?outputOption> <sourcePath>')
//   .command('generate', 'generates new code from json')
//   .command('g', 'alias for generate')
//   .option('-json', 'use local file')
//   .option('-url', 'use url fetch swagger api json data');

// program.parse(process.argv);


program
  .version('0.0.1')
  .description('config')
  // .option('-j, --json', 'use local json file')
  // .option('-u, --url', 'use url fetch swagger api json data')
  // .option('-d, --outputConfig', 'output default files')
  // .option('-a, --outputConfig', 'output all files include configList/index/FFModel')
  // .arguments('<sourcePath>')
  .action(function () {
		let excuteConfig = defaultConfig
		jsonfile.readFile(filePath, function(err, config) {
		  console.log(err, config, 'errerrerr')
			if (err) {
				console.log(chalk.blue('cannot find swagger-api-config.json, please define'))
				return;
			}
			if (config) {
				excuteConfig = {
					...excuteConfig,
					...config
				}
			}
			// generateFile('sss',  basePath, 'output.js')
		})

		if (!excuteConfig.inputPath) {
			console.log(chalk.blue('sourcePath is undefined'))
			return;
		}
		console.log(excuteConfig, 'excuteConfigexcuteConfig');
		// if (!sourcePath) {
		// 	console.log(chalk.blue('sourcePath is undefined'))
		// 	return;
		// }
		// console.log(basePath, sourcePath, 'sourcesource')
		// if (program.json) {
		// 	generateConfigList(basePath, sourcePath, program.outputConfig)
		// }
		// if (program.url) console.log('  - url');

  })
  .parse(process.argv);


console.log('asdsadsa');