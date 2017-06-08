import axios from 'axios'

export const baseURL = `http://ec2-52-201-242-128.compute-1.amazonaws.com/mocks/f4b769f1-2344-4208-8715-e268db1ea14a`

const commonConfig = {
  timeout: 30 * 1000
}

const baseRequest = axios.create(Object.assign(commonConfig, {
  baseURL: baseURL
}))

export function Request (config) {
  return baseRequest
    .request(config)
    .then(response => { return { response: response.data } })
    .catch(error => { return { error } })
}

export function FormDataRequest ({ url, attachment, Authorization }) { // 上传图片类型的请求模型
  const formDataconfig = {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }
  if (Authorization) formDataconfig.headers.Authorization = Authorization
  return axios
    .post(`${baseURL}${url}`, attachment, formDataconfig)
    .then(response => {
      return { response: response.data }
    })
    .catch(error => { return { error } })
}

