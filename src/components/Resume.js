// import React,{ useState } from 'react'

// import CvPl from '../files/CV_Tomasz_Bęben.pdf'
// import CvEn from '../files/enCV_Tomasz_Beben.pdf'
// import CvImg from '../images/cv.jpg'
// import PlFlag from '../images/plFlag.jpg'
// import EnFlag from '../images/enFlag.jpg'

// const Resume = () => {
//     const resume = 'resume-img';
//     const hiddenResume = 'resume-img resume-img-clicked';
//     const [cv, setCv] = useState(resume);
//     const switchResume = () => cv === hiddenResume ? setCv(resume) : setCv(hiddenResume);

//     const[flags, setFlags]= useState('')
//     const switchFlags = () => flags === '' ? setFlags('2') : setFlags('');

//     return (
//         <div className='resume-container'>
//             <div className='resume-img-container'>
//                 <img className={cv} src={CvImg} alt="CV" onClick={()=>{switchResume();switchFlags();}} />
//             </div>
//             <div className='resume-flag-container'>
//                 <a href={null} download>
//                     <img className={`flag${flags} pl-flag${flags}`} src={PlFlag} alt="PlFlag" onClick={()=>{switchResume();switchFlags();}}/>
//                 </a>
//                 <a href={null} download>
//                     <img className={`flag${flags} en-flag${flags}`} src={EnFlag} alt="EnFlag" onClick={()=>{switchResume();switchFlags();}}/>
//                 </a>
//             </div>
//         </div>
//     )
// }

// export default Resume
