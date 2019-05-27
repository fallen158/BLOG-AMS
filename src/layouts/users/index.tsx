import React from 'react'
import styles from './style.css'
import logo from '@/assets/logo.png'

interface IProps {
  children: ChildNode
}

const componentName: React.SFC<IProps> = (props: IProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src={`${logo}`} alt="logo"/>
      </div>
      {props.children}
    </div>
  )
}

export default componentName
