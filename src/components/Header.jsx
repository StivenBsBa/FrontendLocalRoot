import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Logo from "../assets/compo/Logo.png";
import "../styles/Header.css";
import CardPerfil from './CardPerfil';

function Header() {
  const navigate = useNavigate();
  const [showPerfil, setShowPerfil] = useState(false);

  const redirigirInicio = () => {
    navigate("/Inicio");
  };

  const redirigirSobreMedellin = () => {
    navigate("/SobreMedellin");
  };

  const redirigirLugaresTuristicos = () => {
    navigate("/LugaresTuristicos");
  };

  const redirigirEventos = () => {
    navigate("/Eventos");
  };


  const cerrarSesion = () => {
    localStorage.removeItem("username");
    setShowPerfil(false);
  };

  const redirigirLogin = () => {
    if (localStorage.getItem("username")) {
      setShowPerfil(!showPerfil);
    } else {
      navigate("/Login");
    }
  };

  const perfil = (
    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAATdJREFUSEvF070rRWEcB/DPTWaEwSiZLIpVRgulKBaLzWLwNlqUUiIpf4Is8pbFP0BJBpnISAoDSikvnbpXt3PPued2zr052znn+X0/v+fp9+TU+MnVOF+lQD+W0ZVv6AoLOE1qsBJgHNuUNPONYRyVQ5KARtyhKSbkAR34iEOSgKDDvYRjGMBJWmAWqwnADNbTAkM4TAAGcZwWaMAtWmICHtGJt7RAUDeGnYiAYIpGsJ9ligq1fVjJ34MvXGMeZ9W4B0kZZf8njWmm8KC4HNCKOfSgG80h7RmXOMcanqK6iQMmsIlgiip5XjCJg/DiKGAaG5WkRqwZxW7x9zDQjhvUpQTeEWT8HVcY2MJUyvBC2SKWCi9h4B5tGYEL9MYBn6jPCLwWD0d4Bz8Zw0sa/9eLVpXN1HwHvyTBLRlrv90tAAAAAElFTkSuQmCC" />
  );

  const usuario = localStorage.getItem("username");
  const botonLoginTexto = usuario ? perfil : "INICIAR SESIÓN";

  return (
    <div className='fixed-top'>
      {['md'].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3 color">
          <Container fluid>
            <div className='Logo' href="#Inicio" onClick={redirigirInicio}>
              <img src={Logo} alt="" />
            </div>

            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-5">
                  <Nav.Link className='navLink' href="#Inicio" onClick={redirigirInicio}>Inicio</Nav.Link>
                  <Nav.Link className='navLink' href="#Inicio" onClick={redirigirSobreMedellin}>Sobre Medellin</Nav.Link>
                  <Nav.Link className='navLink' href="#LugaresTuristicos" onClick={redirigirLugaresTuristicos}>Lugares Turisticos</Nav.Link>
                  <Nav.Link className='navLink' href="#Eventos" onClick={redirigirEventos}>Eventos</Nav.Link>

                  
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Buscar"
                    className="me-2"
                    aria-label="Search"
                  />
                </Form>


              </Offcanvas.Body>

            </Navbar.Offcanvas>
            <Button variant="outline-primary" onClick={redirigirLogin}>{botonLoginTexto}</Button>
            {showPerfil && <div className="overlay" onClick={() => setShowPerfil(false)}></div>}
            {showPerfil && <CardPerfil nombreCliente={usuario} cerrarSesion={cerrarSesion} navigate={navigate} />}
          </Container>
        </Navbar>
      ))}
    </div>
  );
}

export default Header;
