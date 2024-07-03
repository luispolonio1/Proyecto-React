import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { BarraNavegacion } from './BarraNav';
import Deporte from './Deportes';
import Cuerpo from './Cuerpo';
import Login from './Login';
import Tecnologia from './Tecnologias';
import Noticia from './Noticias';
import { Footer } from './Footer';

const Home = ({ username }) => {
return (
   <>
  <BarraNavegacion name={username} />
    <div className="container mt-3">
       <Routes>
        <Route path="/" element={<Cuerpo name={username} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cuerpo" element={<Cuerpo name={username} />} />
        <Route path="/deportes" element={<Deporte />} />
        <Route path="/tecnologia" element={<Tecnologia />} />
        <Route path="/noticias" element={<Noticia />} />
       </Routes>
      </div>
      <hr/>
    <Footer />
  </>
);
};

export default Home;




