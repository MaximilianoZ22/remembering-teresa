import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../css/navbar.css';

const heartImage = `${process.env.PUBLIC_URL}/assets/heart.svg`;

export const NavbarComponent = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="sm" className="custom-navbar playfair-display-regular">
        <Container fluid className="px-3">
          <Navbar.Brand href="/" className="custom-navbar-brand">
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
            <Nav className="ms-auto custom-nav ">
              <Nav.Link href="/remembering-teresa" className="custom-nav-link">Home</Nav.Link>
              <Nav.Link href="#service" className="custom-nav-link">Services</Nav.Link>
              <Nav.Link href="#memories" className="custom-nav-link">Memories</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
