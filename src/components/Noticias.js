import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Noticia = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card p-4">
            <div className="card-body">
              <h5 className="card-title">Componente Noticias</h5>
              <p className="card-text">
               componente de Noticias : Esto es un compeonete creado para prueba ant y steven , ahora pueden navegar entre las paginas , en este componente iran los de Noticias 
              </p>
              <a href="#" className="btn btn-primary">Ir a algún lugar</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Noticia;
