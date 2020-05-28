import React, {useState} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useForm } from "react-hook-form";
import Modal from 'react-bootstrap/Modal';
import Alert from 'react-bootstrap/Alert';

const SignUp = () => {
    const [isRegister, setIsRegister] = useState();
    const { register, errors, handleSubmit } = useForm();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSingUp = data => {
        fetch("/user/signup", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(res => setIsRegister(res), handleShow())
        .catch(err => console.log(err))
    }
    return (
        <>
            <Modal show={show} onHide={handleClose} centered>
                <Alert className="m-0 text-center" variant={!isRegister ? "danger" : "success"}>{!isRegister ? "Il semble que vous possédez déjà un compte. \n Veuillez vous connecter." : "Un mail de confirmation vous a été envoyé"}.</Alert>
            </Modal>
            <Row className="h-100 m-0 bg-light">
                <Col md={3} className="m-auto">
                    <Form className="shadow p-3 mb-5 bg-white rounded" onSubmit={handleSubmit(handleSingUp)} >
                        <h2 className="mb-3">Inscription</h2>
                        <h3 className="mb-4 lead title3">Animez des lives et partager votre passion tout en étant rémunéré.</h3>
                        <Form.Group controlId="email"> 
                            <Form.Label className="text-dark">Email</Form.Label>
                            <Form.Control name="email" type="text" ref={register({ required: true })} />
                            <Form.Text className="text-danger">{errors.email && "Email obligatoire."}</Form.Text>
                        </Form.Group>
                        <Form.Group controlId="password">
                            <Form.Label className="text-dark">Password</Form.Label>
                            <Form.Control name="password" type="password" ref={register({ required: true })} />
                            <Form.Text className="text-danger">{errors.email && "Mot de passe obligatoire."}</Form.Text>
                        </Form.Group>
                        <Button className="btn-squad-color" type="submit" block>Inscription</Button>
                    </Form> 
                </Col>
            </Row>
        </>
    )
}

export default SignUp;