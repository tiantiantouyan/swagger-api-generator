import path from 'path';

export const basePath = process.cwd()

export const pkgBasePath = path.dirname(module.id)

export const defaultConfig = {
	"inputMode": "json",  //  "json", "url"
	"outputMode": "default", //  "default", "apiOnly", "all (include FFModel)"
	"outputPath": "./src/api" // relative path
}
