const fileHeadInfo = () => {
	return   `// {\n` +
	  `//   description: api的描述,\n` +
	  `//   method: api的请求方法,\n` +
	  `//   path: api请求后缀地址,\n` +
	  `//   parameters: api请求时可能需要的参数,\n` +
	  `//   tags: api的标签,\n` +
	  `//   needAuth: 存在该字段时并且为true时调用api时会绑定用户access_token,\n` +
	  `//   easySignature: 存在该字段时并且为true时调用api会生成参数签名,\n` +
	  `//   formData:存在该字段时并且为true时调用api时使用表单提交的接口配置 api.formDataRequest\n`
	  `// }\n\n` +
	  `// 可以访问附属后台\n` +
	  `// http://localhost:1000/editme\n` + // 这里编辑后台对应的路由
	  `// 查看configList列表\n` +
	  `// 本文件更新时间：${new Date().toDateString()}\n`
}


	export function getConfigListTemplate (str) {
		return `${fileHeadInfo}\n` +
      `const configList = [\n${str}]\n\n` +
      `module.exports = configList\n`
	}