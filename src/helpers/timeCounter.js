function timeCounter(departureIsoString, duration) {
  const departureDate = new Date(departureIsoString)
  const arrivalDate = new Date(departureDate.getTime() + duration * 60 * 1000)
  return [departureDate.toLocaleTimeString('ru').slice(0, 5), arrivalDate.toLocaleTimeString('ru').slice(0, 5)]
}

export default timeCounter
