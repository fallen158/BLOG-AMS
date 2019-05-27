// import { formatMessage } from 'umi-plugin-locale'
interface IMenuChildren {
  id: number,
  name: string,
  url: string
}
interface ISiderMenuList {
  id: number,
  name: string,
  icon: string,
  url: string,
  children: Array<IMenuChildren>
}

const menuList: Array<ISiderMenuList> = [
  {
    id: 1,
    name: 'dashboard',
    icon: 'appstore',
    url: '/dashboard',
    children: [
      {
        id: 11,
        name: 'Analysis',
        url: '/home/dashboard/analysis'
      },
      {
        id: 12,
        name: 'Monitor',
        url: '/home/dashboard/monitor'
      },
      {
        id: 13,
        name: 'Control',
        url: '/home/dashboard/control'
      }
    ]
  },
  {
    id: 2,
    name: 'Articles',
    icon: 'appstore',
    url: '/home/articles',
    children: [
      {
        id: 21,
        name: 'All Articles',
        url: '/home/articles/all'
      },
      {
        id: 22,
        name: 'New Article',
        url: '/home/articles/new'
      }
    ]
  },
  {
    id: 3,
    icon: 'appstore',
    name: 'Comment',
    url: '/comment',
    children: [
      {
        id: 31,
        name: '所有评论',
        url: '/comment/31'
      },
      {
        id: 32,
        name: '留言评论',
        url: '/comment/32'
      }
    ]
  },
  {
    id: 4,
    icon: 'appstore',
    name: 'Music',
    url: '/comment',
    children: [
      {
        id: 41,
        name: '音乐列表',
        url: '/music/31'
      }
    ]
  },
  {
    id: 5,
    icon: 'appstore',
    name: 'Settings',
    url: '/settings',
    children: [
      {
        id: 51,
        name: '全局配置',
        url: '/comment/51'
      },
      {
        id: 52,
        name: '个人中心',
        url: '/comment/52'
      },
      {
        id: 53,
        name: '个人设置',
        url: '/comment/53'
      }
    ]
  }
]

export default menuList
