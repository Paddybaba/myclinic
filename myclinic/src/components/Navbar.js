import React from "react";
import { Container, Nav, NavDropdown, Image } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";

const Navigationbar = () => {
  var saibaba =
    "https://live.staticflickr.com/65535/51537856857_a459c3a29c_m.jpg";

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Image src={saibaba} className="logo" fluid />
        <Navbar.Brand href="/">Sri Sai Clinic</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/opd">Book Appointment</Nav.Link>
            <Nav.Link href="/admin">Admin</Nav.Link>
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
