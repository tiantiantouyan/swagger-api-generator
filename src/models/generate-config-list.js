
import { getConfigListTemplate } from '../templates/config-list'
import { stringObject } from '../util/stringObject'
import { getTabIndent } from '../util/getTabIndent'


export function generateConfigList (configList) {
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








