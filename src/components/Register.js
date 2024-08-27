import React, { useState } from 'react';
import './Register.css';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [userType, setUserType] = useState('usuario'); // Estado para tipo de usuario

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }
    // Lógica de registro aquí
    console.log('Registrar:', { email, password, userType });
  };

  return (
    <form className="register-form" onSubmit={handleSubmit}>
      <h2>Registrarse</h2>

      <label htmlFor="user-type">Tipo de usuario</label>
      <select
        id="user-type"
        value={userType}
        onChange={(e) => setUserType(e.target.value)}
      >
        <option value="usuario">Cliente</option>
        <option value="tienda">Tienda</option>
      </select>

      <input
        type="email"
        placeholder="Correo Electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Confirmar Contraseña"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
      />
      <button type="submit">Registrar</button>
    </form>
  );
}

export default Register;
