import React from 'react'
import imgHomeSystem from '../../assets/DevSafio_sistema.svg'
import './styles/styles_home_system.scss'

const SectionHome_system = () => {
    return <>
        <div className='container-home-section'>

            <div className='subject--text--title'>DEVsafiamos el sistema</div>

            <div className='info--text--normal'>
                <span>
                    ¿Escasez de talento Senior? No te preocupes, en  <span className='fw-bold text-primary' >Devsafio </span>encontrarás el talento que necesitas en nuestro programa Mentorías.
                </span>
            </div>
            <div className='info--text--normal'>
                <span>
                    Completa el formulario y te contactaremos en breve para acompañarte en la búsqueda de Talento TI que necesitas.
                </span>
            </div>
            <div className='image-home-system'> <img src={imgHomeSystem} alt='imagen chica pensando' /> </div>

            <div className='subject--text--title'>
                <span>
                    ¡Agenda una asesoría con nosotros si quieres saber más sobre cómo acelerar y potenciar tu próximo Talento TI!
                </span>
            </div>

            <a className='btn-dev btn-blue btn-body-section' href='/'>AGENDAR</a>

        </div>
    </>

}

export default SectionHome_system