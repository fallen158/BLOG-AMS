interface ISiderMenuList {
  key: string
  icon: string
  id: number
  title: string
  children: Array<IMenuChildren>
}

interface IMenuChildren {
  key: string
  text: string
}
const sideMenuList: Array<ISiderMenuList> = [
  {
    key: '测试1',
    icon: 'appstore',
    title: '测试1',
    id: 1,
    children: [
      {
        key: '1-1',
        text: 'Option 1'
      },
      {
        key: '1-32',
        text: 'Option 122'
      }
    ]
  },
  {
    key: '测试2',
    icon: 'appstore',
    title: '测试2',
    id: 2,
    children: [
      {
        key: '2-2',
        text: 'Option 2'
      }
    ]
  },
  {
    key: '测试3',
    icon: 'appstore',
    title: '测试3',
    id: 3,
    children: [
      {
        key: '3-3',
        text: 'Option 3'
      }
    ]
  },
  {
    key: '测试4',
    icon: 'appstore',
    title: '测试4',
    id: 4,
    children: [
      {
        key: '4-4',
        text: 'Option 1'
      }
    ]
  }
]

export default sideMenuList
