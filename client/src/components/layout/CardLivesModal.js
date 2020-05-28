import React from 'react';
import Card from 'react-bootstrap/Card';
import FormModal from './FormModal';


const CardLivesModal = props => {
    return (
        <>
            <Card style={{ width: '100%',backgroundColor: "black" }}>
                <Card.Img variant="top" src={props.mentor.img} />
                <Card.Body style={{backgroundColor: "black"}}>
                    <Card.Title className="text-white d-flex justify-content-between"><h5>{props.mentor.title}</h5><h5>{props.mentor.price}€</h5></Card.Title>
                    {/* <Card.Title className="text-white">{props.mentor.name}</Card.Title> */}
                    <Card.Text className="text-white">{props.mentor.bio}</Card.Text>
                </Card.Body>
                <FormModal onSuccess={props.onSuccess} price={props.mentor.price} name={props.mentor.name} img={props.mentor.img} title={props.mentor.title} />
            </Card>
        </>
    );
}

export default CardLivesModal;