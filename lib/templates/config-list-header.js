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
"use strict";