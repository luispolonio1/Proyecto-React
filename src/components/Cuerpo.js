import React from 'react';
import Swal from 'sweetalert2';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const Cuerpo = ({ name }) => {
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
                    timer: 1500,
                    showConfirmButton: false
                });
            }
        });
    };

    return (
        <div className="container">
            <h1>Bienvenido {name} a Blog -SLA</h1>
            <button className="btn btn-primary" onClick={Formulario}>
                Agregar Blog +
            </button>
        </div>
    );
};

export default Cuerpo;
