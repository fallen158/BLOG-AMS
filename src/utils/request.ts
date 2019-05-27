import fetch from 'dva/fetch'

function checkStatus (response: any) {
  if (response.status >= 200 && response.status <= 300) {
    return response
  }
  const error: any = new Error(response.statusText)
  error.response = response
  throw error
}

export default async function request (url: string, options: any) {
  const response: any = await fetch(url, options)
  checkStatus(response)

  const data = await response.json()
  const ret: any = {
    data,
    headers: {}
  }
  // if (response.headers.get('x-total-count')) {
  //   ret.headers['x-total-count'] = response.headers.get('x-total-count')
  // }
  return ret
}
