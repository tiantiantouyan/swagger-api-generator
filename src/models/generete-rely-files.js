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
		if (!fs.existsSync(targetPath)) {
			const template = fs.readFileSync(templatePath, 'utf8').toString()
			generateFile(template, outputPath, file)
		}
	})
}