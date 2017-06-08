import axios from 'axios'

// Config BASE_URL
/* ┌────────────────────────────────────────────────────────────────────────────┐  */ 

export const baseURL =
	`http://ec2-52-201-242-128.compute-1.amazonaws.com/mocks/f4b769f1-2344-4208-8715-e268db1ea14a`

/*  └────────────────────────────────────────────────────────────────────────────┘ */


// Other thing is OK unless you want to define a self request method
/* ┌────────────────────────────────────────────────────────────────────────────┐  */ 

const baseRequest = axios.create({
  baseURL: baseURL,
	timeout: 30 * 1000
})

export function Request (config) {
  return baseRequest
    .request(config)
    .then(response => { return { response: response.data } })
    .catch(error => { return { error } })
}

export function FormDataRequest ({ url, attachment, Authorization }) {
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
/*  └────────────────────────────────────────────────────────────────────────────┘ */
