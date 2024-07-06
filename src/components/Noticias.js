import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2';

const Noticias = () => {
const [blogs, setBlogs] = useState([])
const [blogsel, setblogsel] = useState(null)
const [comentario, setcomen] = useState('')
const [comentarios, setcomentarios] = useState([])

useEffect(() => {
const savedBlogs = localStorage.getItem('blogs')
if (savedBlogs) {
setBlogs(JSON.parse(savedBlogs));}}, []);

useEffect(() => {
  if (blogsel) {
    setcomentarios([ 
      { id: 1, texto: '¡Excelente contenido! Me pareció muy interesante y bien estructurado. ¡Espero leer más de tus publicaciones pronto!', autor: 'James Gosling' },
      { id: 2, texto: '¡Increíble blog! Me encantó la forma en que desarrollaste el tema. Muy informativo y bien presentado.', autor: 'Richard Brodie' }]);
     } else {
    setcomentarios([])
  }
}, [blogsel])

const editarBlog = () => {
    Swal.fire({
        title: '<span style="color: #000; font-family: \'Trebuchet MS\', \'Lucida Sans Unicode\', \'Lucida Grande\', \'Lucida Sans\', Arial, sans-serif;">Editar Blog</span>', 
        confirmButtonColor: '#000',
        confirmButtonText: '<span style="font-family: \'Trebuchet MS\', \'Lucida Sans Unicode\', \'Lucida Grande\', \'Lucida Sans\', Arial, sans-serif;">Guardar Cambios</span>', 
        html: `<label for="editartitu" style='width: 100%; text-align: center; font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", Arial, sans-serif; font-size: 16px;'> Título:</label> <input type="text" id="editartitu" class="swal2-input" style='width: 100%; margin: 10px 0; border-radius: 5px; text-align: center;' value="${blogsel.Titulo}"> <textarea id="editinfo" class="swal2-input" placeholder="Información del Blog" style='width:100%; margin-top: 10px; margin-bottom: 10px; border-radius: 5px;'>${blogsel.Informacion}</textarea>`,
        focusConfirm: false, preConfirm: () => { const editartitu = document.getElementById('editartitu').value;
        const editinfo = document.getElementById('editinfo').value;
        if (!editartitu || !editinfo) {
        Swal.showValidationMessage('Rellena todos los campos vacios')
        return false;
        }
        return { editartitu, editinfo }
        }
}).then((result) => {
        if (result.isConfirmed) {
      const { editartitu, editinfo } = result.value;
      const ediblog = { ...blogsel, Titulo: editartitu, Informacion: editinfo }
      const guarblog = blogs.map(blog => (blog == blogsel ? ediblog : blog))
      setBlogs(guarblog);
      localStorage.setItem('blogs', JSON.stringify(guarblog))
      Swal.fire({title: 'Blog Actualizado', icon: 'success', timer: 1500, showConfirmButton: false})}
  });
};

const borrarblog = () => {
      Swal.fire({
        title: '<span style="color: #000; font-family: \'Trebuchet MS\', \'Lucida Sans Unicode\', \'Lucida Grande\', \'Lucida Sans\', Arial, sans-serif;">Quieres borrar este blog?</span>',
        text: 'No podras recuperarlo!!',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#000',
          cancelButtonColor: '#000', 
          cancelButtonText: '<span style="font-family: \'Trebuchet MS\', \'Lucida Sans Unicode\', \'Lucida Grande\', \'Lucida Sans\', Arial, sans-serif;">Cancelar</span>',
          confirmButtonText: '<span style="color: #fff; font-family: \'Trebuchet MS\', \'Lucida Sans Unicode\', \'Lucida Grande\', \'Lucida Sans\', Arial, sans-serif;">Sí, Claro</span>',
}).then((result) => {
 if (result.isConfirmed) {
    const guarblog = blogs.filter(blog => blog !== blogsel)
      setBlogs(guarblog);
    localStorage.setItem('blogs', JSON.stringify(guarblog))
        setblogsel(null);
        Swal.fire({ 
          title: '<span style="color: #000; font-family: \'Trebuchet MS\', \'Lucida Sans Unicode\', \'Lucida Grande\', \'Lucida Sans\', Arial, sans-serif;">Eliminado</span>',
          text: 'El Blog ha sido eliminado',
          icono: 'success',
          confirmButtonColor: '#000',
          confirmButtonText: '<span style="color: #fff; font-family: \'Trebuchet MS\', \'Lucida Sans Unicode\', \'Lucida Grande\', \'Lucida Sans\', Arial, sans-serif;">OK</span>'
         });
       };
    });
};
const agregarcomen = () => {
const nuevocomen = { id: comentarios.length + 1, texto: comentario, autor: 'Usuario' }
setcomentarios([...comentarios, nuevocomen]);
setcomen(''); }

const noticiblog = blogs.filter(blog => blog.Categoria == 'Noticias')

return (
<div className="container-fluid" style={{ minHeight: '600px' }}>
{noticiblog.length == 0 ? (
    <div className="text-center" style={{ height: '600px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <h1 className="display-1" style={{ color: '#555' }}>Aún está vacío</h1>
</div>):

(blogsel ? (
    <div className="container">
          <button  className="btn btn-primary mb-3" onClick={() => setblogsel(null)}>Volver<i class="bi bi-arrow-counterclockwise" style={{marginLeft:'5px'}}></i></button>
          <h1 style={{ fontFamily: 'Times New Roman', color: 'white' }}>{blogsel.Titulo}</h1>
          <img src={blogsel.Imagen} alt={blogsel.Titulo} style={{ height: '250px', width: '450px' }} />
          <p style={{ fontFamily: 'Times New Roman', color: 'white' }}>{blogsel.Informacion}</p>
          <button style={{margin:'5px'}} className="btn btn-primary mb-3" onClick={editarBlog}>Editar Blog</button>
          <button style={{margin:'5px'}} className="btn btn-danger mb-3" onClick={borrarblog}>Eliminar Blog</button>

{/* pilas muchachos esta es la parte de los comentarios */}
    <div className="mt-4">
      <h3 style={{ fontFamily: 'Times New Roman', color: 'white' }}>Comentarios <i class="bi bi-chat-left-dots-fill"></i></h3>
       <div className="mb-3">
    <textarea
       className="form-control" 
       placeholder="Añadir comentario" 
       value={comentario} 
       onChange={(e) => setcomen(e.target.value)} ></textarea>

{/*aqui esta el boton de agregar comentario por si quieren cambiarle el diseño o el color*/}
    <button className="btn btn-primary mt-2" onClick={agregarcomen}>Agregar Comentario</button>
 </div>
    {comentarios.length == 0 ? (
      <p style={{ fontFamily: 'Times New Roman', color: 'white' }}>No hay comentarios aún</p> ) : ( 
        comentarios.map((comentario, index) => (
        <div key={index} className="card mb-2" style={{ background: 'rgba(0, 0, 0, 0.1)' }}>
        <div className="card-body">
        <h5 className="card-title">{comentario.autor}</h5>
        <p className="card-text">{comentario.texto}</p>
      </div>
    </div>
  ))
)}
</div>
    </div>
      ) : (
     <div className="row row-cols-1 row-cols-md-4 g-4">
        {noticiblog.map((blog, index) => (
        <div className="col" key={index}>
        <div className="card" style={{ background: 'rgba(0, 0, 0, 0.1)', height: '220px' }} onClick={() => setblogsel(blog)}>
        <img src={blog.Imagen} className="card-img-top" alt={blog.Titulo} style={{ height: '170px', width: '298px' }} />
        <div className="card-body" style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <h4 className="card-title" style={{ fontFamily: 'Times New Roman', color: 'white' }}>{blog.Titulo}</h4>
        <div>
        <i class="bi bi-hand-thumbs-up" style={{fontSize:'25px',margin:'2.5px'}}></i>
        <i class="bi bi-hand-thumbs-down" style={{fontSize:'25px',margin:'2.5px'}}></i>
        </div>
      </div>
    </div>
  </div>
))}
</div> ) )} </div> ); };

export default Noticias;




