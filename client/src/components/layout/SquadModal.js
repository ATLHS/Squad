import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Alert from 'react-bootstrap/Alert';
import CardLivesModal from './CardLivesModal';

const SquadModal = props => {
    return (
        <>
        {props.isBooking ?
            <Modal className={props.className} show={props.show} onHide={props.handleClose} centered>
                <Alert className="m-0 text-center" variant="success">Hey {props.payer.name} ! Un email de confirmation vient d'être envoyé a : <br/> <strong>{props.payer.email}</strong> <br/> pensez à vérifier dans vos spams.</Alert>
            </Modal>
            :
            <Modal className={props.className} show={props.show} onHide={props.handleClose} centered>
                <CardLivesModal mentor={props.mentor} onSuccess={props.onSuccess} />
            </Modal> 
        }
         </>
    );
}

export default SquadModal;