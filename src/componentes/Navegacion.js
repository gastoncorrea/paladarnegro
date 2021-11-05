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
      <Navbar  variant="dark" expand="lg" className="text-center" className='color-negro'>
        <Container>
          <Navbar.Brand href="/"><img src={process.env.PUBLIC_URL + "img/circular_logo.png"} alt="logo-paladar-negro" className='w-100' /></Navbar.Brand>
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
              <div className='d-flex'>
                <NavLink exact={true} to="#" className="nav-link text-light">
                  <FontAwesomeIcon icon={faFacebookSquare} />
                </NavLink>
                <NavLink exact={true} to="#" className="nav-link text-light ms-2">
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
