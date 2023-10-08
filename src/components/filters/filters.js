import React from 'react'
import { useDispatch } from 'react-redux'

import { toggleAllFilters, toggleFilter } from '../../store/filtersSlice'

import Filter from './filter'
import styles from './filters.module.scss'

const filters = [
  { text: 'Без пересадок', value: '0' },
  { text: '1 пересадка', value: '1' },
  { text: '2 пересадки', value: '2' },
  { text: '3 пересадки', value: '3' },
]

function Filters() {
  const dispatch = useDispatch()

  const onAllChange = () => {
    dispatch(toggleAllFilters())
  }

  const onChange = (e) => {
    dispatch(toggleFilter(e.target.value))
  }

  return (
    <div className={styles.filters}>
      <h2 className={styles.filters__header}>Количество пересадок</h2>
      <form action="">
        <ul className={styles.filters__list}>
          <li className={styles.filters__item}>
            <Filter text="Все" value="all" onChange={onAllChange} />
          </li>

          {filters.map((filter) => (
            <li key={filter.value} className={styles.filters__item}>
              <Filter {...filter} onChange={onChange} />
            </li>
          ))}
        </ul>
      </form>
    </div>
  )
}

export default Filters
