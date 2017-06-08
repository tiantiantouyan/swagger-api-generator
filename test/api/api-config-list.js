/* ┌────────────────────────────────────────────────────────────────────────────┐  */ 
/**
 * 默认字段
 * @param {description} [string] api的描述
 * @param {method} [string] api的请求方法
 * @param {path} [string] api请求后缀地址
 * @param {parameters} [string] api请求时可能需要的参数
 * @param {tags} [string] api的标签
 */
/*  └────────────────────────────────────────────────────────────────────────────┘ */

/* ┌────────────────────────────────────────────────────────────────────────────┐  */ 
/**
 * 可选字段
 * @param {needAuth} [bool] true时调用api时会读取用户信息, !仅仅是在api的function内部读出userid与token，调用时仍要保证传入用户信息，可使用封装函数callBindAuth
 * @param {easySignature} [bool] true时调用api会生成参数签名
 * @param {formData} [bool] true时调用api时使用表单提交的方法配置: api.formDataRequest
 */
/*  └────────────────────────────────────────────────────────────────────────────┘ */

// 本文件更新时间：08-06-2017 19:24

const configList = [
	{
		description: "------get----profile-------",
		method: "get",
		path: "/v1/users/{user_id}/profile",
		parameters: {
			path: [
				{
					key: "user_id",
					require: "true"
				}
			]
		},
		tags: [
			"users"
		],
		name: "GetUserProfile",
		FFModelCombine: "Users"
	},
	{
		description: "-------send sms code----------",
		method: "post",
		path: "/v1/auth/sms/code",
		parameters: {
			formData: [
				{
					key: "phone",
					require: "true"
				},
				{
					key: "channel",
					require: "true"
				},
				{
					key: "action",
					require: "true"
				}
			]
		},
		tags: [
			"auth"
		],
		name: "PostV1AuthSmsCode",
		FFModelCombine: "Auth"
	},
	{
		description: "--------login with phone number--------",
		method: "post",
		path: "/v1/auth/login/phone",
		parameters: {
			formData: [
				{
					key: "password",
					require: "true"
				},
				{
					key: "phone",
					require: "true"
				}
			]
		},
		tags: [
			"auth"
		],
		name: "PostV1AuthLoginPhone",
		FFModelCombine: "Auth"
	},
	{
		description: "-------find back password---------",
		method: "patch",
		path: "/v1/auth/reset/password",
		parameters: {
			formData: [
				{
					key: "phone",
					require: "true"
				},
				{
					key: "code",
					require: "true"
				},
				{
					key: "password",
					require: "true"
				}
			]
		},
		tags: [
			"auth"
		],
		name: "PatchV1AuthResetPassword",
		FFModelCombine: "Auth"
	},
	{
		description: "------获取筛选项信息-------",
		method: "get",
		path: "/v1/filter/items",
		parameters: {
			formData: [
				{
					key: "fields",
					require: "false"
				}
			]
		},
		tags: [
			"filter"
		],
		name: "GetV1FilterItems",
		FFModelCombine: "Filter"
	},
	{
		description: "------获取内容分析数据-------",
		method: "get",
		path: "/v1/articles",
		parameters: {
			query: [
				{
					key: "timescope",
					require: "false"
				},
				{
					key: "article_type",
					require: "false"
				},
				{
					key: "page",
					require: "false"
				},
				{
					key: "sort_by_time",
					require: "false"
				},
				{
					key: "sort_by_reader_number",
					require: "false"
				},
				{
					key: "sort_by_average_read_number",
					require: "false"
				},
				{
					key: "sort_by_share_times",
					require: "false"
				},
				{
					key: "per_page",
					require: "false"
				}
			]
		},
		tags: [
			"articles"
		],
		name: "GetV1Articles",
		FFModelCombine: "Articles"
	},
	{
		description: "------获取内容阅读情况-------",
		method: "get",
		path: "/v1/articles/{article_id}",
		parameters: {
			path: [
				{
					key: "article_id",
					require: "true"
				}
			],
			query: [
				{
					key: "sort_by_read_times",
					require: "false"
				}
			]
		},
		tags: [
			"articles"
		],
		name: "GetArticle",
		FFModelCombine: "Articles"
	},
	{
		description: "get article by id",
		method: "get",
		path: "/v1/contents/{id}",
		parameters: {
			path: [
				{
					key: "id",
					require: "true"
				}
			]
		},
		tags: [
			"contents"
		],
		name: "GetId",
		FFModelCombine: "Contents"
	},
	{
		description: "create article",
		method: "post",
		path: "/v1/protected/contents",
		parameters: {
			formData: [
				{
					key: "type",
					require: "true"
				},
				{
					key: "title",
					require: "true"
				},
				{
					key: "author",
					require: "true"
				},
				{
					key: "author_id",
					require: "false"
				},
				{
					key: "link",
					require: "true"
				},
				{
					key: "content",
					require: "true"
				}
			]
		},
		tags: [
			"protected"
		],
		name: "PostV1ProtectedContents",
		FFModelCombine: "Protected"
	},
	{
		description: "------获取客户信息列表-------",
		method: "get",
		path: "/v1/customers",
		parameters: {
			query: [
				{
					key: "timescope",
					require: "false"
				},
				{
					key: "level",
					require: "false"
				},
				{
					key: "org_type",
					require: "false"
				},
				{
					key: "duty_name",
					require: "false"
				},
				{
					key: "page",
					require: "false"
				},
				{
					key: "sort_by_level",
					require: "false"
				},
				{
					key: "sort_by_read_times",
					require: "false"
				},
				{
					key: "sort_by_share_times",
					require: "false"
				},
				{
					key: "per_page",
					require: "false"
				}
			]
		},
		tags: [
			"customers"
		],
		name: "GetV1Customers",
		FFModelCombine: "Customers"
	},
	{
		description: "------获取单一客户信息-------",
		method: "get",
		path: "/v1/customers/{customer_id}",
		parameters: {
			path: [
				{
					key: "customer_id",
					require: "true"
				}
			]
		},
		tags: [
			"customers"
		],
		name: "GetCustomer",
		FFModelCombine: "Customers"
	},
	{
		description: "------对我的关注情况-------",
		method: "get",
		path: "/v1/customers/{customer_id}/attention_status",
		parameters: {
			query: [
				{
					key: "timescope",
					require: "false"
				}
			],
			path: [
				{
					key: "customer_id",
					require: "true"
				}
			]
		},
		tags: [
			"customers"
		],
		name: "GetCustomerAttention",
		FFModelCombine: "Customers"
	},
	{
		description: "------阅读明细-------",
		method: "get",
		path: "/v1/customers/{customer_id}/read_details",
		parameters: {
			query: [
				{
					key: "sort_by_time",
					require: "false"
				},
				{
					key: "sort_by_read_times",
					require: "false"
				}
			],
			path: [
				{
					key: "customer_id",
					require: "true"
				}
			]
		},
		tags: [
			"customers"
		],
		name: "GetCustomerRead",
		FFModelCombine: "Customers"
	},
	{
		description: "------机构中的客户信息-------",
		method: "get",
		path: "/v1/organizations/{organization_id}",
		parameters: {
			path: [
				{
					key: "organization_id",
					require: "true"
				}
			]
		},
		tags: [
			"organizations"
		],
		name: "GetOrganization",
		FFModelCombine: "Organizations"
	},
	{
		description: "------机构所有客户对我的关注情况-------",
		method: "get",
		path: "/v1/organizations/{organization_id}/attention_status",
		parameters: {
			query: [
				{
					key: "timescope",
					require: "false"
				}
			],
			path: [
				{
					key: "organization_id",
					require: "true"
				}
			]
		},
		tags: [
			"organizations"
		],
		name: "GetOrganizationAttention",
		FFModelCombine: "Organizations"
	},
	{
		description: "------阅读明细-------",
		method: "get",
		path: "/v1/organizations/{organization_id}/read_details",
		parameters: {
			query: [
				{
					key: "sort_by_time",
					require: "false"
				},
				{
					key: "sort_by_read_times",
					require: "false"
				}
			],
			path: [
				{
					key: "organization_id",
					require: "true"
				}
			]
		},
		tags: [
			"organizations"
		],
		name: "GetOrganizationRead",
		FFModelCombine: "Organizations"
	},
	{
		description: "------获取机构和客户的提示-------",
		method: "get",
		path: "/v1/search_tips",
		parameters: {
			query: [
				{
					key: "keyword",
					require: "true"
				}
			]
		},
		tags: [
			"search_tips"
		],
		name: "GetV1Search",
		FFModelCombine: "Search_tips"
	},
	{
		description: "create read logs",
		method: "post",
		path: "/v1/journal/reads",
		parameters: {
			formData: [
				{
					key: "article_id",
					require: "true"
				},
				{
					key: "reader_id",
					require: "false"
				},
				{
					key: "author_id",
					require: "true"
				},
				{
					key: "openid",
					require: "false"
				}
			]
		},
		tags: [
			"journal"
		],
		name: "PostV1JournalReads",
		FFModelCombine: "Journal"
	},
	{
		description: "create share logs",
		method: "post",
		path: "/v1/journal/shares",
		parameters: {
			formData: [
				{
					key: "article_id",
					require: "true"
				},
				{
					key: "user_id",
					require: "false"
				},
				{
					key: "openid",
					require: "false"
				}
			]
		},
		tags: [
			"journal"
		],
		name: "PostV1JournalShares",
		FFModelCombine: "Journal"
	}
]

module.exports = configList
