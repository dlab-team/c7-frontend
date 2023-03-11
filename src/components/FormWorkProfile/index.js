//import { useState, useEffect } from "react";
import React from 'react'
import "./style.scss";

export default function FormWorkProfile() {
  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="workProfileForm" id="contactForm">
      <form onSubmit={handleSubmit}>
        <button
          class="btn btn-primary"
          type="button"
          data-toggle="collapse"
          data-target="#info"
          aria-expanded="false"
          aria-controls="info"
        >
          Info
        </button>
        <div className="info" id="info">
          <p className="workProfileForm__text">
            Queremos conocer tus competencias y experiencia. A continuación
            podrás elegir las competencias que conoces con respecto a 3 niveles:
          </p>
          <p>
            <span className="workProfileForm__text--b">Nivel 1: </span>
            <span className="workProfile__text">
              No tengo experiencia laboral, pero he desarrollado proyectos
              utilizado esta tecnología/herramienta.
            </span>
          </p>
          <p>
            <span className="workProfileForm__text--b">Nivel 2: </span>
            <span className="workProfile__text">
              Tengo poca experiencia laboral, menos de dos años, necesito
              supervisión constante.
            </span>
          </p>
          <p>
            <span className="workProfileForm__text--b">Nivel 3: </span>
            <span className="workProfile__text">
              Tengo experiencia laboral (+2 años) y/o autonomía completa a la
              hora de desarrollar proyectos.
            </span>
          </p>
          <p className="workProfileForm__text--b">
            Ten en cuenta, de acuerdo a las competencias declaradas, te
            pediremos que seas capaz de demostrarlo de forma práctica durante el
            proceso de selección.
          </p>
        </div>
      </form>
    </div>
  );
}
