import React from 'react'

import Filters from '../filters'
import Tabs from '../tabs'
import TicketsList from '../ticketsList'

import styles from './app.module.scss'

function App() {
  return (
    <>
      <header className={styles.header}>
        <img className={styles.header__logo} src="/logo.svg" alt="Aviasales logo" />
      </header>
      <div className={styles.content}>
        <aside className={styles.sidebar}>
          <Filters />
        </aside>
        <main className={styles.main}>
          <Tabs />
          <TicketsList />
        </main>
      </div>
    </>
  )
}

export default App
