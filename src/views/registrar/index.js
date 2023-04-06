import React, { useEffect, useState } from "react";
import "./registrar.scss";
import { Form, Col, Row, Button, InputGroup } from "react-bootstrap";
import { Eye, EyeSlash } from "react-bootstrap-icons";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

const formDefault = {
  nombre: "",
  apellidos: "",
  email: "",
  password: "",
  passwordConfirmation: "",
};

const UiRegister = () => {
  const [form, setForm] = useState(formDefault);
  const [validated, setValidated] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const navigate = useNavigate();

  //ACTUALIZA EL FORMULARIO
  const onFormUpdate = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    if (name === "passwordConfirmation") {
      setPasswordsMatch(value === form.password);
    } else if (name === "password") {
      setPasswordsMatch(value === form.passwordConfirmation);
    }
  };

  //--------MANEJA LA VISIBILIDAD DE LA CONTRASEÑA----//
  const handleTogglePassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false || !passwordsMatch) {
      event.stopPropagation();
    }
    setValidated(true);
    if (form.checkValidity()) {
      swal("Registrado con exito", {
        icon: "success",
        timer: 4000,
      }).then(() => {
        navigate("/loginEmail");
      });
    }

  };

  useEffect(() => {
    function checkForm() {
      const invalidForm = document.querySelector("form:invalid");
      const submitBtn = document.getElementById("submit");
      if (invalidForm || !passwordsMatch) {
        submitBtn.setAttribute("disabled", true);
      } else {
        submitBtn.disabled = false;
      }
    }
    checkForm();
  }, [form]);

  return (
    <>
      <div className="modal-container">
        <div className="modal-record">
          <div className="text__subject"> Regístrate </div>
          <div className="modal-record__text">
            <span>
              Crea tu cuenta profesional en DevSafío para que seas parte de
              distintas ofertas laborales que tenemos junto a importantes
              empresas en latinoamérica.
            </span>
          </div>

          <div className="modal-record__form">
            <FormRegister
              validated={validated}
              handleSubmit={handleSubmit}
              onFormUpdate={onFormUpdate}
              showPassword={showPassword}
              handleTogglePassword={handleTogglePassword}
              passwordsMatch={passwordsMatch}
            />
          </div>
        </div>
      </div>
    </>
  );
};

const FormRegister = ({
  validated,
  handleSubmit,
  onFormUpdate,
  showPassword,
  handleTogglePassword,
  passwordsMatch,
}) => {
  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group as={Row} className="form-group">
        <Col sm="6">
          <Form.Label>
            <span className="text">Nombre: </span>
          </Form.Label>
          <Form.Control
            size="sm"
            type="text"
            required
            onChange={onFormUpdate}
            placeholder="Robert"
            name="nombre"
            className="form__input"
          />
          <Form.Control.Feedback type="invalid">
            Por favor ingresa tu Nombre.
          </Form.Control.Feedback>
        </Col>
        <Col sm="6">
          <Form.Label>
            <span className="text">Apellidos: </span>
          </Form.Label>
          <Form.Control
            size="sm"
            type="text"
            required
            onChange={onFormUpdate}
            className="form__input"
            placeholder="Martin Series"
            name="apellidos"
          />
          <Form.Control.Feedback type="invalid">
            Por favor ingresa tu/s Apellido/s.
          </Form.Control.Feedback>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="form-group">
        <Col sm="12">
          <Form.Label>
            <span className="text">Ingresa tu E-mail:</span>
          </Form.Label>
          <Form.Control
            size="sm"
            type="email"
            onChange={onFormUpdate}
            required
            className="form__input"
            placeholder="robertms@gmail.com"
            name="email"
            pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
          />
          <Form.Control.Feedback type="invalid">
            Por favor ingresa un email valido.
          </Form.Control.Feedback>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="form-group">
        <Col sm="12">
          <Form.Label>
            <span className="text">Crea tu contraseña:</span>
          </Form.Label>
          <InputGroup className="mb-3">
            <Form.Control
              size="sm"
              type={showPassword ? "text" : "password"}
              onChange={onFormUpdate}
              required
              className="form__input"
              placeholder="password"
              name="password"
            />
            <Button
              size="sm"
              variant="primary btn--border"
              onClick={handleTogglePassword}
            >
              {showPassword ? <EyeSlash /> : <Eye />}
            </Button>
            <Form.Control.Feedback type="invalid" className="text-sm">
              Por favor ingresa tu contraseña.
            </Form.Control.Feedback>
          </InputGroup>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="form-group">
        <Col sm="12">
          <Form.Label>
            <span className="text">Reingresa tu contraseña:</span>
          </Form.Label>
          <InputGroup className="mb-3">
            <Form.Control
              size="sm"
              type={showPassword ? "text" : "password"}
              onChange={onFormUpdate}
              required
              className="form__input"
              placeholder="password"
              name="passwordConfirmation"
              isInvalid={!passwordsMatch}
            />
            <Button
              size="sm"
              variant="primary btn--border"
              onClick={handleTogglePassword}
            >
              {showPassword ? <EyeSlash /> : <Eye />}
            </Button>
            <Form.Control.Feedback type="invalid">
              {passwordsMatch
                ? "Las contraseñas deben coincidir."
                : "Las contraseñas no coinciden."}
            </Form.Control.Feedback>
          </InputGroup>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="form-group">
        <Col md="12">
          <Button
            type="submit"
            id="submit"
            className="btn btn-primary"
            disabled
          >
            Registrar
          </Button>
        </Col>
      </Form.Group>

    </Form>
  );
};

export default UiRegister;
