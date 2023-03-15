import React from "react";
import Form from 'react-bootstrap/Form';

const AcademicProfile = () => {
    return (
        <div className="my-6 mx-auto">
            <Form className="container">
                <label>¿Cuál es tu máximo nivel educacional?</label>
                <Form.Select >           
                    <option>Seleccione</option>
                    <option value="1">Universidad completa</option>
                    <option value="2">Universidad incompleta o en curso</option>
                    <option value="3">Instituo profesional o CFT completa</option>
                    <option value="4">Instituo profesional o CFT en curso</option>
                    <option value="5">Educación media completa</option>
                    <option value="6">Escolar completa</option>
                    <option value="7">Escolar incompleta</option>
                    <option value="8">Postgrado completo</option>
                    <option value="9">Postgrado incompleto</option>
                </Form.Select>
                <br/>
                <p> A continuación, indícanos 2 (dos) carreras profesionales, cursos, bootcamp o 
                    certificaciones cursadas relacionadas al desarrollo de software, diseño o TI 
                    (puedes indicarnos las más importantes o actuales): </p>
                
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Nombre de la carrera, curso, bootcamp o certificación 1</Form.Label>
                    <Form.Control type="text" placeholder="..." />
                </Form.Group>
                        
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Nombre de la institución</Form.Label>
                    <Form.Control type="text" placeholder="..." />
                </Form.Group>          
                <label>Tipo institución 1</label>
                <Form.Select >
                <br/>
                    <option>Seleccione</option>
                    <option value="1">Postgrado</option>
                    <option value="2">Instituto</option>
                    <option value="3">Universidad</option>
                    <option value="2">Bootcamp</option>
                    <option value="3">Otro</option>
                </Form.Select>
                <br/>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Nombre de la carrera, curso, bootcamp o certificación 2</Form.Label>
                    <Form.Control type="text" placeholder="..." />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Nombre institución 2</Form.Label>
                    <Form.Control type="text" placeholder="..." />
                </Form.Group>
                <label>Tipo institución 2</label>
                <Form.Select >
                    <option>Seleccione</option>
                    <option value="1">Postgrado</option>
                    <option value="2">Instituto</option>
                    <option value="3">Universidad</option>
                    <option value="2">Bootcamp</option>
                    <option value="3">Otro</option>
                </Form.Select>
                <br/>
                <label>¿Cuál es su situación educacional actual?</label>
                <Form.Select >
                    <option>Seleccione</option>
                    <option value="1">Egresado</option>
                    <option value="2">Titulado</option>
                    <option value="3">En curso</option>
                    <option value="1">Inconclusa</option>
                    <option value="2">Otra</option>
                    <option value="3">Estudios técnicos o universitarios en otra área</option>
                </Form.Select>
                <br/>
                <label>Nivel inglés</label>
                <Form.Select >
                    <option>Seleccione</option>
                    <option value="1">Ninguno</option>
                    <option value="2">Principiante A1</option>
                    <option value="3">Principiante A2</option>
                    <option value="4">Pre-Intermedio B1</option>
                    <option value="5">Intermedio B2</option>
                    <option value="6">Intermedio Avanzado C2</option>
                    <option value="7">Avanzado C2</option>
                </Form.Select>
                <div
                    style={{
                    display: "flex",
                    gap: "30px",
                    }}
                >
                    <input
                    type={"button"}
                    value="Atras"
                    className="btn-app btn-app--blue"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev"
                    />

                    <input
                    type={"button"}
                    value="Siguiente"
                    className="btn-app btn-app--blue"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next"
                    />
                </div>
            </Form>
        </div>
      );
    }
    
    export default AcademicProfile;