import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";
import Modal from "react-bootstrap/Modal";
import Alert from "react-bootstrap/Alert";
import InputGroup from "react-bootstrap/InputGroup";
import bsCustomFileInput from "bs-custom-file-input";

const SignUp = () => {
  const [registerStatus, setRegisterStatus] = useState({
    success: "",
    message: "",
  });

  const { register, errors, handleSubmit, reset, setValue } = useForm();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    bsCustomFileInput.init();
  });

  const handleSingUp = (data, e) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);
    formData.append("data", JSON.stringify(data));

    fetch("/user/signup", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((res) => {
        setRegisterStatus({ success: res.success, message: res.message });
        e.target.reset();
      })
      .catch((err) => console.log(err));
    handleShow();
  };
  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Alert
          className="m-0 text-center"
          variant={!registerStatus.success ? "danger" : "success"}
        >
          {registerStatus.message}
        </Alert>
      </Modal>
      <Row className="h-100 m-0 bg-light">
        <Col md={5} className="m-auto pt-5">
          <Form
            className="shadow mt-5 p-3 mb-5 bg-white rounded"
            onSubmit={handleSubmit(handleSingUp)}
            encType="multipart/form-data"
          >
            <h2 className="mb-3">Inscription</h2>
            <h3 className="mb-4 lead title3">
              Animez des lives et partagez votre passion tout en étant rémunéré.
            </h3>
            <Form.Group className="mb-0" controlId="name">
              <Form.Label className="text-dark">Nom</Form.Label>
              <Form.Control
                name="name"
                type="text"
                placeholder="Nom"
                ref={register({ required: true })}
              />
              <Form.Text className="text-danger">
                {errors.name && "Nom obligatoire."}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-0" controlId="firstname">
              <Form.Label className="text-dark">Prénom</Form.Label>
              <Form.Control
                name="firstname"
                type="text"
                placeholder="Prénom"
                ref={register({ required: true })}
              />
              <Form.Text className="text-danger">
                {errors.firstname && "Prénom obligatoire."}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-0" controlId="email">
              <Form.Label className="text-dark">Email</Form.Label>
              <Form.Control
                name="email"
                type="text"
                placeholder="Email"
                ref={register({ required: true })}
              />
              <Form.Text className="text-danger">
                {errors.email && "Email obligatoire."}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-0" controlId="liveName">
              <Form.Label className="text-dark">Nom du live</Form.Label>
              <Form.Control
                name="live_name"
                type="text"
                placeholder="Yoga, Boxe, Cuisine.."
                ref={register({ required: true })}
              />
              <Form.Text className="text-danger">
                {errors.live_name && "Nom du live obligatoire."}
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="bio">
              <Form.Label className="text-dark">
                Description du profil
              </Form.Label>
              <Form.Control
                name="bio"
                as="textarea"
                placeholder="La description qui apparaîtra sur ton profil"
                ref={register({ required: true })}
              />
              <Form.Text className="text-danger">
                {errors.bio && "Description du profil obligatoire."}
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="price">
              <Form.Label className="text-dark">
                Préstation à l'heure
              </Form.Label>
              <InputGroup>
                <Form.Control
                  name="price"
                  type="text"
                  placeholder="20, 50"
                  maxlength="3"
                  ref={register({ required: true })}
                />
                <InputGroup.Append>
                  <InputGroup.Text id="inpuAppend">€/h</InputGroup.Text>
                </InputGroup.Append>
              </InputGroup>
              <Form.Text className="text-danger">
                {errors.price && "Champ obligatoire."}
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="image">
              <Form.File
                name="image"
                id="custom-file"
                label="Ajouter une photo de profil"
                data-browse="Télécharger"
                ref={register({ required: true })}
                custom
              />
              <Form.Text className="text-danger">
                {errors.image && "Image obligatoire."}
              </Form.Text>
            </Form.Group>
            <Button className="btn-squad-color" type="submit" block>
              Inscription
            </Button>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default SignUp;
