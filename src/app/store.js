import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/user/userSlice'
/**
 * Getting all our reducer
 * @function react
 * @returns {reducer} 
 */

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
})
