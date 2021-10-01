import React from "react";
import { Container, Nav, NavDropdown } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";

const Navigationbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Sri Sai Clinic</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">About</Nav.Link>
            <Nav.Link href="/opd">OPD Registration</Nav.Link>
            <NavDropdown title="Our Doctors" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Dr Anup Padamwar
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Dr Rachna Padamwar
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Dr Ravikiran Shinde
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Dr Apporva Pawar
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigationbar;
