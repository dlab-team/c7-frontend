import React from 'react';

function Banner() {
    return (
      <div className="container flex mx-auto flex-col md:flex-row">
            <div className="row">
                <div className="col-6 items-center">
                    <h2 className="font-semibold">
                        ¿Cómo funcionamos?
                    </h2>
                    <h5>
                        Da click a nuestro video y en sólo 60 segundos conoce y
                        cómo estamos cambiando el mundo TI, acelerando y potenciando las células tecnológicas.
                    </h5>
                </div>
                <div className="col-6">
                    <h1>
                        DEVSAFIO
                    </h1>
                    <p>
                        El puente para impulsar, potenciar y acelerar las carreras de programadores y de la
                        industria tecnológica
                    </p>
                </div>
            </div>
      </div>
    )
}

export default Banner;