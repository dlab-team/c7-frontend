import React, { useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/dev-imagotipo-white-horizontal.png';
import './Navbar.scss';
import { DoorOpen, List, X } from 'react-bootstrap-icons';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../utils/Redux/Slices/authDev';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch()

  const { isLoggedIn, rol: userType, user } = useSelector(store => store.authDev)
  const { userName } = user
  
  const handleLogOut = () => {
    dispatch(logOut())
  }

  return (
    <>
      <nav className="navbar navbar-dark navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand mx-5" to='/'>
            <img src={logo} id="navbar-logo" alt="Logo" />
          </Link>

          <button className="navbar-toggler" type="button" onClick={() => setIsOpen(!isOpen)} data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded={isOpen} aria-label="Toggle navigation">
            <span className="navbar-toggler__menu">
              {
                isOpen ? <X /> : <List />
              }
            </span>
          </button>
          <div className={`collapse navbar-collapse justify-content-end ${isOpen ? "show " : ""}`} id="navbarNav">
            <ul className="navbar-nav mx-5 gap-4">
              {
                !isLoggedIn && <>
                  <li className="nav-item">
                    <NavLink className="nav-link text-light btn-registrate ps-3 pe-3" to='/register' >Regístrate</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link text-light btn-contactanos ps-3 pe-3" to='/login' >Inicia Sesión</NavLink>
                  </li>
                </>}
              {
                isLoggedIn && <>
                  <li className="nav-item">
                    <>¡Bienvenido {userName}.!</>
                  </li>

                  {(userType === 'admin')
                    ?
                    <li className="nav-item">
                      <NavLink className="nav-link text-light btn-contactanos ps-3 pe-3" >Administrar la página</NavLink>
                    </li>
                    :
                    <>
                      <li className="nav-item">
                        <NavLink className="nav-link text-light btn-registrate ps-3 pe-3" to='/form' >Busco trabajo</NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink className="nav-link text-light btn-contactanos ps-3 pe-3" to='/UserProfile' >Completa tu perfil</NavLink>
                      </li>
                    </>
                  }
                  <li className="nav-item">
                    <NavLink to='/' >
                      <DoorOpen onClick={handleLogOut} className='navbar-log-out' />
                    </NavLink>
                  </li>
                </>
              }
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
