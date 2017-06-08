

// {
//   description: swaggerApiObject的描述字段,
//   method: api的请求方法,
//   path: api请求后缀地址,
//   parameters: api请求时可能需要的参数,
//   tags: swaggerApiObject给api打上的tag，用于后台api管理,
//   needAuth: 存在该字段时并且为true时调用api时会绑定用户access_token,
//   easySignature: 存在该字段时并且为true时调用api会生成参数签名,
//   formData:存在该字段时并且为true时调用api时使用表单提交的接口配置 api.formDataRequest
// }

// 可以访问附属后台
// http://localhost:1000/editme
// 查看configList表格，查看api的相关配置

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
		needAuth: true
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
		name: "PostV1AuthSmsCode"
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
		name: "PostV1AuthLoginPhone"
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
		name: "PatchV1AuthResetPassword"
	},
	{
		description: "------鑾峰彇绛涢€夐」淇℃伅-------",
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
		name: "GetV1FilterItems"
	},
	{
		description: "------鑾峰彇鍐呭鍒嗘瀽鏁版嵁-------",
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
		name: "GetV1Articles"
	},
	{
		description: "------鑾峰彇鍐呭闃呰鎯呭喌-------",
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
		name: "GetArticle"
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
		name: "GetId"
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
					require: "true"
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
		name: "PostV1ProtectedContents"
	},
	{
		description: "------鑾峰彇瀹㈡埛淇℃伅鍒楄〃-------",
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
		name: "GetV1Customers"
	},
	{
		description: "------鑾峰彇鍗曚竴瀹㈡埛淇℃伅-------",
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
		name: "GetCustomer"
	},
	{
		description: "------瀵规垜鐨勫叧娉ㄦ儏鍐�-------",
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
		name: "GetCustomerAttention"
	},
	{
		description: "------闃呰鏄庣粏-------",
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
		name: "GetCustomerRead"
	},
	{
		description: "------鏈烘瀯涓殑瀹㈡埛淇℃伅-------",
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
		name: "GetOrganization"
	},
	{
		description: "------鏈烘瀯鎵€鏈夊鎴峰鎴戠殑鍏虫敞鎯呭喌-------",
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
		name: "GetOrganizationAttention"
	},
	{
		description: "------闃呰鏄庣粏-------",
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
		name: "GetOrganizationRead"
	},
	{
		description: "------鑾峰彇鏈烘瀯鍜屽鎴风殑鎻愮ず-------",
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
		name: "GetV1Search"
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
					require: "true"
				},
				{
					key: "author_id",
					require: "true"
				}
			]
		},
		tags: [
			"journal"
		],
		name: "PostV1JournalReads"
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
					require: "true"
				}
			]
		},
		tags: [
			"journal"
		],
		name: "PostV1JournalShares"
	}
]

module.exports = configList
