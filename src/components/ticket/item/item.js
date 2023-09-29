import React from 'react'

import styles from './item.module.scss'

function Item() {
  return (
    <div className={styles.item}>
      <div className={styles.item__column}>
        <h3 className={styles.item__header}>MOV - HKT</h3>
        <span className={styles.item__info}>10:45 - 08:00</span>
      </div>
      <div className={styles.item__column}>
        <h3 className={styles.item__header}>В пути</h3>
        <span className={styles.item__info}>21ч 15м</span>
      </div>
      <div className={styles.item__column}>
        <h3 className={styles.item__header}>2 пересадки</h3>
        <span className={styles.item__info}>HKG, JNB</span>
      </div>
    </div>
  )
}

export default Item
