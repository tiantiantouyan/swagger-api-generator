import { generateFile } from '../util/generate-file'
var path = require('path')
var fs = require('fs')
var mkdirp = require('mkdirp')
var shell = require('shelljs');


const RELY_FILES = [
	'utils.js',
	'client.js'
]

export function genereteRelyFiles (outputPath) {
	if (!fs.existsSync(outputPath)) {
		mkdirp(outputPath, generate(outputPath))
	} else {
		generate (outputPath)
	}
}

function generate (outputPath) {
	RELY_FILES.forEach(file => {
		const templatePath = path.join(path.dirname(module.id), `../../src/templates/${file}`)
		const targetPath = path.join(outputPath, file)
		console.log(templatePath, targetPath, 'targetPath');
		if (!fs.existsSync(targetPath)) {
				// shell.echo('Sorry, this script requires git');
				// shell.cp('-Rf', templatePath, `${outputPath}/`);
				// shell.exec('git commit -am "swagger api generate file"')
				const template = fs.readFileSync(templatePath, 'utf8').toString()
				console.log('targetPath,', targetPath, );
				generateFile(template, outputPath, file)
				// fs.writeFileSync(targetPath, template,'utf8');


			// fs.writeFile(targetPath, 'default', function () {
			// 	const template = fs.readFileSync(templatePath, 'utf8')
			// 	fs.writeFileSync(targetPath, template);
			// 	// fs.createReadStream(originPath).pipe(fs.createWriteStream(targetPath));
			// });
		}
	})
}