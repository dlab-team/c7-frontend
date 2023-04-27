import "./style.scss";
import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { softwareWorkExperience } from "../../../utils/contactFormSoftwareWorkExperience";
import { softSkills } from "../../../utils/softSkills";
//REDUX
import { setFormData } from "../../../utils/Redux/Slices/Form";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const formDefault = {
  urlCV: "",
  urlLinkedIn: "",
  urlGithub: "",
  urlPortfolio: "",
  proyectDetail: "",
  softwareWorkExperience: "",
  softSkills: [],
};
const softSkillsDefault = new Array(softSkills.length).fill(false);

const FormWorkExperience = ({formButtons}) => {
  const [form, setForm] = useState(formDefault);
  const [validated, setValidated] = useState(false);
  const [softSkillsState, setsoftSkillsState] = useState(softSkillsDefault);
  const dispatch = useDispatch();

  //--------MANEJA EL ENVIO DE FORMULARIO----//
  // const handleSubmit = (event) => {
  //   const form = event.currentTarget;
  //   if (form.checkValidity() === false && atLeastThreeCheckboxIsChecked()) {
  //     event.preventDefault();
  //     event.stopPropagation();
  //   }
  //   setValidated(true);
  // };

  //--------CHECKEA QUE AL MENOS SE HAYAN SELECCIONADO 3 OPCIONES DE LOS CHECKS----//
  function atLeastThreeCheckboxIsChecked() {
    return form.softSkills.length > 2;
  }

  //--------GUARDA LOS CHECKS EN EL FORM----//
  const softSkillsUpdate = (position) => {
    const updatedsoftSkillsState = softSkillsState.map((item, index) =>
      index === position ? !item : item
    );
    setsoftSkillsState(updatedsoftSkillsState);
    setForm({
      ...form,
      softSkills: Array.from(
        document.querySelectorAll("input[type=checkbox].softSkills-checkbox:checked"),
        (e) => e.name
      ),
    });
  };

  //--------ACTUALIZO EL FORM DEL STATE-----//
  const onFormUpdate = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  //ACTUALIZA REDUX CUANDO MODIFICO EL FORM
  useEffect(() => {
    dispatch(setFormData(form));
  }, [form, dispatch]);

  //--------MANEJO DE VALIDACIONES-----//
  useEffect(() => {
    const form = document.getElementById("form-workExperience");
    if (form.checkValidity() === true  && atLeastThreeCheckboxIsChecked()) {
      setValidated(true);
    }
    else{
      setValidated(false);
    }
  }, [form]);

  return (
    <Form noValidate validated={validated} id="form-workExperience">
      <div className="FormWorkExperience">
        <Form.Group as={Row}>
          <Col sm="6">
            <Form.Label>
              <span className="text">URL CV</span>
            </Form.Label>
            <Form.Control
              size="sm"
              type="text"
              onChange={onFormUpdate}
              name="urlCV"
              aria-describedby="cv"
            />
            <Form.Text id="cv" muted>
              Subir como documento público en Google Drive o similar
            </Form.Text>
          </Col>

          <Col sm="6">
            <Form.Label>
              <span className="text">URL de LinkedIn</span>
            </Form.Label>
            <Form.Control
              size="sm"
              type="text"
              onChange={onFormUpdate}
              name="urlLinkedIn"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Col sm="6">
            <Form.Label>
              <span className="text">URL de GitHub</span>
            </Form.Label>
            <Form.Control
              size="sm"
              type="text"
              onChange={onFormUpdate}
              name="urlGithub"
            />
          </Col>
          <br></br>
          <Col sm="6">
            <Form.Label>
              <span className="text">URL de Portafolio/Sitio web</span>
            </Form.Label>
            <Form.Control
              size="sm"
              type="text"
              onChange={onFormUpdate}
              name="urlPortfolio"
            />
          </Col>
        </Form.Group>
        <br></br>
        <Form.Group as={Row}>
          <Col sm="12">
            <Form.Label>
              <span className="text">
                Explícanos en detalle algún proyecto que te enorgullece
              </span>
            </Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              size="sm"
              onChange={onFormUpdate}
              name="proyectDetail"
              aria-describedby="cv"
            />
            <Form.Text id="cv" muted>
              Describe de que trató, tu rol en el proyecto y por qué lo elegiste
              (por ejemplo: arquitectura de desarrollo, equipo y tu rol en el
              proyecto, tecnologías utilizadas, dificultades y soluciones,
              funcionalidades, objetivos, etc. Recuerda NO esperamos link, sino
              explicación)
            </Form.Text>
          </Col>
        </Form.Group>
        <br></br>

        <Form.Group as={Row}>
          <Col sm="6">
            <Form.Label>
              <span className="text">
                Selecciona 3 habilidades blandas que te representen:
              </span>
              <span className="red"> *</span>
            </Form.Label>
            {softSkills.map(({ name, value }, index) => (
              <div key={name}>
                <Form.Check.Input
                  size="sm"
                  required={!atLeastThreeCheckboxIsChecked()}
                  className="softSkills-checkbox"
                  type="checkbox"
                  id={`check-${name}`}
                  name={value}
                  feedback="Debes seleccionar al menos una opcion."
                  feedbacktype="invalid"
                  checked={softSkillsState[index]}
                  isValid={atLeastThreeCheckboxIsChecked()}
                  onChange={() => softSkillsUpdate(index)}
                />
                <Form.Check.Label
                  className="text--sm"
                  htmlFor={`check-${name}`}
                >
                  {name}
                </Form.Check.Label>
              </div>
            ))}
          </Col>

          <Col sm="6">
            <Form.Label>
              <span className="text">
                ¿Cuántos años de experiencia laboral posees en desarrollo de
                software y/o diseño?
              </span>
              <span className="red"> *</span>
            </Form.Label>
            {softwareWorkExperience.map(({ name, value }) => (
              <div key={name}>
                <Form.Check.Input
                  size="sm"
                  required
                  type="radio"
                  name="softwareWorkExperience"
                  id={`radio-${name}`}
                  value={value}
                  onChange={onFormUpdate}
                />
                <Form.Check.Label
                  className="text--sm"
                  htmlFor={`radio-${name}`}
                >
                  {name}
                </Form.Check.Label>
              </div>
            ))}
          </Col>
        </Form.Group>
      </div>
      {/* ////////////////////////////////////////////////////////////////// */}
      {validated ? (
        formButtons
      ) : (
        <>
        <Form.Group as={Row}>
        <Col md="6">
          <Button type="submit" disabled className="btn-app btn-app--blue">
            Atras
          </Button>
          </Col>
        <Col md="6">
          <Button type="submit" disabled className="btn-app btn-app--blue">
            Siguiente
          </Button>
          </Col>
          </Form.Group>
          </>
      )}
      {/* ////////////////////////////////////////////////////////////////// */}
    </Form>
  );
};

export default FormWorkExperience;
