import React from 'react'
import Hamburger from './Hamburger';

const HiddenMenu = (hide) => {
    return (
        <div className='hiddenMenu-container-container' style={{display:`${hide}`}}>
            <div className='hiddenMenu-container'>
                <div className='hiddenMenu-elem'>PROJEKTY</div>
                <div className='hiddenMenu-elem'>PROJEKTY</div>
                <div className='hiddenMenu-elem'>PROJEKTY</div>
                <div className='hiddenMenu-elem'>PROJEKTY</div>
            </div>
        </div>
    )
}

export default HiddenMenu;
