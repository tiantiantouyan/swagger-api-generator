const fileHeadInfo = () => {
	return `// apiRequest是一个封装了axios请求的函数\n` +
	  `// https://github.com/mzabriskie/axios\n` +
	  `// 你也可以在./client下 自定义 apiRequest 来发起客户端网络请求\n` +
	  `// 本文件更新时间：${getDate(new Date())}\n` +
	  `import api from './client'\n` +
	  `import { forEach } from './utils'\n\n`
}


	export function getApiListTemplate (outputStr) {
	  return `${fileHeadInfo()}${outputStr}\n`
	}

	function getDate (d) {
		return ("0" + d.getDate()).slice(-2) + "-" + ("0"+(d.getMonth()+1)).slice(-2) + "-" +
    	d.getFullYear() + " " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2);
	}