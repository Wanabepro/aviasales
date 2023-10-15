import React from 'react'

import styles from './error.module.scss'

function Error({ onClick, error }) {
  return (
    <div className={styles.error}>
      <h1 className={styles.error__heading}>Error ocured</h1>
      <p className={styles.error__message}>{error?.error ? error.error : 'Internal server error.'}</p>
      <button className={styles.error__button} type="button" onClick={onClick}>
        Retry
      </button>
    </div>
  )
}

export default Error
