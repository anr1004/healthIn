import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import './LocationBox.css';
import KakaoMap from "./KakaoMap";

const LocationBox = ({title, address, phone}) => {
  return(
    <Container className="mt-4">
      <Row>
        {/* 제목, 주소, 연락처 등등 소개할 박스*/}
        <Col md={6}>
          <Card className="location-card">
            <Card.Body>
              <Card.Title className="location-title">{title}</Card.Title>
              <Card.Text className="location-text">{address}</Card.Text>
              <Card.Text className="location-text">{phone}</Card.Text>
              <Button className="inquiry-button" variant="light">문 의</Button>
            </Card.Body>
          </Card>
        </Col>

        {/* kakao map api 박스 */}
        <Col md={6}>
          <Card>
            <Card.Body>
              <KakaoMap />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default LocationBox;