import path from 'path';

export const basePath = process.cwd()

export const pkgBasePath = path.dirname(module.id)

export const defaultConfig = {
	"inputMode": "json",
	"outputMode": "default", //  "default", "simple", "FFModel"
	"outputPath": "./src/api"
}
