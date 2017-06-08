var fs = require('fs')

const fileHeadInfo = () => {
	return `\n` + `${fs.readFileSync('./config-list-header.js', 'utf8').toString()}`
	  `// 本文件更新时间：${getDate(new Date())}\n`
}

export function getConfigListTemplate (str) {
	return `${fileHeadInfo()}\n` +
    `const configList = [\n${str}]\n\n` +
    `module.exports = configList\n`
}

function getDate (d) {
	return ("0" + d.getDate()).slice(-2) + "-" + ("0"+(d.getMonth()+1)).slice(-2) + "-" +
  	d.getFullYear() + " " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2);
}