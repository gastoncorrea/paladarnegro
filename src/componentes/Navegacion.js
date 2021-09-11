import React, { Fragment } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const Navegacion = () => {
  return (
    <Fragment>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Paladar Negro</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#">Quienes somos</Nav.Link>
            <Nav.Link href="#features">Productos</Nav.Link>
            <Nav.Link href="#pricing">Contacto</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default Navegacion;
