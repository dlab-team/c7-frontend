import React, { useState, useEffect } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { workAvailability } from "../../../utils/FormWorkAvailability";
import { workplace } from "../../../utils/FormWorkplace";
import { workVisa } from "../../../utils/FormWorkVisa";
import { setFormData } from "../../../utils/Redux/Slices/Form";
import { useDispatch } from "react-redux";
import "./styles.scss";

const workVisaDefault = Array(workVisa.length).fill(false);
const workAvailabilityDefault = Array(workAvailability.length).fill(false);

const initialFormState = {
  idealJobDescription: "",
  workAvailability: [],
  workplace: "",
  workVisa: [],
};

const FormDesiredJob = ({ formButtons }) => {
  const [form, setForm] = useState(initialFormState);
  const [validated, setValidated] = useState(false);
  const [workVisaState, setWorkVisaState] = useState(workVisaDefault);
  const [workAvailabilityState, setWorkAvailabilityState] = useState(
    workAvailabilityDefault
  );
  const dispatch = useDispatch();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const form = event.currentTarget;
    if (form.checkValidity()) {
      setValidated(true);
      dispatch(setFormData(form));
    }
  };

  function atLeastOneWorkAvailabilityCheckboxIsChecked() {
    return form.workAvailability.length > 0;
  }
  function atLeastOneWorkVisaCheckboxIsChecked() {
    return form.workVisa.length > 0;
  }

  function isFormValid() {
    const workAvailabilityChecked =
      atLeastOneWorkAvailabilityCheckboxIsChecked();
    const workplaceSelected = form.workplace !== "";
    const workVisaChecked = atLeastOneWorkVisaCheckboxIsChecked();
    return workAvailabilityChecked && workplaceSelected && workVisaChecked;
  }

  const updateWorkVisaState = (position) => {
    const updatedworkVisaState = workVisaState.map((item, index) =>
      index === position ? !item : item
    );
    setWorkVisaState(updatedworkVisaState);
    setForm({
      ...form,
      workVisa: workVisaState
        .map((item, index) => (index === position ? !item : item))
        .filter((item, index) => item === true),
    });
  };

  const updateWorkAvailabilityState = (position) => {
    const updatedworkAvailabilityState = workAvailabilityState.map(
      (item, index) => (index === position ? !item : item)
    );
    setWorkAvailabilityState(updatedworkAvailabilityState);
    setForm({
      ...form,
      workAvailability: workAvailabilityState
        .map((item, index) => (index === position ? !item : item))
        .filter((item, index) => item === true),
    });
  };

  const handleFormUpdate = (event) => {
    const { name, value } = event.target;
    setForm((prevFormState) => ({
      ...prevFormState,
      [name]: value,
    }));
  };

  useEffect(() => {
    dispatch(setFormData(form));
  }, [dispatch, form]);

  //--------MANEJO DE VALIDACIONES-----//
  useEffect(() => {
    const form = document.getElementById("form-desiredJob");
    if (form.checkValidity() === true && isFormValid()) {
      setValidated(true);
    } else {
      setValidated(false);
    }
  }, [form, isFormValid]);

  return (
    <Form
      noValidate
      validated={validated}
      onSubmit={handleFormSubmit}
      id="form-desiredJob"
    >
      <div className="FormDesiredJob">
        <Form.Group as={Row}>
          <Col sm="12">
            <Form.Label>
              <span className="text">
                Déjanos una breve descripción con respecto a tu trabajo ideal
              </span>
            </Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              size="sm"
              onChange={handleFormUpdate}
              name="idealJobDescription"
              value={form.idealJobDescription}
            />
          </Col>
        </Form.Group>
        <br />

        <Form.Group as={Row}>
          <Col sm="7">
            <Form.Label>
              <span className="text">Indícanos tu disponibilidad laboral:</span>
            </Form.Label>
          </Col>
          <Row sm="5" key="work-availability">
            {workAvailability.map(({ name, value }, index) => (
              <div key={name}>
                <Form.Check.Input
                  size="sm"
                  required={!isFormValid()}
                  className="workAvailability-checkbox"
                  type="checkbox"
                  id={`check-${name}`}
                  name={value}
                  feedback="Debes seleccionar al menos una opción."
                  feedbacktype="invalid"
                  checked={workAvailabilityState[index]}
                  onChange={() => updateWorkAvailabilityState(index)}
                />
                <Form.Check.Label
                  className="text--sm"
                  htmlFor={`check-${name}`}
                >
                  {name}
                </Form.Check.Label>
              </div>
            ))}
          </Row>

          <Col sm="8">
            <br />
            <Form.Label>
              <span className="text">
                ¿Qué describe mejor tu situación laboral?
              </span>
            </Form.Label>
            {workplace.map(({ name, value }) => (
              <div key={name}>
                <Form.Check.Input
                  size="sm"
                  required={!isFormValid()}
                  type="radio"
                  id={`radio-${name}`}
                  name="workplace"
                  value={value}
                  onChange={handleFormUpdate}
                  checked={form.workplace === value}
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
        <br />
        <Form.Group as={Row}>
          <Col sm="12">
            <Form.Label>
              <span className="text">
                ¿Tienes algún tipo de visa para trabajar en el país donde se
                encuentra la posición?
              </span>
            </Form.Label>
            {workVisa.map(({ name, value }, index) => (
              <div key={name}>
                <Form.Check.Input
                  size="sm"
                  required={!isFormValid()}
                  className="workvisa-checkbox"
                  type="checkbox"
                  id={`check-${name}`}
                  name={value}
                  feedback="Debes seleccionar al menos una opción."
                  feedbacktype="invalid"
                  checked={workVisaState[index]}
                  onChange={() => updateWorkVisaState(index)}
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
        <br />
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
                Finalizar
              </Button>
            </Col>
          </Form.Group>
        </>
      )}
      {/* ////////////////////////////////////////////////////////////////// */}
    </Form>
  );
};

export default FormDesiredJob;
