import React from 'react';
import { NavLink } from "react-router-dom";

/**
 * NotFound who represents the page if content doesnt exist 
 * @component react
 * @returns {JsxElement} 
 */

const NotFound = () => {
    return (
        <div className="home-body">
            <div className="home-content">
                <div className="header">
                </div>
            <div className="notfound-content">
            <div className='notfound'>
                   <span className='number'>404</span>
                   <p>Oups! La page que vous demandez n'existe pas.</p>
            </div>
            <div className="linkToHome">
            <NavLink to="/" className={(nav) =>(nav.isActive ? "nav-active" : "")}>
            <p>Retourner sur la page d'accueil</p>
            </NavLink>
            </div>
            </div>
            </div>
        </div>
    );
};

export default NotFound;