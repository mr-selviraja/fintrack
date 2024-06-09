// src/Navbar.js
import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import fintrackLogo from "../../assets/fintrack-logo.svg";

const navLinks = [
  {
    text: "Features",
    route: "#"
  },
  {
    text: "Working",
    route: "#"
  },
  {
    text: "Reviews",
    route: "#"
  },
  {
    text: "Pricing",
    route: "#"
  },
]

function AppNavbar() {
  return (
    <Navbar bg="primary" expand="lg" variant='dark'>
      <Container>
        <Navbar.Brand className="d-flex" href="/">
          <img
            src={fintrackLogo}
            width="100"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-lg-5 py-lg-3"> {/* Use 'ms-auto' for right alignment in Bootstrap 5 */}
            {
              navLinks.map(navLink => (
                <Nav.Link key={navLink.text} className='navbar-link' href={navLink.route}>
                  {navLink.text}
                </Nav.Link>
              ))
            }

            <Button variant='dark' className='text-uppercase'>
              Login
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
