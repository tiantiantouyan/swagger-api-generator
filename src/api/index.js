import api from './client'

// 本文件使用configList生成器生成的configList文件生成，请不要手动修改

export function GetUserProfile (payload) {
	const { user_id } = payload
	const config = {
		method: 'get',
		url: `/v1/users/${user_id}/profile`,
	}
	return api.Request(config)
}


export function PostV1AuthSmsCode (payload) {
	const config = {
		method: 'post',
		url: `/v1/auth/sms/code`,
	}
	const data = {}
	const dataKeyList = ['phone', 'channel', 'action']
	dataKeyList.forEach(key => {
		if (payload[key]) {
			data[key] = payload[key]
		}
	})
	config.data = data
	return api.Request(config)
}


export function PostV1AuthLoginPhone (payload) {
	const config = {
		method: 'post',
		url: `/v1/auth/login/phone`,
	}
	const data = {}
	const dataKeyList = ['password', 'phone']
	dataKeyList.forEach(key => {
		if (payload[key]) {
			data[key] = payload[key]
		}
	})
	config.data = data
	return api.Request(config)
}


export function PatchV1AuthResetPassword (payload) {
	const config = {
		method: 'patch',
		url: `/v1/auth/reset/password`,
	}
	const data = {}
	const dataKeyList = ['phone', 'code', 'password']
	dataKeyList.forEach(key => {
		if (payload[key]) {
			data[key] = payload[key]
		}
	})
	config.data = data
	return api.Request(config)
}


export function GetV1FilterItems (payload) {
	const config = {
		method: 'get',
		url: `/v1/filter/items`,
	}
	const data = {}
	const dataKeyList = ['fields']
	dataKeyList.forEach(key => {
		if (payload[key]) {
			data[key] = payload[key]
		}
	})
	config.data = data
	return api.Request(config)
}


export function GetV1Articles (payload) {
	const config = {
		method: 'get',
		url: `/v1/articles`,
	}
	const params = {}
	const paramsKeyList = ['timescope', 'article_type', 'page', 'sort_by_time', 'sort_by_reader_number', 'sort_by_average_read_number', 'sort_by_share_times', 'per_page']
	paramsKeyList.forEach(key => {
		if (payload[key]) {
			params[key] = payload[key]
		}
	})
	config.params = params
	return api.Request(config)
}


export function GetArticle (payload) {
	const { article_id } = payload
	const config = {
		method: 'get',
		url: `/v1/articles/${article_id}`,
	}
	const params = {}
	const paramsKeyList = ['sort_by_read_times']
	paramsKeyList.forEach(key => {
		if (payload[key]) {
			params[key] = payload[key]
		}
	})
	config.params = params
	return api.Request(config)
}


export function GetId (payload) {
	const { id } = payload
	const config = {
		method: 'get',
		url: `/v1/contents/${id}`,
	}
	return api.Request(config)
}


export function PostV1ProtectedContents (payload) {
	const config = {
		method: 'post',
		url: `/v1/protected/contents`,
	}
	const data = {}
	const dataKeyList = ['type', 'title', 'author', 'author_id', 'link', 'content']
	dataKeyList.forEach(key => {
		if (payload[key]) {
			data[key] = payload[key]
		}
	})
	config.data = data
	return api.Request(config)
}


export function GetV1Customers (payload) {
	const config = {
		method: 'get',
		url: `/v1/customers`,
	}
	const params = {}
	const paramsKeyList = ['timescope', 'level', 'org_type', 'duty_name', 'page', 'sort_by_level', 'sort_by_read_times', 'sort_by_share_times', 'per_page']
	paramsKeyList.forEach(key => {
		if (payload[key]) {
			params[key] = payload[key]
		}
	})
	config.params = params
	return api.Request(config)
}


export function GetCustomer (payload) {
	const { customer_id } = payload
	const config = {
		method: 'get',
		url: `/v1/customers/${customer_id}`,
	}
	return api.Request(config)
}


export function GetCustomerAttention (payload) {
	const { customer_id } = payload
	const config = {
		method: 'get',
		url: `/v1/customers/${customer_id}/attention_status`,
	}
	const params = {}
	const paramsKeyList = ['timescope']
	paramsKeyList.forEach(key => {
		if (payload[key]) {
			params[key] = payload[key]
		}
	})
	config.params = params
	return api.Request(config)
}


export function GetCustomerRead (payload) {
	const { customer_id } = payload
	const config = {
		method: 'get',
		url: `/v1/customers/${customer_id}/read_details`,
	}
	const params = {}
	const paramsKeyList = ['sort_by_time', 'sort_by_read_times']
	paramsKeyList.forEach(key => {
		if (payload[key]) {
			params[key] = payload[key]
		}
	})
	config.params = params
	return api.Request(config)
}


export function GetOrganization (payload) {
	const { organization_id } = payload
	const config = {
		method: 'get',
		url: `/v1/organizations/${organization_id}`,
	}
	return api.Request(config)
}


export function GetOrganizationAttention (payload) {
	const { organization_id } = payload
	const config = {
		method: 'get',
		url: `/v1/organizations/${organization_id}/attention_status`,
	}
	const params = {}
	const paramsKeyList = ['timescope']
	paramsKeyList.forEach(key => {
		if (payload[key]) {
			params[key] = payload[key]
		}
	})
	config.params = params
	return api.Request(config)
}


export function GetOrganizationRead (payload) {
	const { organization_id } = payload
	const config = {
		method: 'get',
		url: `/v1/organizations/${organization_id}/read_details`,
	}
	const params = {}
	const paramsKeyList = ['sort_by_time', 'sort_by_read_times']
	paramsKeyList.forEach(key => {
		if (payload[key]) {
			params[key] = payload[key]
		}
	})
	config.params = params
	return api.Request(config)
}


export function GetV1Search (payload) {
	const config = {
		method: 'get',
		url: `/v1/search_tips`,
	}
	const params = {}
	const paramsKeyList = ['keyword']
	paramsKeyList.forEach(key => {
		if (payload[key]) {
			params[key] = payload[key]
		}
	})
	config.params = params
	return api.Request(config)
}


export function PostV1JournalReads (payload) {
	const config = {
		method: 'post',
		url: `/v1/journal/reads`,
	}
	const data = {}
	const dataKeyList = ['article_id', 'reader_id', 'author_id']
	dataKeyList.forEach(key => {
		if (payload[key]) {
			data[key] = payload[key]
		}
	})
	config.data = data
	return api.Request(config)
}


export function PostV1JournalShares (payload) {
	const config = {
		method: 'post',
		url: `/v1/journal/shares`,
	}
	const data = {}
	const dataKeyList = ['article_id', 'user_id']
	dataKeyList.forEach(key => {
		if (payload[key]) {
			data[key] = payload[key]
		}
	})
	config.data = data
	return api.Request(config)
}



