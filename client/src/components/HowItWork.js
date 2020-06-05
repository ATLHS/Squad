import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";
import { isMobile } from "react-device-detect";
import "../css/howItWork.css";

const HowItWork = () => {
  return (
    <>
      <Row className="h-100 m-0">
        <Accordion
          className={`${
            isMobile ? "w-100" : "w-50"
          } ml-auto mr-auto reactAccordion p-3`}
        >
          <Card>
            <Accordion.Toggle
              className="d-flex justify-content-between align-items-center"
              as={Card.Header}
              eventKey="0"
            >
              <span className="teal">Débuter sur la plateforme ?</span>
              <Button className="bg-transparent border-0">
                <i class="fas fa-angle-down text-dark"></i>
              </Button>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                Pour débuter, il vous suffit de vous inscrire en cliquant{" "}
                <Link to="/signup" className="squad-color">
                  ici
                </Link>
                . Ensuite, un membre de la Team Squad prendra contact avec vous
                pour un court échange de bienvenue afin de valider votre profil.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle
              className="d-flex justify-content-between align-items-center"
              as={Card.Header}
              eventKey="1"
            >
              <span className="teal">
                Quand pourrais-je commencer à animer des lives
              </span>
              <Button className="bg-transparent border-0">
                <i class="fas fa-angle-down text-dark"></i>
              </Button>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                Une fois votre inscription réussie et votre profil certifié par
                Squad, votre profil apparaîtra automatiquement sur la plateforme
                avec le statut "disponible" auprès des utilisateurs ?
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle
              className="d-flex justify-content-between align-items-center"
              as={Card.Header}
              eventKey="2"
            >
              <span className="teal">Comment se déroule un live ?</span>
              <Button className="bg-transparent border-0">
                <i class="fas fa-angle-down text-dark"></i>
              </Button>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                Quand vous êtes sollicité pour un live, vous recevez
                automatiquement une alerte par email avec les détails du live et
                des participants (date, heure, email, nombre de personnes).
                Ensuite, les mentors envoient un lien d'invitation via le canal
                de communication de leurs choix (Zoom, Hangouts, Skype,
                Discord,etc...) au participants et une fois le lien envoyé, les
                deux parties pourront se rejoindre à l'heure indiquée.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle
              className="d-flex justify-content-between align-items-center"
              as={Card.Header}
              eventKey="3"
            >
              <span className="teal">Comment suis-je rémunérer ?</span>
              <Button className="bg-transparent border-0">
                <i class="fas fa-angle-down text-dark"></i>
              </Button>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="3">
              <Card.Body>
                Lors de votre{" "}
                <Link to="/signup" className="squad-color">
                  inscription
                </Link>
                , vous indiquez le montant de votre prestation à l'heure et le
                choix d'être crédité sur
                <br></br>- votre compte Paypal
                <br></br>
                Ou
                <br></br>- votre compte bancaire, auquel cas vous devrez fournir
                votre RIB.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle
              className="d-flex justify-content-between align-items-center"
              as={Card.Header}
              eventKey="4"
            >
              <span className="teal">
                Y a t'il un pourcentage sur les transactions ?
              </span>
              <Button className="bg-transparent border-0">
                <i class="fas fa-angle-down text-dark"></i>
              </Button>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="4">
              <Card.Body>
                En effet, la plateforme prélève une commission de 10% sur chaque
                transaction effectuée. <br></br> Exemple : un live de 60€{" "}
                <br></br> 60€ - 10% = 54€ reviendra au mentor.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Row>
    </>
  );
};

export default HowItWork;
