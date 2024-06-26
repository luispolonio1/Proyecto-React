import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const BarraNavegacion = ({ name }) => {
  return (
    <Navbar expand="lg" className="body-tertiary" bg='light' data-bs-theme="light">
      <Container fluid>
        <NavLink to="Cuerpo" className="nav-link"><h2>Blog -SLA</h2></NavLink>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavLink to="Deportes" className="nav-link">Deportes</NavLink>
            <NavLink to="tecnologia" className="nav-link">Tecnologia</NavLink>
            <NavLink to="noticias" className="nav-link">Noticias Mundiales</NavLink>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="success">Buscar</Button>
          </Form>
          <Nav>
            <Nav.Link href='#Usuario' style={{ marginRight: '10px' }}><i className="bi bi-person" style={{ fontSize: '30px' }}></i>{name ? name : 'Usuario'}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
