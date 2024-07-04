import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import hhhh7 from '../assets/img/hhhh7.jpg';

const Login = ({ setUsername }) => {
const [localUsername, setLocalUsername] = useState('');
const [password, setPassword] = useState('');
const navigate = useNavigate();

const handleSubmit = (e) => {
    e.preventDefault();
    setUsername(localUsername);
    navigate('/home');
  };

return (
    <div style={{ 
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundImage: `url(${hhhh7})`, 
      backgroundSize: 'cover', 
      backgroundPosition: 'center',
      zIndex: -1,
    }}>
      <div className="container-fluid d-flex h-100">
        <div className="row align-self-center w-100">
          <div className="col-md-6 mx-auto">
            <h1 className="text-center mb-4">Iniciar Sesión</h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">Usuario</label>
                <input
                type="text"
                className="form-control"
                id="username"
                value={localUsername}
                onChange={(e) => setLocalUsername(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Contraseña</label>
                <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="d-grid gap-2 col-6 mx-auto">
              <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

