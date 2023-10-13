import React, { useRef } from 'react'

import { useGetTicketsQuery } from '../../store/ticketsApi'
import Ticket from '../ticket'

import styles from './ticketList.module.scss'

function TicketsList() {
  const isPolling = useRef(true)
  const { data, isError } = useGetTicketsQuery(undefined, {
    pollingInterval: isPolling.current,
  })

  isPolling.current = !data?.stop

  const displayedPosts = data?.tickets.map((ticket) => (
    <li key={`${ticket.segments[0].origin}${ticket.segments[0].date}`}>
      <Ticket {...ticket} />
    </li>
  ))

  return (
    <>
      <ul className={styles.list}>{displayedPosts}</ul>
      {!isError && (
        <button className={styles.button} type="button">
          Показать еще 5 билетов!
        </button>
      )}
    </>
  )
}

export default TicketsList
