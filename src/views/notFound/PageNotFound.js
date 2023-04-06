import React from 'react'
import './PageNotFound.scss'
import { Link } from 'react-router-dom'
import { House } from 'react-bootstrap-icons'
import logo from '../../assets/dev-imagotipo-white-horizontal.png';

const PageNotFound = () => {

    return (
        <div id='background-notFound'>

            <div className='container-notfound'>
                <Link className="container-notfound__logo" to='/'>
                    <img src={logo} alt="Logo" />
                </Link>
                <h1>404</h1>
                <p>Oops! Página no encontrada.</p>
                <Link
                    className="mx-auto container-notfound__button"
                    to="/"
                >
                    <House className="me-3 icon-home"></House>
                    Regresemos al inicio, es la mejor opción.
                </Link>
            </div>
        </div>
    )
}

export default PageNotFound