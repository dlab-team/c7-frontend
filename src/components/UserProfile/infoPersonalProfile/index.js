import React, { useEffect, useState } from "react";
import {
  Envelope,
  Github,
  BriefcaseFill,
  Linkedin,
  Pen,
  Telephone,
} from "react-bootstrap-icons";
import defaultImage from "../../../assets/unknownPhoto.svg";
import "./infoPersonalProfile.scss";
import { useDispatch, useSelector } from "react-redux";
import { setPersonalInfo } from "../../../utils/Redux/Slices/UserPersonalInfo";
import { Form, Col, Row, Button } from "react-bootstrap";

const InfoPersonalProfile = () => {
  const [user, setUser] = useState({});
  const storeUser = useSelector((store) => store.userPersonalInfo.user);
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    setUser(storeUser);
  }, [storeUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleCancel = () => {
    setIsEditing(false);
    setUser(storeUser);
  };

  const handleSaveChanges = (e) => {
    e.preventDefault();
    setIsEditing(false);
    dispatch(setPersonalInfo(user));
  };

  //////////// VIEW MODE ////////////
  const renderViewMode = () => (
    <section className="user-info">
      <div className="user-info__data">
        <div className="personal-data">
          <img
            className="personal-data__img"
            src={user.photo || defaultImage}
            alt="user avatar"
          />
          <div className="personal-data__name">
            <span>
              <b>
                <span className="text--subject">
                  {user.name} {user.lastName}
                </span>
              </b>
            </span>
            <span className="text--subject">{user.country}</span>
          </div>
        </div>

        <section className="user-info__contact">
          <span>
            <Envelope className="me-3 fs-4" />
            <span className="text--subject">{user.email}</span>
          </span>
          <span>
            <Telephone className="me-3 fs-4" />
            <span className="text--subject">{user.phone}</span>
          </span>
          <span>
            {user.linkedInLink ? (
              <a
                href={user.linkedInLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="me-3 fs-4" />
                <span className="text--subject">LinkedIn</span>
              </a>
            ) : (
              <>
                <Linkedin className="me-3 fs-4" />
                <span className="text--subject">LinkedIn</span>
              </>
            )}
          </span>
          <span>
            {user.gitHubLink ? (
              <a
                href={user.gitHubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="me-3 fs-4" />
                <span className="text--subject">GitHub</span>
              </a>
            ) : (
              <>
                <Github className="me-3 fs-4" />
                <span className="text--subject">GitHub</span>
              </>
            )}
          </span>
          <span>
            {user.portfolioLink ? (
              <a
                href={user.portfolioLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <BriefcaseFill className="me-3 fs-4" />
                <span className="text--subject">Portfolio</span>
              </a>
            ) : (
              <>
                <BriefcaseFill className="me-3 fs-4" />
                <span className="text--subject">Portfolio</span>
              </>
            )}
          </span>
        </section>
      </div>
      <div>
        <Pen
          className="ms-3 fs-6"
          style={{ cursor: "pointer" }}
          onClick={() => setIsEditing(true)}
        />
      </div>
    </section>
  );

  //////////// EDIT MODE ////////////
  const renderEditForm = () => (
    <section className="user-info">
      <div className="user-info__data">
        <form onSubmit={handleSaveChanges}>
          <div className="personal-data">
            <img
              className="personal-data__img"
              src={defaultImage}
              alt={defaultImage}
            />
            <div className="personal-data__name">
              <Form.Group as={Row}>
                <Col sm="4">
                  <Form.Label>
                    <span className="text--subject">Nombre</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={user.name}
                    onChange={handleChange}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Por favor ingresa tu Nombre.
                  </Form.Control.Feedback>
                </Col>
                <Col sm="4">
                  <Form.Label>
                    <span className="text--subject">Apellido</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="lastName"
                    value={user.lastName}
                    onChange={handleChange}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Por favor ingresa tu Apellido.
                  </Form.Control.Feedback>
                </Col>

                <Col sm="4">
                  <Form.Label>
                    <span className="text--subject">País</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="country"
                    value={user.country}
                    onChange={handleChange}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Por favor ingresa tu País.
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>

              <Form.Group as={Row}>
                <Col sm="6">
                  <Form.Label>
                    <span className="text--subject">Email</span>
                  </Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Por favor ingresa tu Email.
                  </Form.Control.Feedback>
                </Col>
                <Col sm="6">
                  <Form.Label>
                    <span className="text--subject">Telefono</span>
                  </Form.Label>
                  <Form.Control
                    type="tel"
                    name="phone"
                    value={user.phone}
                    onChange={handleChange}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Por favor ingresa tu Telefono.
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>

              <Form.Group as={Row}>
                <Col sm="2">
                  <Form.Label>
                    <span className="text--subject">
                      <Linkedin /> LinkedIn
                    </span>
                  </Form.Label>
                </Col>
                <Col sm="10">
                  <Form.Control
                    type="url"
                    name="linkedInLink"
                    value={user.linkedInLink}
                    onChange={handleChange}
                  />
                </Col>

                <Col sm="2">
                  <Form.Label>
                    <span className="text--subject">
                      <Github /> GitHub
                    </span>
                  </Form.Label>
                </Col>
                <Col sm="10">
                  <Form.Control
                    type="url"
                    name="gitHubLink"
                    value={user.gitHubLink}
                    onChange={handleChange}
                  />
                </Col>

                <Col sm="2">
                  <Form.Label>
                    <span className="text--subject">
                      <BriefcaseFill /> Portfolio
                    </span>
                  </Form.Label>
                </Col>
                <Col sm="10">
                  <Form.Control
                    type="url"
                    name="portfolioLink"
                    value={user.portfolioLink}
                    onChange={handleChange}
                  />
                </Col>
              </Form.Group>
            </div>
          </div>

          <div className="d-flex justify-content-center mt-4">
            <Button type="submit" className="btn btn-primary me-3">
              Guardar
            </Button>
            <Button
              type="button"
              className="btn btn-outline-secondary"
              onClick={handleCancel}
            >
              Cancelar
            </Button>
          </div>
        </form>
      </div>
    </section>
  );

  return <>{isEditing ? renderEditForm() : renderViewMode()}</>;
};

export default InfoPersonalProfile;
