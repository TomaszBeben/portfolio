import React, { useState } from 'react';
import Burger from 'react-css-burger';

const Hamburger = () => {
  const [active, setActive] = useState(false)
  const toggle = () => active === false ? setActive(true) : setActive(false);

  return (
    <Burger
      onClick={() => setActive(toggle)}
      active={active}
      burger="collapse"
      color="white"
      marginTop='0px'
      marginLeft='0px'
      hoverOpacity={0.8}
    />
  )
}

export default Hamburger;
