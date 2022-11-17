import React from 'react';
import { NavLink } from "react-router-dom";
import '../styles/components/Navigation.css';
import logo from '../assets/img/argentBankLogo.png';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserDetails } from '../features/user/userActions';
import { logout } from '../features/user/userSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { faSignOut } from '@fortawesome/free-solid-svg-icons'


const Navigation = () => {
  const { userInfo, userToken } = useSelector((state) => state.user)
  const dispatch = useDispatch()

  // automatically authenticate user if token is found
  useEffect(() => {
    if (userToken) {
      dispatch(getUserDetails())
    }
  }, [userToken, dispatch])

    if(!userInfo){
      return (
      <>
      <nav className="main-nav">
      <NavLink to="/" className="main-nav-logo" >
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      <div>
      <NavLink to="/login" className="main-nav-item">
      <FontAwesomeIcon icon={faUserCircle} /> Sign In
        </NavLink>
      </div>
      </nav>
      </>

      );
    }
    if(userInfo){
      return (
      <>
      <nav className="main-nav">
      <NavLink to="/" className="main-nav-logo" >
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
      </NavLink>

      <div>
        <NavLink to="/profile" className="main-nav-item">
        <FontAwesomeIcon icon={faUserCircle} /> {userInfo ? userInfo.body.firstName : "You're not logged in"}
          </NavLink>
          <NavLink to="/" className="main-nav-item">
          <FontAwesomeIcon icon={faSignOut} />
                      <span onClick={() => dispatch(logout())}> Sign Out</span>
          </NavLink>
      </div>
      </nav>
      </>

      );
    }
};

export default Navigation;
