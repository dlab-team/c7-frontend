import React from 'react'
import imgHomeSystem from '../../assets/DevSafio_sistema.svg'
import './styles_home_system.scss'
import '../../styles/App.scss'


const SectionHomeSystem = () => {
    return <>
        <div className='section__system'>

            <div className='text__subject'>DEVsafiamos el sistema</div>
            <div className='text--normal'>
                <span>
                    ¿Escasez de talento Senior? No te preocupes, en  <span className='fw-bold text-primary' >Devsafio </span>encontrarás el talento que necesitas en nuestro programa Mentorías.
                </span>
            </div>
            <div className='text--normal'>
                <span>
                    Completa el formulario y te contactaremos en breve para acompañarte en la búsqueda de Talento TI que necesitas.
                </span>
            </div>
            <div className='section__system--image'> <img src={imgHomeSystem} alt='imagen chica pensando' /> </div>

            <div className='text__subject'>
                <span>
                    ¡Agenda una asesoría con nosotros si quieres saber más sobre cómo acelerar y potenciar tu próximo Talento TI!
                </span>
            </div>

            <a className='btn-app btn-app--blue btn__system' href='/'>AGENDAR</a>
        </div>
    </>
}

export default SectionHomeSystem