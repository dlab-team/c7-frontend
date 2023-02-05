import React from 'react';
import logo from '../assets/Logo horizontal blanco.png';

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg d-flex justify-content-between navbar_container">
        <a className="navbar-brand mx-5" href="#">
          <img src={logo} width="120" height="45" alt="Logo" />
        </a>

        <ul className="navbar-nav mx-5 gap-3">
          <li className="nav-item">
            <a className="nav-link text-light" href="#">Inicia Sesión</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" href="#">Administra la página</a>
          </li>
          <li className="nav-item">
            <button type='button' className="nav-link text-light btn-registrate" href="#">Regístrate</button>
          </li>
          <li className="nav-item">
            <button type='button' className="nav-link btn-contactanos" href="#">Contáctanos</button>
          </li>
        </ul>
      </nav>
    </>
  )
}
