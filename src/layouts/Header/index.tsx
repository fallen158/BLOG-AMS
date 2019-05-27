import React from 'react'
import { Layout, Icon, Menu, Dropdown } from 'antd'
import { setLocale } from 'umi-plugin-locale'
const { Header } = Layout
import styles from './index.css'

interface IProps {
  collapsed: boolean
  onClick: () => {}
}

interface ILangList {
  key: string
  text: string
  icon: string
}

const langList: Array<ILangList> = [
  {
    key: 'zh-CN',
    text: '简体中文',
    icon: '🇨🇳'
  },
  {
    key: 'en-US',
    text: 'English',
    icon: '🇧🇷'
  }
]

const Index: React.SFC<IProps> = (props: IProps) => {
  const hanledLocales = (key: string) => {
    setLocale(key)
  }
  const menu = (
    <Menu defaultSelectedKeys={['zh_CN']}>
      {langList.map((v: ILangList) => (
        <Menu.Item
          key={v.key}
          style={{ paddingRight: '50px' }}
          onClick={() => hanledLocales(v.key)}
        >
          <span role="img" aria-label={v.text}>
            {v.icon}
          </span>
          {v.text}
        </Menu.Item>
      ))}
    </Menu>
  )
  return (
    <Header className={styles.header}>
      <span>
        <Icon
          className={styles.trigger}
          type={props.collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={props.onClick}
        />
      </span>
      <span>
        <Dropdown overlay={menu} placement="bottomRight">
          <Icon type="global" className={styles.global} />
        </Dropdown>
      </span>
    </Header>
  )
}

export default Index
