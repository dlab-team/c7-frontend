import React from "react";
import imgHomeSystem from "../../assets/DevSafio_sistema.svg";
import "./styles_home_system.scss";

const SectionHomeSystem = () => {
  return (
    <>
      <div className="system">
        <div className="system__title">DEVsafiamos el sistema</div>
        <div className="system__text">
          <span>
            ¿Escasez de talento Senior? No te preocupes, en{" "}
            <span className="system__text--blue">Devsafio </span>encontrarás el
            talento que necesitas en nuestro programa Mentorías.git 
          </span>
        </div>
        <div className="system__text">
          <span>
            Completa el formulario y te contactaremos en breve para acompañarte
            en la búsqueda de Talento TI que necesitas.
          </span>
        </div>
        <div className="system__image">
          {" "}
          <img src={imgHomeSystem} alt="imagen chica pensando" />{" "}
        </div>
        <div className="system__text--grey">
          <span>
            ¡Agenda una asesoría con nosotros si quieres saber más sobre cómo
            acelerar y potenciar tu próximo Talento TI!
          </span>
        </div>
        <button className="system__btn" href="/">
          AGENDAR
        </button>
      </div>
    </>
  );
};

export default SectionHomeSystem;
