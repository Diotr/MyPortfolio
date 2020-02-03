import React from 'react';
import {Nav,Navbar,Container,NavDropdown,Form,FormControl,Button,Link, NavLink} from 'react-bootstrap';

import {button} from 'bootstrap';
import '../styling/NavigationBar.css';

function NavigationBar() {
  return (


<Navbar className='fixed-top  ' collapseOnSelect expand="sm">
  
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
   
     
      <Nav className="m-auto ">
        
      <Nav.Link  href="/">Home</Nav.Link>
      <Nav.Link  href="/mywork">My work</Nav.Link>
      <Nav.Link  href="/contact">Contact</Nav.Link>

    </Nav>
   
  </Navbar.Collapse>
</Navbar>

    );
  }
  
  export default NavigationBar;
     