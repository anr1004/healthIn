import React from "react";
import { Card } from "react-bootstrap";
import './TrainerCard.css';

const TrainerCard = ({image, name, discript}) => {
  return(
    <Card className="trainer-card">
      <Card.Img variant="top" src={image} className="trainer-image" />
      <Card.Body className="text-center">
        <Card.Text className="trainer-description">{discript}</Card.Text>
        <Card.Title className="trainer-name">{name}</Card.Title>
      </Card.Body>
    </Card>
  )
}

export default TrainerCard;