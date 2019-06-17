import React, { useDebugValue, useEffect } from 'react'
import Link from 'umi/link'
import { Tag } from 'antd'
import styles from './style.css'

interface ITagPangList {
  link: string
  name: string
  active: boolean
  visible: boolean
}

interface IProps {
  tagPagingList: Array<ITagPangList>
  onClose: (name: string) => {}
  onClick: (name: string) => {}
}

const Index: React.FC<IProps> = (props: IProps) => {
  const { tagPagingList, onClose, onClick } = props
  return (
    <div>
      {tagPagingList && tagPagingList.length >= 1
        ? tagPagingList.map((v: ITagPangList, i: number) => (
            <Tag
              key={i}
              onClick={() => onClick(v.name)}
              className={v.active ? styles.tags_active : styles.tags}
              closable={v.visible ? true : false}
              onClose={() => onClose(v.name)}
            >
              <Link to={v.link} style={{ color: 'inherit' }}>
                {v.name}
              </Link>
            </Tag>
          ))
        : null}
      {/* <Tag onClick={() => console.log(1)} className={styles.tags}>
        <Link to="/home/index" style={{ color: 'inherit' }}>
          首页
        </Link>
      </Tag>
      <Tag closable={true} onClose={log} className={styles.tags}>
        Tag 2
      </Tag>
      <Tag closable={true} onClose={preventDefault}>
        Prevent Default
      </Tag> */}
    </div>
  )
}

export default Index
