interface IState {
  collapsed: boolean,
  breadCrumbList: object[],
  tagPagingList: object[]
}

export default {
  namespace: 'global',
  state: {
    collapsed: false,
    // 面包屑
    breadCrumbList: [
      {
        path: '/home',
        breadcrumbName: '首页'
      }
    ],
    // tag分页
    tagPagingList: [
      {
        link: '/home',
        name: '首页',
        active: false,
        visible: false
      },
      {
        link: '/home/articles/all',
        name: 'All Articles',
        active: true,
        visible: true
      }
    ],
    theme: ''
  },
  reducers: {
    toggle(state: IState) {
      return {
        ...state,
        collapsed: !state.collapsed
      }
    },
    setBreadCrumb(state: IState, { payload }: { payload: object[] }) {
      return {
        ...state,
        breadCrumbList: payload
      }
    },
    addTagPaing(state: IState, { payload }) {
      let arr = [...state.tagPagingList]
      arr.push(payload)
      let aStr = arr.map(value => JSON.stringify(value))
      let aWithNoRepeat = Array.from(new Set(aStr))
      aWithNoRepeat = aWithNoRepeat.map(value => JSON.parse(value))
      return { ...state, tagPagingLis: aWithNoRepeat }
    },
    setTagPaingActive(state: IState, { payload }: { payload: { name: string } }) {
      const tagPaingList = [...state.tagPagingList]
      tagPaingList.map((v: any) => {
        if (v.active === true) {
          v.active = false
        }
        if (v.name === payload.name) {
          v.active = true
        }
      })
    },
    removeTagPading(state: IState, { payload }: { payload: { name: string } }) {
      return {
        ...state,
        tagPagingList: state.tagPagingList.filter((v: any) => v.name !== payload.name)
      }
    }
  }
}
