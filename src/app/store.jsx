import { configureStore } from '@reduxjs/toolkit'
import basketReducer from '../slices/basketSlice'

// Global store setup
export const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
})
