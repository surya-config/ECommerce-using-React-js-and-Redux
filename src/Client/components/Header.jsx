import React from 'react';
import {Nav,Navbar,NavDropdown,Button,Form,FormControl,Container} from "react-bootstrap"
import "../style.css"
import { Link } from "react-router-dom";



function Header() {
  return (
    <Navbar className="navbar"  variant="dark" style={{backgroundColor: "#1f2224"}}>
    <Container>
      <h3 style={{color:"white",fontWeight:"300",letterSpacing:"3px",marginRight:"70px"}}>Connect</h3>
    <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto navitem align-items-center">
      <Nav.Link href="/" className="navitem">Home</Nav.Link>
      <NavDropdown title="Categories" id="collasible-nav-dropdown">
        <NavDropdown.Item href="/Categories/Shirts">Shirts</NavDropdown.Item>
        <NavDropdown.Item href="/Categories/Pants">Pants</NavDropdown.Item>
        <NavDropdown.Item href="/Categories/Shoes">Shoes</NavDropdown.Item>
      </NavDropdown>
      
    </Nav>

    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>

    <Link to="/Cart"><button className="nav-icon"><img src="cart_icon.png" width="40px" height="40px" alt="Cart"/></button></Link>
    
    </Navbar.Collapse>
    </Container>
  </Navbar>

  );
}



export default Header;
