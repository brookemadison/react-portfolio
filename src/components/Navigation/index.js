import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Navbar, Nav, Offcanvas } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar collapseOnSelect className="navbar-style" bg="*" expand={false}>
      <Container fluid>
        <Navbar.Brand>
          <NavLink className="nav-header" to="/ http://brookemadison.tech/">
            <h3>
              <em>Brooke Madison</em>
            </h3>
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Collapse id="offcanvasNavbar">
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
              <Nav
                onSelect
                className="me-auto justify-content-end flex-grow-1 pe-3 navbar-offcanvas"
              >
                <Nav.Link>
                  <NavLink to="/http://brookemadison.tech/">Home</NavLink>
                </Nav.Link>
                <Nav.Link>
                  <NavLink className="navbar-offcanvas" to="/about">
                    About
                  </NavLink>
                </Nav.Link>
                <Nav.Link>
                  <NavLink className="navbar-offcanvas" to="/portfolio">
                    Portfolio
                  </NavLink>
                </Nav.Link>
                <Nav.Link>
                  <NavLink className="navbar-offcanvas" to="/contact">
                    Contact
                  </NavLink>
                </Nav.Link>
                <Nav.Link>
                  <NavLink className="navbar-offcanvas" to="/resume">
                    Resume
                  </NavLink>
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
