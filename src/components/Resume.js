import React,{ useState } from 'react'

import CvPl from '../files/CV_Tomasz_Bęben.pdf'
import CvEn from '../files/enCV_Tomasz_Beben.pdf'
import CvImg from '../images/cv.jpg'
import PlFlag from '../images/plFlag.jpg'
import EnFlag from '../images/enFlag.jpg'

const Resume = () => {
    const resume = 'resume-img';
    const hiddenResume = 'resume-img resume-img-clicked';
    const [cv, setCv] = useState(resume);
    const switchResume = () => cv === hiddenResume ? setCv(resume) : setCv(hiddenResume);

    return (
        <div className='resume-container'>
            <div className='resume-img-container'>
                <img className={cv} src={CvImg} alt="CV" onClick={switchResume} />
            </div>
            <div className='resume-flag-container'>
                <a href={CvPl} download><img className='flag pl-flag' src={PlFlag} alt="PlFlag" /></a>
                <a href={CvEn} download><img className='flag en-flag' src={EnFlag} alt="EnFlag" /></a>
            </div>
        </div>
    )
}

export default Resume
