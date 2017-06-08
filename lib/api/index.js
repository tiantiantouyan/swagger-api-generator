'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.GetUserProfile = GetUserProfile;
exports.PostV1AuthSmsCode = PostV1AuthSmsCode;
exports.PostV1AuthLoginPhone = PostV1AuthLoginPhone;
exports.PatchV1AuthResetPassword = PatchV1AuthResetPassword;
exports.GetV1FilterItems = GetV1FilterItems;
exports.GetV1Articles = GetV1Articles;
exports.GetArticle = GetArticle;
exports.GetId = GetId;
exports.PostV1ProtectedContents = PostV1ProtectedContents;
exports.GetV1Customers = GetV1Customers;
exports.GetCustomer = GetCustomer;
exports.GetCustomerAttention = GetCustomerAttention;
exports.GetCustomerRead = GetCustomerRead;
exports.GetOrganization = GetOrganization;
exports.GetOrganizationAttention = GetOrganizationAttention;
exports.GetOrganizationRead = GetOrganizationRead;
exports.GetV1Search = GetV1Search;
exports.PostV1JournalReads = PostV1JournalReads;
exports.PostV1JournalShares = PostV1JournalShares;

var _client = require('./client');

var _client2 = _interopRequireDefault(_client);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 本文件使用configList生成器生成的configList文件生成，请不要手动修改

function GetUserProfile(payload) {
	var user_id = payload.user_id;

	var config = {
		method: 'get',
		url: '/v1/users/' + user_id + '/profile'
	};
	return _client2.default.Request(config);
}

function PostV1AuthSmsCode(payload) {
	var config = {
		method: 'post',
		url: '/v1/auth/sms/code'
	};
	var data = {};
	var dataKeyList = ['phone', 'channel', 'action'];
	dataKeyList.forEach(function (key) {
		if (payload[key]) {
			data[key] = payload[key];
		}
	});
	config.data = data;
	return _client2.default.Request(config);
}

function PostV1AuthLoginPhone(payload) {
	var config = {
		method: 'post',
		url: '/v1/auth/login/phone'
	};
	var data = {};
	var dataKeyList = ['password', 'phone'];
	dataKeyList.forEach(function (key) {
		if (payload[key]) {
			data[key] = payload[key];
		}
	});
	config.data = data;
	return _client2.default.Request(config);
}

function PatchV1AuthResetPassword(payload) {
	var config = {
		method: 'patch',
		url: '/v1/auth/reset/password'
	};
	var data = {};
	var dataKeyList = ['phone', 'code', 'password'];
	dataKeyList.forEach(function (key) {
		if (payload[key]) {
			data[key] = payload[key];
		}
	});
	config.data = data;
	return _client2.default.Request(config);
}

function GetV1FilterItems(payload) {
	var config = {
		method: 'get',
		url: '/v1/filter/items'
	};
	var data = {};
	var dataKeyList = ['fields'];
	dataKeyList.forEach(function (key) {
		if (payload[key]) {
			data[key] = payload[key];
		}
	});
	config.data = data;
	return _client2.default.Request(config);
}

function GetV1Articles(payload) {
	var config = {
		method: 'get',
		url: '/v1/articles'
	};
	var params = {};
	var paramsKeyList = ['timescope', 'article_type', 'page', 'sort_by_time', 'sort_by_reader_number', 'sort_by_average_read_number', 'sort_by_share_times', 'per_page'];
	paramsKeyList.forEach(function (key) {
		if (payload[key]) {
			params[key] = payload[key];
		}
	});
	config.params = params;
	return _client2.default.Request(config);
}

function GetArticle(payload) {
	var article_id = payload.article_id;

	var config = {
		method: 'get',
		url: '/v1/articles/' + article_id
	};
	var params = {};
	var paramsKeyList = ['sort_by_read_times'];
	paramsKeyList.forEach(function (key) {
		if (payload[key]) {
			params[key] = payload[key];
		}
	});
	config.params = params;
	return _client2.default.Request(config);
}

function GetId(payload) {
	var id = payload.id;

	var config = {
		method: 'get',
		url: '/v1/contents/' + id
	};
	return _client2.default.Request(config);
}

