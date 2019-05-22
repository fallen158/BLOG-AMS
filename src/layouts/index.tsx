import React from 'react'
import styles from './index.css'
import { Layout } from 'antd'
import Sider from '@/components/Sider'
import Header from '@/components/Header'
import { connect } from 'dva'

// import withRouter from 'umi/withRouter'
// import { TransitionGroup, CSSTransition } from 'react-transition-group'

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
    return <>{props.children}</>
  }
  function handleToggle(): Function {
    return dispatch({ type: 'app/toggle' })
  }
  return (
    <Layout className={styles.root}>
      <Sider collapsed={collapsed} />
      <Layout>
        <Header onClick={handleToggle} collapsed={collapsed} />
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            background: '#fff',
            minHeight: 280
            // height: 300,
            // overflow: 'auto'
          }}
        >
          {props.children}
        </Content>
        <Footer style={{ textAlign: 'center' }}>UMI ©2019 Created Fallen Blog AMS</Footer>
      </Layout>
    </Layout>
  )
}

const mapStateToProps = (state) => {
  const { collapsed } = state.app
  return {
    collapsed
  }
}

export default connect(mapStateToProps)(Index)
