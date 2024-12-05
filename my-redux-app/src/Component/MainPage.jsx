import React from 'react';
import { Link } from 'react-router-dom'; 
import Button from 'react-bootstrap/Button';
import logo from '../assets/logo.png';
import { Container, Row, Col } from 'react-bootstrap';

function MainPage() {
  return (
    <Container 
      className="main-page d-flex flex-column justify-content-center align-items-center bg" 
      style={{ minHeight: '100vh' }}
    >
      <Row className="mb-4">
        <Col className="d-flex justify-content-center">
          <img src={logo} alt="logo" className='logo' />
        </Col>
      </Row>

      <Row className="mb-4">
        <Col className="d-flex justify-content-center">
          <h1 className='text-light'>Benvenuto nella nostra piattaforma</h1>
        </Col>
      </Row>

      <Row className="w-100 d-flex justify-content-center">
        <Col xs={10} md={4} className="d-flex justify-content-center mb-3 mb-md-0">
          <Link to="/login" className="w-100">
            <Button variant="light" size="xxl" className="btn w-100">Login</Button>
          </Link>
        </Col>
        <Col xs={10} md={4} className="d-flex justify-content-center">
          <Link to="/register" className="w-100">
            <Button variant="light" size="xxl" className="btn w-100">Registrati</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default MainPage;
