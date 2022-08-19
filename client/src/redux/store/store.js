import { configureStore } from '@reduxjs/toolkit'
import fetchPostReducer from '../reducer/fetchPost'
import fetchUserReducer from '../reducer/fetchUser'

export const store = configureStore({
  reducer: {
    fetchUser : fetchUserReducer,
    fetchPost : fetchPostReducer
  },
})