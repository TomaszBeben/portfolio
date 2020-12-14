import React from 'react'

import facebookImg from "../images/facebook-img.jpg";
import githubImg from "../images/github-img.jpg";

const SocialMedia = () => {
    return (
        <div className='socialMedia-container'>
            <div >
                <div className='socialMedia-elem github'>
                    <img className="socialMedia-img" src={githubImg} alt="facebook" />
                </div>
                <div className='socialMedia-elem linkedIn'>
                    <img className="socialMedia-img" src={facebookImg} alt="facebook" />
                </div>
                <div className='socialMedia-elem facebook'>
                    <img className="socialMedia-img" src={facebookImg} alt="facebook" />
                </div>
            </div>
        </div>
    )
}

export default SocialMedia
