export default function timeCounter(departureIsoString, duration) {
  const departureDate = new Date(departureIsoString)
  const arrivalDate = new Date(departureDate.getTime() + duration * 60 * 1000)
  return [
    `${departureDate.getHours()}:${departureDate.getMinutes()}`,
    `${arrivalDate.getHours()}:${arrivalDate.getMinutes()}`,
  ]
}
