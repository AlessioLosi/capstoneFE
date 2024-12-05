import React from "react";
import { useDispatch } from "react-redux";
import { deleteEvent } from "../../redux/actions/event";
import { Card, Button, Col, Row } from "react-bootstrap";

const EventCardAdmin = ({ event }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteEvent(event.id));
  };

  return (
    <Card className="my-3 shadow-sm">
      <Row >
        <Col sm={12}>
          <Card.Img 
            src={event.foto} 
            alt="foto evento" 
          />
        </Col>
        <Col sm={12}>
          <Card.Body className="text-center">
            <Card.Title >{event.nome}</Card.Title>
            <Card.Text>
              <strong>Artista:</strong> {event.artista}
            </Card.Text>
            <Card.Text>
              <strong>Data:</strong> {new Date(event.data).toLocaleDateString()}
            </Card.Text>
            <Card.Text>
              <strong>Prezzo:</strong> {event.prezzo}€
            </Card.Text>
            <Card.Text>
              <strong>Luogo:</strong> {event.luogo}
            </Card.Text>
            <Card.Text>
              <strong>Posti:</strong> {event.postiDisponibili}
            </Card.Text>
            <div className="d-flex justify-content-center">
              <Button 
                variant="danger" 
                onClick={handleDelete} 
                className="text-decoration-none text-white
                 border-danger"
              >
                Elimina
              </Button>
            </div>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default EventCardAdmin;

