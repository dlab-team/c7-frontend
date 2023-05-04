import "./style.scss";
import { Form, Col, Row, Button } from "react-bootstrap";
import React, { useState } from "react";
import { categories } from "../../../utils/contactFormCategories";
import { employmentStatus } from "../../../utils/contactFormEmploymentStatus";
//REDUX
import { setFormData } from "../../../utils/Redux/Slices/Form";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const formDefault = {
  name: "",
  lastName: "",
  email: "",
  phone: "",
  city: "",
  country: "",
  gender: "",
  employmentStatus: "",
  workCategories: [],
};
const categoriesDefault = new Array(categories.length).fill(false);

const FormInfoPersonal = ({formButtons}) => {
  const [form, setForm] = useState(formDefault);
  const [validated, setValidated] = useState(false);
  const [categoriesState, setCategoriesState] = useState(categoriesDefault);
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

  //--------CHECKEA QUE AL MENOS SE HAYA SELECCIONADO UNA OPCION DE LOS CHECKS----//
  function atLeastOneCheckboxIsChecked() {
    const checkboxes = Array.from(
      document.querySelectorAll(".categories-checkbox")
    );
    return checkboxes.reduce((acc, curr) => acc || curr.checked, false);
  }

  //--------MANEJA EL ENVIO DE FORMULARIO----//
  // const handleSubmit = (event) => {
  //   const form = event.currentTarget;
  //   if (form.checkValidity() === false) {
  //     event.preventDefault();
  //     event.stopPropagation();
  //   }
  //   setValidated(true);
  // };

  //--------GUARDA LOS CHECKS EN EL FORM----//
  const categoriesUpdate = (position) => {
    const updatedcategoriesState = categoriesState.map((item, index) =>
      index === position ? !item : item
    );
    setCategoriesState(updatedcategoriesState);
    setForm({
      ...form,
      workCategories: Array.from(
        document.querySelectorAll("input[type=checkbox]:checked"),
        (e) => e.name
      ),
    });
  };

  //--------MANEJO DE VALIDACIONES-----//
  useEffect(() => {
    const form = document.getElementById("form-personal");
    if (form.checkValidity() === true) {
      setValidated(true);
    }
    else{
      setValidated(false);
    }
  }, [form]);

  return (
    <Form noValidate validated={validated} id="form-personal">
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
              pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
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
            <Form.Select
              required
              name="gender"
              defaultValue=""
              size="sm"
              onChange={onFormUpdate}
            >
              <option value="" disabled hidden>
                Selecciona
              </option>
              <option value="Hombre">Hombre</option>
              <option value="Mujer">Mujer</option>
              <option value="Otro">Otro</option>
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
      {validated ? (formButtons):(<Button type="submit" disabled className="btn-app btn-app--blue">Siguiente</Button>)}
      {/* ////////////////////////////////////////////////////////////////// */}
    </Form>
  );
};
export default FormInfoPersonal;
