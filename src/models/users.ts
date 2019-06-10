import * as userServices from '@/services/user'
interface IUserState {
  data: {},
  code: number
}

interface ILoginPaylod {
  username: string,
  password: string
}

interface IEffectsFn {
  call: Function,
  put: Function
}

interface IDispatch {
  type: string,
  payload: {}
}

interface IHistory {
  history: History
}

export default {
  namespace: 'users',
  state: {
    data: '',
    code: 0
  },
  reducers: {
    save(state: IUserState, { payload: { data, code } }: { payload: IUserState }) {
      return { ...state, data, code }
    }
  },
  effects: {
    *login({ payload: { username, password } }: { payload: ILoginPaylod }, { call, put }: IEffectsFn) {
      const { data, code } = yield call(userServices.login, { username, password })
      yield put({ type: 'save', payload: { data, code } })
      return { data, code }
    }
  },
  subscriptions: {
    setup({ dispatch, history }: { dispatch: (obejct: IDispatch) => {}, history: IHistory }) {
      const token = localStorage.getItem('CY_TOKEN')
      const data = {
        msg: 'get localStorage Token',
        token
      }
      if (token) {
        return dispatch({ type: 'save', payload: { data, code: 0 } })
      }
    }
  }
}
