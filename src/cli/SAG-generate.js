import commander from 'commander';
import { version } from '../version';
import { init } from './init';
import chalk from 'chalk';

const program = commander;
let inputPath
let outputPath
let outputMode = 'default'

program
  .version(version())
  .option("-d, --default", "default outputMode")
  .option("-a, --apiOnly", "only output api function list")
  .option("-A, --all", "output include FetchFastModel")
	.command('<ip> [op]', 'user define')
  .action(function (ip, op) {
		inputPath = ip
		outputPath = op
		console.log(chalk.magenta(`inputPath: ${inputPath}\noutputPath: ${outputPath}`));
  })

program
  .parse(process.argv);


if (inputPath) {
	if (!outputPath) {
		console.log(chalk.bgGreen('未输入输出路径，使用默认路径输出，/SAG'));
	}
	if (program.apiOnly) outputMode = 'apiOnly'
	if (program.all) outputMode = 'all'
	function getInputMode (inputPath) {
		const _matchJson = inputPath.match(/\.json/g)
		const _matchHttp = inputPath.match(/^((http|https):\/\/)/g)
		if (_matchHttp && _matchHttp.length) return 'url'
		if (_matchJson && _matchJson.length) return 'json'
		console.log(chalk.bgRed('输入路径的格式不正确，请确认使用.json文件或者http|https请求'));
		return
	}
	const excConfig = {
		inputPath,
		inputMode: getInputMode(inputPath),
		outputPath: outputPath || './SAG',
		outputMode
	}
	console.log(chalk.magenta(`执行输出配置excConfig:`), excConfig, '\n');
	init(excConfig)
} else {
	init()
}




