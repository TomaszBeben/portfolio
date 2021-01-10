import React,{useState, useEffect} from 'react'

const styles = {
    color: 'green'
}

const numOfDivsOnScreen= Math.floor(window.innerWidth / 10);
const Background = () => {
    // let result ='';
    // const [letter, setLetter] = useState(0);

    // const randomLetter = () => {
    //     const letters = 'ABCDEFGHIJKLMNOPRSTUWXYZ';

    //     const rand = Math.floor(Math.random()*100)
    //     for (let i = 0; i< numOfDivsOnScreen; i++) {
    //     for (let i = 0; i < rand; i++ ){
    //         result = letters.charAt(Math.floor(Math.random()* rand));
    //     }
    //        return <div>{setLetter(result)}</div>
    //     }
    // }

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         return setLetter(randomLetter());
    //     }, 200);
    //     return () => clearInterval(interval);
    //   }, []);

    function x()  {
        for(let i = 0; i < 9; i++){
            return <div>{i}</div>
        }
    }
    return (
        <>
            null
        </>
    )
}

export default Background
