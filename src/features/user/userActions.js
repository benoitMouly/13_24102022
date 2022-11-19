import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'


/**
 * userActions for our redux store
 * @component react
 * @returns {Functions} 
 */


/*
* Make a call to the back API for getting userLogin
*/

export const userLogin = createAsyncThunk(
  /* type */ 'user/login', 
  /*payload */ async ({ email, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }

      const { data } = await axios.post(
        'http://localhost:3001/api/v1/user/login',
        { email, password },
        config,
      )

      return data
      
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)

/*
* Make a call to the back API for getting user details
*/

export const getUserDetails = createAsyncThunk(
  'user/getUserDetails',
  async (arg, { getState, rejectWithValue }) => {
    try {
      // get user data from store
      const { user } = getState()
      // console.log('USER => ')
      // console.log(user)
      // configure authorization header with user's token
      const config = {
        headers: {
          'Authorization': `Bearer ${user.userToken}`,
          'Content-Type': 'application/json',
        },
      }

      const { data } = await axios.post(`http://localhost:3001/api/v1/user/profile`, arg, config)
      return data
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)

/*
* Make a call to the back API for editing user informations
*/

export const editNames = createAsyncThunk(
  'user/modifyNames',
  async ({ firstName, lastName }, {getState, rejectWithValue }) => {
    try {
      const { user } = getState()
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          'Authorization': `Bearer ${user.userToken}`,
          'Content-Type': 'application/json',
        },
      }
      const { data } = await axios.put(
        'http://localhost:3001/api/v1/user/profile',
        { firstName, lastName },
        config
      )
        // console.log(data)
      return data
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)

