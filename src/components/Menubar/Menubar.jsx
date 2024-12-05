import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-scroll";
import "./Menubar.scss";

const Menubar = () => {
  return (
    <Navbar
      sticky="top"
      expand="lg"
      className="navbar-fixed bg-body-tertiary p-3"
    >
      <Container>
        <Navbar.Brand href="#home">Josimar Bezerra & Advogados</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Item>
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="nav-link"
              >
                Início
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="nav-link"
              >
                Sobre
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link
                activeClass="active"
                to="actions"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="nav-link"
              >
                Ações
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link
                activeClass="active"
                to="identify"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="nav-link"
              >
                Identificação
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link
                activeClass="active"
                to="important"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="nav-link"
              >
                Importância
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link
                activeClass="active"
                to="centralized"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="nav-link"
              >
                Atuações
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="nav-link"
              >
                Contato
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menubar;
