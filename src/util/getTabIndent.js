

export function getTabIndent (tabIndex) {
	let indent = ''
	new Array(tabIndex + 1).fill(null).forEach((_, i) => {
		indent += '\t'
	})
	return indent
}