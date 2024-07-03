import React, { useContext } from 'react';
import { ContextoBlog } from './contenido';

const Infoblog = () => {
const { blogsel, setblogsel } = useContext(ContextoBlog)
if (!blogsel) {
    return null;
}
const { Categoria, Titulo, Informacion, Imagen } = blogsel;
return (
  <div className="container mt-5">
      <button className="btn btn-secondary mb-3" onClick={() => setblogsel(null)}>Volver</button>
      <h2>{Titulo}</h2>
      <img src={Imagen} alt={Titulo} style={{ width: '100%', maxHeight: '400px' }} />
      <p><strong>Categoria:</strong> {Categoria}</p>
      <p>{Informacion}</p>
  </div>
);
};
export default Infoblog;


