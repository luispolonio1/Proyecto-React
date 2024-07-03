import React, { useContext, useEffect } from 'react';
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { ContextoBlog } from './contenido';
import '../estilos.css'
import hy1 from '../assets/img/hy1.jpg'
import hy2 from '../assets/img/hy2.jpg'
import hy3 from '../assets/img/hy3.jpg'
import { saveAs } from 'file-saver';

const Cuerpo = ({ name }) => {
    const { blogs, setBlogs } = useContext(ContextoBlog);

    useEffect(() => {
        const savedBlogs = localStorage.getItem('blogs');
        if (savedBlogs) {
            setBlogs(JSON.parse(savedBlogs));
        }
    }, [setBlogs]);

    const convertToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    };

    const Formulario = () => {
        Swal.fire({
            title: 'Estructura Del Blog',
            confirmButtonText: "Crear Blog",
            confirmButtonColor: "green",
            html: `
                <style>
                    #swal2-html-container {
                        overflow-x: hidden !important;
                    }
                </style>
                <label for="Categoria" style='width: 100%; text-align: center; font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", Arial, sans-serif; font-size: 16px;'>Categoría Del Blog:</label>
                <select id="Categoria" class="swal2-input" style='width: 100%; margin: 10px 0; border-radius: 5px; text-align: center; font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", Arial, sans-serif;'>
                    <option value="Deportes">Deportes</option>
                    <option value="Tecnologia">Tecnología</option>
                    <option value="Noticias">Noticias Mundiales</option>
                </select>
                <input type="text" id="swal-input1" class="swal2-input" placeholder="Título" style='width:100%; margin-top: 10px; margin-bottom: 10px; border-radius: 5px; text-align: center; margin-left:0px; font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", Arial, sans-serif;'>
                <input type="file" id="swal-input3" class="swal2-input" style='width:100%; margin-top: 10px; margin-bottom: 10px; border-radius: 5px;margin-left:0px;  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", Arial, sans-serif;'>
                <textarea id="swal-input2" class="swal2-input" placeholder="Informacion del Blog" style='width:100%; margin-top: 10px; margin-bottom: 10px; border-radius: 5px; font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", Arial, sans-serif;'></textarea>
            `,
            focusConfirm: false,
            preConfirm: async () => {
                const Categoria = document.getElementById('Categoria').value;
                const Titulo = document.getElementById('swal-input1').value;
                const Informacion = document.getElementById('swal-input2').value;
                const fileInput = document.getElementById('swal-input3');
                const Imagen = fileInput.files[0];
                if (!Categoria || !Titulo || !Informacion || !Imagen) {
                    Swal.showValidationMessage('Por favor, completa todos los campos');
                    return false;
                }
                const ImagenBase64 = await convertToBase64(Imagen);
                return { Categoria, Titulo, Informacion, Imagen: ImagenBase64 };
            }
        }).then((result) => {
            if (result.isConfirmed) {
                const { Categoria, Titulo, Informacion, Imagen } = result.value;
                const nuevoBlog = { Categoria, Titulo, Informacion, Imagen };
                const nuevosBlogs = [...blogs, nuevoBlog];
                setBlogs(nuevosBlogs);
                localStorage.setItem('blogs', JSON.stringify(nuevosBlogs));
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
            <div className='container col-12 col-lg-6' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', height: '600px', fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}>
                <div>
                    <h1 style={{ fontFamily: 'Trebuchet MS, Lucida Sans Unicode, Lucida Grande, Lucida Sans, Arial, sans-serif' }}>Bienvenido {name ? name : 'Usuario'} a SLA BLOG</h1>
                    <button className="btn btn-primary" onClick={Formulario}>
                        Crear Blog
                    </button>
                </div>
                <div className='container' style={{ color: '#000', fontFamily: 'Arial', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>
                El proyecto SLA BLOG hecho por estudiantes de la Universidad UNEMI es una plataforma diseñada para la creación
                y gestión eficiente de blogs, facilitando la publicación de contenidos mediante un editor visual intuitivo,
                con enfoque en la personalización y optimización, permite a los usuarios organizar entradas con categorías y
                etiquetas, interactuar mediante un sistema de comentarios integrado, y analizar el rendimiento con herramientas
                de estadísticas, utilizando tecnologías como React.js, Node.js, MongoDB para la seguridad, SLA BLOG busca mejorar
                la visibilidad online y la interacción con la audiencia, garantizando una experiencia de usuario segura y satisfactoria.
                </div>
            </div>
            <div id="carouselExample" className="carousel slide container col-12 col-lg-6">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={hy1} className="d-block w-100" />
                    </div>
                    <div className="carousel-item">
                        <img src={hy2} className="d-block w-100" />
                    </div>
                    <div className="carousel-item">
                        <img src={hy3} className="d-block w-100" />
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
