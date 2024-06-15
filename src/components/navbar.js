import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import heartImage from '../assets/heart.svg';
import '../css/navbar.css';

export const NavbarComponent = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="sm" className="bg-body-tertiary" style={{ backgroundColor: '#A6B1E1' }}>
        <Container fluid className="px-3">
          <Navbar.Brand href="/">
            <img
              alt=""
              src={heartImage}
              width="25"
              height="25"
              className="d-inline-block align-top"
            />{' '}
            Remembering Teresa
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/biography">Biography</Nav.Link>
              <Nav.Link href="/service">Service</Nav.Link>
              <Nav.Link href="/memories">Memories</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
