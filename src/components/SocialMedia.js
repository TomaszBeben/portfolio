import React from 'react'
import {
    HashRouter,
    Link
  } from "react-router-dom";

import facebookImg from "../images/facebook-img.jpg";
import githubImg from "../images/github-img.jpg";
import linkedinImg from "../images/linkedin-img.jpg";

const SocialMedia = () => {
    return (
        <div className='socialMedia-container'>
                <a href="https://github.com/TomaszBeben"
                    target="_blank"
                    className='socialMedia-elem github'>
                    <img className="socialMedia-img" src={githubImg} alt="facebook"/>
                </a>
                <a href="https://www.linkedin.com/in/tomasz-bęben-1944021a2" target="_blank" className='socialMedia-elem linkedIn'>
                    <img className="socialMedia-img" src={linkedinImg} alt="linkedin" />
                </a>
                <a href="https://www.facebook.com/tomski.kce/" target="_blank" className='socialMedia-elem facebook'>
                    <img className="socialMedia-img" src={facebookImg} alt="facebook"/>
                </a>
        </div>
    )
}

export default SocialMedia
