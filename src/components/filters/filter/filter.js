import React from 'react'
import { useSelector } from 'react-redux'

import { selectFilter } from '../../../store/filtersSlice'

import styles from './filter.module.scss'

function Filter({ text, value, onChange }) {
  const currentValue = useSelector(selectFilter[value])

  return (
    <label className={styles.filter}>
      <input
        className={styles.filter__checkbox}
        type="checkbox"
        value={value}
        checked={currentValue}
        onChange={onChange}
      />
      <span className={styles['filter__custom-checkbox']} />
      <span className={styles.filter__text}>{text}</span>
    </label>
  )
}

export default Filter
