import React from 'react'

import styles from './filters.module.scss'

function Filters() {
  return (
    <div className={styles.filters}>
      <h2 className={styles.filters__header}>Количество пересадок</h2>
      <form action="">
        <ul>
          <li className={styles.filters__item}>
            <label className={styles.filters__label}>
              <input className={styles.filters__checkbox} type="checkbox" />
              <span className={styles['filters__custom-checkbox']} />
              <span className={styles.filters__text}>Все</span>
            </label>
          </li>
          <li className={styles.filters__item}>
            <label className={styles.filters__label}>
              <input className={styles.filters__checkbox} type="checkbox" />
              <span className={styles['filters__custom-checkbox']} />
              <span className={styles.filters__text}>Без пересадок</span>
            </label>
          </li>
          <li className={styles.filters__item}>
            <label className={styles.filters__label}>
              <input className={styles.filters__checkbox} type="checkbox" />
              <span className={styles['filters__custom-checkbox']} />
              <span className={styles.filters__text}>1 пересадка</span>
            </label>
          </li>
          <li className={styles.filters__item}>
            <label className={styles.filters__label}>
              <input className={styles.filters__checkbox} type="checkbox" />
              <span className={styles['filters__custom-checkbox']} />
              <span className={styles.filters__text}>2 пересадки</span>
            </label>
          </li>
          <li className={styles.filters__item}>
            <label className={styles.filters__label}>
              <input className={styles.filters__checkbox} type="checkbox" />
              <span className={styles['filters__custom-checkbox']} />
              <span className={styles.filters__text}>3 пересадки</span>
            </label>
          </li>
        </ul>
      </form>
    </div>
  )
}

export default Filters
