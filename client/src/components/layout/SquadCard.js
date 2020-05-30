import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "../../css/squad-card.css"

const SquadCard = props => {
    return (
        <>
        <Card className="swiper-slide mb-5 mt-5 ml-3 mr-3">
            <Card.Img className="card-img" variant="top" src={props.img} />
            <Card.Title className="text-white p-2 position-absolute lead" style={{top: "0", right: "0"}}>{props.statut} <i className="fas fa-circle text-success"></i></Card.Title>
            <Card.Body className="position-absolute" style={{ bottom: "3%", width: "100%"}}>
                <Card.Title className="text-white pt-1 pb-1">{props.title}</Card.Title>
                <Card.Title className="text-white card-price pt-1 pb-1 pl-2 pr-2 w-auto">{props.price}€ <span style={{fontSize: "15px"}}> / h</span></Card.Title>     
                <Card.Text className="text-white text-truncate">{props.bio}</Card.Text>
                <Button className="btn-squad-color" onClick={props.onClick} block>Participez au live</Button>
            </Card.Body>
        </Card>
        </>
    )
}

export default SquadCard;