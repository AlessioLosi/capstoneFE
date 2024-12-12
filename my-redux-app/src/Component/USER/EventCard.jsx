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
    <Card className="my-3 altezzaCard">
      <Row>
        <Col sm={12}>
          <Card.Img 
            src={event.foto} 
            alt="foto evento" 
            className="fotoEvento"
          />
        </Col>
        <Col sm={12}>
          <Card.Body className="text-center cardBody">
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
            </Card.Body>
          </Col>
          <Col>
          <div className="d-flex justify-content-center ">
              <Button 
                onClick={handleBooking} 
                className='purple border-0'
              >
                Prenota
              </Button>
  
            </div>
        </Col>
      </Row>
    </Card>
  );
};

export default EventCard;

