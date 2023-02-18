import React from 'react'
import './style.scss'
import { Envelope, Google, Linkedin, Twitter, Github } from 'react-bootstrap-icons'

const Ui_login = () => {


    return (
        <div className='modal--login--container'>
            <div className='modal--login'>

                <div className='subject--text--title'> Unete a Devsafío </div>

                <div className='modal--text modal--text--container'>
                    <span>Crea tu cuenta profesional en DevSafío para que seas parte de distintas ofertas laborales que tenemos junto a importantes empresas en latinoamérica.</span>
                </div>

                <div className='modal--container--buttons'>
                    <a className='btn-dev btn-white'> <Envelope className='login--icons' />  Ingresa con tu mail</a>
                    <a className='btn-dev btn-white'><Google className='login--icons' /> Ingresa con tu Google</a>
                    <a className='btn-dev btn-linkedin'><Linkedin className='login--icons' />Ingresa con tu LinkedIn</a>
                    <a className='btn-dev btn-github'><Twitter className='login--icons' />Ingresa con tu Twitter</a>
                    <a className='btn-dev btn-twitter'><Github className='login--icons' />Ingresa con tu GitHub</a>
                </div>

            </div>
        </div>
    )
}

export default Ui_login