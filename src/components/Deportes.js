import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ContextoBlog } from './contenido';  

const Deporte = () => {
const { blogs } = useContext(ContextoBlog)
const deportesBlogs = blogs.filter(blog => blog.Categoria == 'Deportes')
return (
  <div className="container-fluid">
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {deportesBlogs.map((blog, index) => (
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

export default Deporte;
