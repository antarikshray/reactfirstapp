import React from 'react';
import { Button, Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap'

function Navigate() {
    return (
      <div>
            <Navbar bg="light" className="navbg" expand="lg">
                <Navbar.Brand className="logo" href="#home" style={{fontSize:'30px'}}>rudra</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#home" className="nav-tags" >Home</Nav.Link>
                        <Nav.Link href="#link" className="nav-tags">About Us</Nav.Link>
                        <Nav.Link href="#link" className="nav-tags">News</Nav.Link>
                        <Nav.Link href="#link" className="nav-tags">Achievements</Nav.Link>
                        <Nav.Link href="#link" className="nav-tags">Gallery</Nav.Link>
                        <Nav.Link href="#link" className="nav-tags">Team</Nav.Link>
                        <Nav.Link href="#link" className="nav-tags">Sponsorship</Nav.Link>
                        <Nav.Link href="#link" className="nav-tags">Play A Game</Nav.Link>
                        <Nav.Link href="#link" className="nav-tags">Contact Us</Nav.Link>
                    </Nav>
            </Navbar.Collapse>
            </Navbar>
      </div>
    );
  }

export default Navigate;