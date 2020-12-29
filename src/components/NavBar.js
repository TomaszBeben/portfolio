import React from 'react';
import {
    HashRouter,
    Link
  } from "react-router-dom";

// import Resume from './Resume';
import TestArea from './TestArea';

const NavBar = () => {
    return (
        <HashRouter>
        <div className='navBar-container'>
            <Link to='/'><div className='navBar-name'>TOMASZ BĘBEN</div></Link>
            <div className='navBar-container-right-side'>
                <TestArea/>
                <Link to='/form'><i className='navBar-form fas fa-user-circle'></i></Link>
            </div>
        </div>
        </HashRouter>
    );
};

export default NavBar;