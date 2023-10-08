import { configureStore } from '@reduxjs/toolkit'

import tabsReducer from './tabsSlice'
import filtersReducer from './filtersSlice'

const store = configureStore({
  reducer: {
    tabs: tabsReducer,
    filters: filtersReducer,
  },
})

export default store
