import { createSlice } from '@reduxjs/toolkit'

const tabsSlice = createSlice({
  name: 'tabs',
  initialState: {
    value: 'CHEEP',
  },
  reducers: {
    setTabsValue: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { setTabsValue } = tabsSlice.actions

export const selectTabsValue = (state) => state.tabs.value

export default tabsSlice.reducer
