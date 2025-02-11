import React from "react";
import './Footer.css';
import { Col, Container, Row } from "react-bootstrap";
import { IoLogoFacebook } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = ({address, phone, }) => {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row className="justify-content-between">
          <Col md={4} className="custom-left">
            <h5>회사 정보</h5>
            <p>주소: {address}</p>
            <p>전화: {phone}</p>
          </Col>
          <Col md={4} className="custom-right">
            <h5>소셜 미디어</h5>
            <ul className="custom-flex">
              <li><a href="#home" className="text-white"><IoLogoFacebook size={30}/></a></li>
              <li><a href="#home" className="text-white"><FaInstagram size={30}/></a></li>
              <li><a href="#home" className="text-white"><FaXTwitter size={30}/></a></li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="text-center mt-3">
        <p>© 2025 HealthIn. 모든 권리 보유.</p>
      </div>
    </footer>
  )
}

export default Footer;