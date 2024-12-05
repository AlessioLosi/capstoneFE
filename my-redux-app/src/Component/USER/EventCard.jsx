import React from 'react';
import { useDispatch } from 'react-redux';
import { startPayment } from '../../redux/actions/Payments'; 
import { Card, Button, Col, Row } from 'react-bootstrap';

const EventCard = ({ event }) => {
  const dispatch = useDispatch();

  const handleBooking = () => {
    dispatch(startPayment(event.id)); 
  };

  return (
    <Card className="my-3 shadow-sm">
      <Row>
        <Col sm={12}>
          <Card.Img 
            src={event.foto} 
            alt="foto evento" 
          />
        </Col>
        <Col sm={12}>
          <Card.Body className="text-center">
            <Card.Title>{event.nome}</Card.Title>
            <Card.Text>
              <strong>Artista:</strong> {event.artista}
            </Card.Text>
            <Card.Text>
              <strong>Data:</strong> {new Date(event.data).toLocaleDateString()}
            </Card.Text>
            <Card.Text>
              <strong>Luogo:</strong> {event.luogo}
            </Card.Text>
            <Card.Text>
              <strong>Posti disponibili:</strong> {event.postiDisponibili}
            </Card.Text>
            <Card.Text>
              <strong>Prezzo:</strong> €{event.prezzo.toFixed(2)}
            </Card.Text>
            <div className="d-flex justify-content-center">
              <Button 
                variant="primary" 
                onClick={handleBooking} 
                className="text-decoration-none text-white"
              >
                Prenota
              </Button>
            </div>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default EventCard;

