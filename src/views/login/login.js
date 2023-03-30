import React from 'react'
import './login.scss'
import { NavLink } from "react-router-dom";

const UiLogin = () => {


    return (
        <div className='login-container'>

            <div className='login-modal'>
                <div className='text__subject'> Unete a Devsafío </div>

                <div className='login-modal__text'>
                    <span>Crea tu cuenta profesional en DevSafío para que seas parte de distintas ofertas laborales que tenemos junto a importantes empresas en latinoamérica.</span>
                </div>

                <div className='login-modal__box-buttons'>
                    <a className='btn-app login-modal__button btn-app--white btn--border'>
                        <NavLink className="nav-link" to='/form'>Soy Developer</NavLink>
                    </a>
                    <a className='btn-app login-modal__button btn-app--white btn--border'>
                        <NavLink className="nav-link" to='/soyempresa'>Soy Empresa</NavLink>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default UiLogin