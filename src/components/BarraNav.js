import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../estilos.css'
export const BarraNavegacion = ({ name }) => {
  return (
    <Navbar expand="lg" className="body-tertiary sticky-top" bg='dark' data-bs-theme="dark">
      <Container fluid>
        <NavLink to="Cuerpo" className="nav-link"><h2 style={{color:'white'}}>Blog -SLA</h2></NavLink>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavLink to="Deportes" className="nav-link borderHover">Deportes</NavLink>
            <NavLink to="tecnologia" className="nav-link borderHover">Tecnologia</NavLink>
            <NavLink to="noticias" className="nav-link borderHover">Noticias Mundiales</NavLink>
          </Nav>
          <Nav>
            <Nav.Link href='#Usuario' style={{ marginRight: '10px',color:'white',fontSize:'25px'}}><i className="bi bi-person" style={{ fontSize: '30px' }}></i>{name ? name : 'Usuario'}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
