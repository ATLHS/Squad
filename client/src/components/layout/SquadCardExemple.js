import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import squad_live1 from "../../images/squad-live-1.png";
import squad_finger from "../../images/finger.png";
import "../../css/squad-live.css"

const SquadCardExemple = () => {
    return (
        <>
            <Card style={{ width: '18rem', height: "30rem", backgroundColor: "black" }}>
                <Card.Img className="card-img" variant="top" src={squad_live1} />
                <Card.Title className="text-white p-2 position-absolute lead" style={{top: "0", right: "0"}}>Disponible <i className="fas fa-circle text-success"></i></Card.Title>
                <Card.Body className="position-absolute" style={{ bottom: "3%", width: "100%"}}>
                    <div className="d-flex justify-content-between">
                        <Card.Title className="text-white pt-1 pb-1">Card Title</Card.Title>
                        <Card.Title className="text-white card-price pt-1 pb-1 pl-2 pr-2">Card Title</Card.Title>     
                    </div>
                    <Card.Text className="text-white text-truncate">
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button className="btn-squad-color" block>Participez au live</Button>
                    <Image className="squad_finger" src={squad_finger} alt="squad_finger" />
                </Card.Body>
            </Card>
        </>
    )
}

export default SquadCardExemple;