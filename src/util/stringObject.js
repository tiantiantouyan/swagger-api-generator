import { getTabIndent } from './getTabIndent'

var class2type = {} ;
"Boolean Number String Function Array Date RegExp Object Error".split(" ").forEach(function(e,i){
    class2type[ "[object " + e + "]" ] = e.toLowerCase();
}) ;
//当然为了兼容IE低版本，forEach需要一个polyfill，不作细谈了。
function _typeof(obj){
    if ( obj == null ){
        return String( obj );
    }
    return typeof obj === "object" || typeof obj === "function" ?
        class2type[ class2type.toString.call(obj) ] || "object" :
        typeof obj;
}

function formatTransfer (origin, content, isLast) {
	if (isLast) {
		return `${origin += content}\n`
	} else {
		return `${origin += content},\n`
	}
}

function generateObjBody (object, tabIndex) {
  var str = '';
	Object.keys(object).forEach((p, index) => {
		const member = object[p]
		const isLast = index === Object.keys(object).length - 1
		const indent = getTabIndent(tabIndex)
		switch (_typeof(member)) {
			case 'object': {
				const content = `${indent}${p}: ${stringObject(member, tabIndex)}`
				str = formatTransfer(str, content, isLast)
				break;
			}
			case 'function': {
				const content = `${indent}${p}: ${member}`
				str = formatTransfer(str, content, isLast)
				break;
			}
			case 'array': {
				const content = `${indent}${p}: ${generateArrayStr(member, tabIndex)}`
				str = formatTransfer(str, content, isLast)
				break;
			}
			default: {
				const content = `${indent}${p}: "${member}"`
				str = formatTransfer(str, content, isLast)
				break;
			}
		}
	})
  return str;
}

function generateArrayStr (array, tabIndex) {
	return `[\n${getArrayContent(array, tabIndex + 1)}${getTabIndent(tabIndex)}]`
}


function getArrayContent(array, tabIndex) {
	let str =  ''
	const indent = getTabIndent(tabIndex)
	array.forEach((data, i) => {
		const isLastArrayElement = i === array.length - 1
		switch (_typeof(data)) {
			case 'object': {
				const content = `${indent}${stringObject(data, tabIndex)}`
				str = formatTransfer(str, content, isLastArrayElement)
				break;
			}
			case 'string': {
				const content = `${indent}"${data}"`
				str = formatTransfer(str, content, isLastArrayElement)
				break;
			}
		}
	})
	return str
}


export function stringObject(object, tabIndex = 0) {
	let indent = getTabIndent(tabIndex)
	return `{\n${generateObjBody(object, tabIndex + 1)}${indent}}`
}


