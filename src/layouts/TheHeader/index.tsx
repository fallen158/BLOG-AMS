import React from 'react'
import { Layout, Icon, Menu, Dropdown, PageHeader, Row, Col } from 'antd'
import { setLocale } from 'umi-plugin-locale'
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

const routes = [
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
          <span role='img' aria-label={v.text}>
            {v.icon}
          </span>
          {v.text}
        </Menu.Item>
      ))}
    </Menu>
  )
  return (
    <Row className={styles.header} type='flex' align='middle'>
      <Col span={12}>
        <Row type='flex' align='middle' justify='start'>
          <Icon
            className={styles.trigger}
            type={props.collapsed ? 'menu-unfold' : 'menu-fold'}
            onClick={props.onClick}
          />

          <PageHeader title='' breadcrumb={{ routes }} />
        </Row>
      </Col>
      <Col span={12}>
        <Row type='flex' justify='end'>
          <Dropdown overlay={menu} placement='bottomRight'>
            <Icon type='global' className={styles.global} />
          </Dropdown>
        </Row>
      </Col>
    </Row>
  )
}

export default Index
