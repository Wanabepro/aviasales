import React from 'react'

import Ticket from '../ticket'

import styles from './ticketList.module.scss'

function TicketsList() {
  return (
    <>
      <ul className={styles.list}>
        <li>
          <Ticket />
        </li>
        <li>
          <Ticket />
        </li>
        <li>
          <Ticket />
        </li>
      </ul>
      <button className={styles.button} type="button">
        Показать еще 5 билетов!
      </button>
    </>
  )
}

export default TicketsList
