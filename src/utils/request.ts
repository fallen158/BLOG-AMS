import { extend } from 'umi-request'
import router from 'umi/router'

// function checkStatus(response: any) {
//   if (response.status >= 200 && response.status <= 300) {
//     return response
//   }
//   const error: any = new Error(response.statusText)
//   error.response = response
//   throw error
// }

// const optionsx = {
//   headers: {
//     'content-type': 'application/json',      // headers: {
//     Authorization:
//       'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJmYWxsZW43OTMzLmNuIiwiZGF0YSI6eyJpZCI6MiwidXNlcm5hbWUiOiJsaXNpIiwicGFzc3dvcmQiOiIiLCJuaWNrTmFtZSI6bnVsbCwiZW1haWwiOm51bGx9LCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNTYwMTUwODQzLCJleHAiOjE1NjAyMzcyNDN9.jqrPiFLAZReWmv950r8nF2kfRx1s-FZHdUz-N7IADKmrKPzHkBC5pqF9FJcTE-IpQCg9SZuoXeb8HmLlGYZd5VqBu0L2PLJvnEYQ5U1fvjG_bf0SBJ5fgeh0EADLTEq7XWtYPprChV6oqUGnrHwtXvbk75dBHXGac3FWGE56FTt2mS92XiI1vhz9qOXqsFv2nq5G4QB0RWYAJDS1YRLRq5YYxbyvXq0x255adhUIAlcr8TMsHVCaze2GStgOmfAQ5OHdh7iXVVfo-NurL6kBPC6MkulimE6MuLYfmFgJXIqpwCuhSYUx4xL_woir7Y7IYUfQ0isd-696MGOsH43nAw'
//   }
// }
// export default async function request(url: string, options: any = optionsx) {
//   try {
//     const response = await fetch(url, options)
//     checkStatus(response)
//     const data = await response.json()
//     return data
//   } catch (error) {
//     console.log(error)
//   }
// }

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
    'content-type': 'application/json',      // headers: {
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
  return response
})

export default request
