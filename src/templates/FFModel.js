const fileHeadInfo = () => {
	return   `// {\n` +
	  `//   key: model的key,\n` +
	  `//   initialProps: 初始导入给组件的数据,\n` +
	  `//   select: 请求成功后的数据筛选函数,\n` +
	  `//   error: 错误数据筛选函数\n` +
	  `// }\n\n` +
	  `// 使用时将FFModel文件夹名称放入到页面的model下\n` +
	  `// 本文件生成时间：${getDate(new Date())}\n`
}

	export function getTemplate (str) {
		return `${fileHeadInfo()}\n` +
      `const FFModelCombine = [\n${str}]\n\n` +
      `module.exports = FFModelCombine\n`
	}

function getDate (d) {
	return ("0" + d.getDate()).slice(-2) + "-" + ("0"+(d.getMonth()+1)).slice(-2) + "-" +
  	d.getFullYear() + " " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2);
}