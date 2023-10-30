import { configureStore } from '@reduxjs/toolkit'
import VerifySlice  from './features/VerficationSlice'

export const store = configureStore({
  reducer: {
    res:VerifySlice
  },
})