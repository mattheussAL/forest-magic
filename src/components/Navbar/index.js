import React, { useState } from 'react';


import { NavContainer, Logo } from './styles';

// Components
import Button from '../Button';

// Icons
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

function Navbar() {
 const [click, setClick] = useState(false);
 const [button, setButton] = useState(true);

 const handleClick = () => setClick(!click);
 // const closeMobileMenu = () => setClick(false);

 const showButton = () => {
  if (window.innerWidth <= 960) setButton(false)
  else setButton(true)
 };

 window.addEventListener('resize', showButton);

 return (
  <NavContainer>
   <Logo>
    <a href="/">Florest Magic</a>
   </Logo>
   <div className={`menu-icon ${click ? '' : 'active'}`} onClick={handleClick}>
    {click ? <MenuIcon /> : <CloseIcon />}
   </div>

   <ul>
    <li><a href="/home">Home</a></li>
    <li><a href="/magic">Magic</a></li>
    <li><a href="/clans">Clans</a></li>
    <li><a href="/world">World</a></li>

    {button ? (
     <Button theme="web"><a href="/">Sign Up</a></Button>
    ) : (
      <Button theme="mobile"><a href="/">Sign Up</a></Button>
    )}
   </ul>
  </NavContainer>
 );
}

export default Navbar;
