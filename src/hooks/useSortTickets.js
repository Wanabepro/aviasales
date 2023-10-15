import { useMemo } from 'react'
import { useSelector } from 'react-redux'

import { selectTabsValue } from '../store/tabsSlice'

function useSortTickets(tickets) {
  const sortedByPrice = useMemo(() => {
    if (tickets) {
      return [...tickets].sort((ticket1, ticket2) => ticket1.price - ticket2.price)
    }
    return []
  }, [tickets])

  const sortedByDuration = useMemo(() => {
    if (tickets) {
      return [...tickets].sort((ticket1, ticket2) => {
        const duration1 = ticket1.segments[0].duration + ticket1.segments[1].duration
        const duration2 = ticket2.segments[0].duration + ticket2.segments[1].duration
        return duration1 - duration2
      })
    }
    return []
  }, [tickets])

  let sortedTickets = tickets || []
  const sortType = useSelector(selectTabsValue)
  if (sortType === 'CHEEP') {
    sortedTickets = sortedByPrice
  }
  if (sortType === 'FAST') {
    sortedTickets = sortedByDuration
  }

  return [sortType, sortedTickets]
}

export default useSortTickets
