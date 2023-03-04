import React from "react";
import Video from "./Video";
import "./style.scss";

function Banner() {
  return (
    <div className="banner">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="banner__title">¿Cómo funcionamos?</div>
            <div className="banner__text">
              <p>
                Da click a nuestro video y en sólo 60 segundos conoce
                <b className="banner__text--b"> Devsafio </b>
                cómo estamos
                <b className="banner__text--b">cambiando el mundo TI</b>,
                acelerando y potenciando las células tecnológicas.
              </p>
            </div>
          </div>
          <div className="col-6">
              <Video />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
