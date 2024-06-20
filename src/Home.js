import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';

export function BarraNavegacion() {
    let usuario = true;
    return (
        <Navbar expand="lg" className="body-tertiary" bg='light' data-bs-theme="ligth">
            <Container fluid>
                <Navbar.Brand href="#">Blog -SLA</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }} i
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Deportes</Nav.Link>
                        <Nav.Link href="#action2">Tecnologia</Nav.Link>
                        <Nav.Link href="#action3">Noticias Mundiales</Nav.Link>
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
                        <Nav.Link href='#Usuario' style={{margin: '10px' }}><i class="bi bi-person" style={{fontSize: '30px' }}></i>{usuario ? 'Luis Polonio' : 'Usuario'}</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}