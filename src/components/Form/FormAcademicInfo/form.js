import { Form, Col, Row } from "react-bootstrap";
import { instituteType } from "../../../utils/instituteType";

const academicForm = (onFormUpdate, id) => {
  const optional = id === 1;
  return (
    <>
      <Form.Group as={Row}>
        <Col sm="12">
          <Form.Label>
            <span className="text">
              Nombre de la carrera, curso, bootcamp o certificación:{" "}
              {optional && <span className="red">*</span>}
            </span>
          </Form.Label>
          <Form.Control
            size="sm"
            type="text"
            required={optional}
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
              Nombre institución: {optional && <span className="red">*</span>}
            </span>
          </Form.Label>
          <Form.Control
            size="sm"
            type="text"
            required={optional}
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
              Tipo de institución: {optional && <span className="red">*</span>}
            </span>
          </Form.Label>
          <Form.Select
            required={optional}
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

export default academicForm;
