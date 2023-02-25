import React from 'react'
import imgWhoWork from '../../assets/devImgComoFuncionamos.svg'
import './styles_whoWork.scss'

const SectionWhoWork = () => {
    return <>
        <div className='container__whoWork'>
            <div className='whoWork__info'>

                <span className='subject__text__title text-center'> ¿Cómo funcionamos?
                </span>

                <span className='normal__text text-center'>
                    Da click a nuestro video y en sólo 60 segundos conoce Devsafio y
                    cómo estamos cambiando el mundo TI, acelerando y
                    potenciando las células tecnológicas.
                </span>

            </div>

            <img className='whoWork__image' alt='Trabajo en Equipo' src={imgWhoWork} />
        </div>
    </>
}

export default SectionWhoWork