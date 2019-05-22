import React from 'react'
import styles from './index.css'
import { Layout } from 'antd'
import Sider from '@/components/Sider'
import Header from '@/components/Header'
import { connect } from 'dva'

const { Content, Footer } = Layout

interface IProps {
  collapsed: boolean
  children: ChildNode
  dispatch: Function
}

const Index: React.FC<IProps> = (props: IProps) => {
  const { collapsed, dispatch } = props
  function handleToggle(): Function {
    return dispatch({ type: 'app/toggle' })
  }
  return (
    <Layout className={styles.root}>
      <Sider collapsed={collapsed}  />
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
          {props.children}
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
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
