import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm, Controller } from "react-hook-form";
import PaypalBtn from "./PaypalBtn";
import moment from 'moment'
import momentLocalizer from 'react-widgets-moment';
import DateTimePicker from 'react-widgets/lib/DateTimePicker';
import 'moment/locale/fr';
import 'react-widgets/dist/css/react-widgets.css';

moment.locale('fr');
momentLocalizer();

const FormModal = props => {
    
    const [displayPaypalBtn, setDisplayPaypalBtn] = useState(false);
    const { register, errors, handleSubmit, control, setValue } = useForm();
    
    const handleLiveBooking = (data, e) => {
        // Get and set the date value attr
        data.date = e.target[2].value;

        localStorage.setItem('userData', JSON.stringify(data));
        setDisplayPaypalBtn(true);
    };

    return (
        <>
            {!displayPaypalBtn ? 
            <Form className="form-modal p-3" onSubmit={handleSubmit(handleLiveBooking)} >
                <Form.Group controlId="formBasicEmail">
                    <Form.Label className="text-white">Nom</Form.Label>
                    <Form.Control name="name" type="text" ref={register({ required: true })} />
                    <Form.Text className="text-danger">{errors.name && "Nom obligatoire."}</Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label className="text-white">Email</Form.Label>
                    <Form.Control name="email" type="email" ref={register({ required: true })} />
                    <Form.Text className="text-danger">{errors.email && "Email obligatoire."}</Form.Text>
                    <Form.Text className="text-muted">Nous ne partagerons jamais votre email avec quelqu'un d'autre.</Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label className="text-white">Sélectionnez la date et l'heure du live</Form.Label>
                    <Controller name="date" as={<DateTimePicker format="ddd DD MMM YYYY, kk:mm" culture="fr" />}   control={control}/>
                    <Form.Text className="text-danger">{errors.dateTime && "Choisissez une date et une heure."}</Form.Text>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label className="text-white">Nombre de participant au live</Form.Label>
                    <Form.Control name="numberOfUsers" as="select" ref={register({ required: true })} >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Form.Control>
                    <Form.Text className="text-danger">{errors.numberOfUsers && "Veuillez choisir le nombre de participant au live."}</Form.Text>
                </Form.Group>
                <input type="hidden" name="mentorName" ref={register} />
                <input type="hidden" name="liveName" ref={register} />
                <Button className="btn-squad-color" type="submit" onClick={() => { setValue([ { mentorName : props.name },{ liveName: props.title }])}} block>Participer au live</Button>
            </Form> 
            :
            <PaypalBtn onSuccess={props.onSuccess} price={props.price} />}
        </>
    );
}

export default FormModal;
