import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ContextoBlog } from './contenido'; 

const Noticia = () => {
const { blogs } = useContext(ContextoBlog)
const noticiasBlogs = blogs.filter(blog => blog.Categoria == 'Noticias Mundiales')
return (
  <div className="container mt-5">
      {noticiasBlogs.map((blog, index) => (
          <div className="row justify-content-center" key={index}>
             <div className="col-md-6">
                <div className="card p-4">
                  <div className="card-body">
                        <h5 className="card-title">{blog.Titulo}</h5>
                      <img src={blog.Imagen} alt={blog.Titulo} style={{ width: '100%' }} />
                        <p className="card-text">{blog.Informacion}</p>
                      </div>
             </div>
          </div>
        </div>
      ))}
  </div>
 );
};

export default Noticia;

