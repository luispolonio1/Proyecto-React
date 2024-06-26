import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { BarraNavegacion } from './BarraNav';
import Deporte from './Deportes';
import Cuerpo from './Cuerpo';
import Login from './Login';
import Tecnologia from './Tecnologias';
import Noticia from './Noticias';

const Home = ({ username }) => {
  return (
    <>
      <BarraNavegacion name={username} />
      <div className="container mt-3">
        <Routes>
          <Route path='Login' element={<Login/>}/>
          <Route path="Cuerpo" element={<Cuerpo name={username} />} />
          <Route path="Deportes" element={<Deporte />} />
          <Route path="tecnologia" element={<Tecnologia/>} />
          <Route path="noticias" element={<Noticia/>}/>
        </Routes>
      </div>
    </>
  );
};

export default Home;



