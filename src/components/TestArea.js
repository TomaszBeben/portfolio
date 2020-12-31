import React,{useState} from 'react';

import CvPl from '../files/CV_Tomasz_Bęben.pdf'
import CvEn from '../files/enCV_Tomasz_Beben.pdf'
import CvImg from '../images/cv.jpg'
import PlFlag from '../images/plFlag.jpg'
import EnFlag from '../images/enFlag.jpg'

const TestArea = () => {
    const [flagEn, setFlagsEn] = useState('hide');
    const switchFlagEn = () => flagEn === 'hide' ? setFlagsEn(`en-flag`) : setFlagsEn('hide');

    const [flagPl, setFlagPl] = useState('hide')
    const switchFlagPl = () => flagPl === 'pl-flag' ? setFlagPl(`hide`) : setFlagPl('pl-flag');
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
