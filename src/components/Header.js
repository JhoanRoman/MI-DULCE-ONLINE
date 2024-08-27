import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>Dulcería MiDulceOnline</h1>
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/register">Registrarse</Link></li>
          <li><Link to="/login">Iniciar Sesión</Link></li>
          <li><Link to="/dashboard">Productos</Link></li>
          <li><Link to="/cart">Carrito</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
