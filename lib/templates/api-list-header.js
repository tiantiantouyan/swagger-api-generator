
/* ┌────────────────────────────────────────────────────────────────────────────┐  */

// apiRequest是一个封装了axios请求的函数
// https://github.com/mzabriskie/axios
// 你也可以在./client下自定义_apiRequest_方法来发起客户端网络请求
// easySignature 是使用签名算法对api参数进行加密，如果在api-config-list中配置了
// 		使用签名算法，则api调用中使用easySignature算法

/*  └────────────────────────────────────────────────────────────────────────────┘ */

// 本文件更新时间：08-06-2017 19:24

// import { easySignature } from './signature' // 手动使用
"use strict";