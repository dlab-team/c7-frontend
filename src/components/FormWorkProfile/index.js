import "./style.scss";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import Dropdown from "react-bootstrap/Dropdown";
import ListGroup from "react-bootstrap/ListGroup";
import DropdownButton from "react-bootstrap/DropdownButton";
import Form from "react-bootstrap/Form";
import { ArrowBarDown, ArrowRightCircle, Trash } from "react-bootstrap-icons";
//BD
import { tools } from "../../utils/ToolsList";
import { languages } from "../../utils/LanguagesList";
import { frameworks } from "../../utils/FrameworksList";
//REDUX
import { setLanguages } from "../../utils/Redux/Slices/Languages";
import { setTools } from "../../utils/Redux/Slices/Tools";
import { setFrameworks } from "../../utils/Redux/Slices/Frameworks";
import { useDispatch } from "react-redux";

const formDefault = { languages: [], frameworks: [], tools: [], message: "" };

export default function FormWorkProfile() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState(formDefault);
  const [list, setList] = useState([]);
  const dispatch = useDispatch();

  //GESTIONA ENVIO DEL FORMULARIO
  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  //ACTUALIZA REDUX CUANDO MODIFICO EL FORM
  useEffect(() => {
    dispatch(setLanguages(form.languages));
    dispatch(setFrameworks(form.frameworks));
    dispatch(setTools(form.tools));
  }, [form, dispatch]);

  //ACTUALIZA EL FORM Y MUEVO EL SCROLL CUANDO MODIFICO LA LISTA
  useEffect(() => {
    updateForm();
    scrollDown();
  }, [list]);

  //ACTUALIZA EL CUADRO DE TEXTO
  const onFormUpdate = (e) => {
    e.preventDefault();
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

   //SINCRONIZA EL FORMULARIO DEL STADO CON LA LISTA
  const updateForm = () => {
    let l = [];
    let f = [];
    let t = [];
    list.forEach((e) => {
      if (e.id === "languages") {
        l = [...l, { name: e.name, value: e.value }];
      }
      if (e.id === "frameworks") {
        f = [...f, { name: e.name, value: e.value }];
      }
      if (e.id === "tools") {
        t = [...t, { name: e.name, value: e.value }];
      }
      setForm({
        ...form,
        languages: l,
        frameworks: f,
        tools: t,
      });
    });
  };

  //AGREGA LENGUAJE/FRAMEWORK O HERRAMIENTA A LA LISTA:
  const addToList = async (name, value, id) => {
    const found = list.filter((e) => e.name === name);
    if (found.length === 0) {
      setList([...list, { name, value, id }]);
    }
    scrollDown();
  };

  //ACTUALIZA VALOR DE NIVEL ELEGIDO
  const updateValue = (index, value) => {
    let temp = list;
    temp[index].value = value;
    setList(temp);
    updateForm();
  };

  //QUITA ELEMENTO DE LA LISTA:
  const removeList = (value) => {
    let temp = list;
    temp = temp.filter(function (item) {
      return item.name !== value;
    });
    setList(temp);
  };

  //MUEVE SCROLLBAR HACIA ULTIMO ELEMENTO
  const scrollDown = () => {
    var objDiv = document.getElementById("skills");
    objDiv.scrollTop += objDiv.scrollHeight;
  };

  return (
    <div className="workProfileForm" id="contactForm">
      <form onSubmit={handleSubmit}>
        <Collapse in={!open}>
          <div className="info" id="info">
            <p className="workProfileForm__text">
              Queremos conocer tus competencias y experiencia. A continuación
              podrás elegir las competencias que conoces con respecto a 3
              niveles:
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
              pediremos que seas capaz de demostrarlo de forma práctica durante
              el proceso de selección.
            </p>
            <div className="row">
              <Button
                onClick={() => setOpen(!open)}
                aria-controls="info"
                aria-expanded={open}
                className="btn-app btn-app--blue"
              >
                <span className="icon">
                  Continuar <ArrowRightCircle />
                </span>
              </Button>
            </div>
          </div>
        </Collapse>

        <Collapse in={open}>
          <div className="dropdown" id="dropdown">
            <div className="row">
              <Button
                onClick={() => setOpen(!open)}
                aria-expanded={open}
                className="btn-app btn-app--blue"
              >
                <span className="icon">
                  Mostrar informacion <ArrowBarDown />
                </span>
              </Button>
            </div>

            <div className="row">
              <div className="form-group col-md-4">
                <p className="workProfileForm__title">Lenguaje: </p>
                <DropdownButton id="dropdown-Lenguajes" title="Lenguajes">
                  {languages.map(({ name, value }, index) => {
                    const { id } = languages[0];
                    return (
                      <li key={index}>
                        {index !== 0 ? (
                          <Dropdown.Item
                            as="button"
                            onClick={() => addToList(name, value, id)}
                          >
                            {name}
                          </Dropdown.Item>
                        ) : null}
                      </li>
                    );
                  })}
                </DropdownButton>
              </div>
              <div className="form-group col-md-4">
                <p className="workProfileForm__title">Bases o frameworks:</p>
                <DropdownButton id="dropdown-Frameworks" title="Frameworks">
                  {frameworks.map(({ name, value }, index) => {
                    const { id } = frameworks[0];
                    return (
                      <li key={index}>
                        {index !== 0 ? (
                          <Dropdown.Item
                            as="button"
                            onClick={() => addToList(name, value, id)}
                          >
                            {name}
                          </Dropdown.Item>
                        ) : null}
                      </li>
                    );
                  })}
                </DropdownButton>
              </div>
              <div className="form-group col-md-4">
                <p className="workProfileForm__title">Herramientas:</p>
                <DropdownButton id="dropdown-Herramientas" title="Herramientas">
                  {tools.map(({ name, value }, index) => {
                    const { id } = tools[0];
                    return (
                      <li key={index}>
                        {index !== 0 ? (
                          <Dropdown.Item
                            as="button"
                            onClick={() => addToList(name, value, id)}
                          >
                            {name}
                          </Dropdown.Item>
                        ) : null}
                      </li>
                    );
                  })}
                </DropdownButton>
              </div>
            </div>
            <br></br>

            <div className="row">
              <br></br>
              <ListGroup id="skills">
                {list.map(({ name }, index) => {
                  return (
                    <li key={index}>
                      <ListGroup.Item>
                        <div className="row">
                          <div className="form-group col-5">
                            <p className="workProfileForm__text--list">
                              {name}
                            </p>
                          </div>

                          <div className="form-group col-6">
                            <Form.Check
                              inline
                              label="Nivel 1"
                              type="radio"
                              name={`check-${name}`}
                              onChange={() => updateValue(index, 1)}
                            />

                            <Form.Check
                              inline
                              label="Nivel 2"
                              type="radio"
                              name={`check-${name}`}
                              onChange={() => updateValue(index, 2)}
                            />

                            <Form.Check
                              inline
                              style={{ textAlign: "center" }}
                              label="Nivel 3"
                              type="radio"
                              name={`check-${name}`}
                              onChange={() => updateValue(index, 3)}
                            />
                          </div>

                          <div className="form-group col-1">
                            <Button
                              onClick={() => removeList(name)}
                              className="btn-danger"
                            >
                              <span className="icon">
                                <Trash />
                              </span>
                            </Button>
                          </div>
                        </div>
                      </ListGroup.Item>
                    </li>
                  );
                })}
              </ListGroup>
            </div>

            <div className="row">
              <div>
                <p className="workProfileForm__text">
                  Indícanos alguna otra competencia, herramienta o tecnología
                  que conozcas que creas importante agregar:
                </p>
                <textarea
                  type="text"
                  rows="3"
                  className="contactForm--input form-control"
                  name="message"
                  value={form.message}
                  onChange={onFormUpdate}
                />
              </div>
            </div>
          </div>
        </Collapse>
      </form>
    </div>
  );
}
