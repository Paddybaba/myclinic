import React from "react";
import { Container, Nav, NavDropdown, Image } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

const Toprow = () => {
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
            <NavLink to="/opd">New Patient</NavLink>
            <NavLink to="/">Back</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Toprow;
