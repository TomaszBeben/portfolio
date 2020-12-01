import React,{useState} from 'react';
import Burger from 'react-css-burger';

const Hamburger = () => {
    const[active, setActive] = useState(false);//turn to 'true' to disable view
    const toggle = () => active === false ? setActive(true) : setActive(false);

    return (
        <Burger
        onClick={() => setActive(toggle)}
        active={active}
        burger="collapse"
        color="white"
        marginTop= '0px'
        marginLeft= '0px'
        hoverOpacity={0.8}
        // scale={1.2}
      />
    )
}

export default Hamburger;
