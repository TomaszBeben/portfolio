import React,{useState} from 'react';
import HiddenMenu from './HiddenMenu';

const Hamburger = () => {
    const[hide, setHide]= useState("")
    const switchFunc = () =>{
        if(hide === ""){
            return setHide("none");
        }else{
            return setHide("")
        }
    }

    return (
        <div className='hamburger-container' onClick={switchFunc}>
          <span className='hamburger-button'>Hamburger</span>
        </div>
    )
}

export default Hamburger;