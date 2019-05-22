import React from 'react'
import { Layout, Icon } from 'antd'
const { Header } = Layout
import styles from './index.css'

interface IProps {
  collapsed: boolean
  onClick: () => {}
}

const Index: React.SFC<IProps> = (props: IProps) => {
  return (
    <Header style={{ background: '#fff', padding: 0 }}>
      <Icon
        className={styles.trigger}
        type={props.collapsed ? 'menu-unfold' : 'menu-fold'}
        onClick={props.onClick}
      />
    </Header>
  )
}

export default Index
