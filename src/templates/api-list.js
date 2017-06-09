var fs = require('fs')

const fileHeadInfo = () => {
	return `/* ┌────────────────────────────────────────────────────────────────────────────┐  */\n` +
		`\n` +
		`// apiRequest是一个封装了axios请求的函数\n` +
		`// https://github.com/mzabriskie/axios\n` + 
		`// 你也可以在./client下自定义_apiRequest_方法来发起客户端网络请求\n` + 
		`// easySignature 是使用签名算法对api参数进行加密，如果在api-config-list中配置了使用签名算法，则api调用中使用easySignature算法\n` +
		`\n` +
		`/*  └────────────────────────────────────────────────────────────────────────────┘ */\n` +
		`\n` +
		`// 本文件生成时间：${getDate(new Date())}\n` +
		`\n` +
		`// import { easySignature } from './signature' // 手动使用\n` +
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