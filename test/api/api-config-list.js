function fileHeadInfo() {
	return "// {\n" + "//   description: api\u7684\u63CF\u8FF0,\n" + "//   method: api\u7684\u8BF7\u6C42\u65B9\u6CD5,\n" + "//   path: api\u8BF7\u6C42\u540E\u7F00\u5730\u5740,\n" + "//   parameters: api\u8BF7\u6C42\u65F6\u53EF\u80FD\u9700\u8981\u7684\u53C2\u6570,\n" + "//   tags: api\u7684\u6807\u7B7E,\n" + "//   needAuth: \u5B58\u5728\u8BE5\u5B57\u6BB5\u65F6\u5E76\u4E14\u4E3Atrue\u65F6\u8C03\u7528api\u65F6\u4F1A\u7ED1\u5B9A\u7528\u6237access_token,\n" + "//   easySignature: \u5B58\u5728\u8BE5\u5B57\u6BB5\u65F6\u5E76\u4E14\u4E3Atrue\u65F6\u8C03\u7528api\u4F1A\u751F\u6210\u53C2\u6570\u7B7E\u540D,\n" + "//   formData:\u5B58\u5728\u8BE5\u5B57\u6BB5\u65F6\u5E76\u4E14\u4E3Atrue\u65F6\u8C03\u7528api\u65F6\u4F7F\u7528\u8868\u5355\u63D0\u4EA4\u7684\u63A5\u53E3\u914D\u7F6E api.formDataRequest\n"(_templateObject) + "// \u53EF\u4EE5\u8BBF\u95EE\u9644\u5C5E\u540E\u53F0\n" + "// http://localhost:1000/editme\n" + // 这里编辑后台对应的路由
	"// \u67E5\u770BconfigList\u5217\u8868\n" + ("// \u672C\u6587\u4EF6\u66F4\u65B0\u65F6\u95F4\uFF1A" + getDate(new Date()) + "\n");
}
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
		name: "GetUserProfile"
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
