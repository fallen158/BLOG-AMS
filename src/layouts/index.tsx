import React from 'react'
import styles from './index.css'
import { Layout } from 'antd'
import Sider from './TheSider'
import Header from './TheHeader'
import Users from './users'
import { connect } from 'dva'

import { TransitionGroup, CSSTransition } from 'react-transition-group'

const { Content, Footer } = Layout
interface IProps {
  collapsed: boolean
  children: ChildNode
  dispatch: Function
  location: Location
}

const Index: React.FC<IProps> = (props: IProps) => {
  const { collapsed, dispatch } = props
  const { pathname } = props.location
  if (pathname.indexOf('/users') > -1) {
    return <Users>{props.children}</Users>
  }
  if (pathname.indexOf('/404') > -1) {
    return <>{props.children}</>
  }
  function handleToggle(): Function {
    return dispatch({ type: 'global/toggle' })
  }
  return (
    <Layout className={styles.container}>
      <Sider collapsed={collapsed} />
      <Layout>
        <Header onClick={handleToggle} collapsed={collapsed} />
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            background: '#fff',
            minHeight: 280
          }}
        >
          <TransitionGroup>
            <CSSTransition
              key={props.location.pathname}
              classNames={['fade', 'spread'][Math.random()]}
              timeout={1000}
            >
              {props.children}
            </CSSTransition>
          </TransitionGroup>
        </Content>
        <Footer style={{ textAlign: 'center' }}>UMI ©2019 Created Fallen Blog AMS</Footer>
      </Layout>
    </Layout>
  )
}

const mapStateToProps = (state) => {
  const { collapsed } = state.global
  return {
    collapsed
  }
}

export default connect(mapStateToProps)(Index)
