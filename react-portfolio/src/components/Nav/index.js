import React from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";

// function Nav() {

//   const handleClick = () => {
//     console.log("click handled")
//   }

//   return (
//     <header data-testid="header" className="flex-row px-1">
//       <h2>
//         <a href="/">
//          Brooke Madison
//         </a>
//       </h2>
//       <nav>
//         <ul className="flex-row">
//           <li className="mx-2">
//             <a href="#about" onClick={() => handleClick()}>
//               About me
//             </a>
//           </li>
//           <li className="mx-2">
//             <a href="#projects" onClick={() => handleClick()}>
//               Projects
//             </a>
//           </li>
//           <li className="mx-2">
//             <a href="#contact" onClick={() => handleClick()}>
//               Contact
//             </a>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// }

// export default Nav;

const Navigation = (props) => {
  return(

<Navbar collapseOnSelect expand="lg" bg="light" variant="light">
  <Container>
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
   )
  }

  export default Navigation
