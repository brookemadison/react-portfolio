import React from "react";
import { Container, Navbar, Nav, Offcanvas } from "react-bootstrap";

const Navigation = (props) => {
  return (
    <Navbar className="navbar-style" bg="*" expand={false}>
      <Container fluid>
        <Navbar.Brand href="#Home">Brooke Madison</Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          className="navbar-offcanvas"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header className="navbar-offcanvas" closeButton>
            <Offcanvas.Title
              className="navbar-offcanvas"
              id="offcanvasNavbarLabel"
            >
              Brooke Madison's Portfolio
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="navbar-offcanvas">
            <Nav className="justify-content-end flex-grow-1 pe-3 navbar-offcanvas">
              <Nav.Link
                className="navbar-offcanvas"
                href="/"
                style={{ color: "#f5efea" }}
              >
                Home
              </Nav.Link>
              <Nav.Link
                className="navbar-offcanvas"
                href="#About"
                style={{ color: "#f5efea" }}
              >
                About
              </Nav.Link>
              <Nav.Link
                className="navbar-offcanvas"
                href="#Project"
                style={{ color: "#f5efea" }}
              >
                Projects
              </Nav.Link>
              <Nav.Link
                className="navbar-offcanvas"
                href="#Contact"
                style={{ color: "#f5efea" }}
              >
                Contact
              </Nav.Link>
              {/* <Nav.Link
                className="navbar-offcanvas"
                href="#Resume"
                style={{ color: "#f5efea" }}
              >
                Resume
              </Nav.Link> */}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Navigation;
