function declension(count) {
  if (count === 0) return 'пересадок'
  if (count === 1) return 'пересадка'
  return 'пересадки'
}

export default declension
