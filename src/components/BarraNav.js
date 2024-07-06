import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import '../estilos.css';

export const BarraNavegacion = ({ name }) => {
  return (
    <Navbar
      expand="lg"
      style={{
        backgroundImage: 'linear-gradient(to right, #232526, #414345)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className="body-tertiary sticky-top"
      bg="dark"
      variant="dark"
    >
      <Container fluid>
        <NavLink to="Cuerpo" className="nav-link">
          <h2 style={{ color: 'white' }}>SLA BLOG</h2>
        </NavLink>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <NavLink to="Deportes" className="nav-link borderHover">
              DEPORTES
            </NavLink>
            <NavLink to="tecnologia" className="nav-link borderHover">
              TECNOLOGIA
            </NavLink>
            <NavLink to="noticias" className="nav-link borderHover">
              NOTICIAS MUNDIALES
            </NavLink>
            <DropdownButton id="dropdown-basic-button" title={<span>Configuracion <i  class="bi bi-gear"></i></span>} variant="secondary" className='borderHover'>
              <Dropdown.Item href="#">Configuracion de Cuenta</Dropdown.Item>
              <Dropdown.Item href="#">Ajustes de Pagina</Dropdown.Item>
              <Dropdown.Item href="#">Notificaciones</Dropdown.Item>
              <Dropdown.Item href="#">Tema Oscuro/Claro</Dropdown.Item>
              <Dropdown.Item href="#">Estadisticas de Pagina</Dropdown.Item>
            </DropdownButton>
          </Nav>
          <Form className="d-flex" role="search">
            <InputGroup style={{ display: 'flex' }}>
              <Form.Control
                className="form-control me-2"
                type="search"
                placeholder="Buscar"
                aria-label="Search"
              />
              <Button className="btn btn-primary" type="submit" style={{ width: '150px' }}>
                Buscar<i className="bi bi-search" style={{ marginLeft: '5px' }}></i>
              </Button>
            </InputGroup>
          </Form>
          <Nav>
            <Nav.Link href="#Usuario" style={{ marginRight: '10px', color: 'white', fontSize: '22px' }}>
              <i className="bi bi-person" style={{ fontSize: '24px' }}></i>
              {name ? name : 'Usuario'}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
