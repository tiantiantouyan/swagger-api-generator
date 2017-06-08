import commander from 'commander';
import { version } from '../version';
import { generateFile } from '../util/generate-file'
import { basePath } from '../config'
import chalk from 'chalk';
var fs = require('fs')
var path = require('path')

const program = commander;

program
  .version(version());

const configStr = `{\n` +
	`\t"inputMode": "json", // "json", "url"\n` +
	`\t"inputPath": "./swagger.json", // relative path\n` +
	`\t"outputMode": "default", // "default", "apiOnly", "all"\n` +
	`\t"outputPath": "./src/api" // relative path\n`  +
`}\n`

if (!fs.existsSync(path.join(basePath, './swagger-api-config'))) {
	generateFile(configStr, basePath, 'swagger-api-config.json')
	console.log(chalk.bgYellow('成功生成swagger-api-config.json配置文件'));
}


program.parse(process.argv);
