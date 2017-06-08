import chalk from 'chalk';
import { readJsonSync } from 'fs-extra';
var fs = require('fs')
var path = require('path')
// var pathConfig = require('../config')


const configKeys = [
  'needAuth',
  'formData',
  'easySignature'
]

export async function getInitConfigList (config) {
	const {
 		inputMode,
		inputPath,
  	outputPath,
		outputMode
	} = config
	let configList = []
	switch (inputMode) {
		default:
		case 'json': {
			return getByJson(inputPath, outputPath, outputMode);
		}
		case 'url':  {
			console.log(chalk.strikethrough(`requesting... 请求中...`));
			return await getByUrl(inputPath, outputPath, outputMode)
		}
	}
}

function getByJson (inputPath, outputPath, outputMode) {
	const swaggerObj = readJsonSync(inputPath)
	if (swaggerObj) {
		const configListPath = path.join(outputPath, 'api-config-list.js')
		let apiConfigList = fs.existsSync(configListPath) ? require(configListPath) : []
		if (!apiConfigList.length) apiConfigList = []
		return getConfigList(apiConfigList, swaggerObj, outputMode)
	} else {
		console.warn(chalk.blue('error occur in generateByJson'))
		return 'error occur in generateByJson'
	}
}

function getByUrl (inputPath, outputPath, outputMode) {
	var request = require('request');
  return new Promise((resolve, reject) => {
		request(inputPath, function (error, response, body) {
			if (error) {
				console.log(chalk.bgRed(`${inputPath}访问错误`));
				reject(err);
				return;
			}
			const configListPath = path.join(outputPath, 'api-config-list.js')
			let apiConfigList = fs.existsSync(configListPath) ? require(configListPath) : []
			if (!apiConfigList.length) apiConfigList = []
			if (body && body.paths) {
				const swaggerObj = JSON.parse(body)
				return resolve(getConfigList(apiConfigList, swaggerObj, outputMode))
			} else {
				console.warn(chalk.bgRed(`请求失败: ${body}`))
			}
		})
  });
}

// async function getByUrl (inputPath, outputPath, outputMode) {
// 	await getRequest(inputPath, outputPath, outputMode)
// }


function getConfigList (originList, swaggerObj, outputMode) {
	let configList = originList || []
	// 遍历swagger api path
	// 如果没有该path存在，任何该path的方法都不存在，直接生成新的
	// 如果有该path的api存在
	// 如果该path下的某一个method不存在，则生在该method的api
	// 如果该method也存在
	// 遍历对比api parameters，如果有不同
	// 则更新该api
	// 先过滤掉swaiggerApi中不存在的项目
	if (configList && configList.length) {
		configList = filterUnExistInSwagger(configList, swaggerObj)
	}
	// 更新configList
	configList = updateConfigList(configList, swaggerObj, outputMode) // here
	return configList
}


function updateConfigList(configList, swaggerObj, outputMode) {
	let _configList = configList || []
	Object.keys(swaggerObj.paths).forEach(path => {
	  const apiObj = swaggerObj.paths[path]
	  let _findIndex = ''
	  const _find = _configList.map((api, index) => {
	    if (api.path === path) {
	      _findIndex = index
	      return api
	    }
	  }).filter(a => !!a)[0]
	  if (!_find) {
	    Object.keys(apiObj).forEach(method => {
	      const api = generateApi(path, method, apiObj[method], outputMode)
	      _configList.push(api)
	    })
	  } else {
	    const _findMethod = Object.keys(apiObj).find(key => (key === _find.method))
	    const _api = apiObj[_find.method]
	    configKeys.forEach(key => {
	      if (_find[key]) {
	        _api[key] = _find[key]
	      }
	    })
	    const api = generateApi(path, _find.method, _api, outputMode)
	    if (!_findMethod) {
	      _configList.push(api)
	    } else {
	      _configList[_findIndex] = api
	    }
	  }
	})
	return _configList
}

function filterUnExistInSwagger (list, swaggerObj) {
	return list.filter(api => {
	  let checkPath = ''
	  const findSwaggerPath = Object.keys(swaggerObj.paths).find(path => {
	    if (path === api.path) {
	      checkPath = path
	      return true
	    }
	    return false
	  })
	  if (!findSwaggerPath) {
	    return false // 过滤掉
	  } else {
	    const apiObj = swaggerObj.paths[checkPath]
	    const findSwaggerMehod = Object.keys(apiObj).find((method) => (method === api.method))
	    if (!findSwaggerMehod) return false
	  }
	  return true
	})
}

// // apiObj 是 path[某一个path][某一种方法] 如 path['/v1/users/{user_id}/attentions']['get']
function generateApi (path, method, apiObj, outputMode) { // 新旧都会过这里
  let params = {}
  if (apiObj.parameters) {
    apiObj.parameters.forEach(param => {
      const IN = param.in
      if (!params[IN]) {
        params[IN] = [].concat({
          key: param.name,
          require: param.required
        })
      } else {
        params[IN].push({
          key: param.name,
          require: param.required
        })
      }
    })
  }
  const defaultApi = {
    description: apiObj.description,
    method,
    path,
    parameters: params,
    tags: apiObj.tags,
    name: getApiName(method, path)
  }
	if (outputMode === 'all') defaultApi.FFModelCombine = firstUpperCase(apiObj.tags[0])
  configKeys.forEach(key => {
    if (apiObj[key]) {
      defaultApi[key] = apiObj[key]
    }
  })
  return defaultApi
}

function getApiName (method, path) {
	const items = path.split('/')
	let index = 0
	items.forEach((item, i) => {
		if (item.indexOf('{') >= 0) index = i
	})
	const lastFindItem = items[index]
	const filterItems = items.slice(index).filter(a => !!a)
	const nameGroup = filterItems.map((item, i) => {
		let _item = item.replace('{', '') || item;
		_item = _item.replace('}', '') || _item;
		let findIndex = _item.indexOf('_')
		if (findIndex > 0) {
			_item = _item.slice(0, findIndex)
		}
		return `${_item[0].toUpperCase()}${_item.slice(1)}`
	})
	const _method = `${method[0].toUpperCase()}${method.slice(1)}`
	return `${_method}${nameGroup.join('')}`
}

function firstUpperCase(str) {
  return str.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase());
}