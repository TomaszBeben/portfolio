import React from 'react';
import {
    HashRouter,
    Link
  } from "react-router-dom";

const NavBar = () => {
    return (
        <HashRouter>
        <div className='navBar-container'>
            <Link to='/'><div className='navBar-name'>TOMASZ BĘBEN</div></Link>
            <Link to='/form'><i className="navBar-form fas fa-user-circle"></i></Link>
        </div>
        </HashRouter>
    )
}

export default NavBar;