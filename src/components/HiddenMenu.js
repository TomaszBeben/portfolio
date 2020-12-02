import React, { useState } from 'react'
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
                <div className='hiddenMenu-container'>
                    <div className='hiddenMenu-elem'>PROJEKTY</div>
                    <div className='hiddenMenu-elem'>PROJEKTY</div>
                    <div className='hiddenMenu-elem'>PROJEKTY</div>
                    <div className='hiddenMenu-elem'>PROJEKTY</div>
                </div>
            </div>
        </>
    )
}

export default HiddenMenu;