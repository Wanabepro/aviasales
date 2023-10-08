import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  all: false,
  0: false,
  1: false,
  2: false,
  3: false,
}

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    toggleAllFilters: (state) => {
      const targetValue = !state.all

      Object.keys(state).forEach((key) => {
        state[key] = targetValue
      })
    },
    toggleFilter: (state, action) => {
      state[action.payload] = !state[action.payload]

      state.all = true
      state.all = Object.keys(state).reduce((acc, key) => acc && state[key], true)
    },
  },
})

export const { toggleAllFilters, toggleFilter } = filtersSlice.actions

export const selectFilter = Object.keys(initialState).reduce(
  (acc, key) => ({ ...acc, [key]: (state) => state.filters[key] }),
  {},
)

export default filtersSlice.reducer
