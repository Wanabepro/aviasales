import React from 'react'

import Item from './item'
import styles from './ticket.module.scss'

function Ticket({ price, carrier, segments }) {
  const displayedItems = segments.map((segment) => (
    <li key={segment.origin}>
      <Item {...segment} />
    </li>
  ))

  return (
    <article className={styles.ticket}>
      <header className={styles.ticket__header}>
        <span className={styles.ticket__price}>{`${price} Р`}</span>
        <img className={styles.ticket__company} src={`/assets/${carrier}.svg`} alt={`${carrier} aviacompany logo`} />
      </header>
      <ul className={styles.ticket__list}>{displayedItems}</ul>
    </article>
  )
}

export default Ticket
