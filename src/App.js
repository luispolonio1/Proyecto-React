import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Cuerpo from './components/Cuerpo';
import { ProveedorBlog } from './components/contenido';

const App = () => {
    const [username, setUsername] = useState('')
return (
     <ProveedorBlog>
         <Router>
            <Routes>
            <Route path="/" element={<Login setUsername={setUsername} />} />
            <Route path="/home/*" element={<Home username={username} />} />
            </Routes>
        </Router>
    </ProveedorBlog>
    );
};

export default App;
