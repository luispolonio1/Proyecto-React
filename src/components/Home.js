import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export const BarraNavegacion = ({name}) => {
  console.log(name)
  return (
    <Navbar expand="lg" className="body-tertiary" bg='light' data-bs-theme="light">
      <Container fluid>
        <Navbar.Brand href="#">Blog -SLA</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="">Deportes</Nav.Link>
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
            <Nav.Link href='#Usuario' style={{ marginRight: '10px' }}><i className="bi bi-person" style={{ fontSize: '30px' }}></i>{name ? name:'Usuario'}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export const Cuerpo = () => {
  const Formulario = () => {
    let imagenArchivo; 

    Swal.fire({
      title: 'Estructura Del Blog',
      confirmButtonText: "Crear Blog",
      confirmButtonColor: "green",
      html: `
        <input type="text" id="swal-input1" class="swal2-input" placeholder="Titulo" style='width:410px; margin-left:0;'>
        <input type="file" id="swal-input3" class="swal2-input" style='width:410px; margin-left:0;'>
        <textarea id="swal-input2" class="swal2-input" placeholder="Informacion" style='width:450px; margin-top:10px;'></textarea>
      `,
      focusConfirm: false,
      preConfirm: () => {
        const Titulo = document.getElementById('swal-input1').value;
        const Informacion = document.getElementById('swal-input2').value;
        const fileInput = document.getElementById('swal-input3');
        const Imagen = fileInput.files[0];

        if (!Titulo || !Informacion || !Imagen) {
          Swal.showValidationMessage('Por favor, completa todos los campos');
          return false;
        }
        imagenArchivo = Imagen;

        return { Titulo, Informacion, Imagen: fileInput.value };
      }
    }).then((result) => {
      if (result.isConfirmed) {
        const { Titulo, Informacion, Imagen } = result.value;
        console.log('Archivo de imagen:', imagenArchivo);

        Swal.fire({
          title: 'Blog Creado',
          icon: 'success',
          timer:1500,
          showConfirmButton:false
        });
      }
    });
  };

  return (
    <div className="container">
      <h1>Bienvenido a Blog -SLA</h1>
      <button className="btn btn-primary" onClick={Formulario}>
        Agregar Blog +
      </button>
    </div>
  );
};

const Home = ({ username }) => {
  return (
    <>
      <BarraNavegacion name={username} />
      <Cuerpo />
    </>
  );
};

export default Home;


