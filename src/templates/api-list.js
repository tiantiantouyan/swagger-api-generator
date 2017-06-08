const fileHeadInfo =
  `import api from './client'\n\n` +
  `// 本文件使用configList生成器生成的configList文件生成，请不要手动修改\n\n`

	export function getApiListTemplate (outputStr) {
	  return `${fileHeadInfo}${outputStr}\n`
	}