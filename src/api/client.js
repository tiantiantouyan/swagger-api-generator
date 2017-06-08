import axios from 'axios'
let baseURL = `http://ec2-52-201-242-128.compute-1.amazonaws.com/mocks/f4b769f1-2344-4208-8715-e268db1ea14a`
let resServer = `https://res.tiantiantouyan.com/res`

// if (__API_DEV__) {
//   // baseURL = `http://192.168.1.100:808/api`
//   // resServer = `http://192.168.1.100:808/res`
//   baseURL = `http://ec2-52-201-242-128.compute-1.amazonaws.com/mocks/f4b769f1-2344-4208-8715-e268db1ea14a`
//   resServer = `https://res.tiantiantouyan.com/res`
// } else if (__API_TEST__) {
//   baseURL = `http://wechat.tiantiantouyan.com/api`
//   resServer = `http://wechat.tiantiantouyan.com/res`
// } else if (__API_RC__) {
//   baseURL = `https://rc.wechat.tiantiantouyan.com/api`
//   resServer = `https://res.tiantiantouyan.com/res`
// } else if (__API_PROD__) {
//   baseURL = `https://wechat.tiantiantouyan.com/api`
//   resServer = `https://res.tiantiantouyan.com/res`
// }

const commonConfig = {
  baseURL,
  timeout: 30 * 1000
  // headers: { 'Access-Control-Allow-Origin': true }
}

const v1 = axios.create(Object.assign(commonConfig, {
  baseURL: baseURL + '/v1'
}))

function v1Request (config) {
  return v1
    .request(config)
    .then(response => { return { response: response.data } })
    .catch(error => { return { error } })
}

function v1FormDataRequest ({ url, attachment, Authorization }) { // 上传图片类型的请求模型
  const formDataconfig = {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }
  if (Authorization) formDataconfig.headers.Authorization = Authorization
  return axios
    .post(`${baseURL}/v1${url}`, attachment, formDataconfig)
    .then(response => {
      return { response: response.data }
    })
    .catch(error => { return { error } })
}

export { resServer }

export default { v1, baseURL, v1Request, v1FormDataRequest }
