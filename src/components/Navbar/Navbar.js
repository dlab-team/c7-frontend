import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import logo from '../../assets/dev-imagotipo-white-horizontal.png';
import './Navbar.scss';

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand mx-5" href="/">
            <img src={logo} width="120" height="45" alt="Logo" />
          </a>
          <button className="navbar-toggler" type="button" onClick={() => setIsOpen(!isOpen)} data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded={isOpen} aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className={`collapse navbar-collapse justify-content-end ${isOpen ? "show" : ""}`} id="navbarNav">
            <ul className="navbar-nav mx-5 gap-3">
              <li className="nav-item active">
                <NavLink className="nav-link text-light" to='/login' >Inicia Sesión</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-light btn-registrate" to='/register' >Regístrate</NavLink>
              </li>
              <li className="nav-item">
                <a href="#contactForm" className='nav-link text-light btn-contactanos'>Contáctanos</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}