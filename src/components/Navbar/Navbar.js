import React, { useState } from 'react';
import logo from '../../assets/Logo_horizontal_blanco.png';

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand mx-5" href="#">
            <img src={logo} width="120" height="45" alt="Logo" />
          </a>
          <button className="navbar-toggler" type="button" onClick={() => setIsOpen(!isOpen)} data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded={isOpen} aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className={`collapse navbar-collapse justify-content-end ${isOpen ? "show" : ""}`} id="navbarNav">
            <ul className="navbar-nav mx-5 gap-3">
              <li className="nav-item active">
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
          </div>
        </div>
      </nav>
    </>
  )
}