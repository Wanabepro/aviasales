import React from 'react'

import { useGetTicketsQuery } from '../../store/ticketsApi'
import Ticket from '../ticket'

import styles from './ticketList.module.scss'

function TicketsList() {
  const { data, isError, refetch } = useGetTicketsQuery()

  const displayedPosts = data?.tickets.map((ticket) => (
    <li>
      <Ticket {...ticket} />
    </li>
  ))

  return (
    <>
      <ul className={styles.list}>{displayedPosts}</ul>
      {!isError && (
        <button className={styles.button} type="button" onClick={refetch}>
          Показать еще 500 билетов!
        </button>
      )}
      {isError && (
        <div>
          <h1>Error ocured</h1>
          <button type="button" onClick={refetch}>
            Refetch
          </button>
        </div>
      )}
    </>
  )
}

export default TicketsList
