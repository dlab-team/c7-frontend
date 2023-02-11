import React from 'react'
import imgWhoWork from '../../assets/devImgComoFuncionamos.svg'
import './styles/styles_whoWork.css'

const Section_whoWork = () => {
    return <div className='container--section--whoWork'>
        <div className='container--info--whoWork'>
            <span className='subject--text--title title--whoWork'> ¿Cómo funcionamos?
            </span>
            <span className='info--text--normal text--whoWork'>
                Da click a nuestro video y en sólo 60 segundos conoce Devsafio y
                cómo estamos cambiando el mundo TI, acelerando y
                potenciando las células tecnológicas.
            </span>
        </div>

        <img className='image--whoWork' alt='Trabajo en Equipo' src={imgWhoWork} />
    </div>

}

export default Section_whoWork