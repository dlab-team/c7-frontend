import React from 'react'
import imgHomeSystem from '../../assets/DevSafio_sistema.svg'
import './styles_home_system.scss'
import '../../styles/App.scss'


const SectionHomeSystem = () => {
    return <>
        <div className='section__system'>

            <div className='subject__text__title'>DEVsafiamos el sistema</div>
            <div className='normal__text'>
                <span>
                    ¿Escasez de talento Senior? No te preocupes, en  <span className='fw-bold text-primary' >Devsafio </span>encontrarás el talento que necesitas en nuestro programa Mentorías.
                </span>
            </div>
            <div className='normal__text'>
                <span>
                    Completa el formulario y te contactaremos en breve para acompañarte en la búsqueda de Talento TI que necesitas.
                </span>
            </div>
            <div className='section__system--image'> <img src={imgHomeSystem} alt='imagen chica pensando' /> </div>

            <div className='subject__text__title'>
                <span>
                    ¡Agenda una asesoría con nosotros si quieres saber más sobre cómo acelerar y potenciar tu próximo Talento TI!
                </span>
            </div>

            <a className='btn__dev btn--system btn-blue' href='/'>AGENDAR</a>
        </div>
    </>
}

export default SectionHomeSystem