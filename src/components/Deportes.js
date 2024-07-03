import React, { useContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ContextoBlog } from './contenido';

const Deporte = () => {
const { blogs } = useContext(ContextoBlog)
const [blogsel, setblogsel] = useState(null)
const deportesBlogs = blogs.filter(blog => blog.Categoria == 'Deportes')

return (
  <div className="container-fluid mt-5">
      {deportesBlogs.length == 0 ? (
        <div className="text-center" style={{ height: '600px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h1 className="display-1" style={{ color: '#555' }}>Aún está vacío</h1>
        </div>
      ) : (
        blogsel ? (
        <div className="container">
        <button className="btn btn-primary mb-3" onClick={() => setblogsel(null)}>Volver</button>
        <h2>{blogsel.Titulo}</h2>
        <img src={blogsel.Imagen} className="img-fluid" alt={blogsel.Titulo} />
        <p>{blogsel.Informacion}</p>
          </div>
        ) : (
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {deportesBlogs.map((blog, index) => (
            <div className="col" key={index}>
                <div className="card" onClick={() => setblogsel(blog)}>
                <img src={blog.Imagen} className="card-img-top" alt={blog.Titulo} style={{ height: '250px' }} />
                <div className="card-body">
                <h4 className="card-title" style={{ color: 'black' }}>{blog.Titulo}</h4>
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

export default Deporte;