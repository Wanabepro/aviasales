import { configureStore } from '@reduxjs/toolkit'

import tabsReducer from './tabsSlice'
import filtersReducer from './filtersSlice'
import ticketsApi from './ticketsApi'

const store = configureStore({
  reducer: {
    tabs: tabsReducer,
    filters: filtersReducer,
    [ticketsApi.reducerPath]: ticketsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(ticketsApi.middleware),
})

export default store
