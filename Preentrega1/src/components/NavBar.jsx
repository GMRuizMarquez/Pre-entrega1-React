import { CartWidget } from "./CartWidget.jsx";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export const NavBar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Bodega Valentine</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Historia</Nav.Link>
              <Nav.Link href="#pricing">Modelos</Nav.Link>
              <Nav.Link href="#pricing">Nosotros</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">Contacto </Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                LinkedIn
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <CartWidget />
        </Container>
      </Navbar>
    </>
  );
};
