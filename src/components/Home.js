import React from 'react';

import Hamburger from './Hamburger';
import HiddenMenu from './HiddenMenu'
import NavBar from './NavBar';


const Home = () =>{
    return(
        <>
        <NavBar/>
        <Hamburger/>
        <HiddenMenu/>
        </>
    )
}

export default Home;