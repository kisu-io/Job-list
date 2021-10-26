import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container} from 'react-bootstrap';

function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Job Me!</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;
