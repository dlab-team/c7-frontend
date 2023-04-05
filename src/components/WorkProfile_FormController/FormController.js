import React from "react";
import "./FormController.scss";
import FormInfoPersonal from "../FormInfoPersonal";
import FormInfoAcademica from "../FormInfoAcademica";
import FormWorkProfile from "../FormWorkProfile";
import FormWorkExperience from "../FormWorkExperience";
import FormDesiredJob from "../FormDesiredJob";

const FormController = () => {
  return (
    <>
      <div id="carouselExampleCaptions" className="carousel slide">
        {/* botones navegacion de la parte de arriba */}
        <div className="carousel-indicators indicators-container">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="form-indicator active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>

          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            className="form-indicator"
            aria-label="Slide 2"
          ></button>

          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            className="form-indicator"
            aria-label="Slide 3"
          ></button>

          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="3"
            className="form-indicator"
            aria-label="Slide 4"
          ></button>

          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="4"
            className="form-indicator"
            aria-label="Slide 5"
          ></button>
        </div>

        {/* Cada formulario */}
        <div className="carousel-inner" id="form-controll">
          <div className="carousel-item active">
            <span className="text__subject ">INFORMACIÓN PERSONAL</span>
            <FormInfoPersonal />
            <FormButtons />
          </div>

          <div className="carousel-item">
            <span className="text__subject ">INFORMACIÓN ACADÉMICA</span>
            <FormInfoAcademica />
            <FormButtons />
          </div>

          <div className="carousel-item">
            <span className="text__subject ">PERFIL LABORAL</span>
            <FormWorkProfile />
            <FormButtons />
          </div>

          <div className="carousel-item">
            <span className="text__subject ">EXPERIENCIA Y TRABAJO</span>
            <FormWorkExperience />
            <FormButtons />
          </div>

          <div className="carousel-item">
            <span className="text__subject ">
              ¿QUÉ TIPO DE TRABAJO ESTÁS BUSCANDO?
            </span>
            <FormDesiredJob />
            <FormButtons />
          </div>
        </div>
      </div>
    </>
  );
};

const FormButtons = () => {
  return (
    <form>
      <div
        style={{
          display: "flex",
          gap: "30px",
        }}
      >
        <input
          type={"button"}
          value="Atras"
          className="btn-app btn-app--blue"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        />

        <input
          type={"button"}
          value="Siguiente"
          className="btn-app btn-app--blue"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        />
      </div>
    </form>
  );
};

export default FormController;
