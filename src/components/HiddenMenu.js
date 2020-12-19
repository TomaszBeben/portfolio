import React, { useState } from 'react'
import {
    HashRouter,
    Link
  } from "react-router-dom";
import Hamburger from './Hamburger';

const HiddenMenu = () => {
    const show = 'hiddenMenu-container-container';
    const hide = 'hiddenMenu-container-container hide'
    const [hidden, setHidden] = useState(hide)
    const switchFunc = () => hidden === hide ? setHidden(show) : setHidden(hide);
    return (
        <>
            <div className='hamburger-container'  >
                <div className='hamburger-button-container' onClick={switchFunc}>
                    <Hamburger/>
                </div>
            </div>
            <div className={hidden}>
                <HashRouter>
                <div className='hiddenMenu-container'>
                    <Link className='hiddenMenu-elem' to='/social' onClick={switchFunc}>Social Media</Link>
                    <div className='hiddenMenu-elem' onClick={switchFunc}>PROJEKTY</div>
                    <div className='hiddenMenu-elem' onClick={switchFunc}>PROJEKTY</div>
                    <div className='hiddenMenu-elem' onClick={switchFunc}>PROJEKTY</div>
                </div>
                </HashRouter>
            </div>
        </>
    )
}

export default HiddenMenu;