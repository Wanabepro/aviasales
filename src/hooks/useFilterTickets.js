import { useSelector } from 'react-redux'

import { selectAllFilters } from '../store/filtersSlice'
import filterTickets from '../helpers/filterTickets'

function useFilterTickets(tickets) {
  const filters = useSelector(selectAllFilters)
  const filteredTickets = filterTickets(tickets, { ...filters })

  return [filters, filteredTickets]
}

export default useFilterTickets
