import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registration } from '../redux/actions/login';
import { useNavigate } from 'react-router-dom';
import { Button, Col, Container, Row, Form } from 'react-bootstrap';
import logo from '../assets/logo.png';
import Footercustom from './Footer';

function Registration() {
  const [nome, setNome] = useState('');
  const [cognome, setCognome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(registration({ nome, cognome, email, password, username }))
      .then(() => {
        navigate('/login');
      })
      .catch((error) => {
        console.error('Errore durante la registrazione', error);
      });
  };

  return (
    <Container className="d-flex flex-column justify-content-center align-items-center bg-dark bglog min-vh-100">
      <Row className="mb-4">
        <Col className="d-flex justify-content-center">
          <img src={logo} alt="logo" className="logo" />
        </Col>
      </Row>

      <Row className="mb-4">
        <Col className="d-flex justify-content-center">
          <h1 className="text-light">Registrati</h1>
        </Col>
      </Row>

      <Row className="w-100 d-flex justify-content-center">
        <Col xs={10} md={4} className="d-flex justify-content-center mb-3 mb-md-0">
          <Form onSubmit={handleSubmit} className="w-100">
            <Form.Group className="mb-3">
              <Form.Label className="text-light">Nome</Form.Label>
              <Form.Control
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
                className="p-2"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="text-light">Cognome</Form.Label>
              <Form.Control
                type="text"
                value={cognome}
                onChange={(e) => setCognome(e.target.value)}
                required
                className="p-2"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="text-light">Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="p-2"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="text-light">Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="p-2"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="text-light">Username</Form.Label>
              <Form.Control
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="p-2"
              />
            </Form.Group>

            <Button variant="light" size="lg" type="submit" className="w-100 mb-3 purple border-0">
              Registrati
            </Button>

            <p className="text-center text-light">Hai già un account?</p>
            <Button  className="text-light purple border-0 w-100 py-2" onClick={() => navigate('/login')}>
              Accedi
            </Button>
          </Form>
        </Col>
      </Row>
      <Footercustom/>
    </Container>

  );
}

export default Registration;

