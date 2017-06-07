var path = require('path')
var fs = require('fs')
var pathConfig = require('../config')


export function getConfigList (originList, swaggerObj) {
	// 遍历swagger api path
	// 如果没有该path存在，任何该path的方法都不存在，直接生成新的
	// 如果有该path的api存在
	// 如果该path下的某一个method不存在，则生在该method的api
	// 如果该method也存在
	// 遍历对比api parameters，如果有不同
	// 则更新该api
	console.log(originList, swaggerObj, 'getConfigList');
}








// var swaggerApi = require(`../${pathConfig.from}`)
// var configListPath = `../${pathConfig.configList}`
// let apiList = fs.existsSync(`${configListPath}.js`) ? require(configListPath) : []



// const configKeys = [
//   'FFModel',
//   'FFModelCombine',
//   'needAuth',
//   'formData',
//   'easySignature'
// ]
// // swaggerApiObject 是 path[某一个path][某一种方法] 如 path['/v1/users/{user_id}/attentions']['get']
// function generateApi (path, method, swaggerApiObject) {
//   let params = {}
//   if (swaggerApiObject.parameters) {
//     swaggerApiObject.parameters.forEach(param => {
//       const IN = param.in
//       if (!params[IN]) {
//         params[IN] = [].concat({
//           key: param.name,
//           require: param.required
//         })
//       } else {
//         params[IN].push({
//           key: param.name,
//           require: param.required
//         })
//       }
//     })
//   }
//   const defaultApi = {
//     description: swaggerApiObject.description,
//     method,
//     path,
//     parameters: params,
//     tags: swaggerApiObject.tags,
//     FFModelCombine: '暂无',
//     FFModel: '暂无'
//   }
//   configKeys.forEach(key => {
//     if (swaggerApiObject[key]) {
//       defaultApi[key] = swaggerApiObject[key]
//     }
//   })
//   return defaultApi
// }

// // 先过滤掉swaiggerApi中不存在的项目
// apiList = apiList.filter(api => {
//   let checkPath = ''
//   const findSwaggerPath = Object.keys(swaggerApi.paths).find(path => {
//     if (path === api.path) {
//       checkPath = path
//       return true
//     }
//     return false
//   })
//   if (!findSwaggerPath) {
//     return false // 过滤掉
//   } else {
//     const apiObj = swaggerApi.paths[checkPath]
//     const findSwaggerMehod = Object.keys(apiObj).find((method) => (method === api.method))
//     if (!findSwaggerMehod) return false
//   }
//   return true
// })

// Object.keys(swaggerApi.paths).forEach(path => {
//   const apiObj = swaggerApi.paths[path]
//   let _findIndex = ''
//   const _find = apiList.map((api, index) => {
//     if (api.path === path) {
//       _findIndex = index
//       return api
//     }
//   }).filter(a => !!a)[0]
//   if (!_find) {
//     Object.keys(apiObj).forEach(method => {
//       const api = generateApi(path, method, apiObj[method])
//       apiList.push(api)
//     })
//   } else {
//     const _findMethod = Object.keys(apiObj).find(key => (key === _find.method))
//     const swaggerApiObject = apiObj[_find.method]
//     configKeys.forEach(key => {
//       if (_find[key]) {
//         swaggerApiObject[key] = _find[key]
//       }
//     })
//     const api = generateApi(path, _find.method, swaggerApiObject)
//     if (!_findMethod) {
//       apiList.push(api)
//     } else {
//       apiList[_findIndex] = api
//     }
//   }
// })

// function generateFileStr (array) {
//   var arrayOutputStr = ''
//   array.forEach((data, index) => {
//     if (index === array.length - 1) {
//       arrayOutputStr += `${generateStr(data)}\n`
//     } else {
//       arrayOutputStr += `${generateStr(data)},\n`
//     }
//   })
//   return arrayOutputStr
// }

// function generateStr (data) {
//   let output = `\t{\n` +
//     `    method: '${data.method}',\n` +
//     `    tags: '${data.tags}',\n` +
//     `    description: "${data.description}",\n` +
//     `    parameters:{\n${formatParams(data.parameters)}\t\t},\n` +
//     `    path: '${data.path}',\n` +
//     `    FFModelCombine: '${data.FFModelCombine}',\n`
//   if (data.needAuth) output += `    needAuth: ${data.needAuth},\n`
//   if (data.easySignature) output += `    easySignature: ${data.easySignature},\n`
//   if (data.formData) output += `    formData: ${data.formData},\n`
//   output += `    FFModel: '${data.FFModel}'\n` +
//     `  }`
//   return output
// }

// // const apiList = []
// // module.exports = apiList

// function formatParams (parameters) {
//   let alloutput = ''
//   if (parameters) {
//     Object.keys(parameters).forEach((key, index) => {
//       const param = parameters[key]
//       if (index === Object.keys(parameters).length - 1) {
//         alloutput += `\t\t\t${key}:[\n${formatArrayParams(param)}\t\t\t]\n`
//       } else {
//         alloutput += `\t\t\t${key}:[\n${formatArrayParams(param)}\t\t\t],\n`
//       }
//     })
//   } else {
//     alloutput = {}
//   }
//   return alloutput
// }

// function formatArrayParams (array) {
//   let output = ''
//   array.forEach((data, index) => {
//     if (index === array.length - 1) {
//       output += `\t\t\t\t${JSON.stringify(data)}\n`
//     } else {
//       output += `\t\t\t\t${JSON.stringify(data)},\n`
//     }
//   })
//   return output
// }

// const fileHeadInfo =
//   `\n/** 在本文件中你需要做的就是给每一个通过swagger生成并且之前未做过配置的的api进行配置 **/\n\n` +
//   `// {\n` +
//   `//   description: swaggerApiObject的描述字段,\n` +
//   `//   method: api的请求方法,\n` +
//   `//   path: api请求后缀地址,\n` +
//   `//   parameters: api请求时可能需要的参数,\n` +
//   `//   tags: swaggerApiObject给api打上的tag，用于后台api管理,\n` +
//   `//   FFModelCombine: FFModel的组合,\n` +
//   `//   FFModel: FFModel的key,\n` +
//   `//   needAuth: 存在该字段时并且为true时调用api时会绑定用户access_token,\n` +
//   `//   easySignature: 存在该字段时并且为true时调用api会生成参数签名,\n` +
//   `//   formData:存在该字段时并且为true时调用api时使用表单提交的接口配置 api.formDataRequest\n` +
//   `// }\n\n` +
//   `// 可以访问附属后台\n` +
//   `// http://localhost:1000/editme\n` + // 这里编辑后台对应的路由
//   `// 查看configList表格，进行查看你未配置FFmodel的api等操作\n`

// var TotalFile = `${fileHeadInfo}\n` +
//                 `const configList = [\n${generateFileStr(apiList)}]\n\n` +
//                 `module.exports = configList\n`

// fs.writeFileSync(
//   path.join(__dirname, `../${pathConfig.to}`, 'configList.js'),
//   TotalFile
// )
