import { extend } from 'umi-request'
import router from 'umi/router'
const token = localStorage.getItem('CY_TOKEN')
const request = extend({
  maxCache: 10, // 最大缓存个数, 超出后会自动清掉按时间最开始的一个.
  prefix: '/api/', // prefix
  // suffix: '.json', // suffix
  errorHandler: (error) => {
    // 集中处理错误
    // tslint:disable-next-line: no-console
    console.log(error)
  },
  headers: {
    'content-type': 'application/json',
    Authorization:
      `Bearer ${token}`
  }
})

request.interceptors.response.use((response) => {
  if (response.status === 401) {
    // Token 过期,重新登录
    window.localStorage.clear()
    router.push('/users/login')
  }

  if (response.status >= 200 && response.status <= 300) {
    return response
  }

  const error: any = new Error(response.statusText)
  error.response = response
  throw error
})

export default request
