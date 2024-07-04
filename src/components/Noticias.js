import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Noticias = () => {
  const [blogs, setBlogs] = useState([]);
  const [blogsel, setblogsel] = useState(null);


  useEffect(() => {    // Recuperar blogs de localStorage al cargar el componente
    const savedBlogs = localStorage.getItem('blogs');
    if (savedBlogs) {
      setBlogs(JSON.parse(savedBlogs));
    }
  }, []);
  const noticiasBlogs = blogs.filter(blog => blog.Categoria == 'Noticias')

  return (
    <div className="container-fluid mt-5">
      {noticiasBlogs.length == 0 ? (
        <div className="text-center" style={{ height: '600px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <h1 className="display-1" style={{ color: '#555' }}>Aún está vacío</h1>
        </div>
      ) : (
        blogsel ? (
          <div className="container">
            <button style={{ fontFamily: 'Trebuchet MS, Lucida Sans Unicode, Lucida Grande, Lucida Sans, Arial, sans-serif', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)', backgroundColor: 'transparent', color: '#fff', border: 'transparent', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)' }} className="btn btn-primary mb-3" onClick={() => setblogsel(null)}> Volver</button>
            <button style={{ fontFamily: 'Trebuchet MS, Lucida Sans Unicode, Lucida Grande, Lucida Sans, Arial, sans-serif', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)', backgroundColor: 'transparent', color: '#fff', border: 'transparent', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)' }} className="btn btn-primary mb-3 mr-3" onClick={() => { }}>Editar Blog</button>
            <h1 style={{ fontFamily: 'Times New Roman', color: 'white' }} >{blogsel.Titulo}</h1>
            <img src={blogsel.Imagen} alt={blogsel.Titulo} style={{ height: '250px', width: '450px' }} />
            <p style={{ fontFamily: 'Times New Roman', color: 'white' }} >{blogsel.Informacion}</p>
          </div>
        ) : (
          <div className="row row-cols-1 row-cols-md-4 g-4">
            {noticiasBlogs.map((blog, index) => (
              <div className="col" key={index}>
                <div className="card" style={{ background: 'rgba(0, 0, 0, 0.1)', height: '220px' }} onClick={() => setblogsel(blog)}>
                  <img src={blog.Imagen} className="card-img-top" alt={blog.Titulo} style={{ height: '170px', width: '298px' }} />
                  <div className="card-body">
                    <h4 className="card-title" style={{ fontFamily: 'Times New Roman', color: 'white' }} >{blog.Titulo}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )
      )}
    </div>
  );
};

export default Noticias;





