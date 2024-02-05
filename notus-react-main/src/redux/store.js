import { configureStore } from '@reduxjs/toolkit'
import userReducer from './reducer/userSlicer.js'

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
})

export const server = 'http://localhost:4000/api/v1';