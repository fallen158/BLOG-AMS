import React from 'react'
import { Icon, Menu, Dropdown, PageHeader, Row, Col, Breadcrumb } from 'antd'
import { setLocale } from 'umi-plugin-locale'
import styles from './index.css'
import Link from 'umi/link'
import TagsView from '../TagsView'
interface IProps {
  collapsed: boolean
  Routes: []
  onClick: () => {}
}
interface ILangList {
  key: string
  text: string
  icon: string
}

interface IRoute {
  path: string
  breadcrumbName: string
}

function itemRender (route: IRoute, params: {}, routes: any, paths: string[]) {
  const last = routes.indexOf(route) === routes.length - 1
  return last ? (
    <span>{route.breadcrumbName}</span>
  ) : (
    <Link to={route.path}>{route.breadcrumbName}</Link>
  )
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

const Index: React.FC<IProps> = (props: IProps) => {
  const { collapsed, onClick, Routes } = props
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
    <>
      <Row className={styles.header} type='flex' align='middle'>
        <Col span={12}>
          <Row type='flex' align='middle' justify='start'>
            <Icon
              className={styles.trigger}
              type={collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={onClick}
            />
            <Breadcrumb itemRender={itemRender} routes={Routes} />
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
    </>
  )
}

export default Index
