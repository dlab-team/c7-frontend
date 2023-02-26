import React from 'react'
import imgWhoWork from '../../assets/devImgComoFuncionamos.svg'
import './styles_whoWork.scss'

const SectionWhoWork = () => {
    return <>
        <div className='who-Work'>
            <div className='who-Work__info'>

                <span className='text__subject text-center'> ¿Cómo funcionamos?
                </span>

                <span className='text--normal text-center'>
                    Da click a nuestro video y en sólo 60 segundos conoce Devsafio y
                    cómo estamos cambiando el mundo TI, acelerando y
                    potenciando las células tecnológicas.
                </span>

            </div>

            <img className='who-Work__image' alt='Trabajo en Equipo' src={imgWhoWork} />
        </div>
    </>
}

export default SectionWhoWork