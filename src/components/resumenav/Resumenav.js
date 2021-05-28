import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const Resumenav = ({themeToggler}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    
        
      <Navbar className='navcon sticky-top' light expand="md">
        <NavbarBrand className='navcon mr-auto' >Developer Resume</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar >
         <div className='mr-auto'></div>
          <NavbarText className='navcon mr-4'> <NavLink href=""className='navcon'>Home</NavLink></NavbarText>
          <NavbarText className='navcon mr-4'><NavLink href=""className='navcon'>Projects</NavLink></NavbarText>
          <NavbarText className='navcon mr-4'><NavLink href=""className='navcon'>GitHub</NavLink></NavbarText>
          <NavbarText className='navcon mr-4'><button onClick={themeToggler}>Switch Theme</button></NavbarText>
        </Collapse>
      </Navbar>

    
  );
}

export default Resumenav;