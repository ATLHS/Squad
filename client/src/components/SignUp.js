import React, {useState} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useForm } from "react-hook-form";
import Modal from 'react-bootstrap/Modal';
import Alert from 'react-bootstrap/Alert';

const SignUp = () => {
    const [registerStatus, setRegisterStatus] = useState({success: "", message: ""});
    const { register, errors, handleSubmit, reset } = useForm();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSingUp = (data, e) => {
        fetch("/user/signup", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(res => {
            setRegisterStatus({success: res.success, message: res.message});
            e.target.reset();
        })
        .catch(err => console.log(err))
        handleShow();
    }
    console.log(registerStatus)
    return (
        <>
            <Modal show={show} onHide={handleClose} centered>
                <Alert className="m-0 text-center" variant={!registerStatus.success ? "danger" : "success"}>{registerStatus.message}</Alert>
            </Modal>
            <Row className="h-100 m-0 bg-light">
                <Col md={3} className="m-auto pt-5">
                    <Form className="shadow mt-5 p-3 mb-5 bg-white rounded" onSubmit={handleSubmit(handleSingUp)} >
                        <h2 className="mb-3">Inscription</h2>
                        <h3 className="mb-4 lead title3">Animez des lives et partagez votre passion tout en étant rémunéré.</h3>
                        <Form.Group className="mb-0" controlId="name"> 
                            <Form.Label className="text-dark">Nom</Form.Label>
                            <Form.Control name="name" type="text" ref={register({ required: true })} />
                            <Form.Text className="text-danger">{errors.name && "Nom obligatoire."}</Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-0" controlId="firstname"> 
                            <Form.Label className="text-dark">Prénom</Form.Label>
                            <Form.Control name="firstname" type="text" ref={register({ required: true })} />
                            <Form.Text className="text-danger">{errors.firstname && "Prénom obligatoire."}</Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-0" controlId="email"> 
                            <Form.Label className="text-dark">Email</Form.Label>
                            <Form.Control name="email" type="text" ref={register({ required: true })} />
                            <Form.Text className="text-danger">{errors.email && "Email obligatoire."}</Form.Text>
                        </Form.Group>
                        <Form.Group controlId="tel">
                            <Form.Label className="text-dark">Tél</Form.Label>
                            <Form.Control name="tel" type="text" ref={register({ required: true })} />
                            <Form.Text className="text-danger">{errors.tel && "Téléphone obligatoire."}</Form.Text>
                        </Form.Group>
                        <Button className="btn-squad-color" type="submit" block>Inscription</Button>
                    </Form> 
                </Col>
            </Row>
        </>
    )
}

export default SignUp;