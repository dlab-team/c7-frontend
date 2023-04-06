import "./style.scss";
import { Form, Col, Row } from "react-bootstrap";
import React, { useState } from "react";
import { englishLevels } from "../../utils/EnglishLevels";
import { instituteType } from "../../utils/instituteType";
import { maxEducation } from "../../utils/maxEducation";
import { educationalSituation } from "../../utils/educationalSituation";
//REDUX
import { setFormData } from "../../utils/Redux/Slices/Form";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const formDefault = {
  maxEducationLevel: "",
  englishLevel: "",
  carrera_1: "",
  nombre_1: "",
  type_1: "",
  carrera_2: "",
  nombre_2: "",
  type_2: "",
  educationalSituation: "",
};

const FormInfoPersonal = () => {
  const [form, setForm] = useState(formDefault);
  const [validated, setValidated] = useState(false);
  const dispatch = useDispatch();

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

  //--------MANEJA EL ENVIO DE FORMULARIO----//
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <div className="FormInfoAcademica">
        <Form.Group as={Row}>
          <Col xs="8" sm="7">
            <Form.Label>
              <span className="text">
                ¿Cuál es tu máximo nivel educacional?{" "}
                <span className="red">*</span>
              </span>
            </Form.Label>
            <Form.Select
              required
              name="maxEducationLevel"
              defaultValue=""
              size="sm"
              onChange={onFormUpdate}
            >
              <option value="" disabled hidden>
                Selecciona
              </option>
              {maxEducation.map(({ name, value }) => (
                <option key={name} value={value}>
                  {name}
                </option>
              ))}
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Por favor selecciona tu situación educacional.
            </Form.Control.Feedback>
          </Col>
          <Col xs="4" sm="5">
            <Form.Label>
              <span className="text">
                Nivel inglés: <span className="red">*</span>
              </span>
            </Form.Label>
            <Form.Select
              required
              name="englishLevel"
              defaultValue=""
              size="sm"
              onChange={onFormUpdate}
            >
              <option value="" disabled hidden>
                Selecciona
              </option>
              {englishLevels.map(({ name, value }) => (
                <option key={name} value={value}>
                  {name}
                </option>
              ))}
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Por favor selecciona tu Nivel de Ingles.
            </Form.Control.Feedback>
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <div>
            <br></br>
            <p className="text-sm">
              A continuación, indícanos 2 (dos) carreras profesionales, cursos,
              bootcamp o certificaciones cursadas relacionadas al desarrollo de
              software, diseño o TI (puedes indicarnos las más importantes o
              actuales):
            </p>
          </div>
        </Form.Group>

        {academicForm(onFormUpdate, 1)}
        {academicForm(onFormUpdate, 2)}

        <Col sm="12">
          <Form.Label>
            <span className="text">
              ¿Cuál es tu situación educacional actual (Bootcamp, diplomados,
              universidad, cursos u otros)? <span className="red">*</span>
            </span>
          </Form.Label>
          <Form.Select
            required
            defaultValue=""
            size="sm"
            onChange={onFormUpdate}
            name="educationalSituation"
          >
            <option value="" disabled hidden>
              Selecciona
            </option>
            {educationalSituation.map(({ name, value }) => (
              <option key={name} value={value}>
                {name}
              </option>
            ))}
          </Form.Select>
          <Form.Control.Feedback type="invalid">
            Por favor selecciona tu situación educacional actual.
          </Form.Control.Feedback>
        </Col>
        <br></br>
      </div>
    </Form>
  );
};

const academicForm = (onFormUpdate, id) => {
  return (
    <>
      <Form.Group as={Row}>
        <Col sm="12">
          <Form.Label>
            <span className="text">
              Nombre de la carrera, curso, bootcamp o certificación:{" "}
              <span className="red">*</span>
            </span>
          </Form.Label>
          <Form.Control
            size="sm"
            type="text"
            required
            onChange={onFormUpdate}
            name={`carrera_${id}`}
          />
          <Form.Control.Feedback type="invalid">
            Por favor ingresa el Nombre de la carrera, curso, bootcamp o
            certificación.
          </Form.Control.Feedback>
        </Col>
      </Form.Group>

      <Form.Group as={Row}>
        <Col sm="6" md="6" xl="8">
          <Form.Label>
            <span className="text">
              Nombre institución: <span className="red">*</span>
            </span>
          </Form.Label>
          <Form.Control
            size="sm"
            type="text"
            required
            onChange={onFormUpdate}
            name={`nombre_${id}`}
          />
          <Form.Control.Feedback type="invalid">
            Por favor ingresa el Nombre de la institución.
          </Form.Control.Feedback>
        </Col>
        <Col sm="6" md="6" xl="4">
          <Form.Label>
            <span className="text">
              Tipo de institución: <span className="red">*</span>
            </span>
          </Form.Label>
          <Form.Select
            required
            defaultValue=""
            size="sm"
            onChange={onFormUpdate}
            name={`type_${id}`}
          >
            <option value="" disabled hidden>
              Selecciona
            </option>
            {instituteType.map(({ name, value }) => (
              <option key={name} value={value}>
                {name}
              </option>
            ))}
          </Form.Select>
          <Form.Control.Feedback type="invalid">
            Por favor selecciona tu tipo de institución.
          </Form.Control.Feedback>
        </Col>
      </Form.Group>
    </>
  );
};
export default FormInfoPersonal;
