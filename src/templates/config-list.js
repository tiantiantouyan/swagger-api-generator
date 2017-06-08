const fileHeadInfo = () => {
	return `/* ┌────────────────────────────────────────────────────────────────────────────┐  */\n` +
		`/**\n` +
		 `* 默认字段\n`+
		 `* @param {description} [string] api的描述\n` +
		 `* @param {method} [string] api的请求方法\n` +
		 `* @param {path} [string] api请求后缀地址\n` +
		 `* @param {parameters} [string] api请求时可能需要的参数\n` +
		 `* @param {tags} [string] api的标签\n` +
		 `*/` +
		`/*  └────────────────────────────────────────────────────────────────────────────┘ */\n` +
		`\n` +
		`/* ┌────────────────────────────────────────────────────────────────────────────┐  */\n` +
		`/**\n` +
		 `* 可选字段\n` +
		 `* @param {needAuth} [bool] true时调用api时会读取用户信息, !仅仅是在api的function内部读出userid与token，调用时仍要保证传入用户信息，可使用封装函数callBindAuth\n` +
		 `* @param {easySignature} [bool] true时调用api会生成参数签名\n` +
		 `* @param {formData} [bool] true时调用api时使用表单提交的方法配置: api.formDataRequest\n` +
		 `*/\n` +
		`/*  └────────────────────────────────────────────────────────────────────────────┘ */\n` +
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