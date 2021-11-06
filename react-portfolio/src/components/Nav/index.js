import React from "react";
import { Container, Navbar, Nav, Offcanvas, } from "react-bootstrap";


const Navigation = (props) => {
  return(

<Navbar bg="light" expand={false}>
  <Container fluid>
    <Navbar.Brand href="#">Brooke Madison</Navbar.Brand>
    <Navbar.Toggle aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel">Brooke Madison</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <Nav.Link href="#action1">Home</Nav.Link>
          <Nav.Link href="#action2">About</Nav.Link>
          <Nav.Link href="#action3">Projects</Nav.Link>
          <Nav.Link href="#action4">Contact</Nav.Link>
          <Nav.Link href="#action4">Resume</Nav.Link>
        </Nav>
       
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>

   )
  }

  export default Navigation
