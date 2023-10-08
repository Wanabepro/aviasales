import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import styles from '../tabs.module.scss'
import { selectTabsValue, setTabsValue } from '../../../store/tabsSlice'

function Tab({ text, value }) {
  const tabsValue = useSelector(selectTabsValue)

  const dispatch = useDispatch()

  const onChange = (e) => {
    dispatch(setTabsValue(e.target.value))
  }

  return (
    <label className={styles.tabs__label}>
      <input
        className={styles.tabs__radio}
        type="radio"
        name="tabs"
        value={value}
        checked={tabsValue === value}
        onChange={onChange}
      />
      {text}
    </label>
  )
}

export default Tab
