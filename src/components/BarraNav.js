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
          <h2 style={{ color: 'white',textShadow: '2px 2px 2px rgba(2, 2, 2, 1.9)'}}>SLA BLOG</h2>
        </NavLink>
        <Navbar.Toggle aria-controls="navbarScroll"/>
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
          </Nav>
          <Form className="d-flex" role="search">
            <InputGroup style={{ display: 'flex' }}>
              <Form.Control
                className="letra2 form-control me-2"
                type="search"
                placeholder= "Buscar..."
                aria-label="Search"
                
              />
              <Button className="btn btn-primary" type="submit" style={{ width: '50px', marginRight: '5px', border:'none', backgroundColor: 'Grey' }}>
                <i className="bi bi-search" style={{ border:'none', marginLeft: '-2px', color: 'white', textShadow: '2px 2px 2px rgba(2, 2, 2, 1.9)' }}></i>
              </Button>
            </InputGroup>
          </Form>
          <Nav>
          <DropdownButton id="dropdown-basic-button" style={{marginRight: '55px',  backgroundColor: 'Grey', }}title={<span><i  class="bi bi-gear" style={{ textShadow: '0px 0px 1px rgba(0, 0, 0, 0)' ,color: 'black' }}></i></span>} variant="" className='borderHover'>
              <Dropdown.Item href="#">Configuracion de Cuenta</Dropdown.Item>
              <Dropdown.Item href="#">Ajustes de Pagina</Dropdown.Item>
              <Dropdown.Item href="#">Notificaciones</Dropdown.Item>
              <Dropdown.Item href="#">Tema Oscuro/Claro</Dropdown.Item>
              <Dropdown.Item href="#">Estadisticas de Pagina</Dropdown.Item>
            </DropdownButton>
            
            <Nav.Link href="#Usuario" style={{ marginRight: '10px', color: 'white', textShadow: '2px 1.5px 1.5px rgba(1, 1, 1, 1.5)', fontSize: '22px' }}>
              <i className="bi bi-person" style={{ fontSize: '24px' }}></i>
              {name ? name : 'Usuario'}
            </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};