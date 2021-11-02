import React, { Fragment } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const Navegacion = () => {
  return (
    <Fragment>
      <Navbar bg="dark" variant="dark" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Paladar Negro</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
      <Nav.Link href="#quienesSomos">Quienes somos</Nav.Link>
              <Nav.Link href="#">Productos</Nav.Link>
              <Nav.Link href="#">Contacto</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
      {/* <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Paladar Negro</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#quienesSomos">Quienes somos</Nav.Link>
              <Nav.Link href="#features">Productos</Nav.Link>
              <Nav.Link href="#pricing">Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}
    </Fragment>
  );
};

export default Navegacion;
