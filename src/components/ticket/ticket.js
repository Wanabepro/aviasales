import React from 'react'

import Item from './item'
import styles from './ticket.module.scss'

function Ticket() {
  return (
    <article className={styles.ticket}>
      <header className={styles.ticket__header}>
        <span className={styles.ticket__price}>13 400 Р</span>
        <img
          className={styles.ticket__company}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/S7_new_logo.svg/2560px-S7_new_logo.svg.png"
          alt="Aviacompany logo"
        />
      </header>
      <ul className={styles.ticket__list}>
        <li>
          <Item />
        </li>
        <li>
          <Item />
        </li>
        <li>
          <Item />
        </li>
      </ul>
    </article>
  )
}

export default Ticket
