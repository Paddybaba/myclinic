import React from "react";
import { Container, Nav, NavDropdown, Image } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";

const Navigationbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Image
          src="https://lh3.googleusercontent.com/pLwicZVfOOr5ffQbLrmz1gnzZ-EAu7R74uPqts6bacIDlUmUuVC9BAMRoyarWqtsyCxxTRDTPotOpRgHZFMJ7mP5WNmzZut_LqYLKW0ffQOlxun9Zd1pPRNBSGdgyTTAaTiUydAV0yohiGxv08kjsBRuSlGoh7rvT7sEXSGjMcyDZO_ciF2gzBmvM0KZREHVtp_B0E_OmAth0k84mrsSUkaAYcININCh9tMkBnM6nW1yJQI1NmjurlwqQwpzu5XwKCNz8Hec272-3OAT6s1OTcehQKzx0il0_KhA4Bm0MVoowdhmt4Wa7v-gAFT5oc_BtczRnMH9MqKcGp-LQZMtajcA0I4dmcflf8iIWhfF5FvRbwsbMc7Heo40NwmKgAjWIP0T3bASbPvOXokwmZohQO0EI3I46YuZUcnUiKbYL5RwbRQVZrmgsu0iZ1fydwsRS1UxBhKlfYJVcYPSY9K1L-lVTRWRzoS6Um1Jw7rIBerud3GohYEMm5OWg9jjUhuYRuaKvwENyC7CxK-Zj9ygHWLZIb0OWaeMz-G-Wrlof5WdTTKSKgZJkcwSUiwoC4xolJO3aL1BsislJGhIF0m66IC-8LmmeBq2qLlU5MPluMAhyBgXOi-1SnoQVKrAGfh5jOF8KsEmPeDLL7TmAjax-EakVkeBC9VSAfqTJVOH4UIS7J-BD5vn6Y1iqrMcIg5r0ERg4cmJRb-Qlr6Q8--GJCf2=s625-no?authuser=0"
          className="logo"
          fluid
        />
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
