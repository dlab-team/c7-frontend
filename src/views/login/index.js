import React from 'react'
import './style.scss'
import { Envelope, Google, Linkedin, Twitter, Github } from 'react-bootstrap-icons'

const UiLogin = () => {


    return (
        <div className='login-container'>

            <div className='login-modal'>
                <div className='text__subject'> Unete a Devsafío </div>

                <div className='login-modal__text'>
                    <span>Crea tu cuenta profesional en DevSafío para que seas parte de distintas ofertas laborales que tenemos junto a importantes empresas en latinoamérica.</span>
                </div>

                <div className='login-modal__box-buttons'>
                    <a className='btn-app login-modal__button btn-app--white btn--border'> <Envelope className='login--icons' />  Ingresa con tu mail</a>
                    <a className='btn-app login-modal__button btn-app--white btn--border'><Google className='login--icons' /> Ingresa con tu Google</a>
                    <a className='btn-app login-modal__button btn--linkedin'><Linkedin className='login--icons' />Ingresa con tu LinkedIn</a>
                    <a className='btn-app login-modal__button btn--github'><Twitter className='login--icons' />Ingresa con tu Twitter</a>
                    <a className='btn-app login-modal__button btn--twitter'><Github className='login--icons' />Ingresa con tu GitHub</a>
                </div>
            </div>
        </div>
    )
}

export default UiLogin