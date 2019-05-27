import * as userServices from '@/services/user'

interface IUserState {
  token: string
  msg: string
}

export default {
  namespace: 'users',
  state: {
    token: '',
    msg: '',
    error: ''
  },
  reducers: {
    save(state: IUserState, { payload: { msg, token, error } }) {
      return { ...state, msg, token, error }
    }
  },
  effects: {
    *login({ payload: { username, password } }, { call, put }) {
      const { msg, token, error } = yield call(userServices.login, { username, password })
      yield put({ type: 'save', payload: { msg, token, error } })
      return { msg, error }
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
