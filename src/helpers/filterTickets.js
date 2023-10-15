function filterTickets(tickets, filters) {
  if (filters.all) {
    return tickets
  }

  return tickets.filter((ticket) => {
    const stopsTo = ticket.segments[0].stops.length
    const stopsFrom = ticket.segments[1].stops.length

    delete filters.all
    const chosenCounts = Object.keys(filters).reduce((acc, key) => {
      if (filters[key]) {
        return [...acc, Number(key)]
      }
      return acc
    }, [])

    return chosenCounts.includes(stopsTo) && chosenCounts.includes(stopsFrom)
  })
}

export default filterTickets
