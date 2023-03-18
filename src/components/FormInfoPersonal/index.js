import "./style.scss";
import { Form, Col, Row, Button } from "react-bootstrap";
import React, { useState } from "react";
import { categories } from "../../utils/contactFormCategories";
import { employmentStatus } from "../../utils/contactFormEmploymentStatus";
//import { useEffect } from "react";

const formDefault = {
  name: "",
  lastName: "",
  email: "",
  phone: "",
  city: "",
  country: "",
  employmentStatus: "",
  categories: [],
};
const categoriesDefault = new Array(categories.length).fill(false);

const FormInfoPersonal = () => {
  const [form, setForm] = useState(formDefault);
  const [validated, setValidated] = useState(false);
  const [categoriesState, setCategoriesState] = useState(categoriesDefault);

  //--------ACTUALIZO EL FORM DEL STATE-----//
  const onFormUpdate = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  //--------CHECKEA QUE AL MENOS SE HAYA SELECCIONADO UNA OPCION DE LOS CHECKS----//
  function atLeastOneCheckboxIsChecked() {
    const checkboxes = Array.from(
      document.querySelectorAll(".categories-checkbox")
    );
    return checkboxes.reduce((acc, curr) => acc || curr.checked, false);
  }

  //--------MANEJA EL ENVIO DE FORMULARIO----//
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  //--------GUARDA LOS CHECKS EN EL FORM----//
  const categoriesUpdate = (position) => {
    const updatedcategoriesState = categoriesState.map((item, index) =>
      index === position ? !item : item
    );
    setCategoriesState(updatedcategoriesState);
    setForm({
      ...form,
      categories: Array.from(
        document.querySelectorAll("input[type=checkbox]:checked"),
        (e) => e.name
      ),
    });
  };
  
  //--------CONSOLE LOG SOLO PARA PRUEBAS-----//
  // useEffect(() => {
  //   console.log(form);
  //   console.log(atLeastOneCheckboxIsChecked());
  // }, [form]);

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <div className="FormInfoPersonal">
        <Form.Group as={Row}>
          <Col sm="6">
            <Form.Label>
              <span className="text">
                Nombre <span className="red">*</span>
              </span>
            </Form.Label>
            <Form.Control
              size="sm"
              type="text"
              required
              onChange={onFormUpdate}
              name="name"
            />
            <Form.Control.Feedback type="invalid">
              Por favor ingresa tu Nombre.
            </Form.Control.Feedback>
          </Col>
          <Col sm="6">
            <Form.Label>
              <span className="text">
                Apellido <span className="red">*</span>
              </span>
            </Form.Label>
            <Form.Control
              size="sm"
              type="text"
              required
              onChange={onFormUpdate}
              name="lastName"
            />
            <Form.Control.Feedback type="invalid">
              Por favor ingresa tu Apellido.
            </Form.Control.Feedback>
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Col sm="6">
            <Form.Label>
              <span className="text">
                Email <span className="red">*</span>
              </span>
            </Form.Label>
            <Form.Control
              size="sm"
              type="email"
              required
              onChange={onFormUpdate}
              name="email"
            />
            <Form.Control.Feedback type="invalid">
              Por favor ingresa un Email valido.
            </Form.Control.Feedback>
          </Col>
          <Col sm="6">
            <Form.Label>
              <span className="text">
                Número de teléfono móvil <span className="red">*</span>
              </span>
            </Form.Label>
            <Form.Control
              size="sm"
              type="number"
              required
              onChange={onFormUpdate}
              name="phone"
            />
            <Form.Control.Feedback type="invalid">
              Por favor ingresa tu Número.
            </Form.Control.Feedback>
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Col sm="6">
            <Form.Label>
              <span className="text">
                Ciudad <span className="red">*</span>
              </span>
            </Form.Label>
            <Form.Control
              size="sm"
              type="text"
              required
              onChange={onFormUpdate}
              name="city"
            />
            <Form.Control.Feedback type="invalid">
              Por favor ingresa tu Ciudad.
            </Form.Control.Feedback>
          </Col>
          <Col sm="6">
            <Form.Label>
              <span className="text">
                País/región <span className="red">*</span>
              </span>
            </Form.Label>
            <Form.Control
              size="sm"
              type="text"
              required
              onChange={onFormUpdate}
              name="country"
            />
            <Form.Control.Feedback type="invalid">
              Por favor ingresa tu País/región.
            </Form.Control.Feedback>
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Col sm="6">
            <Form.Label>
              <span className="text">
                ¿Con qué género te identificas? <span className="red">*</span>
              </span>
            </Form.Label>
            <Form.Select required name="gender" defaultValue="" size="sm">
              <option value="" disabled hidden>
                Selecciona
              </option>
              <option value="1">Hombre</option>
              <option value="2">Mujer</option>
              <option value="3">Otro</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Por favor selecciona tu Género.
            </Form.Control.Feedback>
          </Col>
          <Col sm="6">
            <Form.Label>
              <span className="text">
                ¿Cuál es tu estado laboral actual?<span className="red">*</span>
              </span>
            </Form.Label>
            {employmentStatus.map(({ name, value }) => (
              <div key={name}>
                <Form.Check.Input
                  size="sm"
                  required
                  type="radio"
                  name="employmentStatus"
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

        <Form.Group as={Row}>
          <Col sm="6">
            <Form.Label>
              <span className="text">
                ¿Cuál o cuáles cargos te gustaría optar?
                <span className="red">*</span>
              </span>
            </Form.Label>
            {categories.map(({ name, value }, index) => (
              <div key={name}>
                <Form.Check.Input
                  size="sm"
                  required={!atLeastOneCheckboxIsChecked()}
                  className="categories-checkbox"
                  type="checkbox"
                  id={`check-${name}`}
                  name={value}
                  feedback="Debes seleccionar al menos una opcion."
                  feedbacktype="invalid"
                  checked={categoriesState[index]}
                  onChange={() => categoriesUpdate(index)}
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
        </Form.Group>
      </div>
      {/* ////////////////////////////////////////////////////////////////// */}
      <Button type="submit">
        Test
      </Button>
      {/* ////////////////////////////////////////////////////////////////// */}
    </Form>
  );
};
export default FormInfoPersonal;
