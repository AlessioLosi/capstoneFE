import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createEvent } from '../../redux/actions/event';  
import { Button, Col, Container,Form,Row } from 'react-bootstrap';

const CreateEventForm = () => {
  const [nome, setNome] = useState('');
  const [artista, setArtista] = useState('');
  const [postiDisponibili, setPostiDisponibili] = useState('');
  const [data, setData] = useState('');
  const [luogo, setLuogo] = useState('');
  const [prezzo, setPrezzo] = useState('');
  const [error, setError] = useState('');
  
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const eventData = {
      nome,
      artista,
      postiDisponibili: Number(postiDisponibili), 
      data: new Date(data), 
      luogo,
      prezzo: parseFloat(prezzo),
    };


    dispatch(createEvent(eventData))
      .then(() => {
        setNome('');
        setArtista('');
        setPostiDisponibili('');
        setData('');
        setLuogo('');
        setPrezzo('');
        setError('');
      })
      .catch((err) => setError(err));
  };

  return (
    <Container className="d-flex justify-content-center align-items-center my-5">
    <Row>
      <Col md={12}>
        <Form onSubmit={handleSubmit} className="p-5 border rounded bg-light shadow">
          <h2 className="text-center mb-4">Crea un nuovo evento</h2>
          
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="4">Nome evento:</Form.Label>
            <Col sm="8">
              <Form.Control
                type="text"
                placeholder="Scegli un nome per il tuo evento"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="4">Artista:</Form.Label>
            <Col sm="8">
              <Form.Control
                type="text"
                placeholder="Inserisci il nome dell'artista"
                value={artista}
                onChange={(e) => setArtista(e.target.value)}
                required
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="4">Posti Disponibili:</Form.Label>
            <Col sm="8">
              <Form.Control
                type="number"
                placeholder="Inserisci il numero di posti disponibili"
                value={postiDisponibili}
                onChange={(e) => setPostiDisponibili(e.target.value)}
                required
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="4">Data evento:</Form.Label>
            <Col sm="8">
              <Form.Control
                type="date"
                value={data}
                onChange={(e) => setData(e.target.value)}
                required
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="4">Luogo:</Form.Label>
            <Col sm="8">
              <Form.Control
                type="text"
                placeholder="Dove si terrà l'evento?"
                value={luogo}
                onChange={(e) => setLuogo(e.target.value)}
                required
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="4">Prezzo:</Form.Label>
            <Col sm="8">
              <Form.Control
                type="number"
                placeholder="Inserisci il prezzo dell'evento"
                value={prezzo}
                onChange={(e) => setPrezzo(e.target.value)}
                required
              />
            </Col>
          </Form.Group>

          <div className="text-center">
            <Button type="submit" className="mt-3 purple">Crea Evento</Button>
          </div>
        </Form>
      </Col>
    </Row>
  </Container>
  );
};

export default CreateEventForm;
