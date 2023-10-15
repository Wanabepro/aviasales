import React from 'react'

import styles from './tabs.module.scss'
import Tab from './tab'

const tabs = [
  { text: 'Самый дешевый', value: 'CHEEP' },
  { text: 'Самый быстрый', value: 'FAST' },
  { text: 'Оптимальный', value: 'OPTIMAL' },
]

function Tabs() {
  return (
    <form>
      <ul className={styles.tabs}>
        {tabs.map((tab) => (
          <li className={styles.tabs__item} key={tab.value}>
            <Tab {...tab} />
          </li>
        ))}
      </ul>
    </form>
  )
}

export default Tabs
