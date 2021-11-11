import React from "react";
// import { Container, Navbar, Nav, Offcanvas } from "react-bootstrap";
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    // <Navbar className="navbar-style" bg="*" expand={false}>
    //   <Container fluid>
    //     <Navbar.Brand href="#Home">Brooke Madison</Navbar.Brand>
    //     <Navbar.Toggle aria-controls="offcanvasNavbar" />
    //     <Navbar.Offcanvas
    //       className="navbar-offcanvas"
    //       id="offcanvasNavbar"
    //       aria-labelledby="offcanvasNavbarLabel"
    //       placement="end"
    //     >
    //       <Offcanvas.Header className="navbar-offcanvas" closeButton>
    //         <Offcanvas.Title
    //           className="navbar-offcanvas"
    //           id="offcanvasNavbarLabel"
    //         >
    //           Brooke Madison's Portfolio
    //         </Offcanvas.Title>
    //       </Offcanvas.Header>
    //       <Offcanvas.Body className="navbar-offcanvas">
    //         <Nav className="justify-content-end flex-grow-1 pe-3 navbar-offcanvas">
    //           <Nav.Link
    //             className="navbar-offcanvas"
    //             href="/"
    //             style={{ color: "#f5efea" }}
    //           >
    //             Home
    //           </Nav.Link>
    //           <Nav.Link
    //             className="navbar-offcanvas"
    //             href="#About"
    //             style={{ color: "#f5efea" }}
    //           >
    //             About
    //           </Nav.Link>
    //           <Nav.Link
    //             className="navbar-offcanvas"
    //             href="#Project"
    //             style={{ color: "#f5efea" }}
    //           >
    //             Projects
    //           </Nav.Link>
    //           <Nav.Link
    //             className="navbar-offcanvas"
    //             href="#Contact"
    //             style={{ color: "#f5efea" }}
    //           >
    //             Contact
    //           </Nav.Link>
    //           {/* <Nav.Link
    //             className="navbar-offcanvas"
    //             href="#Resume"
    //             style={{ color: "#f5efea" }}
    //           >
    //             Resume
    //           </Nav.Link> */}
    //         </Nav>
    //       </Offcanvas.Body>
    //     </Navbar.Offcanvas>
    //   </Container>
    // </Navbar>
    <header className="sticky top-0 z-50 bg-black">
      <div className="container flex justify-between mx-auto">
        <nav>
          <NavLink to='/lightfooted-react-portfolio' className="items-center px-3 py-6 mr-4 text-4xl font-bold tracking-widest text-white poppy inflex-flex hover:text-blue-400">
            Home
          </NavLink>
          <NavLink to='/about'>
            About
          </NavLink>
          <NavLink to='/project' activeStyle={{ color: "teal"}} className='inline-flex items-center px-3 py-3 my-6 font-semibold text-white poppy hover:text-blue-400'>
            Project
          </NavLink>
          <NavLink to='/resume' activeStyle={{ color: "teal"}} className='inline-flex items-center px-3 py-3 my-6 font-semibold text-white poppy hover:text-blue-400'>
            Résumé
          </NavLink>
          <NavLink to='/contact' activeStyle={{ color: "teal"}} className='inline-flex items-center px-3 py-3 my-6 font-semibold text-white poppy hover:text-blue-400'>
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Nav;