import React from 'react';
import Video from './Video';

function Banner() {
    return (
      <div className="container">
            <div className="row align-items-center">
                <div className="col-6 text-center mx-auto">
                    <h2 className="fw-bold font-family:'Poppins'">
                        ¿Cómo funcionamos?
                    </h2>
                    <div className='py-4 px-4'>
                        <h5>
                            Da click a nuestro video y en sólo 60 segundos conoce <span className='text-primary fw-bold'>Devsafio </span>
                            cómo estamos <span className='text-primary fw-bold'>cambiando el mundo TI</span>, acelerando y potenciando las células tecnológicas.
                        </h5>
                    </div>
                </div>
                <div className='col-6'>
                    <h3>
                        <Video />
                    </h3>
                </div> 
            </div>
      </div>
    )
}

export default Banner;