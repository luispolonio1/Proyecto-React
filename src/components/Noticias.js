import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ContextoBlog } from './contenido';

const Noticia = () => {
  const { blogs } = useContext(ContextoBlog);
  const noticiasBlogs = blogs.filter(blog => blog.Categoria === 'Noticias');

  return (
    <div className="container-fluid">
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {noticiasBlogs.map((blog, index) => (
          <div className="col" key={index}>
            <div className="card">
              <img src={blog.Imagen} className="card-img-top" alt={blog.Titulo} style={{height:'250px'}}/>
              <div className="card-body">
                <h4 className="card-title">{blog.Titulo}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Noticia;



