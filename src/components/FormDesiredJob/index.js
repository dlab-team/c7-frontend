import React, { useState, useEffect } from "react";
import { Form, Row, Col } from "react-bootstrap";
import { workAvailability } from "../../utils/FormWorkAvailability";
import { workplace } from "../../utils/FormWorkplace";
import { workVisa } from "../../utils/FormWorkVisa";
import { setFormData } from "../../utils/Redux/Slices/Form";
import { useDispatch } from "react-redux";
import "./styles.scss";

const workVisaDefault = Array(workVisa.length).fill(false);
const workAvailabilityDefault = Array(workAvailability.length).fill(false);

const initialFormState = {
  idealJobDescription: "",
  workAvailability: "",
  workplace: "",
  workVisa: [],
};

const FormDesiredJob = () => {
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

  function isFormValid() {
    const workAvailabilityChecked = form.workAvailability.length === 1;
    const workplaceSelected = form.workplace !== "";
    const workVisaChecked = form.workVisa.checked;
    return workAvailabilityChecked && workplaceSelected && workVisaChecked;
  }

  const updateWorkVisaState = (position) => {
    const updatedworkVisaState = workVisaState.map((item, index) =>
      index === position ? !item : item
    );
    setWorkVisaState(updatedworkVisaState);
    setForm({
      ...form,
      workVisa: Array.from(
        document.querySelectorAll(
          "input[type=checkbox].workvisa-checkbox:checked"
        ),
        (e) => e.name
      ),
    });
  };

  const updateWorkAvailabilityState = (position) => {
    const updatedworkAvailabilityState = workAvailabilityState.map(
      (item, index) => (index === position ? !item : item)
    );
    setWorkAvailabilityState(updatedworkAvailabilityState);
    setForm({
      ...form,
      workAvailability: Array.from(
        document.querySelectorAll(
          "input[type=checkbox].workAvailability-checkbox:checked"
        ),
        (e) => e.name
      ),
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

  return (
    <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
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
          <Row sm="5">
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
                  feedback="Debes seleccionar una opción."
                  feedbacktype="invalid"
                  value={value}
                  onChange={handleFormUpdate}
                />
                <Form.Check.Label
                  className="text--xs"
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
    </Form>
  );
};

export default FormDesiredJob;
