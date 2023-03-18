import "./style.scss";
import { Form, Col, Row, Button,FormCheck } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { categories } from "../../utils/contactFormCategories";
import { employmentStatus } from "../../utils/contactFormEmploymentStatus";

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
  const checkBoxSelected = form.categories.length > 0;

  const onFormUpdate = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    console.log(form);
    console.log(atLeastOneCheckboxIsChecked());
  }, [form]);

  function atLeastOneCheckboxIsChecked() {
    const checkboxes = Array.from(
      document.querySelectorAll(".categories-checkbox")
    );
    return checkboxes.reduce((acc, curr) => acc || curr.checked, false);
  }

  ///////////////////////

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

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

        <br></br>
        <Form.Group as={Row}>
          <Col sm="6">
            <Form.Label>
              <span className="text">
                Email <span className="red">*</span>
              </span>
            </Form.Label>
            <Form.Control
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

        <br></br>
        <Form.Group as={Row}>
          <Col sm="6">
            <Form.Label>
              <span className="text">
                Ciudad <span className="red">*</span>
              </span>
            </Form.Label>
            <Form.Control
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

        <br></br>
        <Form.Group as={Row}>
          <Col sm="6">
            <Form.Label>
              <span className="text">
                ¿Con qué género te identificas? <span className="red">*</span>
              </span>
            </Form.Label>
            <Form.Select required name="gender" defaultValue="">
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
            <FormCheck controlId="employment">
              {employmentStatus.map((employment) => (
                <div key={employment.name}>
                  <Form.Check.Input
                    required
                    type="radio"
                    name="employmentStatus"
                    value={employment.value}
                    onChange={onFormUpdate}
                  />
                  <Form.Check.Label className="text--sm">
                    {employment.name}
                  </Form.Check.Label>
                  <Form.Control.Feedback type="invalid" htmlFor="employment">
              Por favor selecciona una opcion.
            </Form.Control.Feedback>
                </div>
              ))}
             
              </FormCheck>
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
            <Form.Group required controlId="categories-checkbox">
              {categories.map(({ name, value }, index) => (
                <div key={name}>
                  <Form.Check.Input
                    formNoValidate={atLeastOneCheckboxIsChecked}
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
            </Form.Group>
          </Col>
        </Form.Group>
      </div>
      <Button type="submit" onSubmit={handleSubmit}>
        Test
      </Button>
    </Form>
  );
};
export default FormInfoPersonal;
