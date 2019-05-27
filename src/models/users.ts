import * as userServices from '@/services/user'
export default {
  namespace: 'users',
  state: {
    token: '',
    name: '',
    redirect: '/',
    msg: ''
  },
  reducers: {
    save(state, { payload: { name, msg, token } }) {
      console.log(name, msg, token)
      return { ...state, name, msg, token }
    }
  },
  effects: {
    *login({ payload: { username, password } }, { call, put }) {
      const { name, msg, token } = yield call(userServices.login, { username, password })
      yield put({ type: 'save', payload: { name, msg, token } })
    },
    *register() {

    }
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        console.log(1)
      })
    }
  }
}