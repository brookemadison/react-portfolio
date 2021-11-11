import React from "react";
import { Container, Navbar, Nav, Offcanvas } from "react-bootstrap";
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <Navbar className="navbar-style" bg="*" expand={false}>
      <Container  fluid>
        <Navbar.Brand>
        <NavLink 
        className="navbar-brand"
                to='/brookemadison-react-portfolio'>
                  Brooke Madison
            </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          className="navbar-offcanvas"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header 
          className="navbar-offcanvas" closeButton>
            <Offcanvas.Title
              className="navbar-offcanvas"
              id="offcanvasNavbarLabel"
            >
              Brooke Madison's Portfolio
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body 
          className="navbar-offcanvas">
            <Nav className="justify-content-end flex-grow-1 pe-3 navbar-offcanvas">
              <Nav.Link>
            <NavLink className="navbar-offcanvas"
                style={{ color: "#f5efea" }} to='/brookemadison-react-portfolio'>
            Home
            </NavLink>
              </Nav.Link>
              <Nav.Link>
            <NavLink className="navbar-offcanvas"
                style={{ color: "#f5efea" }} to='/about'>
             About
           </NavLink>
              </Nav.Link>
              <Nav.Link>
           <NavLink className="navbar-offcanvas"
                style={{ color: "#f5efea" }} to='/project'>
             Project
           </NavLink>              
</Nav.Link>
              <Nav.Link>
             <NavLink  
             className="navbar-offcanvas"
             style={{ color: "#f5efea" }}
               to='/contact'>
             Contact
           </NavLink>
              </Nav.Link>
              {/* <Nav.Link>
              //           </NavLink>
//           <NavLink
className="navbar-offcanvas"
                style={{ color: "#f5efea" }}
 to='/resume'>
//             Resume
              </Nav.Link> */}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>

  );
            };


//     <header>
//       <div >
//         <nav>
//           <NavLink to='/brookemadison-react-portfolio'>
//             Home
//           </NavLink>
//           <NavLink to='/about'>
//             About
//           </NavLink>
//           <NavLink to='/project'>
//             Project
//           </NavLink>
//           <NavLink to='/resume'>
//             Resume
//           </NavLink>
//           <NavLink to='/contact'>
//             Contact
//           </NavLink>
//         </nav>
//       </div>
//     </header>
//   );
// };

export default Navigation;