const fileHeadInfo = () => {
	return `// apiRequest是一个封装了axios请求的函数\n` +
	  `// https://github.com/mzabriskie/axios\n` +
	  `// 你也可以自己定义 apiRequest 来发起客户端网络请求\n` +
	  `// 本文件更新时间：${new Date().toDateString()}\n` +
	  `import api from './client'\n\n` +
	  `import { forEach } from './utils'\n` +
	  `// 本文件使用configList生成器生成的configList文件生成，请不要手动修改\n\n`
}


	export function getApiListTemplate (outputStr) {
	  return `${fileHeadInfo()}${outputStr}\n`
	}