function PostV1ProtectedContents(payload) {
	var config = {
		method: 'post',
		url: '/v1/protected/contents'
	};
	var data = {};
	var dataKeyList = ['type', 'title', 'author', 'author_id', 'link', 'content'];
	dataKeyList.forEach(function (key) {
		if (payload[key]) {
			data[key] = payload[key];
		}
	});
	config.data = data;
	return _client2.default.Request(config);
}

function GetV1Customers(payload) {
	var config = {
		method: 'get',
		url: '/v1/customers'
	};
	var params = {};
	var paramsKeyList = ['timescope', 'level', 'org_type', 'duty_name', 'page', 'sort_by_level', 'sort_by_read_times', 'sort_by_share_times', 'per_page'];
	paramsKeyList.forEach(function (key) {
		if (payload[key]) {
			params[key] = payload[key];
		}
	});
	config.params = params;
	return _client2.default.Request(config);
}

function GetCustomer(payload) {
	var customer_id = payload.customer_id;

	var config = {
		method: 'get',
		url: '/v1/customers/' + customer_id
	};
	return _client2.default.Request(config);
}

function GetCustomerAttention(payload) {
	var customer_id = payload.customer_id;

	var config = {
		method: 'get',
		url: '/v1/customers/' + customer_id + '/attention_status'
	};
	var params = {};
	var paramsKeyList = ['timescope'];
	paramsKeyList.forEach(function (key) {
		if (payload[key]) {
			params[key] = payload[key];
		}
	});
	config.params = params;
	return _client2.default.Request(config);
}

function GetCustomerRead(payload) {
	var customer_id = payload.customer_id;

	var config = {
		method: 'get',
		url: '/v1/customers/' + customer_id + '/read_details'
	};
	var params = {};
	var paramsKeyList = ['sort_by_time', 'sort_by_read_times'];
	paramsKeyList.forEach(function (key) {
		if (payload[key]) {
			params[key] = payload[key];
		}
	});
	config.params = params;
	return _client2.default.Request(config);
}

function GetOrganization(payload) {
	var organization_id = payload.organization_id;

	var config = {
		method: 'get',
		url: '/v1/organizations/' + organization_id
	};
	return _client2.default.Request(config);
}

function GetOrganizationAttention(payload) {
	var organization_id = payload.organization_id;

	var config = {
		method: 'get',
		url: '/v1/organizations/' + organization_id + '/attention_status'
	};
	var params = {};
	var paramsKeyList = ['timescope'];
	paramsKeyList.forEach(function (key) {
		if (payload[key]) {
			params[key] = payload[key];
		}
	});
	config.params = params;
	return _client2.default.Request(config);
}

function GetOrganizationRead(payload) {
	var organization_id = payload.organization_id;

	var config = {
		method: 'get',
		url: '/v1/organizations/' + organization_id + '/read_details'
	};
	var params = {};
	var paramsKeyList = ['sort_by_time', 'sort_by_read_times'];
	paramsKeyList.forEach(function (key) {
		if (payload[key]) {
			params[key] = payload[key];
		}
	});
	config.params = params;
	return _client2.default.Request(config);
}

function GetV1Search(payload) {
	var config = {
		method: 'get',
		url: '/v1/search_tips'
	};
	var params = {};
	var paramsKeyList = ['keyword'];
	paramsKeyList.forEach(function (key) {
		if (payload[key]) {
			params[key] = payload[key];
		}
	});
	config.params = params;
	return _client2.default.Request(config);
}

function PostV1JournalReads(payload) {
	var config = {
		method: 'post',
		url: '/v1/journal/reads'
	};
	var data = {};
	var dataKeyList = ['article_id', 'reader_id', 'author_id'];
	dataKeyList.forEach(function (key) {
		if (payload[key]) {
			data[key] = payload[key];
		}
	});
	config.data = data;
	return _client2.default.Request(config);
}

function PostV1JournalShares(payload) {
	var config = {
		method: 'post',
		url: '/v1/journal/shares'
	};
	var data = {};
	var dataKeyList = ['article_id', 'user_id'];
	dataKeyList.forEach(function (key) {
		if (payload[key]) {
			data[key] = payload[key];
		}
	});
	config.data = data;
	return _client2.default.Request(config);
}