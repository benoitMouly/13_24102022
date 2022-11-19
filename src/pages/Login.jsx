import React, { useState } from 'react';
import '../styles/pages/main.css';
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { userLogin } from '../features/user/userActions'
import { useEffect } from 'react';
import { toggleTask } from '../features/user/userSlice'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'


/**
 * Login who represents the login page
 * @component react
 * @returns {JsxElement} 
 */



const Register = () => {
    const {loading, userInfo} = useSelector((state) => state.user)
    const dispatch = useDispatch()

    // Our state is empty, we will register it later and then send it as object to our main function : submitForm
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const onCreate = e =>  {
      e.preventDefault();
      // Pass object to our main function submitForm
      const postData = {
        email,
        password
      }
      submitForm(postData)
    }

    const submitForm = (data) => {
      console.log(data)
      dispatch(userLogin(data))
    }

    // redirect authenticated user to profile screen
    useEffect(() => {
      if (userInfo) {
        navigate('/profile')
      }
    }, [navigate, userInfo])

return (
  <>
      <main className="main bg-dark">
          <section className="sign-in-content">
          <FontAwesomeIcon icon={faUserCircle} size="2xl"/>
          <h1>Sign In</h1>
          <form onSubmit={onCreate}>
          <div className="input-wrapper">
              <label htmlFor="email">Username</label><input type="text" id="email"  onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="input-wrapper">
              <label htmlFor="password">Password</label><input type="password" id="password" onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <div className="input-remember">
              <input type="checkbox" id="remember-me" /><label htmlFor="remember-me" onClick={() => dispatch(toggleTask())}>Remember me</label>
          </div>
          <input type="submit"  className="sign-in-button" value="Sign In" disabled={loading} />
          </form>
  </section>
</main>
</>
);
};

export default Register;