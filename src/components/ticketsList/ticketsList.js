import React, { useState, useRef, useEffect } from 'react'

import { useGetTicketsQuery } from '../../store/ticketsApi'
import useSortTickets from '../../hooks/useSortTickets'
import useFilterTickets from '../../hooks/useFilterTickets'
import Ticket from '../ticket'
import Error from '../error'
import LoadingBar from '../loadingBar/loadingBar'

import styles from './ticketList.module.scss'

function TicketsList() {
  const isPolling = useRef(true)
  const [showError, setShowError] = useState(false)
  const [errorCount, setErrorCount] = useState(0)
  const { data, isError, error } = useGetTicketsQuery(undefined, {
    pollingInterval: isPolling.current,
  })
  isPolling.current = !data?.stop && !showError

  useEffect(() => {
    if (isError) {
      if (error.status === 500) {
        setErrorCount((prevCount) => prevCount + 1)
      } else {
        setShowError(true)
      }
    } else {
      setErrorCount(0)
    }

    if (errorCount === 3) {
      setShowError(true)
    }
  }, [isError])

  const [sortType, sortedTickets] = useSortTickets(data?.tickets)

  const [filters, filteredTickets] = useFilterTickets(sortedTickets)
  const isFilterSeted = Object.keys(filters).reduce((acc, key) => acc || filters[key], false)

  const [displayedTicketsCount, setDisplayedTicketsCount] = useState(5)

  useEffect(() => {
    setDisplayedTicketsCount(5)
  }, [sortType, filters])

  const onShowMoreClick = () => {
    setDisplayedTicketsCount((prevCount) => prevCount + 5)
  }

  const onErrorClick = () => {
    setShowError(false)
    setErrorCount(0)
  }

  const displayedTickets = filteredTickets.slice(0, displayedTicketsCount).map((ticket) => (
    <li key={`${ticket.segments[0].origin}${ticket.segments[0].date}`}>
      <Ticket {...ticket} />
    </li>
  ))

  return (
    <>
      {!isFilterSeted && !showError && <h1 className={styles.message}>Выберите фильтр</h1>}
      {isFilterSeted && !showError && <ul className={styles.list}>{displayedTickets}</ul>}
      {isFilterSeted && !showError && displayedTicketsCount < filteredTickets.length && (
        <button className={styles.button} type="button" onClick={onShowMoreClick}>
          Показать еще 5 билетов!
        </button>
      )}
      {isPolling.current && !showError && <LoadingBar />}
      {showError && <Error onClick={onErrorClick} error={error} />}
    </>
  )
}

export default TicketsList
