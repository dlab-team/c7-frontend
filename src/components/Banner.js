import React from 'react';
import color from '../assets/color.png';

function Banner() {
    return (
      <div className="container flex mx-auto flex-col md:flex-row">
            <div className="row">
                <div className="col-6">
                    <h2 className="font-semibold">
                        ¿Cómo funcionamos?
                    </h2>
                </div>
                <div className="col-6">
                    <h1>
                        DEVSAFIO
                    </h1>
                    <div className='row'>
                        <p className='col-11'>
                            El puente para impulsar, potenciar y acelerar las carreras de programadores y de la
                            industria tecnológica
                        </p>
                        <img src={color} alt="color" className='col-1' />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-6'>
                        <h5>
                            Da click a nuestro video y en sólo 60 segundos conoce y
                            cómo estamos cambiando el mundo TI, acelerando y potenciando las células tecnológicas.
                        </h5>
                    </div>
                    <div className='col-6'>
                        <h3>
                            ¿Cómo funcionamos?
                        </h3>
                        <p>
                            Te lo explico en 4 pasos
                        </p>
                    </div>
                </div> 
            </div>
      </div>
    )
}

export default Banner;