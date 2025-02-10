import React from "react";
import { Navbar, Nav } from 'react-bootstrap';
import HealthInLogo from '../assets/BrandLogo.PNG';
import './Header.css';

const Header = () => {
  return (
    <Navbar variant="dark" fixed="top" className="d-flex justify-content-between custom-navbar">
      <Navbar.Brand className="d-flex align-items-center" href="#home">
        <img className="logo" src={HealthInLogo} alt="Logo" />
        <div className="ms-3">HealthIn</div>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto custom-margin d-flex gap-5">
          <Nav.Link href="program">프로그램</Nav.Link>
          <Nav.Link href="tool">시설</Nav.Link>
          <Nav.Link href="trainer">트레이너</Nav.Link>
          <Nav.Link href="location">지점 찾기</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header;