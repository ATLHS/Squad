import React from "react";
import Card from "react-bootstrap/Card";
import FormModal from "./FormModal";

const CardLivesModal = (props) => {
  return (
    <>
      <Card style={{ width: "100%", backgroundColor: "black" }}>
        <Card.Img
          style={{ width: "100%", height: "50%" }}
          variant="top"
          src={props.mentor.imageUrl}
        />
        <Card.Body style={{ backgroundColor: "black" }}>
          <Card.Title className="text-white d-flex justify-content-left">
            <h5>{props.mentor.live_name}</h5>
          </Card.Title>
          <Card.Title className="text-white d-flex justify-content-between align-items-center">
            <Card.Title className="text-white w-auto">
              {props.mentor.name}
            </Card.Title>
            <Card.Title className="text-white card-price pt-1 pb-1 pl-2 pr-2 w-auto">
              {props.mentor.price}€{" "}
              <span style={{ fontSize: "15px" }}> / h</span>
            </Card.Title>
          </Card.Title>
          {/* <Card.Title className="text-white">{props.mentor.name}</Card.Title> */}
          <Card.Text className="text-white">{props.mentor.bio}</Card.Text>
        </Card.Body>
        <FormModal
          onSuccess={props.onSuccess}
          price={props.mentor.price}
          name={props.mentor.name}
          img={props.mentor.img}
          live_name={props.mentor.live_name}
        />
      </Card>
    </>
  );
};

export default CardLivesModal;
