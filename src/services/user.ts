import request from '@/utils/request'


export function login({ username, password }) {


  return request(`/api/users/login`, {
    method: 'POST', body: JSON.stringify({ username, password }), headers: {
      'content-type': 'application/json'
    },
  })
}

export function register(data) {
  return request(`/api/users/regitser`, { method: 'POST', data: JSON.stringify(data) })
}

export function logout() { }

export function changePwd() { }
