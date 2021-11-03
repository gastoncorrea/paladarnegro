import React, { Fragment } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Navegacion = () => {
  return (
    <Fragment>
      <Navbar bg="dark" variant="dark" expand="lg" className="text-center">
        <Container>
          <Navbar.Brand href="/">Paladar Negro</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto ">
              <NavLink exact={true} to="/" className="nav-link text-light">
                Inicio
              </NavLink>
              <NavLink exact={true} to="#" className="nav-link text-light">
                Quienes somos
              </NavLink>
              <NavLink exact={true} to="#" className="nav-link text-light">
                Productos
              </NavLink>
              <NavLink exact={true} to="#" className="nav-link text-light">
                Contacto
              </NavLink>
              <NavLink exact={true} to="#" className="nav-link text-light">
                Suscribite
              </NavLink>
              <NavLink exact={true} to="#" className="nav-link text-light">
                Login
              </NavLink>
              <div className='d-flex ms-5'>
                <NavLink exact={true} to="#" className="nav-link text-light">
                  <FontAwesomeIcon icon={faFacebookSquare} />
                </NavLink>
                <NavLink exact={true} to="#" className="nav-link text-light">
                  <FontAwesomeIcon icon={faInstagram} />
                </NavLink>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default Navegacion;
