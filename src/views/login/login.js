import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { Envelope, Google, Linkedin, Twitter, Github } from 'react-bootstrap-icons'
import { NavLink } from 'react-router-dom';
import './login.scss';

const UiLogin = () => {


    return (
        <>
            <Navbar />

            <div className='login-container'>

                <div className='login-modal'>
                    <div className='text__subject'> Unete a Devsafío </div>

                    <div className='login-modal__text'>
                        <span>Crea tu cuenta profesional en DevSafío para que seas parte de distintas ofertas laborales que tenemos junto a importantes empresas en latinoamérica.</span>
                    </div>

                    <div className='login-modal__box-buttons'>                    
                        <NavLink className="nav-link text-light" to='/loginEmail' ><button className='btn-app login-modal__button btn-app--white btn--border'> <Envelope className='login--icons' />  Ingresa con tu E-Mail</button></NavLink>
                        <button className='btn-app login-modal__button btn-app--white btn--border'><Google className='login--icons' /> Ingresa con tu Google</button>
                        <button className='btn-app login-modal__button btn--linkedin'><Linkedin className='login--icons' />Ingresa con tu LinkedIn</button>
                        <button className='btn-app login-modal__button btn--github'><Twitter className='login--icons' />Ingresa con tu Twitter</button>
                        <button className='btn-app login-modal__button btn--twitter'><Github className='login--icons' />Ingresa con tu GitHub</button>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default UiLogin