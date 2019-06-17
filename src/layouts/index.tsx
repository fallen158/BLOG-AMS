import React, { useEffect, useContext } from 'react'
import styles from './index.css'
import { Layout, Row } from 'antd'
import Sider from './TheSider'
import Header from './TheHeader'
import Users from './users'
import { connect } from 'dva'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
const { Content, Footer } = Layout
import TagsView from './TagsView'
interface IProps {
  collapsed: boolean
  breadCrumbList: []
  children: ChildNode
  dispatch: Function
  location: Location
  tagPagingList: []
}

const Index: React.FC<IProps> = (props: IProps) => {
  const { collapsed, dispatch, breadCrumbList, tagPagingList } = props
  const { pathname } = props.location
  useEffect(() => {
    if (pathname === '/home') {
      dispatch({
        type: 'global/setBreadCrumb',
        payload: [
          {
            path: '/home',
            breadcrumbName: '首页'
          }
        ]
      })
    }
  }, [pathname])
  const handleSetBreadOrTag = (params: object[], tagsView: {}) => {
    dispatch({ type: 'global/setBreadCrumb', payload: params })
    dispatch({ type: 'global/addTagPaing', payload: tagsView })
  }
  if (pathname.indexOf('/users') > -1) {
    return <Users>{props.children}</Users>
  }
  if (pathname.indexOf('/404') > -1) {
    return <>{props.children}</>
  }
  return (
    <Layout className={styles.container}>
      <Sider collapsed={collapsed} setBreadCrumb={handleSetBreadOrTag} />
      <Layout>
        <Header
          onClick={() => dispatch({ type: 'global/toggle' })}
          collapsed={collapsed}
          Routes={breadCrumbList}
        />
        <Row className={styles.tags_container} type='flex' align='middle'>
          <TagsView
            tagPagingList={tagPagingList}
            onClick={(name: string) =>
              dispatch({ type: 'global/setTagPaingActive', payload: { name } })
            }
            onClose={(name: string) =>
              dispatch({ type: 'global/removeTagPading', payload: { name } })
            }
          />
        </Row>
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
              timeout={10}
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

interface IGlobalState {
  collapsed: boolean
  breadCrumbList: []
  tagPagingList: []
}

const mapStateToProps = (state: { global: IGlobalState }) => {
  const { collapsed, breadCrumbList, tagPagingList } = state.global
  return {
    collapsed,
    breadCrumbList,
    tagPagingList
  }
}

export default connect(mapStateToProps)(Index)
