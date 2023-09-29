import React from 'react'

import styles from './tabs.module.scss'

function Tabs() {
  return (
    <form action="">
      <ul className={styles.tabs}>
        <li className={styles.tabs__item}>
          <label className={styles.tabs__label}>
            <input name="tabs" value={1} className={styles.tabs__radio} type="radio" />
            Самый дешевый
          </label>
        </li>
        <li className={styles.tabs__item}>
          <label className={styles.tabs__label}>
            <input name="tabs" value={2} className={styles.tabs__radio} type="radio" />
            Самый быстрый
          </label>
        </li>
        <li className={styles.tabs__item}>
          <label className={styles.tabs__label}>
            <input name="tabs" value={3} className={styles.tabs__radio} type="radio" />
            Оптимальный
          </label>
        </li>
      </ul>
    </form>
  )
}

export default Tabs
