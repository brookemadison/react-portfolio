import React from "react";
import { Container, Navbar, Nav, Offcanvas, } from "react-bootstrap";

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
        </Nav>
       
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>

   )
  }

  export default Navigation
