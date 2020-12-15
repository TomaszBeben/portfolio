import React from 'react'

import facebookImg from "../images/facebook-img.jpg";
import githubImg from "../images/github-img.jpg";

const SocialMedia = () => {
    return (
        <div className='socialMedia-container'>
            <div >
                <a className='socialMedia-elem github'>
                    <img className="socialMedia-img" src={githubImg} alt="facebook" />
                </a>
                <a className='socialMedia-elem linkedIn'>
                    <img className="socialMedia-img" src={facebookImg} alt="facebook" />
                </a>
                <a href="https://www.google.pl" target="_blank" className='socialMedia-elem facebook'>
                    <img className="socialMedia-img" src={facebookImg} alt="facebook"/>
                </a>
            </div>
        </div>
    )
}

export default SocialMedia
