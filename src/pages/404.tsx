import React from 'react'
import styles from './404.css'

const Error: React.FC = () => {
  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.error_number}>404</h1>
        <p className={styles.error_title}>ERROR</p>
        <p className={styles.error_description}>Nothing left to do here.</p>
      </div>
    </div>
  )
}

export default Error
