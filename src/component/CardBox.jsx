import React from "react";
import { Card } from "react-bootstrap";
import './CardBox.css';

const CardBox = ({title, content, image, isEven}) => {
  return(
    <Card className="cb-container rounded-3 d-flex flex-row">
      {isEven ? (
        <>
          <Card.Body className="cb-text-container">
            <Card.Title className="custom-title">{title}</Card.Title>
            <Card.Text>{content}</Card.Text>
          </Card.Body>
          <div className="cb-image-container">
            <Card.Img variant="top" src={image} className="cb-image" />
          </div>
        </>
      ) : (
        <>
          <div className="cb-image-container">
            <Card.Img variant="top" src={image} className="cb-image" />
          </div>
          <Card.Body className="cb-text-container">
            <Card.Title className="custom-title">{title}</Card.Title>
            <Card.Text>{content}</Card.Text>
          </Card.Body>
        </>
      )}
    </Card>
  )
}

export default CardBox;