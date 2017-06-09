var path = require('path')
var mkdirp = require('mkdirp')
var fs = require('fs')
import { generateFile } from '../util/generate-file'
import { getTemplate } from '../templates/FFModel'
import { stringObject } from '../util/stringObject'
import { getTabIndent } from '../util/getTabIndent'

export function generateFFModelFolder(configList, outputPath) {
	const targetPath = path.join(outputPath, './')
	const FFModelPath = path.join(targetPath, './FetchFastModel')
	if (!fs.existsSync(FFModelPath)) {
		mkdirp(FFModelPath, function () {
			const FFModelGroup = groupArrayByKey(configList, 'FFModelCombine')
			FFModelGroup.forEach(data => {
				const _combinePath = path.join(FFModelPath, `/${data.FFModelCombine}`)
				mkdirp(_combinePath, function () {
					const fileStr = getTemplate(generaFFModelFileStr(getTemplateFFModel(data.data)))
					generateFile(fileStr, _combinePath, 'index.js')
				})
			})
		})
	}
}

function getTemplateFFModel (api) {
	const _return = api.map(item => ({
    key: item.name,
    initialProps: {
      data: []
    },
    select: function (res) {
      return {
        data: []
      }
    },
    error: function (err) {
      return err
    }
	}))
	return _return
}

function generaFFModelFileStr (list) {
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


function groupArrayByKey (arr, key = 'none') {
  let _return = []
  arr.forEach(a => {
    const _find = _return.find(f => (f[key] === a[key]))
    if (_find) {
      _find.data.push(a)
    } else {
      _return.push({
        [key]: a[key],
        data: [].concat(a)
      })
    }
  })
  return _return
}