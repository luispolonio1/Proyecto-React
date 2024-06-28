import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { ContextoBlog } from './contenido';

const Cuerpo = ({ name }) => {
    const { blogs, setBlogs } = useContext(ContextoBlog)
    const Formulario = () => {
        let imagenArchivo;
        Swal.fire({
            title: 'Estructura Del Blog',
            confirmButtonText: "Crear Blog",
            confirmButtonColor: "green",
            html: `
            <label for="Categoria" style='width:410px; margin-left:0; boder:none; display:flex;'>categoria Del Blog:</label>
              <select id="Categoria" class="swal2-input" style='width:410px; margin-left:0; boder:none; display:flex; flex-direcction:row; text-aling:center;'>
                <option value="Deportes">Deportes</option>
                <option value="Tecnologia">Tecnologia</option>
                <option value="Noticias">Noticias Mundiales</option>
              </select>
        <input type="text" id="swal-input1" class="swal2-input" placeholder="Titulo" style='width:410px; margin-left:0;'>
        <input type="file" id="swal-input3" class="swal2-input" style='width:410px; margin-left:0;'>
        <textarea id="swal-input2" class="swal2-input" placeholder="Parrafo 1" style='width:450px; margin-top:10px;'></textarea>
        <textarea id="swal-input4" class="swal2-input" placeholder="Parrafo 2" style='width:450px; margin-top:10px;'></textarea>
      `,
            focusConfirm: false,
            preConfirm: () => {
                const Categoria = document.getElementById('Categoria').value;
                const Titulo = document.getElementById('swal-input1').value;
                const Informacion = document.getElementById('swal-input2').value;
                const fileInput = document.getElementById('swal-input3');
                const Imagen = fileInput.files[0];
                if (!Categoria || !Titulo || !Informacion || !Imagen) {
                    Swal.showValidationMessage('Por favor, completa todos los campos')
                    return false;
                }
                imagenArchivo = Imagen;
                return { Categoria, Titulo, Informacion, Imagen: fileInput.value };
            }
        }).then((result) => {
            if (result.isConfirmed) {
                const { Categoria, Titulo, Informacion, Imagen } = result.value;
                console.log('Archivo de imagen:', imagenArchivo);
                const nuevoBlog = { Categoria, Titulo, Informacion, Imagen: URL.createObjectURL(imagenArchivo) };
                setBlogs([...blogs, nuevoBlog]);
                Swal.fire({
                    title: 'Blog Creado',
                    icon: 'success',
                    timer: 1500,
                    showConfirmButton: false
                });
            }
        });
    };

    return (
        <div className="container row">
            <div className='container col-6' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', height: '600px' }}>
                <div>
                    <h1>Bienvenido {name ? name : 'Usuario'} a Blog -SLA</h1>
                    <button className="btn btn-primary" onClick={Formulario}>
                        Agregar Blog +
                    </button>
                </div>
                <div className='container' style={{ background: '#022', color: 'white' }}>
                    Descripcion del proyecto
                </div>
            </div>
                <div id="carouselExample" className="carousel slide container col-6">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://elcomercio.pe/resizer/-ff-6d9vg7CILcQh-WvejY7_3lQ=/1200x1200/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/6FUBT6XQXNHHNFOMCHIT7I34NA.jpg" className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5HTH-3D4CWYI4ripc-bvvAB1LAcbOkkiz1A&usqp=CAU" className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src="https://depor.com/resizer/dV5TqPnaHmZP6yMI_GfeKL28T6I=/1200x1200/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/OCJ6ZQ4G4RHMRGDRYR7UBZQ6PY.jpg" className="d-block w-100" alt="..."/>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
            </div>

        </div>
    );
};

export default Cuerpo;
