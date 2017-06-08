const fileHeadInfo =
  `\n/** 在本文件中你需要做的就是给每一个通过swagger生成并且之前未做过配置的的api进行配置 **/\n\n` +
  `// {\n` +
  `//   description: swaggerApiObject的描述字段,\n` +
  `//   method: api的请求方法,\n` +
  `//   path: api请求后缀地址,\n` +
  `//   parameters: api请求时可能需要的参数,\n` +
  `//   tags: swaggerApiObject给api打上的tag，用于后台api管理,\n` +
  `//   needAuth: 存在该字段时并且为true时调用api时会绑定用户access_token,\n` +
  `//   easySignature: 存在该字段时并且为true时调用api会生成参数签名,\n` +
  `//   formData:存在该字段时并且为true时调用api时使用表单提交的接口配置 api.formDataRequest\n` +
  `//   middleware:函数，将配置好的api参数传递出来做自定义处理，需要return新的api config\n` +
  `// }\n\n` +
  `// 可以访问附属后台\n` +
  `// http://localhost:1000/editme\n` + // 这里编辑后台对应的路由
  `// 查看configList表格，进行查看你未配置FFmodel的api等操作\n`

	export function getConfigListTemplate (str) {
		return `${fileHeadInfo}\n` +
      `const configList = [\n${str}]\n\n` +
      `module.exports = configList\n`
	}