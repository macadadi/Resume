import React, { useState } from 'react';
import {

  Navbar,

  NavbarBrand,

  NavbarText
} from 'reactstrap';

const Resumenav = ({themeToggler}) => {
  const [isOpen, setIsOpen] = useState(false);

  const btndisplay=()=>{
    themeToggler()
    setIsOpen(!isOpen)
  }



  return (
    
        <>
        <diV className='navcon sticky-top' >
      <Navbar className='navcon sticky-top' light expand="md">
        <NavbarBrand className='navcon mr-auto' >Resume </NavbarBrand>
         <div className='mr-auto'></div>
   
          <NavbarText className='navcon mr-4'><button className="navb-btn" onClick={btndisplay}>
            {isOpen ? 'Dark theme' : 'Light theme'}</button></NavbarText>
     
      </Navbar>
      {/*curved top */}
      <div className="curved-top ">.</div>
      </diV>
      </>

    
  );
}

export default Resumenav;