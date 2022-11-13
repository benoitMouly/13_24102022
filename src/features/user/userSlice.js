import { createSlice } from '@reduxjs/toolkit'
// import { getUserDetails, registerUser, userLogin } from './userActions'
import { getUserDetails, userLogin, editNames } from './userActions'

// initialize userToken from local storage
const userToken = localStorage.getItem('userToken') ? localStorage.getItem('userToken')
  : sessionStorage.getItem('userToken') ? sessionStorage.getItem('userToken') : null



const initialState = {
  loading: false,
  userInfo: null,
  userToken,
  error: null,
  success: false,
  remember: false,
  show: false,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    toggleEdit: (state) => {
      state.show = !state.show
      console.log(state.show)
      let formToToggle = document.querySelector('.form-display');
      let btnToToggler = document.querySelector('.edit-toggler');
      if(state.show){
        formToToggle.style.visibility = 'visible'
        btnToToggler.style.visibility = 'hidden'
      } else{
        formToToggle.style.visibility = ' hidden '
        btnToToggler.style.visibility = 'visible'
      }
    },
    toggleNames: (state) => {
      state.firstName = document.querySelector('')
    },
    toggleTask: (state) => {
      state.remember = !state.remember
    },
    logout: (state) => {
      localStorage.removeItem('userToken') // delete token from storage
      sessionStorage.removeItem('userToken') // delete token from sessionStorage
      state.loading = false
      state.userInfo = null
      state.userToken = null
      state.error = null
    },
  },
  extraReducers: {
    // Login user
    [userLogin.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [userLogin.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.userInfo = payload
      /*Making difference between ' remember me ' and not */ 
      if(state.remember){
        localStorage.setItem('userToken', payload.body.token)
      } else{
        sessionStorage.setItem('userToken', payload.body.token)
      }
      /* Adding state for getting data in UserProfile */ 
      state.userToken = payload.body.token
    },
    [userLogin.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },

    // get user details
    [getUserDetails.pending]: (state) => {
      state.loading = true
    },
    [getUserDetails.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.userInfo = payload
    },
    [getUserDetails.rejected]: (state, { payload }) => {
      state.loading = false
    },

    /* Modify names */ 
    [editNames.pending]: (state) => {
      state.loading = true
    },
    [editNames.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.userInfo = payload
    },
    [editNames.rejected]: (state, { payload }) => {
      state.loading = false
    },
  },
})

export const { logout, toggleTask, toggleEdit } = userSlice.actions

export default userSlice.reducer
