/* ┌────────────────────────────────────────────────────────────────────────────┐  */

// apiRequest是一个封装了axios请求的函数
// https://github.com/mzabriskie/axios
// 你也可以在./client下自定义_apiRequest_方法来发起客户端网络请求
// easySignature 是使用签名算法对api参数进行加密，如果在api-config-list中配置了使用签名算法，则api调用中使用easySignature算法

/*  └────────────────────────────────────────────────────────────────────────────┘ */

// 本文件生成时间：09-06-2017 16:42

// import { easySignature } from './signature' // 手动使用
import api from './client'
import { forEach } from './utils'

// ------get----profile-------
export function GetUserProfile (payload) {
	const { user_id } = payload
	const config = {
		method: 'get',
		url: `/v1/users/${user_id}/profile`,
	}
	return api.Request(config)
}

// -------send sms code----------
export function PostV1AuthSmsCode (payload) {
	const config = {
		method: 'post',
		url: `/v1/auth/sms/code`,
	}
	const data = {}
	const dataKeyList = ['phone', 'channel', 'action']
	forEach(dataKeyList, key => {
		if (payload[key]) {
			data[key] = payload[key]
		}
	})
	config.data = data
	return api.Request(config)
}

// --------login with phone number--------
export function PostV1AuthLoginPhone (payload) {
	const config = {
		method: 'post',
		url: `/v1/auth/login/phone`,
	}
	const data = {}
	const dataKeyList = ['password', 'phone']
	forEach(dataKeyList, key => {
		if (payload[key]) {
			data[key] = payload[key]
		}
	})
	config.data = data
	return api.Request(config)
}

// -------find back password---------
export function PatchV1AuthResetPassword (payload) {
	const config = {
		method: 'patch',
		url: `/v1/auth/reset/password`,
	}
	const data = {}
	const dataKeyList = ['phone', 'code', 'password']
	forEach(dataKeyList, key => {
		if (payload[key]) {
			data[key] = payload[key]
		}
	})
	config.data = data
	return api.Request(config)
}

// ------鑾峰彇绛涢€夐」淇℃伅-------
export function GetV1FilterItems (payload) {
	const config = {
		method: 'get',
		url: `/v1/filter/items`,
	}
	const data = {}
	const dataKeyList = ['fields']
	forEach(dataKeyList, key => {
		if (payload[key]) {
			data[key] = payload[key]
		}
	})
	config.data = data
	return api.Request(config)
}

// ------鑾峰彇鍐呭鍒嗘瀽鏁版嵁-------
export function GetV1Articles (payload) {
	const config = {
		method: 'get',
		url: `/v1/articles`,
	}
	const params = {}
	const paramsKeyList = ['timescope', 'article_type', 'page', 'sort_by_time', 'sort_by_reader_number', 'sort_by_average_read_number', 'sort_by_share_times', 'per_page']
	forEach(paramsKeyList, key => {
		if (payload[key]) {
			params[key] = payload[key]
		}
	})
	config.params = params
	return api.Request(config)
}

// ------鑾峰彇鍐呭闃呰鎯呭喌-------
export function GetArticle (payload) {
	const { article_id } = payload
	const config = {
		method: 'get',
		url: `/v1/articles/${article_id}`,
	}
	const params = {}
	const paramsKeyList = ['sort_by_read_times']
	forEach(paramsKeyList, key => {
		if (payload[key]) {
			params[key] = payload[key]
		}
	})
	config.params = params
	return api.Request(config)
}

// get article by id
export function GetId (payload) {
	const { id } = payload
	const config = {
		method: 'get',
		url: `/v1/contents/${id}`,
	}
	return api.Request(config)
}

// create article
export function PostV1ProtectedContents (payload) {
	const config = {
		method: 'post',
		url: `/v1/protected/contents`,
	}
	const data = {}
	const dataKeyList = ['type', 'title', 'author', 'author_id', 'link', 'content']
	forEach(dataKeyList, key => {
		if (payload[key]) {
			data[key] = payload[key]
		}
	})
	config.data = data
	return api.Request(config)
}

