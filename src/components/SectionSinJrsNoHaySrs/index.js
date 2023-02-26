import React from 'react';
import aceleramos from '../../assets/aceleramos.png'
import acompañamos from '../../assets/acompaniamos.png'
import potenciamos from '../../assets/potenciamos.png'
import './style.scss';


export default function Section() {
    return (
        <div className='section'>
            <div className='section__title'>Sin Juniors no hay Seniors</div>
            <div className='section__text'>
                <p>En este programa unimos la <b className='section__text--b'>rapidez, eficiencia y visión de un desarrollador junior</b> junto con la <b className='section__text--b'>experiencia y liderazgo de un senior TI</b>, quien acompañará al talento junior contratado para potenciar tu área digital, acá te explicamos cómo: </p>
            </div>
            <div className="itembox d-flex ">
                <div className='item'>
                    <img src={aceleramos} alt="aceleramos.png"></img>
                    <div className='item__title'>Aceleramos</div>
                    <p className='item__text' ><b className='item__text--b'>Aceleramos el proceso de contratación.</b> Una vez que nos envíes tu necesidad de talento digital recibirás un listado con los mejores candidatos en <b className='card__text--b'>5 días.</b></p>
                </div>
                <div className='item'>
                    <img src={acompañamos} alt="acompañamos.png"></img>
                    <div className='item__title'>Acompañamos</div>
                    <p className='item__text'>Nosotros nos hacemos cargo, tú creces. Todos los desarrolladores que contrates <b className='item__text--b'>serán guiados y apoyados a nivel técnico</b> por un mentor senior TI experto en tu área <b className='card__text--b'>sin ningún costo ($0).</b></p>
                </div>
                <div className='item'>
                    <img src={potenciamos} alt="potenciamos.png"></img>
                    <div className='item__title'>Potenciamos</div>
                    <p className='item__text'>Potenciamos y retenemos el talento. Realizamos un <b className='item__text--b'>seguimiento</b> de alta calidad para <b className='item__text--b'>potenciar el crecimiento y desarrollo técnico</b> de todos los desarrolladores contratados.</p>
                </div>
            </div>
        </div>
    );
}

