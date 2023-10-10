import React from 'react'

import timeCounter from '../../../helpers/timeCounter'
import declension from '../../../helpers/declension'

import styles from './item.module.scss'

function Item({ origin, destination, duration, stops, date }) {
  const minutes = duration % 60
  const hours = (duration - minutes) / 60

  const [departure, arrival] = timeCounter(date, duration)

  return (
    <div className={styles.item}>
      <div className={styles.item__column}>
        <h3 className={styles.item__header}>{`${origin} - ${destination}`}</h3>
        <span className={styles.item__info}>{`${departure} - ${arrival}`}</span>
      </div>
      <div className={styles.item__column}>
        <h3 className={styles.item__header}>В пути</h3>
        <span className={styles.item__info}>{`${hours}ч ${minutes}м`}</span>
      </div>
      <div className={styles.item__column}>
        <h3 className={styles.item__header}>{`${stops.length} ${declension(stops.length)}`}</h3>
        <span className={styles.item__info}>{stops.join(', ')}</span>
      </div>
    </div>
  )
}

export default Item
