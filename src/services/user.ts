import request from '@/utils/request'

type ILogin = {
  username: string,
  password: string
}

export function login({ username, password }: ILogin) {
  return request(`users/login`, {
    method: 'POST', body: JSON.stringify({ username, password }), headers: {
      'content-type': 'application/json'
    }
  })
}
