# swagger-api-generator

> Generate dependent files of api request for your front-end project

## Install

```sh
npm install swagger-api-generator -g
```
## Alias

SAG: swagger-api-generator

SwaggerJson: 指用户(你)提供的Json输入源，本地的.swagger.json或者http://~.swagger_doc

## Usage

### Via `swagger-api-config.json`

**——swagger-api-config.json**

```
{
	"inputMode": "json", // "json", "url"
	"inputPath": "./swagger.json", // relative path
	"outputMode": "default", // "default", "apiOnly", "all"
	"outputPath": "./SAG" // relative path
}
```

**——Initial Configuration**

|Key Name|Value|Description|
|---|---|---|
|**inputMode**|json| use .json as source|
|             |url| user url as source |
|**inputPath**|./swagger.json|This path is relative path base on your project|
||http://10.100.xxx.x:8080/swagger_doc|url address to get source|
|**outputMode**|default，`-d` `--default`|Get: api-config-list.js, index.js, [dependent files]|
|| apiOnly `-a` `--apiOnly `|Get: index.js, [dependent files]|
||all `-A` `-all`|[All Generate File](#——All Generate File)|
|**outputPath**|./SAG|files generate path, default: `./SAG`|


**create a swagger-api-config.json**

```sh
sag init
```
>Then check whether you get this file


### Via CLI

>sag g `[inputPath]`(required) `[outputPath]` `<outputMode>`

```sh
sag g ./swagger.json ./src/api -A
```
>通过在项目路径下的swagger.json文件，在项目路径下src/api文件夹下，生成全部可生成文件

```sh
sag g ./swagger.json -a
```
>省略输出路径，使用默认`./SAG`，仅生成 `index.js`和`依赖文件`

```sh
sag g ./swagger.json ./src/api
```
>省略输出模式

```sh
sag g ./swagger.json 
```
>省略输出路径和输入模式


## File Generate Info

#####——All Generate File
|File Name|Description|
|------------------|---|
|**api-config-list.js**|SwaggerJson文件源映射成__Js格式的api列表配置文件__，所有api数据/方法的来源，可以读取，再次使用``sag g`` 命令后数组中配置过的api对象仍会保留，但是脚本会将swaggerJson中不存在的api方法会被删除，__不要在此文件中添加删除api对象__，可配置可选参数。[文件详情](#——api-config-list.js)|
|||
|**index.js**|__所有api调用方法的总线__，api请求链路上最后一步执行的函数。[文件详情](#——api-config-list.js)|
|||
|**Dependent files**|__api调用的方法依赖文件__，目前包括：[client.js](**——Dependent files**)，[signature.js](**——Dependent files**)，[utils.js](**——Dependent files**)|

**——Dependent files**

|File Name|Description|
|-----------|---|
|**client.js**|定义全局baseUrl(请求url前缀)，封装api请求使用的请求对象，可使用[axios](https://github.com/mzabriskie/axios),  [fetch](https://github.com/github/fetch)等Js-api请求库|
|||
|**signature.js**|定义api为请求参数生成签名的方法。轻依赖文件，如果你不需要签名功能，可以删除掉本文件|
|||
|**utils.js**|api调用时用到的一些逻辑方法，目前包括: forEach (polyfill)|


## File Change Info
>第一次使用SAG或者后端更新swaggerJson输入源后，运行
`sag g [outputPath] [inputPath] <outputMode>`, SAG将会：

1. **api-config-list.js**：SAG会遍历生成api配置数组，保留配置过的api对象，清除SwaggerJson中不存在的api对象，如果你在此文件中添加了临时的api对象，若在SwaggerJson中不存在，将会被清除，所以`不应该在此文件中添加不存在/不提供的api`
2. **index.js**：SAG将生成新的index.js，`用户**在此文件中**的修改/临时添加的api方法将不会保留`
3. **[Dependent files](#####——All Generate File)**： 所有依赖文件`如果已存在，将使用存在的文件`，SAG不做任何替换

>SwaggerJson提供的api与项目的api一一对应，即前端不应该自定义后端不提供的api，但是由于项目开发中前端工作超前于后端，可能需要一些变动的方式

**——添加临时/测试api接口**
>在`本地SwaggerJson输入源`中暂时添加对应格式的api-json对象
>
```json
"/v1/organizations/{organization_id}/read_details": {
    "get": {
        "description": "------获取机构阅读信息-------",
        "parameters": [{
            "in": "formData", // post等方法请求Body中的参数
            "name": "timescope",
            "type": "string",
            "required": false
        }, {
            "in": "query", // url地址后缀中的参数
            "name": "sort_by_read_times",
            "type": "string",
            "required": false
        }, {
            "in": "path", // 路径中的参数 
            "name": "organization_id",
            "type": "integer",
            "required": true
        }],
        "tags": ["organizations"],
    }
},
```
上述字段都是SAG运行必须依赖的参数，其他参数你看心情


## SwaggerJson Example:
> This is a code block generated by [grape-swagger](https://github.com/ruby-grape/grape-swagger)
> 
> 这是一段由后端Ruby grape-swagger插件生成的 `api-json文档`, 保存为`.json`文件后使用SAG试试
>
```
{
    "info": {
        "title": "projectApi",
        "version": "0.0.1"
    },
    "swagger": "2.0",
    "produces": ["application/json"],
    "host": "localhost:8080",
    "paths": {
        "/v1/users/{user_id}/profile": {
            "get": {
                "summary": "------获取用户信息--------",
                "description": "------获取用户信息--------",
                "produces": ["application/json"],
                "parameters": [{
                    "in": "path",
                    "name": "user_id",
                    "description": "user id",
                    "type": "string",
                    "required": true
                }],
                "responses": {
                    "200": {
                        "description": "------获取用户信息-------"
                    }
                },
                "tags": ["users"],
                "operationId": "getV1UsersUserIdProfile"
            }
        },
        "/v1/auth/sms/code": {
            "post": {
                "summary": "-------send sms code----------",
                "description": "-------send sms code----------",
                "produces": ["application/json"],
                "consumes": ["application/json"],
                "parameters": [{
                    "in": "formData",
                    "name": "phone",
                    "description": "phone number",
                    "type": "string",
                    "required": true
                }, {
                    "in": "formData",
                    "name": "channel",
                    "description": "channel",
                    "type": "string",
                    "enum": ["web", "ios"],
                    "required": true
                }, {
                    "in": "formData",
                    "name": "action",
                    "type": "string",
                    "enum": ["register", "reset"],
                    "required": true
                }],
                "responses": {
                    "201": {
                        "description": "-------send sms code----------"
                    }
                },
                "tags": ["auth"],
                "operationId": "postV1AuthSmsCode"
            }
        },
        "/v1/search_tips": {
            "get": {
                "summary": "------获取搜索信息-------",
                "description": "------获取搜索信息-------",
                "produces": ["application/json"],
                "parameters": [{
                    "in": "query",
                    "name": "keyword",
                    "description": "关键词",
                    "type": "string",
                    "required": true
                }],
                "responses": {
                    "200": {
                        "description": "------获取搜索信息-------"
                    }
                },
                "tags": ["search_tips"],
                "operationId": "getV1SearchTips"
            }
        }
    }
}
```
