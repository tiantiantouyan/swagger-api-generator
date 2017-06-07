
import { getConfigListTemplate } from '../templates/config-list'
import { stringObject } from './stringObject'
import { getTabIndent } from './getTabIndent'

var path = require('path')
var fs = require('fs')
var pathConfig = require('../config')
var pathConfig = require('../config')


const configKeys = [
  'needAuth',
  'formData',
  'easySignature'
]

function firstUpperCase(str) {
  return str.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase());
}

export function getConfigList (originList, swaggerObj) {
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
	configList = updateConfigList(configList, swaggerObj)
	console.log(configList, 'getConfigListgetConfigListgetConfigList');
	// return getConfigListTemplate(JSON.stringify(test))
	// return getConfigListTemplate(stringObject(test))
	return getConfigListTemplate(generateFileStr(configList))


}

function generateFileStr (list) {
	const tabIndex = 0
	const indent = getTabIndent(tabIndex)
  var arrayOutputStr = ''
  list.forEach((data, index) => {
		if (index === list.length - 1) {
			arrayOutputStr += `${indent}${stringObject(data, tabIndex)}\n`
		} else {
			arrayOutputStr += `${indent}${stringObject(data, tabIndex)},\n`
		}
  })
  return arrayOutputStr
}

function updateConfigList(configList, swaggerObj) {
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
	      const api = generateApi(path, method, apiObj[method])
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
	    const api = generateApi(path, _find.method, _api)
	    if (!_findMethod) {
	      _configList.push(api)
	    } else {
	      _configList[_findIndex] = api
	    }
	  }
	})
	return _configList
}



// // apiObj 是 path[某一个path][某一种方法] 如 path['/v1/users/{user_id}/attentions']['get']
function generateApi (path, method, apiObj) {
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
    FFModelCombine: firstUpperCase(apiObj.tags[0]),
    FFModel: getFFModelName(method, path)
  }
  configKeys.forEach(key => {
    if (apiObj[key]) {
      defaultApi[key] = apiObj[key]
    }
  })
  return defaultApi
}

function getFFModelName (method, path) {
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

function replaceAt(str, index, replacement) {
  return str.slice(0, index) + replacement + str.slice(index + 1);
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




