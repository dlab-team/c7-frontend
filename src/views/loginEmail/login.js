import React, { useEffect, useState } from "react";
import { Form, Col, Row, Button, InputGroup } from "react-bootstrap";
import { Eye, EyeSlash } from "react-bootstrap-icons";

import "./login.scss";
import { useDispatch } from "react-redux";
import { setUser } from "../../utils/Redux/Slices/authDev";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { setPersonalInfo } from "../../utils/Redux/Slices/UserPersonalInfo";
import { setAvibility } from "../../utils/Redux/Slices/aviableWork";
import { setLanguages } from "../../utils/Redux/Slices/Languages";
import { setLaboralExp } from "../../utils/Redux/Slices/laboralExp";
import { setEnglishLevel } from "../../utils/Redux/Slices/englishLevel";
import { setSalaryExpectative } from "../../utils/Redux/Slices/salarySlice";
import { setRol } from "../../utils/Redux/Slices/rolSlice";

const formDefault = { email: "", password: "" };

const UiLoginEmail = () => {
  const [form, setForm] = useState(formDefault);
  const [validated, setValidated] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate()
  const dispatch = useDispatch()

  //ACTUALIZA EL CUADRO DE TEXTO
  const onFormUpdate = (e) => {
    e.preventDefault();
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  //--------MANEJA EL ENVIO DE FORMULARIO----//
  const handleSubmit = (e) => {
    const form = e.currentTarget;
    e.preventDefault();
    if (form.checkValidity() === false) {
      e.stopPropagation();
    }
    setValidated(true);
    const mail = form.email.value
    const pass = form.password.value

    if (handleLogIn(mail, pass)) {
      navigate('/')
    } else {
      if (form.checkValidity()) {
        swal("Usuario o contraseña incorrectos.", "Intente de nuevo por favor.", {
          icon: "error", timer: 4000,
        })
          .then(() => {
            form.password.focus()
          })

      }

    }
  };

  //--------MANEJA EL CAMBIO DE LA CONTRASEÑA----//
  const handleForgetPassword = (e) => {
    swal("Introduce tu correo electrónico: ", {
      content: {
        element: "input",
        attributes: {
          placeholder: "usermail@gmail.com",
        },
      },
      buttons: {
        cancel: "Cancelar",
        catch: {
          text: "Enviar!",
          value: "catch",
        },
      },
    })
      .then((value) => {
        if (!!value) {
          swal("Correo enviado exitosamente.", { icon: "success" })
        }
      });
  }


  //--------MANEJA EL MOCK USUARIO DE PRUEBA ALEX----//

  const handleUserMock = () => {
    // const rolDeveloper = useSelector((store) => store.rolDevelop.rol)
    // const salaryExp = useSelector((store) => store.salaryExpectative.salaryExp)



    const alexPersonalInfo = {
      name: "Alex",
      lastName: "Fernandez",
      country: "Chile",
      email: "alexfernand@gmail.com",
      phone: "+1 652 687 452",
      linkedInLink: "https://www.linkedin.com/li/alexfernandez",
      gitHubLink: "https://www.github.com/git/alexfernandez",
      portfolioLink: "zzz.alexfernandez.com",
    }
    const languages = [{
      name: "Python",
      value: 1,
    },
    {
      name: "JavaScript",
      value: 3,
    },
    {
      name: "HTML/CSS",
      value: 3,
    },
    {
      name: "Java",
      value: 1,
    },
    {
      name: "PHP",
      value: 1,
    },
    {
      name: "Ruby",
      value: 2,
    },
    {
      name: "Scala, Perl y/o Go",
      value: 2,
    },
    {
      name: "C/C++",
      value: 1,
    }]

    const experienciaLaboral = 'Entre 2 a 3 años de experiencia laboral'
    const disponibilidad = ['Part Time']
    const rol = 'Full Stack'
    const lvlEnglish = 'Avanzado2'
    const salarioDefault = 1300000
    const educacionList = '';

    dispatch(setPersonalInfo(alexPersonalInfo))

    dispatch(setLaboralExp(experienciaLaboral))
    dispatch(setEnglishLevel(lvlEnglish))

    dispatch(setAvibility(disponibilidad))

    dispatch(setSalaryExpectative(salarioDefault))
    dispatch(setRol(rol))
    dispatch(setLanguages([...languages]))
    // const skill
  }

  //--------MANEJA LA VISIBILIDAD DE LA CONTRASEÑA----//
  const handleTogglePassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };
  // MANEJO EL LOGUEO DEL USUARIO
  function handleLogIn(user, pass) {
    if (user === 'alex@devsafio.com' && pass === 'alex') {
      dispatch(setUser({
        userName: 'alex',
        mail: user,
        rol: 'user'
      }))
      handleUserMock();
      return true;
    }
    if (user === 'usuario@devsafio.com' && pass === 'user') {
      dispatch(setUser({
        userName: 'usuario',
        mail: user,
        rol: 'user'
      }))

      return true;
    }
    if (user === 'admin@devsafio.com' && pass === 'admin') {
      dispatch(setUser({
        userName: 'Administrador',
        mail: user,
        rol: 'admin'
      }))
      return true;
    }

    return false;
  }

  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <div className="login-email-container">
          <div className="login-email-modal">
            <span className="text__subject"> Ingresa a tu cuenta </span>
            <Form.Group as={Row} className="form-group">
              <Row>
                <Col sm="3">
                  <Form.Label>
                    <span className="text">Email:</span>
                  </Form.Label>
                </Col>
                <Col sm="9">
                  <Form.Control
                    size="sm"
                    type="email"
                    onChange={onFormUpdate}
                    required
                    className="inputField"
                    name="email"
                    pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                    title="Por favor ingresa un email valido."
                  />
                  <Form.Control.Feedback type="invalid">
                    Por favor ingresa un email valido.
                  </Form.Control.Feedback>
                </Col>
              </Row>
              <Row>
                <Col sm="3">
                  <Form.Label>
                    <span className="text">Contraseña:</span>
                  </Form.Label>
                </Col>
                <Col sm="9">
                  <InputGroup className="mb-3">
                    <Form.Control
                      size="sm"
                      type={showPassword ? "text" : "password"}
                      onChange={onFormUpdate}
                      required
                      className="inputField"
                      name="password"
                    />
                    <Button
                      size="sm"
                      variant="primary btn--border"
                      onClick={handleTogglePassword}
                    >
                      {showPassword ? <EyeSlash /> : <Eye />}
                    </Button>
                    <Form.Control.Feedback type="invalid">
                      Por favor ingresa tu contraseña.
                    </Form.Control.Feedback>
                  </InputGroup>

                  <span className="text--sm link" >
                    <a href="#" onClick={() => handleForgetPassword()}>¿Olvidaste tu contraseña?</a>
                  </span>
                </Col>
              </Row>
            </Form.Group>
            <Button type="submit" className="btn-app btn-app--blue">
              INGRESAR
            </Button>
          </div>
        </div>
      </Form>
    </>
  );
};

export default UiLoginEmail;
