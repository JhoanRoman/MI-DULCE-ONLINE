import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 MiDulceOnline. Todos los derechos reservados.</p>
        <nav>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/about">Sobre Nosotros</Link></li>
            <li><Link to="/contact">Contacto</Link></li>
            <li><Link to="/privacy">Política de Privacidad</Link></li>
            <li><Link to="/terms">Términos y Condiciones</Link></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