// ------鑾峰彇瀹㈡埛淇℃伅鍒楄〃-------
export function GetV1Customers (payload) {
	const config = {
		method: 'get',
		url: `/v1/customers`,
	}
	const params = {}
	const paramsKeyList = ['timescope', 'level', 'org_type', 'duty_name', 'page', 'sort_by_level', 'sort_by_read_times', 'sort_by_share_times', 'per_page']
	forEach(paramsKeyList, key => {
		if (payload[key]) {
			params[key] = payload[key]
		}
	})
	config.params = params
	return api.Request(config)
}

// ------鑾峰彇鍗曚竴瀹㈡埛淇℃伅-------
export function GetCustomer (payload) {
	const { customer_id } = payload
	const config = {
		method: 'get',
		url: `/v1/customers/${customer_id}`,
	}
	return api.Request(config)
}

// ------瀵规垜鐨勫叧娉ㄦ儏鍐�-------
export function GetCustomerAttention (payload) {
	const { customer_id } = payload
	const config = {
		method: 'get',
		url: `/v1/customers/${customer_id}/attention_status`,
	}
	const params = {}
	const paramsKeyList = ['timescope']
	forEach(paramsKeyList, key => {
		if (payload[key]) {
			params[key] = payload[key]
		}
	})
	config.params = params
	return api.Request(config)
}

// ------闃呰鏄庣粏-------
export function GetCustomerRead (payload) {
	const { customer_id } = payload
	const config = {
		method: 'get',
		url: `/v1/customers/${customer_id}/read_details`,
	}
	const params = {}
	const paramsKeyList = ['sort_by_time', 'sort_by_read_times']
	forEach(paramsKeyList, key => {
		if (payload[key]) {
			params[key] = payload[key]
		}
	})
	config.params = params
	return api.Request(config)
}

// ------鏈烘瀯涓殑瀹㈡埛淇℃伅-------
export function GetOrganization (payload) {
	const { organization_id } = payload
	const config = {
		method: 'get',
		url: `/v1/organizations/${organization_id}`,
	}
	return api.Request(config)
}

// ------鏈烘瀯鎵€鏈夊鎴峰鎴戠殑鍏虫敞鎯呭喌-------
export function GetOrganizationAttention (payload) {
	const { organization_id } = payload
	const config = {
		method: 'get',
		url: `/v1/organizations/${organization_id}/attention_status`,
	}
	const params = {}
	const paramsKeyList = ['timescope']
	forEach(paramsKeyList, key => {
		if (payload[key]) {
			params[key] = payload[key]
		}
	})
	config.params = params
	return api.Request(config)
}

// ------闃呰鏄庣粏-------
export function GetOrganizationRead (payload) {
	const { organization_id } = payload
	const config = {
		method: 'get',
		url: `/v1/organizations/${organization_id}/read_details`,
	}
	const params = {}
	const paramsKeyList = ['sort_by_time', 'sort_by_read_times']
	forEach(paramsKeyList, key => {
		if (payload[key]) {
			params[key] = payload[key]
		}
	})
	config.params = params
	return api.Request(config)
}

// ------鑾峰彇鏈烘瀯鍜屽鎴风殑鎻愮ず-------
export function GetV1Search (payload) {
	const config = {
		method: 'get',
		url: `/v1/search_tips`,
	}
	const params = {}
	const paramsKeyList = ['keyword']
	forEach(paramsKeyList, key => {
		if (payload[key]) {
			params[key] = payload[key]
		}
	})
	config.params = params
	return api.Request(config)
}

// create read logs
export function PostV1JournalReads (payload) {
	const config = {
		method: 'post',
		url: `/v1/journal/reads`,
	}
	const data = {}
	const dataKeyList = ['article_id', 'reader_id', 'author_id']
	forEach(dataKeyList, key => {
		if (payload[key]) {
			data[key] = payload[key]
		}
	})
	config.data = data
	return api.Request(config)
}

// create share logs
export function PostV1JournalShares (payload) {
	const config = {
		method: 'post',
		url: `/v1/journal/shares`,
	}
	const data = {}
	const dataKeyList = ['article_id', 'user_id']
	forEach(dataKeyList, key => {
		if (payload[key]) {
			data[key] = payload[key]
		}
	})
	config.data = data
	return api.Request(config)
}


