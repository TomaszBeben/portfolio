import React,{useState} from 'react';

import CvPl from '../files/CV_Tomasz_Bęben.pdf'
import CvEn from '../files/enCV_Tomasz_Beben.pdf'
import CvImg from '../images/cv.jpg'
import PlFlag from '../images/plFlag.jpg'
import EnFlag from '../images/enFlag.jpg'



const TestArea = () => {
    const [flagEn, setFlagsEn] = useState('hide-cv');
    const switchFlagEn = () => flagEn === 'hide-cv' ? setFlagsEn(`en-flag`) : setFlagsEn('hide-cv');

    const [flagPl, setFlagPl] = useState('hide-cv')
    const switchFlagPl = () => flagPl === 'pl-flag' ? setFlagPl(`hide-cv`) : setFlagPl('pl-flag');
    return (
        <div>
            <a href={CvPl} download><img src={PlFlag} alt="cv" className={`${flagPl}`}/></a>
            <a href={CvEn} download><img src={EnFlag} alt="cv" className={`${flagEn}`}/></a>
            <img src={CvImg} alt="cv" className='cv' onClick={()=>{switchFlagEn(); switchFlagPl()}}/>

        </div>
    )
}

export default TestArea;

//do poprawy
