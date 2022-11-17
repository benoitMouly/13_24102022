import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Register from './pages/Login.jsx'
import NotFound from './pages/NotFound.jsx';
import UserProfile from './pages/UserProfile';
import './App.css'
import ProtectedRoute from './routing/ProtectedRoute'


import Navigation from './components/Navigation';
import './styles/pages/main.css';
import Footer from './components/Footer';

/**
 * @author Mouly Benoît
 * @help https://github.com/benoitMouly/BenoitMouly_13_24102022/blob/main/README.md
 * @repo https://github.com/benoitMouly
 * 
 * @reactApp App
 * @return react app
 */


// Every data needs to get an access to redux
 // Then our app needs to be enrolled by a  " PROVIDER "
const App = () => {
  return (
    <Provider store={store}>
       
    <BrowserRouter>
    <Navigation/>
    <Routes>
      < Route path="/" element={<Home/>} />
      < Route path="/login" element={<Register/>} />

      <Route element={<ProtectedRoute />}>
        < Route path="/profile" element={<UserProfile/>} />
      </Route>
      < Route path="*" element={<NotFound/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
 
    </Provider>
  );
};

export default App;