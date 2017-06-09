// 本文件为可选文件，不需要签名请求的项目可删除本文件
// 本文件的相关依赖库需要自己安装，比如下面的 lodash以及js-sha1
// 当部分api需要配置签名时，使用到的签名方法来自此文件

import { toPairs, join, map } from 'utils/lodash'
import orderBy from 'lodash/orderBy'
import sha1 from 'js-sha1'

const secret = 'FhPRw8bwAVWTcjNNTp4G'

function makeupArgs (args) {
  const ordered = orderBy(toPairs(args), 0, ['desc'])
  return join(map(ordered, (i) => join(i, '=')), '&&')
}

function signature (args) {
  const encoded = makeupArgs(args)
  return sha1(encoded)
}

function easySignature (params = {}) {
  let args = { ...params }
  args.secret = secret
  args.timestamp = new Date().getTime()
  args.noncestr = Math.random().toString(36).slice(2)
  return {
    ...params,
    timestamp: args.timestamp,
    noncestr: args.noncestr,
    signature: signature(args)
  }
}

export {
  easySignature
}

export default signature
