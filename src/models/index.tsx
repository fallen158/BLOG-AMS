interface IState {
  collapsed: boolean
  count: number
}

export default {
  namespace: 'app',
  state: {
    count: 0,
    collapsed: false
  },
  reducers: {
    toggle (state) {
      return {
        ...state,
        collapsed: !state.collapsed
      }
    },
    add (state: IState) {
      return {
        count: state.count + 1
      }
    },
    minus (state: IState) {
      return {
        count: state.count - 1
      }
    }
  }
}
