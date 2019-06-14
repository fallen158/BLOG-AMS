interface IState {
  collapsed: boolean
  count: number
}

export default {
  namespace: 'global',
  state: {
    count: 0,
    collapsed: false,
    // 面包屑
    breadCrumbList: [
      {
        path: 'index',
        breadcrumbName: '首页'
      },
      {
        path: 'first',
        breadcrumbName: '综和实例'
      },
      {
        path: 'second',
        breadcrumbName: '文章列表'
      }
    ],
    // tag分页
    tagPagingList: [
      {
        name: '/home',
        active: false,
        visible: false
      }
    ],
    theme: ''
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
