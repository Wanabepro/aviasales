import React from 'react'

import styles from './loadingBar.module.scss'

function LoadingBar() {
  return (
    <div className={styles.bar}>
      <div className={styles.bar__fill} />
    </div>
  )
}

export default LoadingBar
