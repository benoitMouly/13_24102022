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

// Toutes les données qui ont besoin d'avoir accès à redux
 // Doivent etre contenu dans ce qu'on appel un " PROVIDER "
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